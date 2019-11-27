import React, { Component } from "react";

import { A as Link } from "hookrouter";

import styled from "styled-components";

import { observer } from "mobx-react";

import {
	INavBarController
} from "../../interfaces/NavBarController";

import { IResumePageController } from "../../interfaces/ResumePageController";

export type NavBarState = "default" | "revealed" | "collapsed";

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
	right: 200px;	
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
	parentController: IResumePageController
}

@observer
class NavBar extends Component<INavBarProps> {

	private readonly controller: INavBarController;
	private readonly parentController: IResumePageController;

	constructor(props: any) {
		super(props);

		this.controller = props.controller;
		this.parentController = props.parentController;
	}

	handleLinkClick = (page?: string) : void => {

		this.controller.hideNav();

		if(page) {
			this.parentController.setCurrentPage(page);
		}

	}

	renderNavBar() : React.ReactNode {

		const { controller } = this.props;
			
		let appendClass = null;

		if(controller.navBarState !== "default") {
			appendClass = controller.showNav? "reveal": "collapse";
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
								href="/loremipsum"
								onClick={() => this.handleLinkClick("loremipsum")}
							>
								Lorem Ipsum
								<UnderLine />
							</Link>
							
						</SubMenuItem>
						<SubMenuItem>
							<Link
								href="/loremipsum"
								onClick={() => this.handleLinkClick("loremipsum")}
							>
								Lorem Ipsum
								<UnderLine />
							</Link>
						</SubMenuItem>
						<SubMenuItem>
							<Link
								id="1"
								href="/loremipsum"
								onClick={() => this.handleLinkClick("1")}
							>
								Lorem Ipsum
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
								onClick={() => this.handleLinkClick("resume")}
							>
								View my CV/Resumé
								<UnderLine />
							</Link>
						</SubMenuItem>
					</DropDown>
				</MenuItem>
				<MenuItem>
					<MenuLink>
						About
						<UnderLine />
					</MenuLink>
					<DropDown>
						<SubMenuItem>
							<Link
								href="/saywhat"
								onClick={() => this.handleLinkClick("saywhat")}
							>
								What's alexdev?
								<UnderLine />
							</Link>
						</SubMenuItem>
						<SubMenuItem>
							<Link
								href="/aboutme"
								onClick={() => this.handleLinkClick("aboutme")}
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

	render(): React.ReactNode {
		return (
			<div>
				{this.renderNavBar()}
			</div>
		);
	}

}

export default NavBar;