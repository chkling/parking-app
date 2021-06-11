import styled from "styled-components";

export const FeaturesList = styled.div`
	display: flex;
	flex-direction: column;
	// background-color: green;
	min-height: 12rem;

	h1 {
		text-transform: uppercase;
	}

	@media (min-width: 992px) {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		place-items: center;
		height: 85vh;
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

	@media (min-width: 768px) {
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
	}

	@media (min-width: 992px) {
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
	}
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
		width: 300px;
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

	@media (min-width: 768px) {
		display: none;
	}
	@media (min-width: 992px) {
		display: flex;
	}
`;

export const FeatureIconLeft = styled.div`
	display: none;

	@media (min-width: 768px) {
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
	}
	@media (min-width: 992px) {
		display: none;
	}
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

	@media (min-width: 992px) {
		// position: relative;
		// up: 150px;
	}
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

export const MapsIMG = styled.img`
	display: none;
	height: 200px;
	width: 200px;

	@media (min-width: 992px) {
		height: 400px;
		width: 380px;
		display: flex;
		// position: relative;
		// left: 50%;
		// align-items: center;
	}
`;

export const PhoneMap = styled.img`
	@media (min-width: 992px) {
		display: none;
	}
`;

export const ColumnDiv1 = styled.div`
	// // width: 200px;
	// grid-column: 2/3;
`;
export const ColumnDiv2 = styled.div`
	// grid-column: 1/2;
	// width: 200px;
`;
export const ColumnDiv3 = styled.div`
	// grid-column: 1/2;
`;
