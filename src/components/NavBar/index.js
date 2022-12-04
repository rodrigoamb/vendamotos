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

	const to = ["/produtos", "/cadastro", "/config", "/"];

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
								<Link to={to[index]} className="link-btn">
									{item}
								</Link>
							</li>
						))}
					</ul>
				</nav>
			</div>
		</ContainerNavBar>
	);
};

export default NavBar;

