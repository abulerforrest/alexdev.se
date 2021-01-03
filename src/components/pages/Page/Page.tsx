
import * as React from "react";

import { observer } from "mobx-react";
import { IObservableValue } from "mobx";

import styled from "styled-components";

import { defaultTheme } from "../../../themes/default";

import Typography from "../../Typography";

import {
	NavBarState, INavBarController
} from "../../../interfaces/NavBarController";

import { storeContext } from "../../../contexts";

interface PageProps {
	navBarState?: IObservableValue<NavBarState>
}

const Page = observer(() => {

	const ctrl: INavBarController = React.useContext(storeContext).navBarController;

	const isNavBarVisible: boolean = ctrl.values.navBarState.get() === "revealed";

	const PageContainer = styled.div`
		display: flex;
		align-items: center;
		flex-direction: column;
		margin-top: 150px;
		width: 100%;
		height: 100vh;
		animation: ${props => isNavBarVisible? props.theme.animationFocusOut: props.theme.animationFocusIn};
	`;

	const TextContainer = styled.div`
		display: flex;
		padding: 20px;
		flex-direction: column;
		justify-content: space-between;
		margin-left: 40px;
		margin-right: 40px;
		color: #fff;
		height: 250px;
		max-width: 600px;
		user-select: none;
		margin-bottom: 40px;
		font-family: ${props => props.theme.secondaryFont};
	`;

	return (
			<PageContainer>
                <TextContainer>
					<div style={{borderLeft: '6px solid #fff', paddingLeft: 20, marginBottom: 20}}>
						<Typography
							fontSize={60}
							fontFamily={defaultTheme.additionalFont}
							fontWeight="800"
							type={undefined}
						>
							What the heck, is, alexdev?
						</Typography>
					</div>
					<div style={{color: 'red', textShadow: '1px 3px 3px rgba(0,0,0,0.1)'}}>
					<Typography
						fontSize={20}
						fontFamily={defaultTheme.additionalFont}
						fontWeight="500"
						type={undefined}
					>
						<p>So, hello. I'm <b>Alex</b>. I'm a developer and musician. In my free time I love to build stuff with React JS and music-wise I've for many years released and performed '8-bit' music.</p> <p>This site is my portfolio page, where I take the opportunity to showcase my code, music and provide links to my different projects. Not least you can check out my Resumé-page where you can read and download my CV to get a sense of my personal background and skills.</p><p>You are welcome to contact me if you are interested in my profile, regarding collaborations or anything in between.</p><p><b>All the best!</b></p>
					</Typography>
					</div>
                </TextContainer>
			</PageContainer>
		);
	});

export default Page;