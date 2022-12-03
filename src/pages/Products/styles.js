import styled from "styled-components";
import { themes } from "../../themes/colors";

export const ContainerProducts = styled.div`
	height: 80vh;

	.limit-content {
		margin: auto;
		width: 90%;
	}

	.container-row-list {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		background-color: #fefefe;
		margin-bottom: 15px;
		box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
		border-radius: 8px;
		padding-right: 15px;
		border-left: 15px solid ${themes.color.secondaryColor};
		font-size: 1.1rem;

		.square-image {
			background-color: #aaaaaa;

			img {
				width: 100px;
			}
		}

		.container-title {
			display: flex;
			flex-direction: column;
		}

		.details-btn {
			text-decoration: none;
			font-size: 1.1rem;
			background-color: ${themes.color.secondaryColor};
			padding: 10px 20px;
			border-radius: 8px;
			color: ${themes.color.secondaryText};
			transition: all 0.5s;

			&:hover {
				background-color: ${themes.color.secondaryColorHover};
			}
		}

		.font-bold {
			font-weight: bold;
		}
	}
`;

