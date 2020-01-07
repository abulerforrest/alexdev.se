import {
    IMenuItem, IMenuChildren, MenuItemType
} from "../MenuItems";

import {
    INavBarController
} from "../NavBarController";

export interface IMenuItemController {
	model: IMenuItem
    parentCtrl: INavBarController

    hasSelectedOption: boolean
    isURL: (href: string) => boolean
    childHasSiblings: (child: IMenuChildren) => boolean
    isCurrentChild: (childId: number) => boolean
    isSelected: (itemId: number, itemType: MenuItemType, itemParentId: number, itemRootId: number) => boolean
}

export interface IMenuItemCtrlValues extends IMenuItemController {
    hasSelectedOption: boolean
    isURL: (href: string) => boolean
    childHasSiblings: (child: IMenuChildren) => boolean
    isCurrentChild: (childId: number) => boolean
    isSelected: (itemId: number, itemType: MenuItemType, itemParentId: number, itemRootId: number) => boolean
}
