//styles
import { ContainerDetails } from "./styles";

//components
import NavBar from "../../components/NavBar";
import Title from "../../components/Title";
import BackPage from "../../components/BackPage";
import LoadingScreen from "../../components/LoadingScreen";

//icons
import { RiMotorbikeFill } from "react-icons/ri";
import Footer from "../../components/Footer";

//react hooks
import { useEffect, useState } from "react";

//react-router-dom
import { useParams } from "react-router-dom";

//notification
import { toast } from "react-toastify";

const url = "http://localhost:3000/produtos";

const urlSale = "http://localhost:3000/vendas";

const Details = () => {
	const { id } = useParams();

	const [data, setData] = useState([]);

	const [loadingIsVisible, setLoadingIsVisible] = useState(false);

	const [client, setClient] = useState("");
	const [date, setDate] = useState("");

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await fetch(url + `/${id}`);
				const dataJson = await res.json();
				setData(dataJson);
			} catch (error) {
				toast.error("Um erro aconteceu ao carregar os dados");
				console.log(error);
			}
		};

		fetchData();
	}, [id]);

	const fetchPostSale = async (data) => {
		setLoadingIsVisible(true);

		await fetch(urlSale, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		});

		setLoadingIsVisible(false);

		setDate("");
		setClient("");

		toast.success("Venda realizada com sucesso!");
	};

	const handleAddSale = (e) => {
		e.preventDefault();

		if (client === "" || date === "") {
			toast.warn("Todos os dados devem ser preenchidos para efetuar a compra.");
			return;
		}

		const dataSale = {
			image: data.image,
			name: data.name,
			brand: data.brand,
			engine: data.engine,
			date: date,
			client: client,
		};

		fetchPostSale(dataSale);
	};

	return (
		<>
			{loadingIsVisible ? (
				<LoadingScreen />
			) : (
				<>
					<NavBar />

					<ContainerDetails>
						<div className="limit-content">
							<Title title="Detalhes do produto">
								<RiMotorbikeFill className="icon-title" />
							</Title>

							<BackPage to="/produtos" />

							<div className="container-details">
								<h2>
									{data.name} - {data.brand}
								</h2>

								<div className="container-info">
									<img src={data.image} alt="motorcycle" />
									<p>{data.description}</p>
								</div>

								<div className="container-engine-amount">
									<div>Cilindradas: {data.engine}cc</div>

									<div className="price">
										{data.price?.toLocaleString("pt-br", {
											style: "currency",
											currency: "BRL",
										})}
									</div>

									<form onSubmit={handleAddSale}>
										<label>
											<span>Nome do comprador:</span>
											<input
												type="text"
												name="name"
												id="name"
												value={client}
												onChange={(e) => setClient(e.target.value)}
											/>
										</label>

										<label>
											<span>Data da compra:</span>
											<input
												type="date"
												name="date"
												id="date"
												value={date}
												onChange={(e) => setDate(e.target.value)}
											/>
										</label>

										<button type="submit" className="buy-btn">
											Comprar
										</button>
									</form>
								</div>
							</div>
						</div>
					</ContainerDetails>

					<Footer />
				</>
			)}
		</>
	);
};

export default Details;

