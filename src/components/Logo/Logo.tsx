import React from "react";

import {
	useObserver
} from "mobx-react";

import styled from "styled-components";

import logo from "../../assets/png/a.png";

import { INavBarController } from "../../interfaces/NavBarController";

import { storeContext } from "../../contexts";

interface ILogoProps {
	showLogoText?: boolean
	logoSize?: number
}

const Logo = ({
	showLogoText = true,
	logoSize = 70
}: ILogoProps) => {

	const ctrl: INavBarController = React.useContext(storeContext).navBarController;

	const LogoTextContainer = styled.div`
		margin: auto;
		display: flex;
		font-size: 80px;
		user-select: none;
		align-content: center;
		&.dimmed {
			animation: ${props => props.theme.animationFocusOut};
		}
	`;

	const LogoContainer = styled.div`
		display: flex;
		flex-direction: column;
	`;

	const StyledLogo = styled.div`
		background-size: ${logoSize}mm;
		background-repeat: no-repeat;
		background-position: center;
		background-image: url(${logo});
		margin: auto;
		opacity: 0.1;
		width: ${logoSize}mm;
		height: ${logoSize}mm;
		animation: ${props => props.theme.animationFocusIn};

		&.dimmed {
			animation: ${props => props.theme.animationFocusOut};
		}
	`;

	const LogoText1 = styled.div`
		opacity: 0.8;
		font-weight: 700;
		color: ${(props) => props.theme.primaryColor};
		text-shadow: ${props => props.theme.textShadowGlow}
	`;

	const LogoText2 = styled.div`
		color: #49829D;
		font-weight: 700;
		font-style: italic;	
		animation: ${props => props.theme.animationFocusIn}
	`;

	const LogoText3 = styled.div`
		font-size: 30px;
		font-weight: bold;
		font-style: italic;
		color: ${props => props.theme.primaryColor};
		animation: ${props => props.theme.animationTextPopUp};
	`;

	const renderLogoText = (appendClass: string) => (
		<LogoTextContainer className={appendClass}>
			<LogoText1>
				alex
			</LogoText1>
			<LogoText2>
				dev
			</LogoText2>
			<LogoText3>
				™
			</LogoText3>
		</LogoTextContainer>
	);

		let appendClass: string = "";

		if(ctrl.values.navBarState.get() === "revealed") {
			appendClass = "dimmed";
		}

		return useObserver(() => {
			return (
			<LogoContainer>
				<StyledLogo
					className={appendClass} 
				/>
				{showLogoText? renderLogoText(appendClass): ""}
			</LogoContainer>
		)});
	};

export default Logo;