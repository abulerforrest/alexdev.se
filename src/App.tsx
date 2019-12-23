import React from "react";

import { useRoutes } from "hookrouter";
import routes from "./routes/router";

import { defaultTheme } from "./themes/default";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "./themes/global-styles";

import Top from "./components/Top";
import SplashPage from "./components/pages/SplashPage";

import NavBarController from "./controllers/NavBarController";

import StoreProvider from './contexts';

const navBarController = NavBarController();

const App: React.FC = () => {

	const routeResult = useRoutes(routes({navBarController}));

	return (
		<StoreProvider>
			<ThemeProvider theme={defaultTheme}>
				<div className="App">
					<GlobalStyle />
					<Top
						controller={navBarController}
					/>
					{routeResult? routeResult: <SplashPage controller={navBarController} />}
				</div>
			</ThemeProvider>
		</StoreProvider>
	);
}

export default App;