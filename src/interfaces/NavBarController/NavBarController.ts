import { NavBarState } from "../../components/NavBar";

export interface INavBarController {
	showNav: boolean
	clickedOutside: boolean
	
	navBarState: NavBarState;

	hideNav: () => void
	toggleShowNav: () => void
}