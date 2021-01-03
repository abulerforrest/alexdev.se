import React from "react";

// @ts-ignore
import {A as Link} from "hookrouter";

import styled from "styled-components";

import {useObserver} from "mobx-react";

import {INavBarController} from "../../interfaces/NavBarController";

import SVGIcon from "../SVGIcon";

import {IconTypes} from "../ActionIcons";

import {storeContext} from "../../contexts";

import {IMenuChildren, IMenuSiblings} from "../../interfaces/MenuItems";

import {IMenuItemController} from "../../interfaces/MenuItemController";

import {siblingStatusTypes} from "../../controllers/NavBarController/NavBarController";

import {device} from "../../themes/mediaqueries";

import {IUrl} from "../../internal/utils";

const tag = ({ className, children }: HTMLDivElement | any) => (
	<div className={className}>{children}</div>
);

const siblingWrapper = ({ className, children }: HTMLDivElement | any) => (
	<div className={className}>{children}</div>
);

const UnderLine = styled.div`
	margin-top: 5px;
	border-bottom: ${(props) => props.theme.borderBottomIdle};
`;

const UnderLine2 = styled.div`
	margin-top: 5px;
	border-bottom: ${(props) => props.theme.borderBottomIdle2};
`;

const Root = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: space-evenly;
	padding-left: 200px;
	margin: 30px 105px 0 0;
	text-transform: uppercase;

	@media ${device.mobileS} {
		margin: 0;
	}

	@media ${device.desktopS} {
		margin-top: 10px;
	}
`;

const DropDown = styled.ul`
	display: flex;
	flex-direction: column;
	width: 240px;
	cursor: pointer;
	padding: 10px 0 30px 0;

	@media ${device.desktopS} {
		width: 200px;
	}

	@media ${device.mobileS} {
		width: 180px;
	}
`;

const Siblings = styled.div`
	margin-bottom: 5px;
`;

const Tags = styled.div`
	display: inline-flex;
`;

const MenuItem = styled.li`
	margin-right: 40px;

	@media ${device.mobileS} {
		margin-right: 13px;
	}

	@media ${device.desktopS} {
		margin-right: 10px;
	}

	@media ${device.desktopL} {
		margin-right: 15px;
	}
`;

const SiblingMenuItem = styled.div`
	display: flex;
	flex-direction: row;
	opacity: .3;
	height: 20px;
	font-size: 14px;
	margin-top: 10px;

	@media ${device.desktopS} {
		font-size: 13px;
	}

	@media ${device.mobileS} {
		font-size: 12px;
	}

`;

const SiblingWrapper = styled(siblingWrapper)`
	width: 100%;
	height: auto;
	animation: ${props => props.theme.animationSlideInLeft}
	animation-play-state: paused; 
	animation-iteration-count: 1;

	&:hover ${SiblingMenuItem} {
		margin-left: 10px
	}

	&:hover ${Tags} {
		margin-left: 10px;
	}

	&:hover {
		width: 230px;
		margin-top: 10px;
		border-left: 1px solid #fff;
		animation-play-state: running;
		
	}

	&.selected {
		width: 230px;
		margin-top: 10px;
		border-left: 1px solid #F519D5;
		animation-play-state: running;

		&:hover ${UnderLine2} {
			animation: ${(props) => props.theme.animationBorderGrow};
			border-bottom: ${(props) => props.theme.borderBottomActive2};
			border-color: #F519D5;
		}

		${SiblingMenuItem} {
			margin-left: 10px;
			opacity: 1;
		}

		${Tags} {
			margin-left: 10px;
		}

		${UnderLine2} {
			border-bottom: ${(props) => props.theme.borderBottomActive2};
			border-color: #F519D5;
		}
	}

	&:hover ${UnderLine2} {
		animation: ${(props) => props.theme.animationBorderGrow};
		border-bottom: ${(props) => props.theme.borderBottomActive2};
	}

	&:hover::before {
		content: "${props => props.appendContent}";
		font-size: 10px;
		margin-left: 10px;
	}
`;

const StyledLink = styled(Link)`
	&.selected {
		padding-left: 10px;
	}
`;

const MenuLink = styled.div`
	height: 40px;
	cursor: pointer;
	font-size: 28px;
	font-weight: 700;
	font-style: italic;
	letter-spacing: 0.4px;
	text-shadow: ${(props) => props.theme.primaryTextShadow};
	border-bottom: ${(props) => props.theme.borderBottomIdle};

	&.selected {
		border-bottom: ${(props) => props.theme.borderBottomActive};
		border-color: #F519D5;
	}

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

		@media ${device.desktopS} {
			font-size: 12px;
		}

		@media ${device.mobileS} {
			font-size: 12px;
		}
	}

	@media ${device.desktopS} {
		font-size: 25px;
		height: 35px;
	}

	@media ${device.desktopXS} {
		font-size: 22px;
		height: 35px;
	}

	@media ${device.mobileS} {
		font-size: 17px;
		height: 30px;
	}

`;

const StyledArrow = styled.span`
	display: inline-flex;
	font-size: 4px;
	margin-right: 2px;
`;

const StyledTag = styled(tag)`
	display: inline-flex;
	flex-direction: row;
	justify-content: center;
	font-size: 10px;
	font-style: normal;
	background-color: ${(props) => props.fillColor};
	align-items: center;
	opacity: .2;
	margin-right: 8px;
	padding: 3px 6px 3px 6px;
	border: none;
	border-radius: 10px;
`;

const SubMenuItem = styled.li`
	display: flex;
	flex-direction: column;
	font-size: 18px;
	font-weight: 700;
	margin-top: 10px;
	font-style: italic;
	white-space: nowrap;
	list-style-type: none;

	&.selected {
		border-left: 3px solid #fff;
		border-bottom: none;

		${UnderLine} {
			animation: none;
			border-bottom: none;
		}

		&:hover ${UnderLine} {
			animation: none;
			border-bottom: none;
		}
	}

	&:hover ${Siblings} {
		animation: ${(props) => props.theme.animationReveal};
	}

	a {
		text-decoration: none;
		color: ${(props) => props.theme.primaryColor};
	}
	
	&:hover ${UnderLine} {
		animation: ${(props) => props.theme.animationBorderGrow};
		border-bottom: ${(props) => props.theme.borderBottomActive};
	}

	&:hover ${SiblingMenuItem} {
		opacity: 1;
	}
	
	&:hover ${StyledTag} {
		opacity: 1;
		transition: opacity 0.1s ease-in-out;
	}

	@media ${device.desktopS} {
		font-size: 16px;
	}

	@media ${device.mobileS} {
		font-size: 16px;
	}

`;

const Nav = styled.ul`
	display: none;
	right: 100px;
	list-style-type: none;
	position: absolute;
	color: ${(props) => props.theme.primaryColor};

	@media ${device.desktopL} {
		right: 77px;
	}

	@media ${device.desktopS} {
		right: 47px;
	}

	@media ${device.desktopXS} {
		right: 37px;
	}

	@media ${device.mobileS} {
		right: 42px;
	}

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

const renderSiblings = (siblings: IMenuSiblings[], ctrl: INavBarController, menuitemCtrl: IMenuItemController) => {

	const handleClick = (href: string, id: number, parentID: number, rootID: number, title: string) => {
		ctrl.actions.hideNav();
		const type = menuitemCtrl.validateURL(href).type;

		if(menuitemCtrl.validateURL(href).isURL) {
				window.location.href = type === siblingStatusTypes.EMAIL ? `mailto:${href}` : href;
		} else {
			ctrl.actions.setCurrentPage(id, "sibling", parentID, rootID, title);
		}
	}

	const handleMouseEnter = (sibling: IMenuSiblings) => {
		ctrl.actions.setCurrentSubMenuId(sibling.parentID);
		ctrl.actions.setCurrentSibling(sibling);
	}

	const getSiblingStatusText = (validateURL: IUrl, isSelected: boolean) => {

		const { isURL, type } = validateURL;

		if(isURL) {
			return type;
		} else if(isSelected) {
			return siblingStatusTypes.CURRENT;
		}

		return siblingStatusTypes.DEFAULT;
	}

	return siblings.map((sibling: IMenuSiblings) => {

		const validateURL: IUrl = menuitemCtrl.validateURL(sibling.href);

		const isSelected: boolean = menuitemCtrl.isSelected(
			sibling.id,
			sibling.type,
			sibling.rootID,
			sibling.parentID
		);

		const renderSiblingMenuItem = () => {
			const siblingStatusText = getSiblingStatusText(validateURL, isSelected);
			return (
				<div
					onClick={() => handleClick(
						sibling.href,
						sibling.id,
						sibling.parentID,
						sibling.rootID,
						sibling.title
					)}
				>
					<SiblingWrapper
						appendContent={siblingStatusText}
						className={
							isSelected? "selected": ""
						}
						onMouseEnter={() => handleMouseEnter(sibling)}
					>
						<SiblingMenuItem
							key={sibling.id}
						>
							{sibling.title}
						</SiblingMenuItem>
						{sibling.tags.map(tag => (
							<Tags
								key={tag.title}
							>
								<StyledTag
									fillColor={tag.color}
								>
									{tag.title}
								</StyledTag>
							</Tags>
						))}
						<UnderLine2 />
					</SiblingWrapper>
				</div>
			)
		}
		return (
			<Siblings
				key={sibling.id}
			>
				{renderSiblingMenuItem()}
			</Siblings>
		);
	});
}

const renderArrow = (revealed: boolean, hasChildren: boolean) => {
	if(hasChildren) {
		return (
			<StyledArrow>
				<SVGIcon
					viewBox="-4 -4 24 24"
					width={18}
					iconType={
						revealed ? IconTypes.ICON_ARROWDOWN : IconTypes.ICON_ARROWRIGHT
					}
					fill={"#fff"}
	/>
			</StyledArrow>
		);
	}
}

const renderChildren = (
	children: IMenuChildren[],
	ctrl: INavBarController,
	menuitemCtrl: IMenuItemController
) => {

	const handleClick = (
		id: number,
		parentID: number,
		rootID: number,
		title: string
	): void => {
		ctrl.actions.hideNav();
		ctrl.actions.setCurrentPage(id, "child", parentID, rootID, title);
	}

	return children.map((child: IMenuChildren) => {

		const isSelected = menuitemCtrl.isSelected(
			child.id,
			child.type,
			child.parentID,
			child.rootID
		);

		const handleActiveState = (id: number) => {
			ctrl.actions.setShowNavSiblings(true, child.rootID);
			ctrl.actions.setCurrentSubMenuId(id);
		}

		const hasSiblings: boolean = menuitemCtrl.childHasSiblings(child);
		const showSiblings: boolean = ctrl.values.showNavSiblings.get().show;
		const isCurrentChild: boolean = menuitemCtrl.isCurrentChild(child.id);

		const revealed: boolean = showSiblings && isCurrentChild;

		return (
			<SubMenuItem
				key={child.id}
				className={isSelected? "selected": ""}
			>
				<StyledLink
					className={isSelected? "selected": ""}
					href={child.href}
					onClick={() => child.href === ""? {}: handleClick(
						child.id,
						child.parentID,
						child.rootID,
						child.title
					)}
					onMouseEnter={() => handleActiveState(child.id)}
				>
					{renderArrow(revealed, hasSiblings)}
					{child.title}
					<UnderLine />
				</StyledLink>
				{showSiblings && renderSiblings(child.items, ctrl, menuitemCtrl)}
			</SubMenuItem>
		);
	})
}

const populateMenu = (ctrl: INavBarController) => {

	const handleToggle = (rootID: number) => {
		ctrl.actions.setShowNavSiblings(!ctrl.values.showNavSiblings.get().show, rootID);
	}

	const handleMouseEnter = (rootID: number) => {
		ctrl.actions.setShowNavSiblings(false, rootID);
	}

	const { menuItemControllers } = ctrl.controllers;

	return menuItemControllers.map((menuitem: IMenuItemController) => {

			const showChildren: boolean = ctrl.values.showNavChildren.get();

			const hasSelectedOption = menuitem.hasSelectedOption;

			return (
				<MenuItem
					key={menuitem.model.id}
				>
					<MenuLink
						onMouseEnter={() => handleMouseEnter(menuitem.model.id)}
						onClick={() => handleToggle(menuitem.model.id)}
						className={hasSelectedOption? "selected": ""}
					>
						{menuitem.model.title}
					</MenuLink>
				<DropDown>
					{showChildren && renderChildren(menuitem.model.items, ctrl, menuitem)}
				</DropDown>
			</MenuItem>
		)}
	);
}

const NavBar = () => {

	const ctrl: INavBarController = React.useContext(storeContext).navBarController;

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
					{populateMenu(ctrl)}
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