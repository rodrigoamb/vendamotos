import styled from "styled-components";

import { themes } from "../../themes/colors";

export const ContainerRegister = styled.div`
	.limit-content {
		margin: auto;
		width: 90%;
	}

	form {
		width: 95%;
		margin: auto;
		max-width: 600px;
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-bottom: 50px;
		margin-top: 50px;

		label {
			width: 100%;
			margin-bottom: 15px;
			display: flex;
			flex-direction: column;

			span {
				font-weight: bold;
				margin-bottom: 5px;
			}

			input {
				padding: 0 10px;
				font-size: 1.1rem;
				height: 40px;
				border: none;
				border-radius: 5px;
				box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
			}

			textarea {
				box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
				font-family: sans-serif;
				min-height: 150px;
				padding: 10px;
				font-size: 1.1rem;
				resize: none;
				border: none;
				border-radius: 5px;
				margin-bottom: 30px;
			}
		}

		.btn-register {
			cursor: pointer;
			text-decoration: none;
			font-size: 1.1rem;
			background-color: ${themes.color.secondaryColor};
			padding: 10px 20px;
			border-radius: 8px;
			color: ${themes.color.secondaryText};
			transition: all 0.5s;
			border: none;

			&:hover {
				background-color: ${themes.color.secondaryColorHover};
			}
		}
	}
`;

