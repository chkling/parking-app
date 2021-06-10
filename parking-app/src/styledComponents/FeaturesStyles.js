import styled from "styled-components";

export const FeaturesList = styled.div`
	display: flex;
	flex-direction: column;
	// background-color: green;
	min-height: 12rem;

	h1 {
		text-transform: uppercase;
	}
`;

export const MainFeatures = styled.div`
	display: flex;
	flex-direction: row;
	// background-color: red;
	justify-content: flex-end;
	padding: 1.2rem;
	padding-right: 0.6rem;
	margin: 0.2rem 1.2rem;
	margin-right: 0.6rem;
	align-items: center;
	height: 8rem;
	text-align: right;

	// @media (min-width: 768px) {
	// 	width: 50%;
	// }
`;

export const FeatureInfo = styled.div`
	width: 70vw;
	height: 7rem;
	// background-color: yellow;

	h1 {
		font-size: 20px;
		font-weight: bolder;
		margin: 5px;
	}
	p {
		font-size: 1.2rem;
	}
	@media (min-width: 768px) {
		// width: 30%;
	}
`;

export const FeatureIcon = styled.div`
	display: flex;
	// background-color: #43b0f1;
	color: #fd7f20;
	height: 70px;
	width: 70px;
	border: 1px #fd7f20 solid;
	border-radius: 50%;
	align-items: center;
	justify-content: center;
	margin: 1rem 0rem 1.6rem 1rem;
	padding: 10px;
`;

export const MainFeaturesReverse = styled.div`
	display: flex;
	flex-direction: row;
	// background-color: red;
	justify-content: flex-start;
	padding: 1.2rem;
	padding-right: 0.6rem;
	margin: 0.2rem 1.2rem;
	margin-left: 0.6rem;
	align-items: center;
	height: 8rem;
	text-align: left;
`;

export const FeatureIconReverse = styled.div`
	display: flex;
	// background-color: #43b0f1;
	color: #fd7f20;
	height: 70px;
	width: 70px;
	border: 1px #fd7f20 solid;
	border-radius: 50%;
	align-items: center;
	justify-content: center;
	margin: 1rem 1rem 1.6rem 0rem;
	padding: 10px;
`;
