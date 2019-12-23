
import * as React from "react";

import {
	useObserver,
	useLocalStore
} from "mobx-react";

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

interface INavBarControllerProps {
	controller: INavBarController
}

interface ISplashPageProps {
	controller: INavBarController
}

const SplashPage = ({controller}: ISplashPageProps) => {

	const ctrl = useLocalStore(() => (controller));

	return useObserver(() => {

		let logoState: LogoState = "default";
	
		if(ctrl.values.navBarState.get() === "revealed") {
			logoState = "dimmed";
		}

		return (
			<SplashPageContainer>
				<Logo logoState={logoState} />
			</SplashPageContainer>
		);
	});
}

export default SplashPage;