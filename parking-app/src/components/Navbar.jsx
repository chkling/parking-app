import React from "react";
import { Link } from "react-router-dom";
import { MainNavbar, NavbarLinks } from "../styledComponents/NavbarStyles";

export default function Navbar() {
	return (
		<MainNavbar>
			<Link
				style={{
					textTransform: "uppercase",
					textDecoration: "none",
					color: "#E8EEF1",
					fontSize: "2.2rem",
					backgroundColor: "#1E3D58",
					alignItems: "center",
					padding: "1.2rem",
					display: "flex",
					justifyContent: "center",
					width: "100%",
				}}
				to="/"
			>
				Parking Pal
			</Link>
			<NavbarLinks>
				<Link to="/">Home</Link>
				<Link to="/Features">Features</Link>
				<Link to="/RegisterHost">Host</Link>
			</NavbarLinks>
		</MainNavbar>
	);
}
