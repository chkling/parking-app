import React from "react";
import { Link } from "react-router-dom";
import { useEffect} from "react";
import { dataFromSupabase } from "../actions/supaBase";

export default function NavbarSecondary() {
useEffect(() => {
	dataFromSupabase();
}, [])

const arrayLength = async () => {
	const response = await fetch(dataFromSupabase,
		{
			headers: { Accept: "application/json" },
		}
		);
		const json = await response.json();
		console.log(json);
		arrayLength(json)
}
useEffect(() => {
	console.log(arrayLength());
}, [])

	return (
		<div>
			<h3>Become a host and join X other active renters!</h3>
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
