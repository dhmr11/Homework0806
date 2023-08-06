import { styled } from "styled-components"

// banner
export const BannerContainer = styled.header`
    background-position: center;
    background-size: cover; 
    background-color: black;
    height: 500px;
    color: white;
`;

export const BannerContents = styled.div`
      margin-left: 40px;
  padding-top: 140px;
  height: 190px;
`

export const BannerTitle = styled.h1`
      font-size: 3rem;
  font-weight: 800;
  padding-bottom: 0.5rem;
`

export const BannerButton = styled.div`
    display: flex;
  flex-direction: row;
`

export const BannerPlay = styled.button`
      display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  cursor: pointer;
  outline: none;
  border: none;
  font-size: 1rem;
  font-weight: 700;
  border-radius: 0.2vw;
  padding: 0.4rem 1.8rem 0.4rem 1rem;
  margin-right: 1rem;

  &:hover{
    color: #000;
  background-color: rgba(170, 170, 170, 0.9);
  transition: all 0.2s;
  }
`

export const BannerInfo = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  cursor: pointer;
  outline: none;
  border: none;
  font-size: 1rem;
  font-weight: 700;
  border-radius: 0.2vw;
  padding: 0.4rem 1.8rem 0.4rem 1rem;
  margin-right: 1rem;
  background-color: rgba(109, 109, 110, 0.7);
  color: white;

  &:hover{
    color: white;
  background-color: rgb(74, 74, 74);
  transition: all 0.2s;
  }
`

export const BannerBtnInfo = styled.button`
    background-color: rgba(109, 109, 110, 0.7);
  color: white;

  &:hover{
    background-color: rgb(74, 74, 74);
  color: white;
  }
`

export const BannerDes = styled.h1`
      width: 45rem;
  line-height: 1.3;
  padding-top: 1rem;
  font-weight: 500;
  font-size: 1rem;
  max-width: 400px;
  height: 80px;
`

export const BannerFadeBottom = styled.div`
      height: 10.8rem;
  background-image: linear-gradient(
    180deg,
    transparent,
    rgba(37, 37, 37, 0.61),
    #111
  );
`

export const BannerPlayContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
`

export const BannerIframe = styled.iframe`
      width : 100%;
    height : 100%; 
    z-index : -1;
    
    border : none;

    &::after{
        content:"";
        position: absolute;
        top : 0;
        left : 0;
        width : 100%;
        height : 100%; 
    }
`

// row
export const RowContainer = styled.section`
    padding: 0 3%;
    color: white;
    width: 96%;
`

export const RowTitle = styled.h2`
`

export const RowPosters = styled.div`
    display: flex;
overflow-y: hidden;
overflow-x: scroll;
scroll-behavior: smooth;
/* z-index: 500; */
`

export const RowPoster = styled.img`
object-fit: contain;
width: 100%;
max-height: ${props=>props.isLarge=='true' ? '320px' : '144px'};
margin: 0.5%;
transition: transform 450ms;
border-radius: 4px;


&:hover{
    transform: scale(1.05);
}
`