import styled from "styled-components";


export const HomeWrapperFinal = styled.div`
  /* border: 2px solid blue; */
  margin: 15px;

`;

export const HomeProjectContainer3Final = styled.div`
  /* border: 2px solid orange; */
  padding-top: 1vh;
  padding-bottom: 10vh;
  border-radius: 10px;
  /* margin-top: 20px; */
  /* margin-bottom: 20px; */

  width: 1000px;

  grid-gap: 30px;
  padding-left: 15px;
  padding-right: 15px;
  background-color: #0d0640;


  @media screen and (max-width: 1000px) {
    width: 100vw;
  }

  @media screen and (max-width: 500px) {
    height: auto;
    width: 100vw;
    display: flex;
    flex-direction: column;
  }
`;

export const HomeProjectFinalTextContainer = styled.div`

`;

export const HomeProjectFinalTextHeaderContainer = styled.div`

`;

export const HomeFinalTextHeaderWrapper = styled.div`

`;

export const HomeFinalTextHeader = styled.h2`
font-family: 'IBM Plex Mono', monospace;  
color: #f76149;
font-size: 38px;
`;

export const HomeFinalTextWrapper = styled.div`

`;

export const HomeFinalBoldTextWrapper = styled.div`

`;

export const HomeFinalBoldText = styled.h3`
font-family: 'IBM Plex Mono', monospace; 
color: #ffac69;
`;

export const HomeFinalText = styled.p`
font-family: 'IBM Plex Mono', monospace; 
color: #ffac69;
font-weight: 300;
`;

export const FinalTextContainer = styled.div`

`;