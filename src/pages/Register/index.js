//styles
import { ContainerRegister } from "./styles";

//react-icons
import { BsBookmarkPlus } from "react-icons/bs";

//react hook form
import { useForm } from "react-hook-form";

//notification
import { toast } from "react-toastify";

//components
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import Title from "../../components/Title";
import LoadingScreen from "../../components/LoadingScreen";

//react hooks
import { useState } from "react";

const url = "http://localhost:3000/produtos";

const Register = () => {
	const { register, handleSubmit, reset } = useForm();
	const [loadingIsVisible, setLoadingIsVisible] = useState(false);

	const fetchPost = async (data) => {
		setLoadingIsVisible(true);

		await fetch(url, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		});

		setLoadingIsVisible(false);

		toast.success("Moto adicionada com sucesso!");
	};

	const handleAddBike = (data) => {
		data.price = Number(data.price);

		fetchPost(data);
		reset();
	};

	return (
		<>
			{loadingIsVisible ? (
				<LoadingScreen />
			) : (
				<>
					<NavBar />
					<ContainerRegister>
						<div className="limit-content">
							<Title title="Cadastrar Moto">
								<BsBookmarkPlus className="icon-title" />
							</Title>
							<form onSubmit={handleSubmit(handleAddBike)}>
								<label>
									<span>Nome da moto:</span>
									<input
										type="text"
										name="name"
										{...register("name", { required: true })}
									/>
								</label>

								<label>
									<span>Marca:</span>
									<input
										type="text"
										name="brand"
										{...register("brand", { required: true })}
									/>
								</label>

								<label>
									<span>Cilindradas:</span>
									<input
										type="number"
										name="engine"
										{...register("engine", { required: true })}
									/>
								</label>

								<label>
									<span>Preço:</span>
									<input
										type="number"
										name="price"
										{...register("price", { required: true })}
									/>
								</label>

								<label>
									<span>URL da imagem:</span>
									<input
										type="text"
										name="image"
										{...register("image", { required: true })}
									/>
								</label>

								<label>
									<span>Descrição:</span>
									<textarea
										name="description"
										{...register("description", { required: true })}
									></textarea>
								</label>

								<button className="btn-register" type="submit">
									Cadastrar Moto
								</button>
							</form>
						</div>
					</ContainerRegister>
					<Footer />
				</>
			)}
		</>
	);
};

export default Register;

