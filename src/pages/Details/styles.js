import styled from "styled-components";

import { themes } from "../../themes/colors";

export const ContainerDetails = styled.div`
	margin-bottom: 50px;

	.limit-content {
		margin: auto;
		width: 90%;
	}

	.container-details {
		background-color: #efefef;
		border-radius: 10px;
		padding: 30px;
		box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);

		h2 {
			text-transform: uppercase;
			font-size: 2rem;
			margin-bottom: 25px;
		}
	}

	.container-info {
		display: flex;
		flex-direction: row;
		align-items: center;
		margin-bottom: 50px;

		img {
			width: 300px;
			height: 300px;
			object-fit: contain;
			margin-right: 30px;
		}

		p {
			font-size: 1.1rem;
			max-width: 450px;
		}
	}

	.container-engine-amount {
		div {
			font-size: 1.2rem;
			margin-bottom: 15px;
			font-weight: bold;
		}

		.buy-btn {
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
			max-width: 350px;

			&:hover {
				background-color: ${themes.color.secondaryColorHover};
				color: #aaaaaa;
			}
		}
	}

	.price {
		width: 90%;
		background-color: #000;
		color: #fff;
		max-width: 200px;
		text-align: center;
		padding: 10px 20px;
		border-radius: 8px;
	}

	form {
		display: flex;
		flex-direction: column;

		label {
			display: flex;
			flex-direction: column;
			margin-bottom: 20px;
		}

		input {
			font-size: 1.1rem;
			width: 90%;
			max-width: 350px;
			border: none;
			height: 35px;
			border-radius: 8px;
			padding: 5px 10px;
			box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
		}
	}
`;

