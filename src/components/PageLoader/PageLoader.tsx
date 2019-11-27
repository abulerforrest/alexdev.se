import React from "react";
import { observer } from "mobx-react";

import styled from "styled-components";

import Spinner from "../Spinner";

const PageWrapper = styled.div`
    display: flex;
    justify-content: center;
    animation: ${props => props.theme.animationSlideInTop};
    background-image: linear-gradient(
        to right top,
        #00e9ff,
        #74ebff,
        #a8edff,
        #cff0ff,
        #00e9ff,
        #74ebff,
        #a8edff,
        #cff0ff    
    );
        height: 100%;
        width: 100vw;
`;

const SpinnerWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
`;

interface IPageLoaderProps {
    spinnerColor?: string
    spinnerSize?: number,
    isLoading?: boolean,
    children: React.ReactNode
}

const PageLoader = observer((
    {spinnerColor, spinnerSize, children, isLoading}: IPageLoaderProps) => {

    const RenderSpinner = () => (
        <SpinnerWrapper>
            <Spinner color={spinnerColor} size={spinnerSize} />
        </SpinnerWrapper>
    );
		return (
            <div>
                {isLoading? <RenderSpinner />: <PageWrapper>{children}</PageWrapper>}
            </div>
		);
	}
);

export default PageLoader;