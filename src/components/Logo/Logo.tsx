import React, { Component } from "react";
import { observer } from "mobx-react";

import styled from "styled-components";

import logo from "../../assets/png/a.png";

const LogoTextContainer = styled.div`
	margin: auto;
	display: flex;
	font-size: 80px;
	user-select: none;
	align-content: center;
`;

const LogoContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

const StyledLogo = styled.div`
	background-size: 70mm;
	background-position-x: 22px;
	background-repeat: no-repeat;
	background-image: url(${logo});
	margin: auto;
	width: 300px;
	opacity: 0.1;
	height: 300px;
	animation: ${props => props.theme.animationFocusIn};

	&.dimmed {
		animation: ${props => props.theme.animationFocusOut};
	}
`;

const LogoText1 = styled.div`
	opacity: 0.8;
	color: ${(props) => props.theme.primaryColor};
	text-shadow: ${props => props.theme.textShadowGlow}
`;

const LogoText2 = styled.div`
	color: #49829D;
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

export type LogoState = "default" | "dimmed";

interface ILogoProps {
	logoState: LogoState
}

@observer
class Logo extends Component<ILogoProps> {

	renderLogo() : React.ReactNode {

		let appendClass: string = "";

		if(this.props.logoState === "dimmed") {
			appendClass = this.props.logoState;
		}

		return (
			<LogoContainer>
				<StyledLogo
					className={appendClass} 
				/>
				<LogoTextContainer>
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
			</LogoContainer>
		);
	}

	render(): React.ReactNode {
		return (
			this.renderLogo()
		);
	}

}

export default Logo;