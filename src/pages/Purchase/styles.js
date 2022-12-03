import styled from "styled-components";

import { themes } from "../../themes/colors";

export const ContainerPurchase = styled.div`
	min-height: 80vh;

	.limit-content {
		width: 90%;
		margin: auto;
	}

	h2 {
		margin-bottom: 15px;
	}

	.frame-product {
		background-color: #fefefe;
		box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
		padding: 20px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		text-transform: uppercase;
		font-size: 1.5rem;
		border-radius: 10px;

		img {
			width: 100px;
			margin-right: 25px;
		}
	}

	.row-product {
		margin-right: 30px;
	}

	.container-img-name {
		display: flex;
		align-items: center;
	}

	.container-add-remove {
		display: flex;
		align-items: center;

		.icon-add {
			cursor: pointer;
			font-size: 2rem;
			color: green;
			margin-right: 10px;
		}

		span {
			font-size: 1.3rem;
			font-weight: bold;
			margin-right: 10px;
		}

		.icon-remove {
			cursor: pointer;
			font-size: 2rem;
			color: red;
			margin-right: 30px;
		}

		button {
			cursor: pointer;
			text-decoration: none;
			font-size: 1.1rem;
			background-color: ${themes.color.secondaryColor};
			padding: 10px 20px;
			border-radius: 8px;
			color: ${themes.color.secondaryText};
			transition: all 0.5s;
			border: none;
			font-weight: bold;
			box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
			margin-right: 30px;

			&:hover {
				background-color: ${themes.color.secondaryColorHover};
				color: #aaaaaa;
			}
		}
	}
`;

