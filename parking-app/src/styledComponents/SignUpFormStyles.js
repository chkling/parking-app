import styled from "styled-components";
export const HostForm = styled.form`
	display: grid;
	place-items: center;
	justify-content: center;

	input {
		outline: none;
		width: 200px;
	}

	h3 {
		margin: 10px;
	}
`;

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

export const SignUpFormInput = styled.input`
	height: 2.2rem;
	width: 9rem;
	border-radius: 16px;
	padding-left: 20px;
	margin-bottom: 1rem;
	outline: none;
`;
