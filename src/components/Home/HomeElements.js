import styled from "styled-components";
import { motion } from "framer-motion";

export const VideoWrapper = styled.div`
  max-width: 100%;
  height: auto;
`;

export const BgVideoStyle = styled.video``;

export const HomeContainer = styled.div`
  border: 2px solid red;
  display: flex;
  align-items: center;
  flex-direction: column;
  /* padding-top: 10vh; */
  overflow-x: hidden;

  background-color: #0f0f0f;
  padding: 15px;

`;

export const BgImage = styled.img`
  height: 100%;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: -1;
  position: fixed;
  opacity: 0.95;
`;

export const HomeWrapper = styled.div`
  border: 2px solid blue;
  margin: 15px;

`;

export const HomeTextContainer = styled.div`
  border: 2px dotted black;
  padding-bottom: 60vh;
`;

export const HomeTextWrapper = styled.div``;

export const HomeLgText = styled.h1`
  margin-top: 10px;
  border: 2px solid yellow;
  color: #a33428;
`;

export const HomeSmText = styled.p`
  border: 2px solid green;
  padding-top: 2vh;
  color: white;
`;

export const HomeSmTextLight = styled.p`

`;

export const HomeProjectContainer = styled.div`
  border: 2px solid orange;
  padding-top: 1vh;
  padding-bottom: 10vh;
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

  /* background-image: linear-gradient(#5CDB95, #77d6a2) */
  background-color: #1a1a1a;
  border-radius: 10px;
  padding-left: 15px;
  padding-right: 15px;
  margin-left: 15px;
  margin-right: 15px;

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
export const HomeProjectContainer2 = styled.div`
  border: 2px solid orange;
  padding-top: 1vh;
  padding-bottom: 10vh;
  /* margin-top: 20px; */
  /* margin-bottom: 20px; */
  height: 100vh;
  width: 1000px;
  display: grid;
  grid-template-columns: repeat(4 1fr);
  grid-template-rows: repeat() (5 1fr);
  grid-gap: 30px;

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
export const HomeProjectContainer3 = styled.div`
  border: 2px solid orange;
  padding-top: 1vh;
  padding-bottom: 10vh;
  /* margin-top: 20px; */
  /* margin-bottom: 20px; */
  height: 100vh;
  width: 1000px;
  display: grid;
  grid-template-columns: repeat(4 1fr);
  grid-template-rows: repeat() (5 1fr);
  grid-gap: 30px;

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

export const ProjectTextWrap = styled.div`
  border: 2px dotted red;
  grid-row-start: 1;
  grid-row-end: 2;
  grid-column-start: 1;
  grid-column-end: 3;

  align-self: end;
  justify-self: end;

  transform: translate(0px, 50px);

  @media screen and (max-width: 500px) {
    transform: translate(0px, 0px);
    align-self: center;
  }
`;

export const ProjectText = styled(motion.h2)``;

export const LogoWrap = styled(motion.div)`
  border: 2px dotted blue;
  grid-row-start: 2;
  grid-row-end: 4;
  grid-column-start: 1;
  grid-column-end: 3;

  justify-self: start;
  align-self: center;
  max-width: 300px;

`;

export const LogoPic = styled(motion.img)`
  width: 100%;
`;

export const HomeScreenshotWrap = styled(motion.div)`
  border: 2px dotted yellow;
  grid-row-start: 1;
  grid-row-end: 3;
  grid-column-start: 3;
  grid-column-end: 5;

  position: relative;
  /* width: 100%; */
  max-width: 600px;
  align-self: start;
  justify-self: end;


`;

export const HomeScreenshot = styled(motion.img)`
  width: 100%;
`;

export const SecondScreenshotWrap = styled(motion.div)`
  border: 2px dotted green;
  grid-row-start: 3;
  grid-row-end: 6;
  grid-column-start: 3;
  grid-column-end: 5;

  max-width: 320px;
  height: auto;
  align-self: start;
  justify-self: end;



  @media screen and (max-width: 500px) {
    align-self: center;

  }
`;

export const SecondScreenshot = styled(motion.img)`
  height: 100%;
  width: 100%;
`;

export const SkillTagWrap = styled.div`
  border: 2px dotted black;
  grid-row-start: 4;
  grid-row-end: 5;
  grid-column-start: 1;
  grid-column-end: 3;

  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  max-width: 562px;
`;

export const SkillTag = styled(motion.div)`
  border: 2px dotted green;
  width: 80px;
  height: 30px;
  margin: 5px;

  position: relative;
`;

export const SkillTagText = styled.h5`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const WebsiteLinkWrap = styled.div`
  border: 2px dotted purple;
  grid-row-start: 5;
  grid-row-end: 6;
  grid-column-start: 1;
  grid-column-end: 3;
  display: flex;
  align-items: center;



  @media screen and (max-width: 500px) {
    justify-content: center;

  }
`;

export const WebsiteLink = styled(motion.div)`
  width: 180px;
  background-color:grey;
  height: 50px;
  border: 2px solid yellow;
`;

export const Gap = styled.div`
  border: 2px solid purple;
  height: 40px;
`;
