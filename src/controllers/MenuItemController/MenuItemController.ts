import {
	autorun,
	observable
} from "mobx";

// util
import {validateURL, IUrl} from "../../internal/utils";

import {
	IMenuItemController,
	IMenuItemCtrlValues,
} from "../../interfaces/MenuItemController";

import {
	INavBarController
} from "../../interfaces/NavBarController";

import {
	IMenuItem, 
	IMenuChildren, 
	IMenuSiblings, 
	MenuItemType
} from "../../interfaces/MenuItems";

const MenuItemController = (
	model: IMenuItem,
	parentCtrl: INavBarController
): IMenuItemController => {

	const ctrlValues: IMenuItemCtrlValues = observable({
		model: model,
		parentCtrl: parentCtrl,
		get hasSelectedOption(): boolean {
			const {
				id,
				type,
				parentID,
				rootID
			} = parentCtrl.values.currentPage.get();
			
			const isSelectedChild = model.items.some((item: IMenuChildren) => 
			item.id === id && item.type === type && item.parentID === parentID && item.rootID === rootID);

			const isSelectedSibling = model.items.some((item: IMenuChildren) => item.items.some((item: IMenuSiblings) =>
			item.id === id && item.type === type && item.parentID === parentID && item.rootID === rootID));

			return isSelectedChild || isSelectedSibling;
		},
		validateURL: (href: string): IUrl => validateURL(href),
		isSelected: (
			itemId: number,
			itemType: MenuItemType,
			itemParentId: number,
			itemRootId: number
		): boolean => {
			const {
				id,
				type,
				parentID,
				rootID
			} = parentCtrl.values.currentPage.get();

			return id === itemId && type === itemType && parentID === itemParentId && rootID === itemRootId;
		},
		childHasSiblings: (child: IMenuChildren): boolean => child.items.length !== 0,
		isCurrentChild: (childId: number): boolean => childId === parentCtrl.values.currentSubMenuId.get(),
	});
	autorun(
		() => {
			// nada
		});
	return ctrlValues;
}

export default MenuItemController;