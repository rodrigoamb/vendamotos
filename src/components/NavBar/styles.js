import styled from "styled-components";

import { themes } from "../../themes/colors";

export const ContainerNavBar = styled.header`
	background-color: ${themes.color.primaryColor};
	margin-bottom: 30px;

	.limit-content {
		width: 90%;
		margin: auto;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}

	img {
		width: 85px;
		margin-bottom: 20px;
	}

	nav {
		width: 40%;

		ul {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			list-style: none;

			.link-btn {
				text-decoration: none;
				color: ${themes.color.primaryText};
				background-color: ${themes.color.secondaryColor};
				padding: 10px 20px;
				border-radius: 8px;
				transition: all 0.5s;

				&:hover {
					background-color: ${themes.color.secondaryColorHover};
				}
			}
		}
	}
`;

