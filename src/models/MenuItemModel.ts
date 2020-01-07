
import { 
	action, 
	autorun,
	observable
} from "mobx";

import { Model } from "./Model";

import {
	IMenuItem,
	MenuItemType,
	IMenuChildren
} from "../interfaces/MenuItems";

export type MenuItemModelPartial = Model<IMenuItem, "id" | "title" | "type" | "items">;

interface IMenuItemModelValues {
	id: number
	title: string
	type: MenuItemType
	items: IMenuChildren[]
}

const MenuItemsModel = (item?: Partial<IMenuItem> | undefined) => {

	const modelValues: IMenuItemModelValues = observable({
		id: 0,
		title: "",
		type: "parent",
		items: []
	});

	const setValues = action((item: Partial<IMenuItem> | undefined) => {
		if(item) {
			modelValues.id = item.id!;
			modelValues.title = item.title!;
			modelValues.type = item.type!;
			modelValues.items = item.items!;
		}
	});
	
	autorun(() => {
		setValues(item);
	});

	return {
		...modelValues	
	}

}

export default MenuItemsModel;