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
			<h3>
				Locate a hosted driveway spot on the go or put your unused driveway
				space to use!
			</h3>
			<SecondaryLanding />
		</LandingSection>
	);
}
