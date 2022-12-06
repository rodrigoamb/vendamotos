//styles
import { ContainerConfigPage } from "./styles";

//react-icons
import { RxGear } from "react-icons/rx";

//components
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import Title from "../../components/Title";

//react hooks
import { useState, useEffect } from "react";

const ConfigPage = () => {
	const [email, setEmail] = useState("");
	const [uid, setUid] = useState("");

	useEffect(() => {
		const verifyUser = () => {
			const user = localStorage.getItem("@detailUser");

			if (user) {
				const userDetail = JSON.parse(user);
				setEmail(userDetail.email);
				setUid(userDetail.uid);
				return;
			} else {
				return;
			}
		};

		verifyUser();
	}, []);

	return (
		<>
			<NavBar />
			<ContainerConfigPage>
				<div className="limit-content">
					<Title title="Configuração do usuário">
						<RxGear className="icon-title" />
					</Title>

					<div className="container-info-user">
						<span>Usuário: {email}</span>
						<span>Uid: {uid}</span>
					</div>
				</div>
			</ContainerConfigPage>
			<Footer />
		</>
	);
};

export default ConfigPage;

