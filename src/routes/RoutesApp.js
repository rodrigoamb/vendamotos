//import router dom
import { Routes, Route } from "react-router-dom";

//import components
import Login from "../pages/Login";
import Products from "../pages/Products";

const RoutesApp = () => {
	return (
		<Routes>
			<Route path="/" element={<Login />} />

			<Route path="/products" element={<Products />} />
			{/* <Route path="/products/:id" element={<Products />} />

			<Route path="/user" element={<User />} />

			<Route path="*" element={<ErrorPage />} /> */}
		</Routes>
	);
};

export default RoutesApp;

