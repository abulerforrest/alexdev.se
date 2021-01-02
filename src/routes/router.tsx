import * as React from "react";

import PageModal from "../components/PageModal";
import ResumePage from "../components/pages/ResumePage";
import SplashPage from "../components/pages/SplashPage";
import Page from "../components/pages/Page";

const routes = () => {
    return {
        "/": () => (<SplashPage/>),
        "/resume": () => (<PageModal page={<ResumePage/>}/>),
        "/disclaimer": () => (<PageModal page={<Page/>}/>),
  };
}

export default routes;