
import * as React from "react";
import { observable } from "mobx";
import { observer } from "mobx-react";

import styled from "styled-components";

import Logo, { LogoState } from "../../Logo";

import {
	INavBarController
} from "../../../interfaces/NavBarController";

const SplashPageContainer = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	flex-basis: 120px;
	flex-shrink: 1;
	flex-direction: column;
	align-content: center;
	justify-content: center;
	font-family: 'Volkhov', serif;
`;

interface ISplashPageProps {
	controller: INavBarController;
}

@observer
class SplashPage extends React.Component<ISplashPageProps> {

	@observable private readonly controller: INavBarController;

	constructor(props: any) {
		super(props);

		this.controller = props.controller;
	}

	render(): React.ReactNode {

		let logoState: LogoState = "default";
	
		if(this.controller.navBarState === "revealed") {
			logoState = "dimmed";
		}

		return (
			<SplashPageContainer>
				<Logo logoState={logoState} />
			</SplashPageContainer>
		);
	}

}

export default SplashPage;