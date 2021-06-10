import React from "react";
import { LandingSection } from "../styledComponents/HomeStyles";
import SecondaryLanding from "./SecondaryLanding";
import driveway from "../assets/images/driveway.jpg";

export default function Landing() {
	return (
		<LandingSection>
			<img
				src={driveway}
				alt="driveway"
				style={{ height: "290px", width: "350px" }}
			/>
			<SecondaryLanding />
		</LandingSection>
	);
}
