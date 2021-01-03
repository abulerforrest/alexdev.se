
import * as React from "react";

import { observer } from "mobx-react";
import { IObservableValue } from "mobx";

import styled from "styled-components";

import SocialIcons from "../../SocialIcons";

import { IconTypes } from "../../ActionIcons";
import { defaultTheme } from "../../../themes/default";

import Typography from "../../Typography";

import {
	NavBarState, INavBarController
} from "../../../interfaces/NavBarController";

import { storeContext } from "../../../contexts";

interface PageNotFoundProps {
	errorMsg?: string
	errorQuote?: string
	navBarState?: IObservableValue<NavBarState>
}

const PageNotFound = observer(({
	errorMsg = "",
	errorQuote = ""
}: PageNotFoundProps) => {

	const ctrl: INavBarController = React.useContext(storeContext).navBarController;

	const isNavBarVisible: boolean = ctrl.values.navBarState.get() === "revealed";

	const PageNotFoundContainer = styled.div`
		display: flex;
		align-items: center;
		flex-direction: column;
		justify-content: center;
		width: 100%;
		height: 100vh;
		animation: ${props => isNavBarVisible? props.theme.animationFocusOut: props.theme.animationFocusIn};
	`;

	const TextContainer = styled.div`
		display: flex;
		align-items: center;
		flex-direction: column;
		justify-content: space-between;
		color: #fff;
		height: 250px;
		max-width: 600px;
		user-select: none;
		margin-bottom: 40px;
		font-family: ${props => props.theme.secondaryFont};
	`;

	return (
			<PageNotFoundContainer>
                <TextContainer>
						<Typography
							fontSize={110}
							fontFamily={defaultTheme.secondaryFont}
							fontWeight="700"
							type="default"
						>
							404 ;(
						</Typography>
					<Typography
						fontSize={50}
						fontFamily={defaultTheme.secondaryFont}
						fontWeight={700}
						type="default"
					>
						{errorMsg}
					</Typography>
					<Typography
						fontSize={25}
						fontFamily={defaultTheme.primaryFont}
						fontWeight={400}
						type="quote"
					>
						{errorQuote}
					</Typography>
                </TextContainer>
				<SocialIcons
					color="#3d718a"
					size={35}
					dimmed={isNavBarVisible}
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
			</PageNotFoundContainer>
		);
	});

export default PageNotFound;