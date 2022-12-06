import styled from "styled-components";
import { themes } from "../../themes/colors";

export const ContainerProducts = styled.div`
	padding-bottom: 180px;

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

		.container-info {
			display: flex;
			flex-direction: row;
			align-items: center;
		}

		.square-image {
			background-color: #aaaaaa;

			img {
				width: 100px;
				height: 100px;
				object-fit: contain;
			}
		}

		.container-title {
			display: flex;
			flex-direction: column;
			text-transform: uppercase;
			width: 150px;
			margin-left: 30px;
			margin-right: 30px;
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

		.fix-width {
		}
	}

	.price {
		background-color: #000;
		color: #fff;
		width: 200px;
		padding: 10px 20px;
		border-radius: 8px;
		text-align: center;
		margin-left: 30px;
	}

	.container-loading {
		display: flex;
		align-items: center;
		justify-content: center;
		max-width: 150px;
		margin: auto;
		background-color: ${themes.color.primaryColor};
		border-radius: 10px;
		padding: 30px;
	}

	@media (max-width: 1000px) {
		.container-row-list {
			flex-direction: column;
			border: 3px solid ${themes.color.secondaryColor};
			padding: 30px;
			text-align: center;

			.container-info {
				flex-direction: column;
				flex-wrap: nowrap;
			}

			.square-image {
				background-color: #aaaaaa;

				img {
					width: 270px;
					height: 270px;
					object-fit: contain;
				}
			}

			.price {
				margin-left: 0px;
				margin: 10px 0px;
			}
		}
	}
`;

