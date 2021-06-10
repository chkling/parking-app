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
		background-size: cover;
		background-position: center;
		// margin-top: -50px;
		height: 85vh;
		color: #e8eef1;

		img {
			display: none;
		}
		h3 {
			padding: 1.5rem;
			font-size: 20px;
			margin: 0;
			color: #1e3d58;
		}
	}
`;

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

	@media (min-width: 992px) {
		// border-radius: 50%;
	}
`;

export const LandingSubSection = styled.div`
	@media (min-width: 992px) {
		background-color: white;
		width: 500px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-conter: center;
		margin-left: 50px;
		border-radius: 10px;
	}

	p {
		color: #1e3d58;
	}
`;
