import styled from "styled-components";

export const MainNavbar = styled.div`
	display: flex;
	flex-direction: column;
`;

export const NavbarLinks = styled.nav`
	display: flex;
	flex-direction: column;
	margin: 0.3rem;
	padding: 1rem;

	a {
		text-decoration: none;
		color: #1e3d58;
		font-size: 1.5rem;
		margin: 1.2rem;
		cursor: pointer;

		&:hover {
			color: #43b0f1;
		}
	}
`;

export const SecondaryNavbar = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	margin: 10px;

	a {
		margin: 5px;
		text-decoration: none;
		color: #057dcd;
		border: 1px solid #1e3d58;
		border-radius: 10px;
		padding: 10px;

		&:hover {
			color: #43b0f1;
			border: 1px solid #057dcd;
		}
	}
`;
