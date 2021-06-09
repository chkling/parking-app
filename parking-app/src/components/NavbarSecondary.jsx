import React from "react";
import { Link } from "react-router-dom";
import { useEffect} from "react";
import { dataFromSupabase } from "../actions/supaBaseData";
import { useDispatch, useSelector } from "react-redux"
import { GET_DATA } from "../action-types/supaBase-action-types";


export default function NavbarSecondary() {
	const dispatch = useDispatch();
	const supaBaseHostData = useSelector(state => state.supaBaseHostData)

	useEffect(() =>  { 
		const fetchData = async () => {
			const data = await dataFromSupabase();
			dispatch({
			type: GET_DATA,
			payload: data
		})
		}		
		fetchData();
	}, [])


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
