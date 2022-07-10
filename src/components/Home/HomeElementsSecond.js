import styled from "styled-components";
import { motion } from "framer-motion";


export const HomeWrapperSecond = styled.div`
  border: 2px solid blue;
  margin: 15px;

`;


export const HomeProjectContainer2Second = styled.div`
  border: 2px solid orange;
  padding-top: 1vh;
  padding-bottom: 10vh;
  border-radius: 10px;
  /* margin-top: 20px; */
  /* margin-bottom: 20px; */
  height: 100vh;
  width: 1000px;
  display: grid;
  grid-template-columns: repeat(4 1fr);
  grid-template-rows: repeat() (5 1fr);
  grid-gap: 30px;
  min-height: 650px;
  padding-left: 15px;
  padding-right: 15px;
  background-color: #1a1a1a;

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

export const ProjectTextWrapSecond = styled.div`
  border: 2px dotted red;
  grid-row-start: 1;
  grid-row-end: 2;
  grid-column-start: 3;
  grid-column-end: 5;

  /* align-self: end;
  justify-self: end;

  transform: translate(0px, 50px); */

  @media screen and (max-width: 500px) {
    transform: translate(0px, 0px);
    align-self: center;
  }
`;



export const ProjectTextSecond = styled(motion.h2)``;

export const LogoWrapSecond = styled(motion.div)`
  border: 2px dotted blue;
  grid-row-start: 1;
  grid-row-end: 3;
  grid-column-start: 1;
  grid-column-end: 3;

  /* justify-self: start;
  align-self: center;
  max-width: 300px; */

`;

export const LogoPicSecond = styled(motion.img)`
  width: 100%;
`;

export const HomeScreenshotWrapSecond = styled(motion.div)`
  border: 2px dotted yellow;
  grid-row-start: 2;
  grid-row-end: 4;
  grid-column-start: 3;
  grid-column-end: 5;

  position: relative;
  /* width: 100%; */
  /* max-width: 600px;
  align-self: start;
  justify-self: end; */


`;

export const HomeScreenshotSecond = styled(motion.img)`
  width: 100%;
`;

export const SecondScreenshotWrapSecond = styled(motion.div)`
  border: 2px dotted green;
  grid-row-start: 4;
  grid-row-end: 6;
  grid-column-start: 1;
  grid-column-end: 3;

  /* max-width: 320px;
  height: auto;
  align-self: start;
  justify-self: end; */



  @media screen and (max-width: 500px) {
    align-self: center;

  }
`;

export const SecondScreenshotSecond = styled(motion.img)`
  height: 100%;
  width: 100%;
`;

export const SkillTagWrapSecond = styled.div`
  border: 2px dotted black;
  grid-row-start: 4;
  grid-row-end: 6;
  grid-column-start: 3;
  grid-column-end: 5;

  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  max-width: 562px;
`;

export const SkillTagSecond = styled(motion.div)`
  border: 2px dotted green;
  width: 80px;
  height: 30px;
  margin: 5px;

  position: relative;
`;

export const SkillTagTextSecond = styled.h5`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const WebsiteLinkWrapSecond = styled.div`
  border: 2px dotted purple;
  grid-row-start: 3;
  grid-row-end: 4;
  grid-column-start: 2;
  grid-column-end: 3;
  display: flex;
  align-items: center;



  @media screen and (max-width: 500px) {
    justify-content: center;

  }
`;

export const WebsiteLinkSecond = styled(motion.div)`
  width: 180px;
  background-color:grey;
  height: 50px;
  border: 2px solid yellow;
`;