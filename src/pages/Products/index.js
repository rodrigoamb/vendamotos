//styles
import { ContainerProducts } from "./styles";

//components
import NavBar from "../../components/NavBar";
import Title from "../../components/Title";

//icons
import { RiMotorbikeFill } from "react-icons/ri";

//react-router-dom
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";

const Products = () => {
	const dataMotorBikes = [
		{
			image:
				"https://www3.yamaha-motor.com.br/ccstore/v1/images/?source=/file/v6796015611559629740/products/30055-30055-MTSERIES-MT03-321-ABS-CONDICAO1-YAMAHA.png&height=300&width=300",
			name: "MT-03 ABS",
			brand: "yamaha",
			engine: "321cc",
			price: "R$30.890,00",
			description:
				"A performance esportiva que você sempre buscou. Com 321 cc, desenvolve 42 cv e 3,0 kgf.m de torque. Conta com a exclusiva tecnologia DiASil que contribui para menor vibração, melhor dissipação de calor e ganho de performance. Projetado para auxiliar sua performance, o painel da MT-03 é o único da categoria que possui a luz indicativa Shift Light personalizável, que indica o melhor momento para a troca de marchas. Sua ótima posição de pilotagem, complementada pelas 7 regulagens de pré-carga na mola e a nova suspensão dianteira invertida, fazem da MT-03 a mais equilibrada street fighter para uso diário com performance e conforto. ",
		},
		{
			image:
				"https://www3.yamaha-motor.com.br/ccstore/v1/images/?source=/file/v6796015611559629740/products/30055-30055-MTSERIES-MT03-321-ABS-CONDICAO1-YAMAHA.png&height=300&width=300",
			name: "MT-03 ABS",
			brand: "yamaha",
			engine: "321cc",
			price: "R$30.890,00",
			description:
				"A performance esportiva que você sempre buscou. Com 321 cc, desenvolve 42 cv e 3,0 kgf.m de torque. Conta com a exclusiva tecnologia DiASil que contribui para menor vibração, melhor dissipação de calor e ganho de performance. Projetado para auxiliar sua performance, o painel da MT-03 é o único da categoria que possui a luz indicativa Shift Light personalizável, que indica o melhor momento para a troca de marchas. Sua ótima posição de pilotagem, complementada pelas 7 regulagens de pré-carga na mola e a nova suspensão dianteira invertida, fazem da MT-03 a mais equilibrada street fighter para uso diário com performance e conforto. ",
		},
		{
			image:
				"https://www3.yamaha-motor.com.br/ccstore/v1/images/?source=/file/v6796015611559629740/products/30055-30055-MTSERIES-MT03-321-ABS-CONDICAO1-YAMAHA.png&height=300&width=300",
			name: "MT-03 ABS",
			brand: "yamaha",
			engine: "321cc",
			price: "R$30.890,00",
			description:
				"A performance esportiva que você sempre buscou. Com 321 cc, desenvolve 42 cv e 3,0 kgf.m de torque. Conta com a exclusiva tecnologia DiASil que contribui para menor vibração, melhor dissipação de calor e ganho de performance. Projetado para auxiliar sua performance, o painel da MT-03 é o único da categoria que possui a luz indicativa Shift Light personalizável, que indica o melhor momento para a troca de marchas. Sua ótima posição de pilotagem, complementada pelas 7 regulagens de pré-carga na mola e a nova suspensão dianteira invertida, fazem da MT-03 a mais equilibrada street fighter para uso diário com performance e conforto. ",
		},
		{
			image:
				"https://www3.yamaha-motor.com.br/ccstore/v1/images/?source=/file/v6796015611559629740/products/30055-30055-MTSERIES-MT03-321-ABS-CONDICAO1-YAMAHA.png&height=300&width=300",
			name: "MT-03 ABS",
			brand: "yamaha",
			engine: "321cc",
			price: "R$30.890,00",
			description:
				"A performance esportiva que você sempre buscou. Com 321 cc, desenvolve 42 cv e 3,0 kgf.m de torque. Conta com a exclusiva tecnologia DiASil que contribui para menor vibração, melhor dissipação de calor e ganho de performance. Projetado para auxiliar sua performance, o painel da MT-03 é o único da categoria que possui a luz indicativa Shift Light personalizável, que indica o melhor momento para a troca de marchas. Sua ótima posição de pilotagem, complementada pelas 7 regulagens de pré-carga na mola e a nova suspensão dianteira invertida, fazem da MT-03 a mais equilibrada street fighter para uso diário com performance e conforto. ",
		},
	];

	return (
		<>
			<NavBar />
			<ContainerProducts>
				<div className="limit-content">
					<Title title="Lista de Motos">
						<RiMotorbikeFill className="icon-title" />
					</Title>

					{dataMotorBikes.map((item, index) => (
						<div className="container-row-list" key={index}>
							<div className="square-image">
								<img src={item.image} alt="motorbike" />
							</div>

							<div className="container-title font-bold">
								<span className="name-bike">{item.name}</span>
								<span className="brand-bike">{item.brand}</span>
							</div>

							<div>
								<span className="font-bold">Cilindradas: </span>
								{item.engine}
							</div>
							<div>
								<span className="font-bold">Preço: </span> {item.price}
							</div>

							<Link to="/" className="details-btn">
								Ver detalhes
							</Link>
						</div>
					))}
				</div>
			</ContainerProducts>
			<Footer />
		</>
	);
};

export default Products;

