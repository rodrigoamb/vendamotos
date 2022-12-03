import { Link } from "react-router-dom";

import { FiArrowLeft } from "react-icons/fi";

//styles
import { ContainerBackPage } from "./styles";

const BackPage = ({ to }) => {
	return (
		<ContainerBackPage>
			<Link to={to} className="container-backPage">
				<FiArrowLeft className="icon-arrow" />
				<span> Voltar</span>
			</Link>
		</ContainerBackPage>
	);
};

export default BackPage;

