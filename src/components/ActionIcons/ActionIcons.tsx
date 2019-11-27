import React from "react";
import { observer } from "mobx-react";

import Spinner from "../Spinner";
import SVGIcon from "../SVGIcon";

import styled, { CSSProperties } from "styled-components";

export enum ActionIconTypes {
    PRINT,
    DOWNLOAD
}

export type SingleIconState = "default" | "loading";
export type ActionIconsState = "visible" | "hidden" | "loading";

export interface IActionIcons {
    type: ActionIconTypes
    src: () => void
}

interface IActionIconsProps {
    spinnerColor?: string
    isLoadingPDF: boolean
    state: ActionIconsState
    icons: IActionIcons[],
    currentIcon: ActionIconTypes
}

const ActionIcons = observer((props: IActionIconsProps) => {

    const defaultProps: Partial<IActionIconsProps> = {
        spinnerColor: "#5fbacd",
        state: "visible"
    }

    const {
        icons,
        state,
        currentIcon,
        spinnerColor,
        isLoadingPDF
    } = props;

    const actionIconsState = state? state: defaultProps.state;
    const spinnerLoadColor = spinnerColor? spinnerColor: defaultProps.spinnerColor;

    let slideUpTop: any = null;

    const ControlIconsWrapper = styled.div`
        ${props => actionIconsState !== "loading"? 
            slideUpTop = props.theme.animationSlideOutTop: "none"};

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

                    if(isLoadingPDF === true) {
                        style = {
                            backgroundColor: "#e9e9e9",
                            animation: "none"
                        }
                    }

                    return (
                        <IconWrapper
                            key={icon.type}
                            style={style}
                            onClick={icon.src}
                        >
                        {isLoadingPDF === true && currentIcon === icon.type? <Spinner size={30} color={spinnerLoadColor} />:
                            <SVGIcon
                                iconType={icon.type}
                                width={30}
                                fill="#5fbacd"
                            />}
                    </IconWrapper>
                )})}

			</ControlIconsWrapper>
		);
	}
);

export default ActionIcons;