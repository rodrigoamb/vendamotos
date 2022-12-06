//styles
import { ContainerSideMenu } from "./styles";

//assets
import logo from "../../assets/logomoto.png";

//icons
import { IoClose } from "react-icons/io5";

//react-router-dom
import { Link } from "react-router-dom";

//import firebase auth
import { auth } from "../../firebase/firebaseConnection";
import { signOut } from "firebase/auth";

const SideMenu = ({ setMenuIsVisible }) => {
	async function handleLogout() {
		await signOut(auth).then(() => {
			localStorage.removeItem("@detailUser");
		});
	}

	return (
		<ContainerSideMenu>
			<div className="menu">
				<IoClose
					className="icon-close"
					onClick={() => setMenuIsVisible(false)}
				/>
				<img src={logo} alt="logo" />

				<nav>
					<ul>
						<li>
							<Link
								to="/produtos"
								className="link-btn"
								onClick={() => setMenuIsVisible(false)}
							>
								Lista de Motos
							</Link>
						</li>

						<li>
							<Link
								to="/cadastro"
								className="link-btn"
								onClick={() => setMenuIsVisible(false)}
							>
								Cadastrar Moto
							</Link>
						</li>

						<li>
							<Link
								to="/vendas"
								className="link-btn"
								onClick={() => setMenuIsVisible(false)}
							>
								Vendas
							</Link>
						</li>

						<li>
							<Link
								to="/config"
								className="link-btn"
								onClick={() => setMenuIsVisible(false)}
							>
								Configurações
							</Link>
						</li>

						<li>
							<Link onClick={handleLogout} className="link-btn">
								Sair
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</ContainerSideMenu>
	);
};

export default SideMenu;

