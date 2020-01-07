import * as React from "react";

import styled from "styled-components";
import { defaultTheme } from "../../themes/default";

const styledText = ({ className, children }: HTMLDivElement | any) => (
	<div className={className}>
        {children}
    </div>
);

const Text = styled(styledText)`
    display: flex;
    font-weight: ${props => props.fontWeight};
    font-size: ${props => props.fontSize}px;
    color: ${props => props.theme.primaryColor};
    font-family: ${props => props.fontFamily};
    font-style: ${props => props.type === "quote"? "italic": "normal"};
`;

const renderText = (msg: string, fontSize: number, fontFamily: string, fontWeight: string | number, type: TypographyTypes) => {
if(msg) {
    return (
        <Text
            fontSize={fontSize}
            fontFamily={fontFamily}
            fontWeight={fontWeight}
            type={type}
        >
            {msg}
        </Text>
    );
    } 
}

export type TypographyTypes = "default" | "quote";

interface TypographyProps {
    msg: string
    fontSize?: number
    fontFamily?: string
    fontWeight?: number | string
    type?: TypographyTypes
}

const Typography = ({
    msg = "",
    fontSize = 12,
    fontFamily = defaultTheme.primaryFont,
    fontWeight = "normal",
    type = "default"

}: TypographyProps) => {
    return (<div>
        {renderText(msg, fontSize, fontFamily, fontWeight, type)}
    </div>
        );
}

export default Typography;