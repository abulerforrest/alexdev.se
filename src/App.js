import React from "react";

import { useRoutes } from "hookrouter";
import routes from "./routes/router";

import { defaultTheme } from "./themes/default";
import { ThemeProvider } from "styled-components";

import Top from './components/Top';
import SplashPage from "./components/pages/SplashPage";

import NavBarController from './controllers/NavBarController';

import { createGlobalStyle } from 'styled-components'

const BodyStyle = createGlobalStyle`
	body {
		background: radial-gradient(
			circle,
			rgba(2,0,36,1) 0%,
			rgba(0,223,204,1) 0%, 
			rgba(0,212,255,1) 100%
		);

		margin: 0;
		display: flex;
		overflow: hidden;
		align-content: center;
		justify-content: center;
		background-color: #99D3DF;
		-moz-osx-font-smoothing: grayscale;
		-webkit-font-smoothing: antialiased;
	}
`;

const navBarController = new NavBarController();

function App() {

	const routeResult = useRoutes(routes);

	return (
		<ThemeProvider theme={defaultTheme}>
			<div className="App">
				<BodyStyle />
				<Top
					controller={navBarController}
				/>
				{routeResult? routeResult: <SplashPage controller={navBarController} />}
			</div>
		</ThemeProvider>
	);
}

export default App;