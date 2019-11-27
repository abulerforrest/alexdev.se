import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
	body {
		background: radial-gradient(
			circle,
			rgba(2,0,36,1) 0%,
			rgba(0,223,204,1) 0%, 
			rgba(0,212,255,1) 100%
		);
		overflow-y: scroll;
		overflow-x: hidden;
		scroll-behavior: smooth;
		margin: 0;
		display: flex;
		align-content: center;
		justify-content: center;
		background-color: #99D3DF;
		-moz-osx-font-smoothing: grayscale;
		-webkit-font-smoothing: antialiased;
	}

	::-webkit-scrollbar {
		-webkit-appearance: none;
		width: 10px;
    }

    ::-webkit-scrollbar-thumb {
		border-radius: 5px;
		background-color: #3da9bc;
		-webkit-box-shadow: 0 0 1px rgba(255,255,255,.5);
    }
`;
export default GlobalStyle;