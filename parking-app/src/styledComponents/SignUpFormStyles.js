import styled from "styled-components";

export const RegisterDiv = styled.div`
	h1 {
		margin: 2rem;
	}
`;

export const HostForm = styled.form`
	display: grid;
	place-items: center;
	justify-content: center;

	input {
		outline: none;
		width: 200px;
	}

	h1 {
		margin: 2rem;
	}

	h3 {
		margin: 2rem;
	}
`;

export const SignUpFormInput = styled.input`
	height: 2.2rem;
	width: 9rem;
	border-radius: 3px;
	padding-left: 20px;
	margin-bottom: 1rem;
	outline: none;
`;

export const SignUpButton = styled.button`
	background-color: #057dcd;
	width: 160px;
	height: 40px;
	color: #e8eef1;
	font-family: sans-serif;
	font-size: 1.1rem;
	border-radius: 3px;
	border: 0;
	cursor: pointer;
`;
