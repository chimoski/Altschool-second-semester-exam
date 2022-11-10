import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import People from "./pages/people";
import Person from "./pages/person";

function App() {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/login' element={<Login />}/>
				<Route path="/people" element={<People />} />
				<Route path="/people/person" element={<Person />}  />
			</Routes>
		</Router>
	);
}

export default App;
