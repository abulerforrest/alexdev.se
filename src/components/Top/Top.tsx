import React from "react";

import {
	useObserver
} from "mobx-react";

import NavBar from "../NavBar";

import styled from "styled-components";

import profilePic from "../../assets/png/a2.png";

import {
		INavBarController
} from "../../interfaces/NavBarController";

import {
	storeContext
} from "../../contexts";
import { device } from "../../themes/mediaqueries";

export type NavBarState = "default" | "revealed" | "collapsed";

const profilepic = ({ className, onClick }: HTMLDivElement | any) => (
	<div className={className} onClick={onClick} />
);

const clickmetext = ({ className, children }: HTMLDivElement | any) => (
	<div className={className}>
		{children}
	</div>
);

const Top = () => {

	const ctrl: INavBarController = React.useContext(storeContext).navBarController;

	const myRef: React.RefObject<HTMLDivElement> = React.createRef<HTMLDivElement>();

	const Root = styled.div`
		display: flex;
		height: 100px;
		justify-content: flex-end;
		position: fixed;
		user-select: none;
		right: 20px;
		z-index: 2;
		color: ${props => props.theme.primaryColor};
		font-family: ${props => props.theme.primaryFont};
		width: 0px;
	`;

	const ProfilePic = styled(profilepic)`
		z-index: 2;
		top: 0;
		right: 0px;
		width: 80px;
		height: 80px;
		cursor: pointer;
		margin-top: 20px;
		padding-right: 20px;
		position: absolute;
		background-size: 80px;
		background-repeat: no-repeat;
		background-image: url(${profilePic});
		animation: ${props => props.theme.animationReveal};
		animation-delay: 0.2s;

		@media ${device.mobileS} {
			margin-top: 10px;
			right: -25px;
			width: 50px;
			height: 50px;
			background-size: 50px;
		}

		@media ${device.desktopL} {
			right: -25px;
		}

		@media ${device.desktopS} {
			margin-top: 10px;
			right: -35px;
			width: 70px;
			height: 70px;
			background-size: 70px;
		}

		@media ${device.desktopXS} {
			margin-top: 10px;
			right: -35px;
			width: 60px;
			height: 60px;
			background-size: 60px;
		}
	`;

	const ClickMeText = styled(clickmetext)`
		z-index: 2;
		top: 36px;
		right: 130px;
		padding: 18px;
		font-size: 20px;
		font-weight: 700;
		white-space: nowrap;
		position: absolute;
		border-radius: 8px;
		color: ${(props) => props.theme.secondaryColor};
		background-color: ${(props) => props.theme.primaryColor};
		animation: ${props => props.theme.animationReveal};
		animation-delay: 0.4s;

		&:after {
			top: 50%;
			right: 0;
			content: '';
			margin-top: -10px;
			position: absolute;
			border: 20px solid transparent;
			border-top: 0;
			border-right: 0;
			border-left-color: #ffffff;
			margin-right: -20px;
		}

		@media ${device.desktopL} {
			right: 108px;
		}

		@media ${device.desktopS} {
			z-index: 2;
			top: 24px;
			right: 72px;
			padding: 12px;
			font-size: 17px;
			font-weight: 700;
			white-space: nowrap;
			position: absolute;
			border-radius: 8px;
			color: ${(props) => props.theme.secondaryColor};
			background-color: ${(props) => props.theme.primaryColor};

			&:after {
				top: 87%;
				right: 0;
				content: '';
				margin-top: -20px;
				position: absolute;
				border: 18px solid transparent;
				border-top: 0;
				border-right: 0;
				border-left-color: #ffffff;
				margin-right: -10px;
		}

		@media ${device.desktopXS} {
			z-index: 2;
			top: 19px;
			right: 62px;
			padding: 12px;
			font-size: 16px;
			font-weight: 700;
			white-space: nowrap;
			position: absolute;
			border-radius: 8px;
			color: ${(props) => props.theme.secondaryColor};
			background-color: ${(props) => props.theme.primaryColor};

			&:after {
				top: 90%;
				right: 0;
				content: '';
				margin-top: -20px;
				position: absolute;
				border: 16px solid transparent;
				border-top: 0;
				border-right: 0;
				border-left-color: #ffffff;
				margin-right: -10px;
		}

		@media ${device.mobileS} {
			z-index: 2;
			top: 16px;
			right: 62px;
			padding: 12px;
			font-size: 16px;
			font-weight: 700;
			white-space: nowrap;
			position: absolute;
			border-radius: 8px;
			color: ${(props) => props.theme.secondaryColor};
			background-color: ${(props) => props.theme.primaryColor};
			animation: ${(props) => props.theme.animationReveal};
			animation-delay: 0.4s;

			&:after {
				top: 90%;
				right: 0;
				content: '';
				margin-top: -20px;
				position: absolute;
				border: 16px solid transparent;
				border-top: 0;
				border-right: 0;
				border-left-color: #ffffff;
				margin-right: -10px;
		}



	`;



	React.useEffect(
		() => {

		document.addEventListener("mousedown", handleClickOutside);

		return function cleanup() {
			document.removeEventListener('mousedown', handleClickOutside);
			};

	});


	const handleClickOutside = (e: any) : void => {

		if (!myRef.current!.contains(e.target) && ctrl.values.navBarState.get() !== "default") {
			ctrl.actions.hideNav();
		}
	};

	const toggleShowNav = () : void => {
			ctrl.actions.toggleShowNav();
	}

	const renderClickMe = (text: string) : React.ReactNode => {

		if(ctrl.values.navBarState.get() === "default" || ctrl.values.navBarState.get() === "collapsed") {

			return (
				<ClickMeText>
					{text}
				</ClickMeText>
			);
		}

	}

	const handleText = (pageTitle: string) => {
		const title: string = pageTitle.toLowerCase();
		let textOutput: string = "Yay!";
		
		if(title === "view my cv/resumé") {
			textOutput = `Nice going!`;
		}

		if(title === "disclaimer") {
			textOutput = `What?`;
		}

		return textOutput;
	}

	const pageId = ctrl.values.currentPage.get().title;
	const pageTitle = ctrl.values.currentPage.get().title;

	const showNewText: boolean = pageId !== null && pageTitle !== null;

	const defaultText = showNewText? handleText(pageTitle): "Click me!";

	return useObserver(() => {
	
		return (
			<React.Fragment>
				<Root>
					{renderClickMe(defaultText)}
					<div
						style={{zIndex: 5}}
						ref={myRef}
					>	
						<NavBar />
						<ProfilePic
							onClick={() => toggleShowNav()}
						/>
					</div>
				</Root>
			</React.Fragment>
		);
	});
}

export default Top;