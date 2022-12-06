import styled from "styled-components";

import { themes } from "../../themes/colors";

export const ContainerSideMenu = styled.div`
	position: fixed;
	width: 100%;
	min-height: 100vh;
	top: 0;
	bottom: 0;
	right: 0;
	left: 0;
	background-color: rgba(0, 0, 0, 0.9);
	backdrop-filter: blur(5px);
	color: white;

	.menu {
		width: 95%;
		max-width: 400px;
		min-height: 100vh;
		background-color: ${themes.color.primaryColor};
		display: flex;
		flex-direction: column;
		align-items: center;
		padding-top: 30px;
		position: relative;
	}

	.icon-close {
		position: absolute;
		right: 10px;
		font-size: 2.8rem;
	}

	img {
		width: 50%;
		margin-top: 40px;
		margin-bottom: 40px;
	}

	nav {
		ul {
			width: 100%;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			list-style: none;

			li {
				width: 100%;
				text-align: center;
				margin-bottom: 50px;
			}

			.link-btn {
				display: block;
				width: 100%;
				padding: 10px 20px;
				text-decoration: none;
				color: ${themes.color.primaryText};
				background-color: ${themes.color.secondaryColor};
				border-radius: 8px;

				transition: all 0.5s;

				&:hover {
					background-color: ${themes.color.secondaryColorHover};
				}
			}
		}
	}
`;

