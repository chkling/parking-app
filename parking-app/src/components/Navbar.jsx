import React from "react";
import { Link } from "react-router-dom";
import { MainNavbar } from "../styledComponents/NavbarStyles";

export default function Navbar() {
	return (
		<MainNavbar>
			<h1 className="main-title">Parking App</h1>
			<nav>
				<Link to="/">Home</Link>
				<Link to="/About">About Us</Link>
				<Link to="/RegisterHost">Rent Your Space</Link>
			</nav>
		</MainNavbar>
	);
}
