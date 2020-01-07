import * as React from "react";

import {
	useObserver
} from "mobx-react";

import styled from "styled-components";

import Logo from "../../Logo";

import SocialIcons from "../../SocialIcons";

import {
	INavBarController
} from "../../../interfaces/NavBarController";

import { IconTypes } from "../../ActionIcons";

import { storeContext } from "../../../contexts";

const SplashPageContainer = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	flex-basis: 120px;
	flex-shrink: 1;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	font-family: 'Volkhov', serif;
`;

const SplashPage = () => {

	const ctrl: INavBarController = React.useContext(storeContext).navBarController;

	return useObserver(() => {

		let socialIconsDimmed: boolean = false;
	
		if(ctrl.values.navBarState.get() === "revealed") {
			socialIconsDimmed = true;
		}

		return (
			<SplashPageContainer>
				<Logo 
					showLogoText={true}
				/>
				<SocialIcons
					color="#49829D"
					size={35}
					dimmed={socialIconsDimmed}
					icon={[
						{
							type: IconTypes.S_GITHUB,
							href: "https://github.com/abulerforrest"
						},
						{
							type: IconTypes.S_LINKEDIN,
							href: "https://www.linkedin.com/in/abulerforrest"
						},
						{
							type: IconTypes.S_BANDCAMP,
							href: "https://zalza.bandcamp.com"
						},
						{
							type: IconTypes.S_SOUNDCLOUD,
							href: "https://soundcloud.com/zalza"},
						{
							type: IconTypes.S_APPLEMUSIC,
							href: "https://music.apple.com/se/artist/zalza/377696887"}
					]}
				/>
			</SplashPageContainer>
		);
	});
}

export default SplashPage;