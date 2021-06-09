import React from "react";
import { HostForm, SignUpButton } from "../styledComponents/SignUpFormStyles";

export default function RegisterHost() {
	return (
		<div>
			<h1>Register</h1>
			<HostForm>
				<input type="text" placeholder="First Name" />
				<input type="text" placeholder="Last Name" />
				<input type="email" placeholder="Email Address" />
				<h3>Parking Spot Location</h3>
				<input type="text" placeholder="Street Address" />
				<input type="text" placeholder="Apt/Suite #" />
				<input type="text" placeholder="City" />
				<input type="text" placeholder="State" />
				<input type="text" placeholder="Zip Code" />
				<input type="number" placeholder="Number of Parking Spots" />
				<SignUpButton>Submit</SignUpButton>
			</HostForm>
		</div>
	);
}
