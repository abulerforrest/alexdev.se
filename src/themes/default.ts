import { css } from "styled-components";
import * as keyframeAnimations from "./keyframes";

export const defaultTheme = {
	// font styles and colors
	primaryColor: "#ffffff",
	primaryFont: `"Roboto", sans-serif`,
	secondaryFont: `"Volkhov", serif`,
	additionalFont: `"Montserrat", sans-serif`,
	secondaryColor: "rgba(0,212,255,1)",
	defaultOpacity: 1,
	defaultMargin: 0,
	black: "#000000",
	white: "#ffffff",

	resume: {
		zIndex: 0,
		height: "100%",
		primaryFont: `"Arial"`,
		secondaryFont: `"Nunito Sans", sans-serif`,
		altFont: `"Montserrat", sans-serif`,
		backgroundColor: "#ffffff",
		boxShadow: "0 2px 11px 2px rgba(0,0,0,0.5)",
		logoSmallSize: "70px",
		rightSideWidth: "450px",
		linkColor: "#585858",
		profilePicSize: "300px",

		palette: {
			grey: "#898989",
			greyAlt: "#707070",
			greyAlt2: "#646464",
			lightGrey: "#8c8b8b",
			bgColorGreen: "#daf5d6",
			bgColorGrey: "#e9e9e9",
			darkBlack: "#494949",
			black: "#4a4a4a",
			blackAlt: "#525252",
			blackAlt2: "#2c5a6a",
			silver: "#b6b6b6",
			blue: "#8bbad6",
			softBlue: "#99d3df",
			lightBlue: "#3a575e"
		}
	},

	// keyframe animations
	animationReveal: css`${keyframeAnimations.menuReveal} 0.5s cubic-bezier(0.250, 0.860, 0.450, 0.940) both`,
	animationCollapse: css`${keyframeAnimations.menuCollapse} 0.5s cubic-bezier(0.250, 0.860, 0.450, 0.940) both`,
	animationFocusIn: css`${keyframeAnimations.focusIn} 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both`,
	animationFocusOut: css`${keyframeAnimations.focusOut} 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both`,
	animationTextPopUp: css`${keyframeAnimations.textPopUp} 0.8s cubic-bezier(0.250, 0.860, 0.450, 0.940) both`,
	animationSlideInTop: css`${keyframeAnimations.slideInTop} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) forwards`,
	animationSlideOutTop: css`${keyframeAnimations.slideInTop} 1s reverse forwards`,
	animationBorderGrow: css`${keyframeAnimations.borderGrow} 0.2s ease-in forwards`,
	animationSpin: css`${keyframeAnimations.spin} 4s linear infinite;`,
	animationSlideInLeft: css`${keyframeAnimations.slideInLeft} 0.2s ease-in forwards;`,

	// text shadows
	primaryTextShadow: css`
		0 1px 0 rgba(73, 130, 157, 0.4),
		0 2px 0 rgba(73, 130, 157, 0.4),
		0 3px 0 rgba(73, 130, 157, 0.4),
		0 4px 0 rgba(73, 130, 157, 0.4),
		0 5px 0 rgba(73, 130, 157, 0.4),
		0 6px 0 rgba(73, 130, 157, 0.4),
		0 7px 0 rgba(73, 130, 157, 0.4),
		0 8px 0 rgba(73, 130, 157, 0.4),
		0 9px 0 rgba(73, 130, 157, 0.4)
	`,
	secondaryTextShadow: css`
		0 1px 0 rgba(173, 198, 179, 0.6),
		0 2px 0 rgba(173, 198, 179, 0.6),
		0 3px 0 rgba(173, 198, 179, 0.6),
		0 4px 0 rgba(173, 198, 179, 0.6),
		0 5px 0 rgba(173, 198, 179, 0.6),
		0 6px 0 rgba(173, 198, 179, 0.6),
		0 7px 0 rgba(173, 198, 179, 0.6),
		0 8px 0 rgba(173, 198, 179, 0.6),
		0 9px 0 rgba(173, 198, 179, 0.6);
	`,
	textShadowGlow: `
		0 0 16px rgba(255, 255, 255, 0.2),
		0 0 10px rgba(255, 255, 255, 0.2),
		0 0 3px rgba(255, 255, 255, 0.5),
		0 0 40px rgba(255, 255, 255, 0.4),
		0 0 10px rgba(255, 255, 255, 0.2),
		0 0 50px rgba(255, 255, 255, 0.2)`,

	// border styles
	borderBottomIdle: "4px solid rgba(255, 255, 255, 0.2)",
	borderBottomActive: "4px solid rgba(255, 255, 255, 0.8)",
	borderBottomIdle2: "2px solid rgba(255, 255, 255, 0.2)",
	borderBottomActive2: "2px solid rgba(255, 255, 255, 0.8)"
};