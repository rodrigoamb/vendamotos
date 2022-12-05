//import assets
import logo from "../../assets/logomoto.png";

//styles
import { ContainerLogin } from "./styles";

//icons
import { BsEyeSlashFill } from "react-icons/bs";
import { BsEyeFill } from "react-icons/bs";

//hooks
import { useState, useEffect } from "react";

//import auth
import { auth } from "../../firebase/firebaseConnection";
import { signInWithEmailAndPassword } from "firebase/auth";

//navigate
import { useNavigate } from "react-router-dom";

//import components
import LoadingScreen from "../../components/LoadingScreen";

//import toasty notification
import { toast } from "react-toastify";

const Login = () => {
	const [passwordIsVisible, setPasswordIsVisible] = useState(false);
	const [loading, setLoading] = useState(false);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const navigate = useNavigate();

	useEffect(() => {
		const verifyLogged = () => {
			const userLogged = localStorage.getItem("@detailUser");

			if (userLogged) {
				navigate("/produtos");
			}
		};
		verifyLogged();
	}, [navigate]);

	const handleSignIn = async (e) => {
		e.preventDefault();

		setLoading(true);

		if (email !== "" && password !== "") {
			await signInWithEmailAndPassword(auth, email, password)
				.then(() => {
					setLoading(false);
					navigate("/produtos");
				})
				.catch((error) => {
					setLoading(false);
					toast.warn(
						"Email ou senha não encontrado. Preencha os campos corretamente."
					);
					console.log(error);
				});
		} else {
			setEmail("");
			setPassword("");
			setLoading(false);
			toast.warn(
				"Email ou senha não encontrado. Preencha os campos corretamente."
			);
		}

		setLoading(false);
	};

	return (
		<>
			{loading && <LoadingScreen />}
			<ContainerLogin>
				<img src={logo} alt="logo motorcycle" />

				<form onSubmit={handleSignIn}>
					<label>
						<span>Login:</span>
						<input
							type="text"
							name="email"
							id="email"
							onChange={(e) => setEmail(e.target.value)}
						/>
					</label>

					<label>
						<span>Senha:</span>
						<input
							type={passwordIsVisible ? "text" : "password"}
							name="password"
							id="password"
							onChange={(e) => setPassword(e.target.value)}
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
		</>
	);
};

export default Login;

