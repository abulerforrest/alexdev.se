import { keyframes } from "styled-components";

export const slideInTop = keyframes`
	from {
		transform: translateY(-1000px);
		opacity: 0;
	}
	to {
		transform: translateY(0);
		opacity: 1;
	}
`;

export const slideInLeft = keyframes`
	from {
		margin-left: 0px;
	}
	to {
		margin-left: 10px;
	}
`;

export const spin = keyframes`
	from {
		-webkit-transform: rotate(0deg);
	}

	to	{
		-webkit-transform: rotate(360deg);
	}
`;

export const borderGrow = keyframes`
	from {
		width: 0%;
	}

	to {
		width: 100%;
	}
`;

export const menuReveal = keyframes`
	from {
		opacity: 0;
		transform: translateX(60%);
	}

	to {
		opacity: 1;
		text-shadow: none;
		transform: translateX(0);
	}
`;

export const menuCollapse = keyframes`
	from {
		opacity: 1;
		transform: translateX(0%);
		text-shadow: none;
		
	}
	to {
		opacity: 0;
		transform: translateX(60%);
	}
`;

export const focusIn = keyframes`
	from {
		opacity: 0.5;
		filter: blur(12px);
	}
	to {
		opacity: 0.8;
		filter: blur(0);
	}
`;

export const focusOut = keyframes`
	from {
		opacity: 0.8;
		filter: blur(0);
	}
	to {
		opacity: 0.5;
		filter: blur(12px);
	}
`;

export const textPopUp = keyframes`
	from {
		margin-top: 28px;
		text-shadow: none;
	}
	to {
		margin-top: 24px;
		text-shadow: 
			0 1px 0 #cccccc,
			0 2px 0 #cccccc,
			0 3px 0 #cccccc,
			0 4px 0 #cccccc,
			0 5px 0 #cccccc,
			0 6px 0 #cccccc,
			0 7px 0 #cccccc,
			0 8px 0 #cccccc,
			0 9px 0 #cccccc
	}
`;