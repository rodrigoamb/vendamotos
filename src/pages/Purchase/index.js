//styles
import { ContainerPurchase } from "./styles";

//components
import NavBar from "../../components/NavBar";
import Title from "../../components/Title";
import BackPage from "../../components/BackPage";
import Footer from "../../components/Footer";

//icons
import { FaMoneyBillWave } from "react-icons/fa";
import { IoRemoveCircle, IoAddCircle } from "react-icons/io5";

const Purchase = () => {
	const data = {
		image:
			"https://www3.yamaha-motor.com.br/ccstore/v1/images/?source=/file/v6796015611559629740/products/30055-30055-MTSERIES-MT03-321-ABS-CONDICAO1-YAMAHA.png&height=300&width=300",
		name: "MT-03 ABS",
		brand: "yamaha",
		engine: "321cc",
		price: "30.890,00",
		amount: 10,
		description:
			"A performance esportiva que você sempre buscou. Com 321 cc, desenvolve 42 cv e 3,0 kgf.m de torque. Conta com a exclusiva tecnologia DiASil que contribui para menor vibração, melhor dissipação de calor e ganho de performance. Projetado para auxiliar sua performance, o painel da MT-03 é o único da categoria que possui a luz indicativa Shift Light personalizável, que indica o melhor momento para a troca de marchas. Sua ótima posição de pilotagem, complementada pelas 7 regulagens de pré-carga na mola e a nova suspensão dianteira invertida, fazem da MT-03 a mais equilibrada street fighter para uso diário com performance e conforto. ",
	};

	return (
		<>
			<NavBar />
			<ContainerPurchase>
				<div className="limit-content">
					<Title title="Carrinho de compras">
						<FaMoneyBillWave className="icon-title" />
					</Title>

					<BackPage to={"/produtos/:id"} />

					<h2>Detalhes da compras:</h2>

					<div className="frame-product">
						<div className="container-img-name">
							<img className="img-bike" src={data.image} alt="motorcycle" />

							<span className="row-product">
								{data.name} - {data.brand}
							</span>
						</div>

						<div className="container-add-remove">
							<IoAddCircle className="icon-add" />
							<span>Quantidade: 01</span>
							<IoRemoveCircle className="icon-remove" />
							<button>Comprar</button>
						</div>
					</div>
				</div>
			</ContainerPurchase>

			<Footer />
		</>
	);
};

export default Purchase;

