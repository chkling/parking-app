import styled from "styled-components";
export const HostForm = styled.form`
    display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
    
    input {
        outline: none;
        width: 200px;
    }
`

export const SignUpButton = styled.button`
	background-color: #1fd1f9;
	width: 200px;
	height: 40px;
	color: white;
	font-family: sans-serif;
	font-size: 1.1rem;
	border-radius: 17px;
	border: 0;
	cursor: pointer;
`;