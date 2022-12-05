import styled from "styled-components";

import { themes } from "../../themes/colors";

export const Container = styled.div`
	min-width: 100%;
	min-height: 100vh;
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-color: ${themes.color.primaryColor};
	z-index: 99;

	img {
		width: 60%;
		max-width: 180px;
	}

	.container-content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.text-loading {
		color: ${themes.color.primaryText};
		font-size: 1.5rem;
		font-weight: bold;
		margin-bottom: 5px;
	}
`;

