//import router dom
import { Routes, Route } from "react-router-dom";

//import components/pages
import Login from "../pages/Login";
import Products from "../pages/Products";
import Details from "../pages/Details";

const RoutesApp = () => {
	return (
		<Routes>
			<Route path="/" element={<Login />} />

			<Route path="/products" element={<Products />} />
			<Route path="/products/:id" element={<Details />} />

			{/* <Route path="/user" element={<User />} />

			<Route path="*" element={<ErrorPage />} /> */}
		</Routes>
	);
};

export default RoutesApp;

