import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
	return (
		<div>
			<h1 className="main-title">Parking App</h1>
			<nav>
				<Link to="/">Home</Link>
				<Link to="/About">About Us</Link>
				<Link to="/Host">Rent Your Space</Link>
			</nav>
		</div>
	);
}
