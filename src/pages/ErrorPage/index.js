//styles
import { ContainerErrorPage } from "./styles";

//assets
import logo from "../../assets/logomoto.png";

const ErrorPage = () => {
	return (
		<ContainerErrorPage>
			<div className="limit-content">
				<img src={logo} alt="logo" />
				<h1>Página não encontrada!</h1>
			</div>
		</ContainerErrorPage>
	);
};

export default ErrorPage;

