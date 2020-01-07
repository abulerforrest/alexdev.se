import React from "react";

import {
    useObserver
} from "mobx-react";

import styled from "styled-components";

import {
    INavBarController
} from "../../interfaces/NavBarController";

import { autorun } from "mobx";

import { storeContext } from "../../contexts";

const Root = styled.div`
    display: flex;
    width: 100vw;
    height: 100%;
    justify-content: center;
    alignItems: center;
`;

interface IPageModalProps {
    page: React.ReactNode
}

const PageModal = ({page}: IPageModalProps) => {

    const ctrl: INavBarController = React.useContext(storeContext).navBarController;

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
                    filter: "blur(9px)",
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