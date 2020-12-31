import {
	IObservableValue, IObservableArray
} from "mobx";

import { IMenuSiblings, IMenuItem } from "../MenuItems";
import { IMenuItemController } from "../MenuItemController";

export interface ICurrentPage {
	id: number
	type: string
	parentID: number
	rootID: number
	title: string
}

export interface IShowNavSiblings {
	show: boolean
	id: number
}

export interface INavBarControllerValues {
	showNavChildren: IObservableValue<boolean>
	showNavSiblings: IObservableValue<IShowNavSiblings>
	currentSibling: IObservableValue<IMenuSiblings>
	currentSubMenuId: IObservableValue<number>
	currentPage: IObservableValue<ICurrentPage>
	showNav: IObservableValue<boolean>
	clickedOutside: IObservableValue<boolean>
	navBarState: IObservableValue<NavBarState>
	menuItems: IObservableArray<IMenuItem>
}

export type NavBarState = "default" | "revealed" | "collapsed" | "hidden";
export interface INavBarControllerActions {
	hideNav: () => void
	toggleShowNav: () => void
	setShowNavSiblings: (show: boolean, id: number) => void
	setShowNavChildren: (value: boolean) => void
	setCurrentSibling: (sibling: IMenuSiblings) => void
	setCurrentPage: (id: number, type: string, parentID: number, rootID: number, title: string) => void
	setCurrentSubMenuId: (id: number) => void
}

export interface INavBarControllers {
	menuItemControllers: IObservableArray<IMenuItemController>
}
export interface INavBarController {
	values: INavBarControllerValues
	actions: INavBarControllerActions
	controllers: INavBarControllers
}