import {
	action,
	autorun,
    observable,
	IObservableArray
} from "mobx";

import {
	INavBarController,
	INavBarControllers,
	INavBarControllerValues,
	INavBarControllerActions
} from "../../interfaces/NavBarController";

import {
	IDataStore
} from "../../stores/DataStore";

import MenuItemController from "../../controllers/MenuItemController";

import {
	IMenuItemController
} from "../../interfaces/MenuItemController";

import {
	IMenuItem,
	IMenuSiblings
} from "../../interfaces/MenuItems";

export enum siblingStatusTypes {
	CURRENT = "viewing",
	LINK = "external link",
	DEFAULT = "title"
}

const NavBarController = (
	dataStore: IDataStore
): INavBarController => {

	const observableValues: INavBarControllerValues = {
        showNav: observable.box(false),
		showNavChildren: observable.box(true),
		showNavSiblings: observable.box({show: false, id: null!}),
		currentPage: observable.box({id: null!, type: null!, parentID: null!, rootID: null!, title: null!}),
		currentSibling: observable.box(null!),
		currentSubMenuId: observable.box(null!),
        clickedOutside: observable.box(false),
		navBarState: observable.box("default"),
		menuItems: observable([])
	}

	const setShowNavChildren = action((value: boolean) => {
		observableValues.showNavChildren.set(value);
	});

	const setShowNavSiblings = action((show: boolean, id: number) => {
		observableValues.showNavSiblings.set({show: show, id: id});
	});

	const setCurrentSubMenuId = action((id: number) => {
		observableValues.currentSubMenuId.set(id);
	});

	const setCurrentSibling = action((sibling: IMenuSiblings) => {
		observableValues.currentSibling.set(sibling);
	});

	const setCurrentPage = action((id: number, type: string, parentID: number, rootID: number, title: string) => {
		observableValues.currentPage.set({id: id, type: type, parentID: parentID, rootID: rootID, title: title});
	});

    const toggleShowNav = action(() => {
		observableValues.showNav.set(!observableValues.showNav.get());

		if(observableValues.showNav.get()) {
			observableValues.navBarState.set("revealed");
		} else {
			observableValues.navBarState.set("collapsed");
		}

	});

	const hideNav = action(() => {
		observableValues.showNav.set(false);
		observableValues.navBarState.set("collapsed");
	});

    const actions: INavBarControllerActions = {
		setCurrentSubMenuId: setCurrentSubMenuId,
		setCurrentSibling: setCurrentSibling,
		setCurrentPage: setCurrentPage,
		setShowNavChildren: setShowNavChildren,
		setShowNavSiblings: setShowNavSiblings,
		toggleShowNav: toggleShowNav,
		hideNav: hideNav
	}

	const menuItemControllers: IObservableArray<IMenuItemController> = observable([]);

	const controllers: INavBarControllers = {
		menuItemControllers: menuItemControllers
	}

	const createMenuItemCtrl = (model: IMenuItem): IMenuItemController => {

		return MenuItemController(
				model,
				{
					values: observableValues,
					actions: actions,
					controllers: controllers
				}

			);
	}

	autorun (
		async () => {
			await dataStore.fetchNavData();

			dataStore.getMenuItems();

			const controllersTemp: IMenuItemController[] = [];

			for(const model of dataStore.getMenuItems()) {
			
				const menuItemCtrl = createMenuItemCtrl(model);

				controllersTemp.push(menuItemCtrl);
			}

			menuItemControllers.replace(controllersTemp);

		});
	

	return {
		values: observableValues,
		actions: actions,
		controllers: controllers
	}

}

export default NavBarController;