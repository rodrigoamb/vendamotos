//styles
import { ContainerRegister } from "./styles";

//react-icons
import { BsBookmarkPlus } from "react-icons/bs";

//components
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import Title from "../../components/Title";

const Register = () => {
	return (
		<>
			<NavBar />
			<ContainerRegister>
				<div className="limit-content">
					<Title title="Cadastrar Moto">
						<BsBookmarkPlus className="icon-title" />
					</Title>
					<form>
						<label>
							<span>Nome da moto:</span>
							<input type="text" name="name" id="name" />
						</label>

						<label>
							<span>Marca:</span>
							<input type="text" name="brand" id="brand" />
						</label>

						<label>
							<span>Cilindradas:</span>
							<input type="text" name="engine" id="engine" />
						</label>

						<label>
							<span>Preço:</span>
							<input type="text" name="price" id="price" />
						</label>

						<label>
							<span>Quantidade:</span>
							<input type="number" name="amount" id="amount" />
						</label>

						<label>
							<span>URL da imagem:</span>
							<input type="text" name="image" id="image" />
						</label>

						<label>
							<span>Descrição:</span>
							<textarea name="description" id="description"></textarea>
						</label>

						<button className="btn-register" type="submit">
							Cadastrar Moto
						</button>
					</form>
				</div>
			</ContainerRegister>
			<Footer />
		</>
	);
};

export default Register;

