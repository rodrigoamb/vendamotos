import styled from "styled-components";
import { themes } from "../../themes/colors";

export const ContainerLogin = styled.div`
	background-color: ${themes.color.primaryColor};
	width: 90%;
	margin: auto;
	max-width: 500px;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 80px;
	border-radius: 8px;
	box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);

	img {
		width: 50%;
		max-width: 200px;
	}

	form {
		display: flex;
		flex-direction: column;
		margin-bottom: 3rem;
		width: 80%;

		label {
			display: flex;
			flex-direction: column;
			color: ${themes.color.primaryText};
			margin-bottom: 1rem;
			position: relative;

			span {
				margin-bottom: 0.3rem;
			}

			input {
				padding: 5px 10px;
				font-size: 1.1rem;
				border: none;
				height: 2.2rem;
				border-radius: 5px;
			}
		}

		button {
			background-color: ${themes.color.secondaryColor};
			font-size: 1.1rem;
			border: none;
			width: 55%;
			margin: auto;
			padding: 5px 10px;
			border-radius: 5px;
			font-weight: bold;
			color: ${themes.color.primaryText};
			transition: all 0.5s;

			&:hover {
				background-color: ${themes.color.secondaryColorHover};
				cursor: pointer;
			}
		}
	}

	.container-icon {
		text-align: end;
		position: absolute;
		width: 100%;
		top: 28px;
		padding-right: 10px;

		.icon-eye {
			color: #555;
			font-size: 1.5rem;
			top: 28px;
			left: 80px;
			cursor: pointer;
		}
	}
`;

