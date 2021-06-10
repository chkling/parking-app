import "./App.css";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import RegisterHost from "./components/RegisterHost";
import Features from "./components/Features";
import Error from "./components/Error";
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
					<Route path="/Features">
						<Features />
					</Route>
					<Route path="/RegisterHost">
						<RegisterHost />
					</Route>
					<Route path="/Error">
						<Error />
					</Route>
					<Route path="*">
						<Redirect to="/Error" />
					</Route>
				</Switch>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
