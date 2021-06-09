import React from "react";
import { LandingSection } from "../styledComponents/HomeStyles";
import SecondaryLanding from "./SecondaryLanding";

export default function Landing() {
	return (
		<LandingSection>
			<p>
				Rent parking in a host's driveway or rent out your driveway! Perfect for
				those close to popular areas where parking is becoming increasingly
				difficult to find during concerts, a night out, sporting events and
				more.
			</p>
			<div>
				<SecondaryLanding />
			</div>
		</LandingSection>
	);
}
