import { observer } from "mobx-react";
import React, { Component } from "react";

import styled from "styled-components";

import { INavBarController } from "../../interfaces/NavBarController";

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

@observer
class PageModal extends Component<IPageModalProps> {

	componentDidMount() {
        const id = document.getElementById("page");
       
        if(id !== null) {
            id.click();
        }
    
    }

    render() {

        let style = {};

		if(this.props.controller.navBarState === "revealed") {

		 	style = {
				filter: "blur(2px)",
		 		opacity: 0.5
		 	}
		
		 }

		return (
            <Root id="page" style={style}>
                {this.props.page}
            </Root>
        );
        
        }
	};

export default PageModal;