//styles
import { ContainerDetails } from "./styles";

//components
import NavBar from "../../components/NavBar";
import Title from "../../components/Title";

//icons
import { RiMotorbikeFill } from "react-icons/ri";
import { FiArrowLeft } from "react-icons/fi";

//react-router-dom
import { Link } from "react-router-dom";

const Details = () => {
	const data = {
		image:
			"https://www3.yamaha-motor.com.br/ccstore/v1/images/?source=/file/v6796015611559629740/products/30055-30055-MTSERIES-MT03-321-ABS-CONDICAO1-YAMAHA.png&height=300&width=300",
		name: "MT-03 ABS",
		brand: "yamaha",
		engine: "321cc",
		price: "R$30.890,00",
		amount: 10,
		description:
			"A performance esportiva que você sempre buscou. Com 321 cc, desenvolve 42 cv e 3,0 kgf.m de torque. Conta com a exclusiva tecnologia DiASil que contribui para menor vibração, melhor dissipação de calor e ganho de performance. Projetado para auxiliar sua performance, o painel da MT-03 é o único da categoria que possui a luz indicativa Shift Light personalizável, que indica o melhor momento para a troca de marchas. Sua ótima posição de pilotagem, complementada pelas 7 regulagens de pré-carga na mola e a nova suspensão dianteira invertida, fazem da MT-03 a mais equilibrada street fighter para uso diário com performance e conforto. ",
	};

	return (
		<>
			<NavBar />
			<ContainerDetails>
				<div className="limit-content">
					<Title title="Detalhes do produto">
						<RiMotorbikeFill className="icon-title" />
					</Title>

					<Link to="/products" className="container-backPage">
						<FiArrowLeft className="icon-arrow" />
						<span> Voltar</span>
					</Link>

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
							<div>Quantidade em estoque: {data.amount}</div>
							<button className="buy-btn">Avançar para compra</button>
						</div>
					</div>
				</div>
			</ContainerDetails>
		</>
	);
};

export default Details;

