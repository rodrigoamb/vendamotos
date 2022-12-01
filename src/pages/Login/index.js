//import assets
import logo from "../../assets/logomoto.png";

//styles
import { ContainerLogin } from "./styles";

//icons
import { BsEyeSlashFill } from "react-icons/bs";
import { BsEyeFill } from "react-icons/bs";

//hooks
import { useState } from "react";

//react hook form
import { useForm } from "react-hook-form";

const Login = () => {
	const [passwordIsVisible, setPasswordIsVisible] = useState(false);
	const { register, handleSubmit } = useForm();

	const handleLogin = (data) => {
		console.log(data);
	};

	return (
		<ContainerLogin>
			<img src={logo} alt="logo motorcycle" />

			<form onSubmit={handleSubmit(handleLogin)}>
				<label>
					<span>Login:</span>
					<input type="text" name="login" {...register("login")} />
				</label>

				<label>
					<span>Senha:</span>
					<input
						type={passwordIsVisible ? "text" : "password"}
						name="password"
						{...register("password")}
					/>
					<div className="container-icon">
						{passwordIsVisible ? (
							<BsEyeFill
								className="icon-eye"
								onClick={() => setPasswordIsVisible(false)}
							/>
						) : (
							<BsEyeSlashFill
								className="icon-eye"
								onClick={() => setPasswordIsVisible(true)}
							/>
						)}
					</div>
				</label>
				<button type="submit">Entrar</button>
			</form>
		</ContainerLogin>
	);
};

export default Login;

