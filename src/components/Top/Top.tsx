import React, { useEffect } from "react";
import { observer } from "mobx-react";

import './Top.css';

import NavBar from "../NavBar";

import styled from "styled-components";

import profilePic from "../../assets/png/a2.png";

import {
		INavBarController
} from "../../interfaces/NavBarController";

import { IResumePageController } from "../../interfaces/ResumePageController";

export type NavBarState = "default" | "revealed" | "collapsed";

interface ITopProps {
	controller: INavBarController
	parentController: IResumePageController
}

const Top = observer(({controller, parentController}: ITopProps) => {

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

	const ProfilePic = styled.div`
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
	`;

	const ClickMeText = styled.div`
		z-index: 2;
		top: 36px;
		right: 130px;
		padding: 18px;
		font-size: 20px;
		white-space: nowrap;
		position: absolute;
		border-radius: 8px;
		color: ${(props) => props.theme.secondaryColor};
		background-color: ${(props) => props.theme.primaryColor};
		animation: ${(props) => props.theme.animationReveal};
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
	`;

	useEffect(() => {
		
		document.addEventListener("mousedown", handleClickOutside);

		return function cleanup() {
			document.removeEventListener('mousedown', handleClickOutside);
		};

	});

	const handleClickOutside = (e: any) : void => {

		if (!myRef.current!.contains(e.target) && controller.navBarState !== "default") {
			controller.hideNav();
		}
	};

	const toggleShowNav = () : void => {
		controller.toggleShowNav();
	}

	const renderClickMe = (text: string) : React.ReactNode => {

		if(controller.navBarState === "default" || controller.navBarState === "collapsed") {

			return (
				<ClickMeText>
					{text}
				</ClickMeText>
			);
		}

	}

	const defaultText = "Click me! :)";

		return (
			<React.Fragment>
				<Root>
					{renderClickMe(defaultText)}
					<div
						style={{zIndex: 5}}
						ref={myRef}
					>	
						<NavBar controller={controller} parentController={parentController}/>
						<ProfilePic
							onClick={() => toggleShowNav()}
						/>
					</div>
				</Root>
			</React.Fragment>
	);
});

export default Top;