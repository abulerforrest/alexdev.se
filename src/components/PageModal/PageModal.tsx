import React from "react";

import {
    useObserver,
    useLocalStore
} from "mobx-react";

import styled from "styled-components";

import {
    INavBarController
} from "../../interfaces/NavBarController";

import { autorun } from "mobx";

const Root = styled.div`
    display: flex;
    width: 100vw;
    height: 100%;
    justify-content: center;
    alignItems: center;
`;

interface IPageModalProps {
    page: React.ReactNode
    controller: INavBarController
}

const PageModal = ({page, controller}: IPageModalProps) => {

	const ctrl = useLocalStore(() => (controller));

    React.useEffect(
        () => autorun(() => {

        const id = document.getElementById("page");

        if(id !== null) {
            id.click();
        }
    }));

        return useObserver(() => {
            let style = {};

            if(ctrl.values.navBarState.get() === "revealed") {
                style = {
                    filter: "blur(2px)",
                    opacity: 0.5
                }            
            }
    
            return (
                <Root id="page" style={style}>
                    {page}
                </Root>
            );
        }
    );        
}
    
export default PageModal;