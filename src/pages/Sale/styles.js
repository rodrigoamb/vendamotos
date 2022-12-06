import styled from "styled-components";

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

		text-transform: uppercase;
		font-size: 1.1rem;
		border-radius: 10px;
		margin-bottom: 30px;

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

	@media (max-width: 500px) {
		.container-img-name {
			margin-bottom: 15px;
		}

		.frame-product {
			flex-direction: column;
		}
	}
`;

