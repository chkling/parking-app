import styled from "styled-components";

export const MainNavbar = styled.div`
    color: #057DCD;
    display: flex;
    flex-direction: column;
    margin: 1.2rem;
`;

export const NavbarLinks = styled.nav`
    color: #057DCD;
    display: flex;
    flex-direction: column;
    margin: 1.2rem;
    padding: 1rem;

    a {
        text-decoration: none;
        color: #057DCD;
        font-size: 1.5rem;
        margin: 0.7rem;
        cursor: pointer;

        &:hover {
            border-bottom: 1px green solid;
        }
    }
`;

export const SecondaryNavbar = styled.div`
    color: blue;
    display: flex;
    flex-direction: column;

    a {
        margin: 5px;
        text-decoration: none;
        color: lightblue;
    }
`;
