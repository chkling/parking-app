import "./App.css";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import RegisterHost from "./components/RegisterHost";
import About from "./components/About";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";

function App() {
	return (
		<div className="App">
			<Router>
				<Navbar />
				<Switch>
					<Route exact path="/">
						<Landing />
					</Route>
					<Route path="/About">
						<About />
					</Route>
					<Route path="/RegisterHost">
						<RegisterHost />
					</Route>
					<Route path="*">
						<Redirect to="/" />
					</Route>
				</Switch>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
