import styled from "styled-components";
import driveway from "../assets/images/driveway.jpg";

export const LandingSection = styled.div`
	background-color: #e8eef1;
	color: #1e3d58;
	min-height: 50vh;

	// @media (min-width: 768px) {
	// 	background-color: red;
	// 	height: 500px;
	// 	width: 500px;
	// }

	p {
		margin: 1.2rem;
		padding: 1.2rem;
		font-size: 1.2rem;
	}

	img {
		margin-top: 2rem;
		height: 290px;
		width: 350px;

		@media (min-width: 768px) {
			height: 580px;
			width: 700px;
		}
	}

	h3 {
		margin: 1.5rem;
	}
	@media (min-width: 992px) {
		background-image: url(${driveway});

		img {
			display: none;
		}
	}
`;

// export const SecondaryLandingSection = styled.div`
// 	background-color: #e8eef1;
// 	color: #1e3d58;
// 	min-height: 50vh;

// 	h3 {
// 		margin: 1.2rem;
// 		padding: 1.2rem;
// 		font-size: 1.2rem;
// 	}
// `;

export const MainButtonDiv = styled.div`
	color: #057dcd;
	width: 9.2rem;
	height: 9.2rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 10px;
	cursor: pointer;

	h2 {
		margin: 10px;
	}

	h3 {
		margin: 10px;
		font-size: 18px;
	}

	&:hover {
		color: #fd7f20;
	}

	@media (min-width: 768px) {
		flex-direction: row;
		justify-content: space-between;
		padding: 20px;
		width: 12.2rem;
		height: 6.2rem;
		justify-content: space-between;
	}
`;
