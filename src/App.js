//react router dom
import { BrowserRouter } from "react-router-dom";

//import components
import RoutesApp from "./routes/RoutesApp";

function App() {
	return (
		<BrowserRouter>
			<RoutesApp />
		</BrowserRouter>
	);
}

export default App;

