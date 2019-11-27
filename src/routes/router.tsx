import * as React from "react";

import PageModal from "../components/PageModal";
import ResumePage from "../components/pages/ResumePage";

import { INavBarController } from "../interfaces/NavBarController";
import { IResumePageController } from "../interfaces/ResumePageController";

interface IRouterProps {
  navBarController: INavBarController
  resumePageController: IResumePageController
}

const routes = (props: IRouterProps) => {

  const routing = {
      "/resume": () => (
        <PageModal
          page={<ResumePage controller={props.resumePageController} />}
          controller={props.navBarController} />
      ) 
  };

  return routing;
};

export default routes;