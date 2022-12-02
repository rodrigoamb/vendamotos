//styles
import { ContainerTitle } from "./styles";

const Title = ({ children, title }) => {
	return (
		<ContainerTitle>
			{children}
			<h1>{title}</h1>
		</ContainerTitle>
	);
};

export default Title;

