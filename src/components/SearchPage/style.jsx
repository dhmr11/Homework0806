import {styled} from "styled-components"


export const SearchContent = styled.div`
height: 100vh;
background-color: black;
`;
export const SearchContainer = styled.section`
background-color: black;
width: 100%;
text-align: center;
padding: 5rem 0;
`;
export const NoResults = styled.section`
display: flex;
justify-content: center;
align-content: center;
color: #c5c5c5;
height: 100%;
padding: 8rem;
`;
export const Movie = styled.div`
flex: 1 1 auto;
display: inline-block;
padding-right: 0.5rem;
padding-bottom: 7rem;
`;

export const MovieColumnPoster = styled.div`
cursor: pointer;
transition: transform 0.3s;
-webkit-transition: transform 0.3s;
&:hover {
transform: scale(1.25);
}
`;
export const MoviePoster = styled.img`
width: 90%;
border-radius: 5px;
`;

export const NoResultTextWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
color: #c5c5c5;
height: 100%;
padding: 8rem;
`;

