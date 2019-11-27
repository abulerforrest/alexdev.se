import * as React from "react";
import { observer } from "mobx-react";

import styled from "styled-components";

const customSpinner = ({ className }: any) => (
	<div className={className} />
);

const StyledSpinner = styled(customSpinner)`
    border-radius: 50%;
    display: flex;
    width: ${props => props.size}px;
    height: ${props => props.size}px;
    border: 3px solid rgba(255,255,255,.7);
    border-top-color: ${props => props.color};
    animation: ${props => props.theme.animationSpin}
    box-sizing: border-box;
`;

interface ISpinnerProps {
    color?: string
    size?: number
}

const Spinner = observer(({color, size}: ISpinnerProps) => {

    const defaultProps: Partial<ISpinnerProps> = {
        color: "#000",
        size: 20
    }
        
    return (
        <StyledSpinner
            color={color? color: defaultProps.color}
            size={size? size: defaultProps.size}
        />
    );
});

export default Spinner;