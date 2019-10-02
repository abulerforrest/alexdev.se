import React, { Component } from "react";
import { observer } from "mobx-react";

import './Top.css';

import NavBar from "../NavBar";

import styled from "styled-components";

import profilePic from "../../assets/png/a2.png";

import {
		INavBarController
} from "../../interfaces/NavBarController";

const Root = styled.div`
	z-index: 1;
	right: 20px;
	width: 100%;
	display: flex;
	user-select: none;
	overflow-x: hidden;
	position: absolute;
	padding-bottom: 700px;
	justify-content: flex-end;
	color: ${(props) => props.theme.primaryColor};
	font-family: ${(props) => props.theme.primaryFont};
`;

const ProfilePic = styled.div`
	top: 0;
	right: 0px;
	width: 80px;
	height: 80px;
	cursor: pointer;
	margin-top: 20px;
	border-radius: 50%;
	position: absolute;
	background-size: 80px;
	background-repeat: no-repeat;
	background-color: rgba(0,212,255,1);
	background-image: url(${profilePic});
	animation: ${(props) => props.theme.animationReveal};
	animation-delay: 0.2s;
`;

const ClickMeText = styled.div`
	top: 36px;
	right: 110px;
	padding: 18px;
	font-size: 20px;
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
		position: absolute;
		border: 20px solid transparent;
		border-top: 0;
		border-right: 0;
		border-left-color: #ffffff;
		margin-top: -10px;
		margin-right: -20px;
	}
`;

export type NavBarState = "default" | "revealed" | "collapsed";

interface ITopProps {
	controller: INavBarController
}

@observer
class Top extends Component<ITopProps> {

	private readonly controller: INavBarController;
	private readonly myRef: React.RefObject<HTMLDivElement> = React.createRef<HTMLDivElement>();

	constructor(props: any) {
		super(props);

		this.controller = props.controller;
	}

	componentDidMount() {
		document.addEventListener("mousedown", this.handleClickOutside);
	}

	componentWillUnmount() {
		document.removeEventListener("mousedown", this.handleClickOutside);
	}

	handleClickOutside = (e: any) => {
		if (!this.myRef.current!.contains(e.target) && this.controller.navBarState !== "default") {
			this.controller.hideNav();
		}
	};

	toggleShowNav = () => {
		this.props.controller.toggleShowNav();
	}

	render() {

		const { controller } = this.props;

		const renderClickMe = (text: string) : React.ReactNode => {

			if(this.controller.navBarState === "default" || this.controller.navBarState === "collapsed") {

				return (
					<ClickMeText>
						{text}
					</ClickMeText>
				);
			}

		}

		const defaultText = "Click me! :)";

		return (
			<div>
				<Root>
					{renderClickMe(defaultText)}
					<div ref={this.myRef}>
						<NavBar controller={controller}/>
						<ProfilePic
							onClick={() => this.toggleShowNav()}
						/>
					</div>
				</Root>
			</div>
		);
		
	}
};

export default Top;