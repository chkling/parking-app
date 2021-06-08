import React from "react";
import { Link } from "react-router-dom";

export default function NavbarSecondary() {
	return (
		<div>
			<h3>Join X other active users!</h3>
			<nav>
				<Link to="/LocateParking">Find Parking</Link>
				<Link to="/RegisterHost">Rent Out Your Space</Link>
			</nav>
			<div>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti
				atque, impedit hic quae doloremque velit beatae libero minus.
				Laudantium, iusto.
			</div>
		</div>
	);
}
