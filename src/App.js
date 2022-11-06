import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Users from "./pages/Users";
function App() {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/layout' element={<Layout />}>
					<Route path='users' element={<Users />} />
				</Route>
			</Routes>
		</Router>
	);
}

export default App;
