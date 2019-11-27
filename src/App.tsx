import React from "react";

import { useRoutes } from "hookrouter";
import routes from "./routes/router";

import { defaultTheme } from "./themes/default";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "./themes/global-styles";

import Top from './components/Top';
import SplashPage from "./components/pages/SplashPage";

import NavBarController from './controllers/NavBarController';
import ResumePageController from "./controllers/ResumePageController";
import { RootStore } from "./stores/RootStore";

import { IServices } from './services/createServices';
import { PDFService } from "./services/PDFService";

const services : IServices = {
	pdfService: new PDFService()
}

const rootStore = new RootStore(services);

const navBarController = new NavBarController();
const resumePageController = new ResumePageController(rootStore);

function App() {

	const routeResult = useRoutes(routes({navBarController: navBarController, resumePageController: resumePageController}));

	return (
		<ThemeProvider theme={defaultTheme}>
			<div className="App">
				<GlobalStyle />
				<Top
					controller={navBarController}
					parentController={resumePageController}
				/>
				{routeResult? routeResult: <SplashPage controller={navBarController} />}
			</div>
		</ThemeProvider>
	);
}

export default App;