//styles
import { ContainerNavBar } from "./styles";

//assets
import logo from "../../assets/logomoto.png";
import { Link } from "react-router-dom";

const NavBar = () => {
	const options = [
		"Lista de Motos",
		"Cadastrar Motos",
		"Configurações",
		"Sair",
	];

	return (
		<ContainerNavBar>
			<div className="limit-content">
				<Link to={"/"}>
					<img src={logo} alt="logo Motorcycle" />
				</Link>

				<nav>
					<ul>
						{options.map((item, index) => (
							<li key={index}>
								<Link className="link-btn">{item}</Link>
							</li>
						))}
					</ul>
				</nav>
			</div>
		</ContainerNavBar>
	);
};

export default NavBar;

