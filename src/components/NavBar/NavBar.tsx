import React from "react";

import { A as Link } from "hookrouter";

import styled from "styled-components";

import {
	useObserver,
	useLocalStore
} from "mobx-react";

import {
	INavBarController
} from "../../interfaces/NavBarController";

const MenuItem = styled.li`
	margin-right: 40px;
`;

const UnderLine = styled.div`
	margin-top: 5px;
	border-bottom: ${(props) => props.theme.borderBottomIdle};
`;

const Root = styled.div`
	min-width: 620px;
	margin-top: 30px;
	margin-right: 105px;
	padding-left: 200px;
	display: flex;
	align-items: flex-start;
	text-transform: uppercase;
	justify-content: space-evenly;
`;

const DropDown = styled.ul`
	padding: 0;
	width: 200px;
	display: flex;
	cursor: pointer;
	padding-top: 10px;
	padding-bottom: 30px;
	flex-direction: column;
`;

const MenuLink = styled.div`
	height: 40px;
	cursor: pointer;
	font-size: 28px;
	font-style: italic;
	letter-spacing: 0.4px;
	text-shadow: ${(props) => props.theme.primaryTextShadow};
	border-bottom: ${(props) => props.theme.borderBottomIdle};

	&:hover {
		top: -1px;
		font-weight: bold;
		position: relative;
		text-shadow: ${(props) => props.theme.secondaryTextShadow};
		border-bottom: ${(props) => props.theme.borderBottomActive};
	}

	ul {
		font-size: 18px;
		text-shadow: none;
	}
`;

const SubMenuItem = styled.li`
	width: 200px;
	height: 30px;
	font-size: 18px;
	margin-top: 10px;
	font-style: italic;
	white-space: nowrap;
	list-style-type: none;

	a {
		text-decoration: none;
		color: ${(props) => props.theme.primaryColor};
	}
	
	&:hover ${UnderLine} {
		animation: ${(props) => props.theme.animationBorderGrow};
		border-bottom: ${(props) => props.theme.borderBottomActive};
	}
`;

const Nav = styled.ul`
	display: none;
	right: 100px;	
	list-style-type: none;
	position: absolute;
	color: ${(props) => props.theme.primaryColor};

	li:hover ul {
		display: flex;
		animation: ${(props) => props.theme.animationReveal};
	}

	ul {
		display: none;
		position: absolute;
	}

	&.reveal {
		display: flex;
		animation: ${(props) => props.theme.animationReveal};
	}

	&.collapse {
		display: flex;
		pointer-events: none;
		animation: ${(props) => props.theme.animationCollapse};
	}
`;

interface INavBarProps {
	controller: INavBarController
}

const NavBar = ({controller}: INavBarProps) => {

	const ctrl = useLocalStore(() => (controller));

	const handleLinkClick = (page?: string): void => {
		ctrl.actions.hideNav();
	}

	const renderNavBar = (): React.ReactNode => {

		let appendClass = null;

		if(ctrl.values.navBarState.get() !== "default") {
			appendClass = ctrl.values.showNav.get()? "reveal": "collapse";
		}

		return (
			<Root>
				<Nav
					id="nav"
					className={`nav ${appendClass}`}
				>
					<MenuItem>
						<MenuLink>
							Projects
						</MenuLink>
						<DropDown>
							<SubMenuItem>
								<Link
									href="/wordrazer"
									onClick={() => handleLinkClick("wordrazer")}
								>
									Wordrazer Game
									<UnderLine />
								</Link>
							</SubMenuItem>
						</DropDown>
					</MenuItem>
					<MenuItem>
						<MenuLink>
							Resumé
						</MenuLink>
						<DropDown>
							<SubMenuItem>
								<Link
									href="/resume"
									onClick={() => handleLinkClick("resume")}
								>
									View my CV/Resumé
									<UnderLine />
								</Link>
							</SubMenuItem>
						</DropDown>
					</MenuItem>
					<MenuItem>
						<MenuLink>
							Music
						</MenuLink>
						<DropDown>
							<SubMenuItem>
								<Link
									href="/albums"
									onClick={() => handleLinkClick("albums")}
								>
									Albums
									<UnderLine />
								</Link>

							</SubMenuItem>
							<SubMenuItem>
								<Link
									href="/soundtracks"
									onClick={() => handleLinkClick("soundtracks")}
								>
									Soundtracks
									<UnderLine />
								</Link>
							</SubMenuItem>
						</DropDown>
					</MenuItem>
					<MenuItem>
						<MenuLink>
							Contact
							<UnderLine />
						</MenuLink>
						<DropDown>
							<SubMenuItem>
								<Link
									href="/saywhat"
									onClick={() => handleLinkClick("saywhat")}
								>
									What's alexdev?
									<UnderLine />
								</Link>
							</SubMenuItem>
							<SubMenuItem>
								<Link
									href="/aboutme"
									onClick={() => handleLinkClick("aboutme")}
								>
									About me
									<UnderLine />
								</Link>
							</SubMenuItem>
						</DropDown>
					</MenuItem>
				</Nav>
			</Root>
		);
	}

	return useObserver(() => {
		return (
			<div>
				{renderNavBar()}
			</div>
		)}
	);
}

export default NavBar;