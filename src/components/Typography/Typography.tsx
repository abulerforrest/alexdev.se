import * as React from "react";

import styled from "styled-components";
import { defaultTheme } from "../../themes/default";

const styledText = ({ className, children }: HTMLDivElement | any) => (
	<div className={className}>
        {children}
    </div>
);

const Text = styled(styledText)`
    font-weight: ${props => props.fontWeight};
    font-size: ${props => props.fontSize}px;
    color: ${props => props.theme.primaryColor};
    font-family: ${props => props.fontFamily};
    font-style: ${props => props.type === "quote"? "italic": "normal"};
`;

const renderText = (children: React.ReactNode, fontSize: number, fontFamily: string, fontWeight: string | number, type: TypographyTypes) => {
if(children) {
    return <Text
            fontSize={fontSize}
            fontFamily={fontFamily}
            fontWeight={fontWeight}
            type={type}
        >
            {children}
        </Text>;
    }
}

export type TypographyTypes = "default" | "quote";

interface TypographyProps {
    children?: React.ReactNode
    fontSize?: number
    fontFamily?: string
    fontWeight?: number | string
    type?: TypographyTypes
}

const Typography = ({
    children = null,
    fontSize = 12,
    fontFamily = defaultTheme.primaryFont,
    fontWeight = "normal",
    type = "default"

}: TypographyProps) => {

    return (
        <React.Fragment>
            {renderText(children, fontSize, fontFamily, fontWeight, type)}
        </React.Fragment>
        );
}

export default Typography;