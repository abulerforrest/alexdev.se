import * as React from "react";

import PageModal from "../components/PageModal";
import ResumePage from "../components/pages/ResumePage";

import {
  INavBarController
} from "../interfaces/NavBarController";

interface IRouterProps {
  navBarController: INavBarController
}

const routes = (props: IRouterProps) => {

  const routing = {
      "/resume": () => (
        <PageModal
          page={<ResumePage />}
          controller={props.navBarController}
   />)
};

  return routing;
};

export default routes;