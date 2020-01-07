import React from "react";

import { useRoutes } from "hookrouter";

import routes from "./routes/router";

import { defaultTheme } from "./themes/default";

import { ThemeProvider } from "styled-components";

import GlobalStyle from "./themes/global-styles";

import Top from "./components/Top";

import PageNotFound from "./components/pages/404";

import {
	StoreProvider
} from "./contexts";

import { errorQuotes } from "./internal/quotes";

const App: React.FC = () => {

	const routeResult = useRoutes(routes());

	const randomQuote = errorQuotes[Math.floor(Math.random() * errorQuotes.length)];

	return (
			<StoreProvider>
				<ThemeProvider theme={defaultTheme}>
					<div className="App">
						<GlobalStyle />
						<Top />
						{routeResult || <PageNotFound
											errorMsg="Page not found"
											errorQuote={randomQuote}
										/>
						}
					</div>
				</ThemeProvider>
			</StoreProvider>
	);
}

export default App;