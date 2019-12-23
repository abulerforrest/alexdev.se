import {
    action,
    observable
} from "mobx";

import {
	INavBarController, INavBarControllerValues, INavBarControllerActions
} from "../../interfaces/NavBarController";

const NavBarController = (): INavBarController => {

	const observableValues: INavBarControllerValues = {
        showNav: observable.box(false),
        clickedOutside: observable.box(false),
        navBarState: observable.box("default")
	}

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
		toggleShowNav: toggleShowNav,
		hideNav: hideNav
    }
	
	return {
		values: observableValues,
		actions: actions
	}

}

export default NavBarController;