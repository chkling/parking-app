// import React from "react";
// import { Link } from "react-router-dom";
// import { useEffect } from "react";
// import { dataFromSupabase } from "../actions/supaBaseData";
// import { useDispatch, useSelector } from "react-redux";
// import { GET_DATA } from "../action-types/supaBase-action-types";
// import { SecondaryNavbar } from "../styledComponents/NavbarStyles";
// import {
// 	SecondaryLandingSection,
// 	MainButtonDiv,
// } from "../styledComponents/HomeStyles";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCompass, faCar } from "@fortawesome/free-solid-svg-icons";

// const compass = <FontAwesomeIcon icon={faCompass} size="4x" />;
// const car = <FontAwesomeIcon icon={faCar} size="4x" />;

// export default function SecondaryLanding() {
// 	const dispatch = useDispatch();
// 	const supaBaseHostData = useSelector((state) => state.supaBaseHostData);

// 	useEffect(() => {
// 		const fetchData = async () => {
// 			const data = await dataFromSupabase();
// 			dispatch({
// 				type: GET_DATA,
// 				payload: data,
// 			});
// 		};
// 		fetchData();
// 	}, [dispatch]);

// 	return (
// 		<SecondaryLandingSection>
// 			<SecondaryNavbar>
// 				<Link to="/LocateParking">
// 					<MainButtonDiv>
// 						{compass}
// 						<h3>Find Parking</h3>
// 					</MainButtonDiv>
// 				</Link>
// 				<Link to="/RegisterHost">
// 					<MainButtonDiv>
// 						{car}
// 						<h3>Host Driveway</h3>
// 					</MainButtonDiv>
// 				</Link>
// 			</SecondaryNavbar>
// 			<h3>
// 				Become a host and join {supaBaseHostData.length} other active hosts!
// 			</h3>

// 			<p>
// 				Perfect for those close to popular areas where parking is becoming
// 				increasingly difficult to find. Whether it's during concerts, a night
// 				out, sporting events or more! Book immediately or ahead of time.
// 			</p>
// 		</SecondaryLandingSection>
// 	);
// }
