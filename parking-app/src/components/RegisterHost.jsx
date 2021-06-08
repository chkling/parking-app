import React from "react";

export default function RegisterHost() {
	return (
		<div>
			<h1>Register</h1>
			<form className="host-register">
				<input type="text" placeholder="First Name" />
				<input type="text" placeholder="Last Name" />
				<input type="email" placeholder="Email Address" />
				<h3>Location of Parking Spot</h3>
				<input type="text" placeholder="Street Address" />
				<input type="text" placeholder="Apt/Suite #" />
				<input type="text" placeholder="City" />
				<input type="text" placeholder="State" />
				<input type="text" placeholder="Zip Code" />
				<input type="number" placeholder="Number of Parking Spots" />
				<button>Submit</button>
			</form>
		</div>
	);
}
