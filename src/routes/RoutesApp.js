//import router dom
import { Routes, Route } from "react-router-dom";

//import components/pages
import Login from "../pages/Login";
import Products from "../pages/Products";
import Details from "../pages/Details";
import Purchase from "../pages/Purchase";
import Register from "../pages/Register";

const RoutesApp = () => {
	return (
		<Routes>
			<Route path="/" element={<Login />} />

			<Route path="/produtos" element={<Products />} />
			<Route path="/produtos/:id" element={<Details />} />

			<Route path="/comprar/:id" element={<Purchase />} />

			<Route path="/cadastro" element={<Register />} />

			{/* <Route path="/user" element={<User />} />

			<Route path="*" element={<ErrorPage />} /> */}
		</Routes>
	);
};

export default RoutesApp;

