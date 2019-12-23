import { IObservableValue } from "mobx";

export interface INavBarControllerValues {
	showNav: IObservableValue<boolean>
	clickedOutside: IObservableValue<boolean>
	navBarState: IObservableValue<NavBarState>
}

export type NavBarState = "default" | "revealed" | "collapsed";

export interface INavBarControllerActions {
	hideNav: () => void
	toggleShowNav: () => void
}

export interface INavBarController {
	values: INavBarControllerValues
	actions: INavBarControllerActions
}