//styles
import { ContainerNavBar } from "./styles";

//assets
import logo from "../../assets/logomoto.png";

//react-router-dom
import { Link } from "react-router-dom";

//icons
import { IoMdMenu } from "react-icons/io";

//import firebase auth
import { auth } from "../../firebase/firebaseConnection";
import { signOut } from "firebase/auth";

//hooks react
import { useEffect, useState } from "react";
import SideMenu from "../SideMenu";

const NavBar = () => {
	const [email, setEmail] = useState("");
	const [menuIsVisible, setMenuIsVisible] = useState(false);

	useEffect(() => {
		const verifyUser = () => {
			const user = localStorage.getItem("@detailUser");

			if (user) {
				const userDetail = JSON.parse(user);
				setEmail(userDetail.email);
				return;
			} else {
				return;
			}
		};

		verifyUser();
	}, []);

	async function handleLogout() {
		await signOut(auth).then(() => {
			localStorage.removeItem("@detailUser");
		});
	}

	return (
		<>
			{menuIsVisible && <SideMenu setMenuIsVisible={setMenuIsVisible} />}
			<ContainerNavBar>
				<div className="limit-content">
					<Link to={"/produtos"}>
						<img src={logo} alt="logo Motorcycle" />
					</Link>

					<span>Usuário: {email}</span>

					<IoMdMenu
						className="icon-MenuBurger"
						onClick={() => setMenuIsVisible(true)}
					/>

					<nav>
						<ul>
							<li>
								<Link to="/produtos" className="link-btn">
									Lista de Motos
								</Link>
							</li>

							<li>
								<Link to="/cadastro" className="link-btn">
									Cadastrar Moto
								</Link>
							</li>

							<li>
								<Link to="/vendas" className="link-btn">
									Vendas
								</Link>
							</li>

							<li>
								<Link to="/config" className="link-btn">
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
			</ContainerNavBar>
		</>
	);
};

export default NavBar;

