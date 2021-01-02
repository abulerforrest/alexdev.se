import * as React from "react";

import styled from "styled-components";

import SVGIcon from "../SVGIcon";

import { IconTypes } from "../ActionIcons";

const Root = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 400px;
    margin-top: 40px;
    cursor: pointer;
    &.dimmed {
        animation: ${props => props.theme.animationFocusOut};
    }
`;

const StyledSVG = styled(SVGIcon)`
    &:hover {
        opacity: 0.7;
    }
`;

interface ISocialIconProps {
    type: IconTypes
    href: string
}

interface ISocialIconsProps {
    color?: string
    size?: number,
    icon: ISocialIconProps[]
    dimmed: boolean
}

const openLink = (href: string) => {
    const win: Window | null = window.open(href, '_blank');
    if (win != null) {
        win.focus();
        win.opener = null;
    }
};

const SocialIcons = ({color, size, icon, dimmed}: ISocialIconsProps) => {        

    let appendClass: string = "";

    if(dimmed) {
        appendClass = "dimmed";
    }

    return (
        <Root className={appendClass}>
            {icon.map(icon => (
                <StyledSVG
                    key={icon.type}
                    iconType={icon.type}
                    fill={color}
                    width={size}
                    height={size}
                    onClick={() => openLink(icon.href)}
                />
            ))}
        </Root>
    );
};

export default SocialIcons;