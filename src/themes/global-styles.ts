import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
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
`
export default GlobalStyle;