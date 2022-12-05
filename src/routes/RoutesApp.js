//import router dom
import { Routes, Route } from "react-router-dom";

//import components/pages
import Login from "../pages/Login";
import Products from "../pages/Products";
import Details from "../pages/Details";
import Purchase from "../pages/Purchase";
import Register from "../pages/Register";
import ConfigPage from "../pages/ConfigPage";
import ErrorPage from "../pages/ErrorPage";

import Private from "./Private";

const RoutesApp = () => {
	return (
		<Routes>
			<Route path="/" element={<Login />} />

			<Route
				path="/produtos"
				element={
					<Private>
						<Products />
					</Private>
				}
			/>
			<Route
				path="/produtos/:id"
				element={
					<Private>
						<Details />
					</Private>
				}
			/>

			<Route
				path="/comprar/:id"
				element={
					<Private>
						<Purchase />
					</Private>
				}
			/>

			<Route
				path="/cadastro"
				element={
					<Private>
						<Register />
					</Private>
				}
			/>

			<Route
				path="/config"
				element={
					<Private>
						<ConfigPage />
					</Private>
				}
			/>

			<Route path="*" element={<ErrorPage />} />
		</Routes>
	);
};

export default RoutesApp;

