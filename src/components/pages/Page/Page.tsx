
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

const Page = observer((props: PageProps) => {

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
							msg="What the heck, is, alexdev?"
							fontSize={60}
							fontFamily={defaultTheme.additionalFont}
							fontWeight="800"
							type={undefined}
						/>
					</div>
					<div style={{color: 'red', textShadow: '0 0px 0 rgba(73,130,157,0.2), 0 0px 0 rgba(73,130,157,0.2), 0 1px 0 rgba(73,130,157,0.1), 0 1px 0 rgba(73,130,157,0.1), 0 1px 0 rgba(73,130,157,0.1), 0 1px 0 rgba(73,130,157,0.1), 0 1px 0 rgba(73,130,157,0.1), 0 4px 0 rgba(73,130,157,0.1), 0 0px 0 rgba(73,130,157,0.1)'}}>
					<Typography
						msg="So, hello. I'm Alex. I'm a developer and musician. This site is my portfolio page, where I take the opportunity to showcase my code, music and provide links to my different projects. Not least you can check out my Resumé-page where you can read and download my CV to get a sense of my personal background and skills."
						fontSize={20}
						fontFamily={defaultTheme.additionalFont}
						fontWeight="500"
						type={undefined}
					/>
					</div>
                </TextContainer>
			</PageContainer>
		);
	});

export default Page;