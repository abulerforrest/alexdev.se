import React from "react";
import { observer } from "mobx-react";

import Spinner from "../Spinner";
import SVGIcon from "../SVGIcon";

import styled, { CSSProperties } from "styled-components";

import { device } from "../../themes/mediaqueries";

import { isMobileDevice } from "../../internal/utils";

export enum IconTypes {
    PRINT,
    DOWNLOAD,
    S_GITHUB,
    S_LINKEDIN,
    S_SOUNDCLOUD,
    S_BANDCAMP,
    S_APPLEMUSIC,
    ICON_ARROWDOWN,
    ICON_ARROWRIGHT
}

export type SingleIconState = "default" | "loading";
export type ActionIconsState = "visible" | "hidden" | "loading";

export interface IActionIcons {
    type: IconTypes
    src: () => void
}

interface IActionIconsProps {
    spinnerColor?: string
    isLoading: boolean
    state: ActionIconsState
    icons: IActionIcons[],
    iconSize?: number | string,
    currentIcon: IconTypes
}

const ActionIcons = observer((props: IActionIconsProps) => {

    const defaultProps: Partial<IActionIconsProps> = {
        spinnerColor: "#5fbacd",
        state: "visible",
        iconSize: 30
    }

    const {
        icons,
        state,
        currentIcon,
        spinnerColor,
        isLoading,
        iconSize
    } = props;

    const actionIconsState = state? state: defaultProps.state; 

    let actionIconSize = iconSize? iconSize: defaultProps.iconSize;
    if(isMobileDevice()) actionIconSize = 20;

    const spinnerLoadColor = spinnerColor? spinnerColor: defaultProps.spinnerColor;

    let slideUpTop: any = null;

    const ControlIconsWrapper = styled.div`
        ${props => actionIconsState !== "loading"? 
            slideUpTop = props.theme.animationSlideOutTop: "none"};
        z-index: 15000;
        display: flex;
        flex-direction: row;
        align-items: space-evenly;
        top: -75px;
        width: 100px;
        position: relative;
        padding-bottom: 3px;
        animation: ${props => actionIconsState === "visible"? props.theme.animationSlideInTop: slideUpTop};
        animation-iteration: 1;
        
        &::after {
            top: 51px;
            width: 0%;
            display: block;
            position: absolute;
            z-index: 0;
            content: "";
            border-bottom: ${props => actionIconsState === "loading"? "none": "1px solid #c0e4eb"};
            animation: ${props => props.theme.animationBorderGrow};
            animation-delay: 0.5s;
        }
        @media ${device.mobileS2} {
            top: -45px;
            width: 70px;
            &::after {
                top: 41px;
            }
        }

        @media ${device.mobileS3} {
            top: -45px;
            width: 70px;
            &::after {
                top: 41px;
            }
        }

        @media ${device.mobileS} {
            top: -85px;
            width: 70px;
            &::after {
                top: 41px;
            }

        }

    `;

    const IconWrapper = styled.div`
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        width: 50px;
        height: 50px;
        cursor: pointer;
        border-radius: 50%;

        &:hover {
            background-color: #e9e9e9;
        }

    `;

		return (
			<ControlIconsWrapper>
                {icons.map(icon => {
                    let style: CSSProperties = {};

                    if(isLoading) {
                        style = {
                            backgroundColor: "#e9e9e9",
                            animation: "none",
                            pointerEvents: "none"
                        }
                    }

                    return (
                        <IconWrapper
                            key={icon.type}
                            style={style}
                            onClick={icon.src}
                        >
                        {isLoading && currentIcon === icon.type? <Spinner size={30} color={spinnerLoadColor} />:
                            <SVGIcon
                                iconType={icon.type}
                                width={actionIconSize}
                                fill="#5fbacd"
                            />}
                    </IconWrapper>
                )})}

			</ControlIconsWrapper>
		);
	}
);

export default ActionIcons;