import { observable, action } from "mobx";

import {
	INavBarController
} from "../../interfaces/NavBarController";

import { NavBarState } from "../../components/NavBar";

export class NavBarController implements INavBarController {

	@observable public showNav: boolean = false;
	@observable public clickedOutside: boolean = false;

	@observable public navBarState: NavBarState = "default";

	@action
	public toggleShowNav() : void {
		this.showNav = !this.showNav;

		if(this.showNav) {
			this.navBarState = "revealed";
		} else {
			this.navBarState = "collapsed";
		}
	}

	@action
	public hideNav() : void {
		this.showNav = false;
		this.navBarState = "collapsed";
	}

}

export default NavBarController;