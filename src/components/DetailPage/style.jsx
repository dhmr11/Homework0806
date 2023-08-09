import {styled} from "styled-components"

export const SearchContent = styled.div`
height: 100vh;
background-color: black;
margin-bottom: 100px;
`;
export const SearchContainer = styled.section`
background-color: black;
text-align: center;
`;

export const MovieImg = styled.img`
width: 50%;
height: 50%;
border-radius: 5px;
transition: transform 1s;
&:hover {
transform: scale(1.1);
}
`;
export const MovieTitle = styled.h1`
color: white;
font-size: 30px;
margin-top: 100px;
margin-bottom: 20px;
`;
export const MovieContent = styled.p`
color: white;
font-size: 20px;
margin-bottom: 120px;
margin: 20px 100px;
`;
