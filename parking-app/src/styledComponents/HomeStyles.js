import styled from "styled-components";

export const LandingSection = styled.div`
	background-color: #e8eef1;
	color: #1e3d58;
	min-height: 50vh;

	p {
		margin: 1.2rem;
		padding: 1.2rem;
		font-size: 1.2rem;
	}

	img {
		margin-top: 2rem;
	}

	h3 {
		margin: 1.5rem;
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
	color: #1e3d58;
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
		color: #057dcd;
	}
`;
