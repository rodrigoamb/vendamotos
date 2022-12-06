//styles
import { ContainerProducts } from "./styles";

//components
import NavBar from "../../components/NavBar";
import Title from "../../components/Title";
import Loading from "../../components/Loading";

//icons
import { RiMotorbikeFill } from "react-icons/ri";

//react-router-dom
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";

//hooks react
import { useState, useEffect } from "react";

//notification
import { toast } from "react-toastify";

const url = "http://localhost:3000/produtos";

const Products = () => {
	const [dataMotorBikes, setDataMotorBikes] = useState([]);
	const [loadingIsVisible, setLoadingIsVisible] = useState(false);

	useEffect(() => {
		const fetchData = async () => {
			setLoadingIsVisible(true);

			try {
				const res = await fetch(url);
				const data = await res.json();
				setDataMotorBikes(data);
				setLoadingIsVisible(false);
			} catch (error) {
				toast.error("Um erro aconteceu ao carregar os dados");
				console.log(error);
				setLoadingIsVisible(false);
			}
		};

		fetchData();
	}, []);

	return (
		<>
			<NavBar />
			<ContainerProducts>
				<div className="limit-content">
					<Title title="Lista de Motos">
						<RiMotorbikeFill className="icon-title" />
					</Title>

					{loadingIsVisible ? (
						<div className="container-loading">
							<Loading />
						</div>
					) : (
						dataMotorBikes?.map((item, index) => (
							<div className="container-row-list" key={index}>
								<div className="container-info">
									<div className="square-image fix-width">
										<img src={item.image} alt="motorbike" />
									</div>

									<div className="container-title font-bold fix-width">
										<span className="name-bike">{item.name}</span>
										<span className="brand-bike">{item.brand}</span>
									</div>

									<span className="font-bold fix-width">
										Cilindradas: {item.engine}cc
									</span>

									<div className="price">
										{item.price?.toLocaleString("pt-br", {
											style: "currency",
											currency: "BRL",
										})}
									</div>
								</div>

								<Link
									to={`/produtos/${item.id}`}
									className="details-btn fix-width"
								>
									Ver detalhes
								</Link>
							</div>
						))
					)}
				</div>
			</ContainerProducts>
			<Footer />
		</>
	);
};

export default Products;

