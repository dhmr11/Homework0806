import styled, { keyframes } from 'styled-components';

// nav
export const Container = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  height: 30px;
  z-index: 1;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition-timing-function: ease-in;
  transition: all 0.5s;
  background-color: ${props => props.show == 'true' ? '#111' : null};
`

export const LogoImg = styled.img`
  left: 40px;
  width: 80px;
  object-fit: contain;
  cursor: pointer;
`

export const UserImg = styled.img`
  position: fixed;
  right: 40px;
  width: 30px;
  object-fit: contain;
`

// footer

export const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 0;
  border-top: 1px solid rgb(25, 25, 25);
  width: 100%;
  position: relative;
  z-index: 100;

  @media (max-width: 769px) {
    padding: 20px 20px;
    padding-bottom: 30px;
  }
`;

export const FooterContent = styled.div``;

export const FooterLinkContainer = styled.div`
  width: 500px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const FooterLinkTitle = styled.h1`
  color: gray;
  font-size: 17px;
`;

export const FooterLinkContent = styled.div`
  display: flex;
  justify-content: space-bewteen;
  flex-wrap: wrap;
  margin-top: 35px;

  @media (max-width: 768px) {
    margin-top: 26px;
  }
`;

export const FooterLink = styled.a`
  color: gray;
  font-size: 14px;
  width: 110px;
  margin-bottom: 21px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    margin-bottom: 16px;
  }
`;

export const FooterDescContainer = styled.div`
  margin-top: 30px 
  
  /* @media (max-width: 768px) {
    margin-top: 20px;
  } */
`;

export const FooterDescRights = styled.h2`
  color: white;
  font-size: 14px;
  text-align: center;
`;