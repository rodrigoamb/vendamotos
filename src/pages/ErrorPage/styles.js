import styled from "styled-components";

import { themes } from "../../themes/colors";

export const ContainerErrorPage = styled.div`
	min-height: 100vh;
	display: flex;
	align-items: center;

	.limit-content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 95%;
		margin: auto;
		max-width: 400px;
		padding: 50px;
		text-align: center;
		background-color: ${themes.color.primaryColor};
		border-radius: 10px;
	}

	img {
		width: 60%;
		max-width: 200px;
		margin-bottom: 30px;
	}

	h1 {
		color: #fff;
	}
`;

