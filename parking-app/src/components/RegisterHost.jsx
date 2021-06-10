import React from "react";
import {
	HostForm,
	SignUpButton,
	SignUpFormInput,
	RegisterDiv,
} from "../styledComponents/SignUpFormStyles";

export default function RegisterHost() {
	return (
		<RegisterDiv>
			<h1>Register to Host Now</h1>
			<HostForm>
				<SignUpFormInput type="text" placeholder="First Name" />
				<SignUpFormInput type="text" placeholder="Last Name" />
				<SignUpFormInput type="email" placeholder="Email Address" />
				<SignUpFormInput type="email" placeholder="Re-Type Email Address" />
				<SignUpFormInput type="password" placeholder="Password" />
				<SignUpFormInput type="password" placeholder="Re-Type Password" />
				<h3>Parking Spot Location</h3>
				<SignUpFormInput type="text" placeholder="Street Address" />
				<SignUpFormInput type="text" placeholder="Apt/Suite #" />
				<SignUpFormInput type="text" placeholder="City" />
				<SignUpFormInput type="text" placeholder="State" />
				<SignUpFormInput type="text" placeholder="Zip Code" />
				<SignUpFormInput type="number" placeholder="Number of Parking Spots" />
				<SignUpButton>Submit</SignUpButton>
			</HostForm>
		</RegisterDiv>
	);
}
