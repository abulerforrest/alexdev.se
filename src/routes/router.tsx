import * as React from "react";

import PageModal from "../components/PageModal";
import ResumePage from "../components/pages/ResumePage";

import SplashPage from "../components/pages/SplashPage";

const routes = () => {
  const routing = {
      "/": () => (
        <SplashPage />
      ),
      "/resume": () => (
        <PageModal
          page={<ResumePage />}
   />)
}

  return routing;
}

export default routes;