import React from "react";
import { Link } from "react-router-dom";
import { useEffect} from "react";
import { dataFromSupabase } from "../actions/supaBaseData";
import { useDispatch, useSelector } from "react-redux"


export default function NavbarSecondary() {
	const dispatch = useDispatch();
	const supaBaseHostData = useSelector(state => state.supaBaseHostData)

	console.log(supaBaseHostData)

	// useEffect(() => {
	// 	dataFromSupabase(dispatch);
	// }, [dispatch])


	return (
		<div>
			<h3>Become a host and join {supaBaseHostData.length} other active hosts!</h3>
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
