//styles
import { ContainerDetails } from "./styles";

//components
import NavBar from "../../components/NavBar";
import Title from "../../components/Title";
import BackPage from "../../components/BackPage";

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

const Details = () => {
	const { id } = useParams();

	const [data, setData] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await fetch(url + `/${id}`);
				const data = await res.json();
				setData(data);
			} catch (error) {
				toast.error("Um erro aconteceu ao carregar os dados");
				console.log(error);
			}
		};

		fetchData();
	}, [id]);

	return (
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
							<div>Cilindradas: {data.engine}</div>
							<button className="buy-btn">Comprar</button>
						</div>
					</div>
				</div>
			</ContainerDetails>

			<Footer />
		</>
	);
};

export default Details;

