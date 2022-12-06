//styles
import { ContainerPurchase } from "./styles";

//components
import NavBar from "../../components/NavBar";
import Title from "../../components/Title";
import BackPage from "../../components/BackPage";
import Footer from "../../components/Footer";
import LoadingScreen from "../../components/LoadingScreen";

//icons
import { FaMoneyBillWave } from "react-icons/fa";

//react hooks
import { useState, useEffect } from "react";

//notification
import { toast } from "react-toastify";

const url = "http://localhost:3000/vendas";

const Sale = () => {
	const [data, setData] = useState([]);
	const [loadingIsVisible, setLoadingIsVisible] = useState(false);

	useEffect(() => {
		const fetchData = async () => {
			setLoadingIsVisible(true);

			try {
				const res = await fetch(url);
				const dataSales = await res.json();
				setData(dataSales);
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
			{loadingIsVisible ? (
				<LoadingScreen />
			) : (
				<>
					<NavBar />
					<ContainerPurchase>
						<div className="limit-content">
							<Title title="Vendas">
								<FaMoneyBillWave className="icon-title" />
							</Title>

							<BackPage to={"/produtos/"} />

							<h2>Detalhes de vendas:</h2>

							{data?.map((item) => (
								<div className="frame-product" key={item.id}>
									<div className="container-img-name">
										<img
											className="img-bike"
											src={item.image}
											alt="motorcycle"
										/>

										<span className="row-product">
											{item.name} - {item.brand} - {item.engine}
										</span>
									</div>

									<div>
										Vendida em: {item.date.split("-").reverse().join("/")} -
										Cliente: {item.client}{" "}
									</div>
								</div>
							))}
						</div>
					</ContainerPurchase>

					<Footer />
				</>
			)}
		</>
	);
};

export default Sale;

