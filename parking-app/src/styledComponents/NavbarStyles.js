import styled from "styled-components";

export const MainNavbar = styled.div`
	color: #057dcd;
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
		color: #057dcd;
		font-size: 1.5rem;
		margin: 1.2rem;
		cursor: pointer;

		&:hover {
			color: #1e3d58;
		}
	}
`;

export const SecondaryNavbar = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	margin: 10px;

	a {
		margin: 5px;
		text-decoration: none;
		color: #057dcd;
		border: 1px solid #057dcd;
		border-radius: 10px;
		padding: 10px;

		&:hover {
			color: #1e3d58;
		}
	}
`;
