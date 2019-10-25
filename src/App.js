import React from "react";

import { useRoutes } from "hookrouter";
import routes from "./routes/router";

import { defaultTheme } from "./themes/default";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "./themes/global-styles";

import Top from './components/Top';
import SplashPage from "./components/pages/SplashPage";

import NavBarController from './controllers/NavBarController';

const navBarController = new NavBarController();

function App() {

	const routeResult = useRoutes(routes);

	return (
		<ThemeProvider theme={defaultTheme}>
			<div className="App">
				<GlobalStyle />
				<Top
					controller={navBarController}
				/>
				{routeResult? routeResult: <SplashPage controller={navBarController} />}
			</div>
		</ThemeProvider>
	);
}

export default App;