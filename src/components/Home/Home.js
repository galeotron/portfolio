import React from "react";
// import BgVideo from "../../videos/BgVideo3.mp4";
import SantaScreenshot from "../../images/SantaHomepageSquare.png";
import SantaLogo from "../../images/SantaLogo.PNG";
import SantaMobile from "../../images/SantaMobile.png";
import CopperLogo from "../../images/CopperLogo.png";
import NFTScreen from "../../images/NFTscreen.png";
// import stars from "../../images/stars.jpg";
import {
  Gap,
  /*BgVideoStyle,*/
  HomeContainer,
  HomeLgText,
  HomeProjectContainer,
  HomeScreenshot,
  HomeScreenshotWrap,
  HomeSmText,
  HomeTextContainer,
  HomeTextWrapper,
  HomeWrapper,
  LogoPic,
  LogoWrap,
  ProjectText,
  ProjectTextWrap,
  SecondScreenshot,
  SecondScreenshotWrap,
  SkillTagText,
  SkillTagWrap,
  /*VideoWrapper,*/
  WebsiteLinkWrap,
  SkillTag,
  WebsiteLink,
  FooterContainer,
  WebsiteDescText,
} from "./HomeElements";

import {
  HomeProjectContainer2Second,
  HomeScreenshotSecond,
  HomeScreenshotWrapSecond,
  HomeWrapperSecond,
  LogoPicSecond,
  LogoWrapSecond,
  ProjectTextSecond,
  ProjectTextWrapSecond,
  SecondScreenshotSecond,
  SecondScreenshotWrapSecond,
  SkillTagTextSecond,
  SkillTagWrapSecond,
  WebsiteLinkWrapSecond,
  SkillTagSecond,
  WebsiteLinkSecond,
} from "./HomeElementsSecond";

import {
  HomeProjectContainer3Third,
  HomeScreenshotThird,
  HomeScreenshotWrapThird,
  HomeWrapperThird,
  LogoPicThird,
  LogoWrapThird,
  ProjectTextThird,
  ProjectTextWrapThird,
  SecondScreenshotThird,
  SecondScreenshotWrapThird,
  SkillTagTextThird,
  SkillTagWrapThird,
  /*VideoWrapper,*/
  WebsiteLinkWrapThird,
  SkillTagThird,
  WebsiteLinkThird,
} from "./HomeElementsThird";

import {
  HomeWrapperFinal,
  HomeProjectContainer3Final,
  HomeProjectFinalTextHeaderContainer,
  HomeFinalTextHeaderWrapper,
  HomeFinalTextWrapper,
  HomeFinalTextHeader,
  HomeFinalBoldTextWrapper,
  HomeFinalBoldText,
  HomeFinalText,
  FinalTextContainer,
} from "./HomeElementsFinal";

const Home = () => {
  return (
    <HomeContainer>
      {/* <BgImage src={stars}></BgImage> */}
      <HomeWrapper>
        <HomeTextContainer>
          <HomeTextWrapper>
            <HomeLgText>Hi I'm Peter</HomeLgText>
          </HomeTextWrapper>
          <HomeTextWrapper>
            <HomeSmText>
              I started my career as an environmental engineer working with
              companies like Apex and Trihydro.
              <br />
              <br />
              But, honestly, I never felt passionate about the work. In theory,
              it seemed great. In practice, you often worked for companies that
              were doing some questionable things to the earth. <br />
              <br />
              And I wanted my work to mean something. <br />
              <br />
              Every day we see incredible innovation from software companies,
              and I wanted to be a part of that. <br />
              <br />
              So, I started small and taught myself how to code simple HTML
              websites — all the way up to full-stack projects. <br />
              <br />
              Below are some of my favorite projects.{" "}
            </HomeSmText>
          </HomeTextWrapper>
        </HomeTextContainer>
      </HomeWrapper>
      <HomeWrapper>
        <HomeLgText>My recent work</HomeLgText>
      </HomeWrapper>
      <Gap />
      <HomeWrapper>
        <HomeProjectContainer>
          <ProjectTextWrap>
            <ProjectText
              initial={{ y: 300, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.7, type: "spring", bounce: 0.3 }}
              viewport={{ once: true, amount: 0 }}
            >
              Santa Slayzz
            </ProjectText>
          </ProjectTextWrap>
          <LogoWrap>
            <LogoPic
              whileHover={{ scale: 1.2 }}
              initial={{ y: 300, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.7, type: "spring", bounce: 0.3 }}
              viewport={{ once: true, amount: 0 }}
              src={SantaLogo}
              alt="SantaSlayzz Logo"
            ></LogoPic>
          </LogoWrap>
          <HomeScreenshotWrap

          /*animate={animation}*/

          // whileHover={{ scale: 1.1 }}
          >
            <HomeScreenshot
              whileHover={{ scale: 1.2 }}
              initial={{ y: 300, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.7, type: "spring", bounce: 0.3 }}
              viewport={{ once: true, amount: 0 }}
              src={SantaScreenshot}
              alt="SantaSlayzz Homepage"
            ></HomeScreenshot>
          </HomeScreenshotWrap>
          <SecondScreenshotWrap>
            <SecondScreenshot
              whileHover={{ scale: 1.2 }}
              initial={{ y: 300, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.7, type: "spring", bounce: 0.3 }}
              viewport={{ once: true, amount: 0 }}
              src={SantaMobile}
              alt="SantaSlayzz Mobile"
            ></SecondScreenshot>
          </SecondScreenshotWrap>
          <SkillTagWrap>
            <SkillTag
              initial={{ y: 300, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.7, type: "spring", bounce: 0.3 }}
              viewport={{ once: true, amount: 0 }}
            >
              <SkillTagText>Html</SkillTagText>
            </SkillTag>

            <SkillTag
              initial={{ y: 300, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.7, type: "spring", bounce: 0.3 }}
              viewport={{ once: true, amount: 0 }}
            >
              <SkillTagText>CSS</SkillTagText>
            </SkillTag>

            <SkillTag
              initial={{ y: 300, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.9, type: "spring", bounce: 0.3 }}
              viewport={{ once: true, amount: 0 }}
            >
              <SkillTagText>React</SkillTagText>
            </SkillTag>

            <SkillTag
              initial={{ y: 300, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 2.1, type: "spring", bounce: 0.3 }}
              viewport={{ once: true, amount: 0 }}
            >
              <SkillTagText>Spring</SkillTagText>
            </SkillTag>

            <SkillTag
              initial={{ y: 300, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 2.3, type: "spring", bounce: 0.3 }}
              viewport={{ once: true, amount: 0 }}
            >
              <SkillTagText>Java</SkillTagText>
            </SkillTag>

            <SkillTag
              initial={{ y: 300, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 2.5, type: "spring", bounce: 0.3 }}
              viewport={{ once: true, amount: 0 }}
            >
              <SkillTagText>PostgreSQL</SkillTagText>
            </SkillTag>
          </SkillTagWrap>
          <WebsiteLinkWrap>
            <WebsiteDescText
              initial={{ y: 300, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.7, type: "spring", bounce: 0.3 }}
              viewport={{ once: true, amount: 0.8 }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Et
              ultrices neque ornare aenean. In massa tempor nec feugiat. Feugiat
              nisl pretium fusce id. Sit amet dictum sit amet justo donec enim
              diam vulputate. Consectetur adipiscing elit ut aliquam purus sit
              amet luctus. Pretium aenean pharetra magna ac placerat vestibulum.
              Potenti nullam ac tortor vitae purus faucibus ornare suspendisse.
              Consectetur adipiscing elit ut aliquam purus. Neque vitae tempus
              quam pellentesque nec nam. Aliquet enim tortor at auctor urna
              nunc.
            </WebsiteDescText>
          </WebsiteLinkWrap>
        </HomeProjectContainer>
      </HomeWrapper>
      <HomeWrapperSecond>
        <HomeProjectContainer2Second>
          <ProjectTextWrapSecond>
            <ProjectTextSecond
              initial={{ y: 300, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.7, type: "spring", bounce: 0.3 }}
              viewport={{ once: true, amount: 0 }}
            >
              Copper Creek Photography
            </ProjectTextSecond>
          </ProjectTextWrapSecond>
          <LogoWrapSecond>
            <LogoPicSecond
              whileHover={{ scale: 1.2 }}
              initial={{ y: 300, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.7, type: "spring", bounce: 0.3 }}
              viewport={{ once: true, amount: 0 }}
              src={CopperLogo}
              alt="CopperCreek Logo"
            ></LogoPicSecond>
          </LogoWrapSecond>
          <HomeScreenshotWrapSecond

          /*animate={animation}*/

          // whileHover={{ scale: 1.1 }}
          >
            <HomeScreenshotSecond
              whileHover={{ scale: 1.2 }}
              initial={{ y: 300, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.7, type: "spring", bounce: 0.3 }}
              viewport={{ once: true, amount: 0 }}
              src={SantaScreenshot}
              alt="CopperCreek Homepage"
            ></HomeScreenshotSecond>
          </HomeScreenshotWrapSecond>
          <SecondScreenshotWrapSecond>
            <SecondScreenshotSecond
              whileHover={{ scale: 1.2 }}
              initial={{ y: 300, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.7, type: "spring", bounce: 0.3 }}
              viewport={{ once: true, amount: 0 }}
              src={SantaMobile}
              alt="CopperCreek Mobile"
            ></SecondScreenshotSecond>
          </SecondScreenshotWrapSecond>
          <SkillTagWrapSecond>
            <SkillTagSecond
              initial={{ y: 300, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.7, type: "spring", bounce: 0.3 }}
              viewport={{ once: true, amount: 0 }}
            >
              <SkillTagTextSecond>Html</SkillTagTextSecond>
            </SkillTagSecond>

            <SkillTagSecond
              initial={{ y: 300, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.7, type: "spring", bounce: 0.3 }}
              viewport={{ once: true, amount: 0 }}
            >
              <SkillTagTextSecond>CSS</SkillTagTextSecond>
            </SkillTagSecond>

            <SkillTagSecond
              initial={{ y: 300, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.9, type: "spring", bounce: 0.3 }}
              viewport={{ once: true, amount: 0 }}
            >
              <SkillTagTextSecond>React</SkillTagTextSecond>
            </SkillTagSecond>

            <SkillTagSecond
              initial={{ y: 300, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 2.1, type: "spring", bounce: 0.3 }}
              viewport={{ once: true, amount: 0 }}
            >
              <SkillTagTextSecond>Spring</SkillTagTextSecond>
            </SkillTagSecond>

            <SkillTagSecond
              initial={{ y: 300, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 2.3, type: "spring", bounce: 0.3 }}
              viewport={{ once: true, amount: 0 }}
            >
              <SkillTagTextSecond>Java</SkillTagTextSecond>
            </SkillTagSecond>

            <SkillTagSecond
              initial={{ y: 300, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 2.5, type: "spring", bounce: 0.3 }}
              viewport={{ once: true, amount: 0 }}
            >
              <SkillTagTextSecond>PostgreSQL</SkillTagTextSecond>
            </SkillTagSecond>
          </SkillTagWrapSecond>
          <WebsiteLinkWrapSecond>
            <WebsiteLinkSecond
              initial={{ y: 300, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.7, type: "spring", bounce: 0.3 }}
              viewport={{ once: true, amount: 0.8 }}
            ></WebsiteLinkSecond>
          </WebsiteLinkWrapSecond>
        </HomeProjectContainer2Second>
      </HomeWrapperSecond>
      <HomeWrapperThird>
        <HomeProjectContainer3Third>
          <ProjectTextWrapThird>
            <ProjectTextThird
              initial={{ y: 300, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.7, type: "spring", bounce: 0.3 }}
              viewport={{ once: true, amount: 0 }}
            >
              NFTYbot
            </ProjectTextThird>
          </ProjectTextWrapThird>
          <LogoWrapThird>
            <LogoPicThird
              whileHover={{ scale: 1.2 }}
              initial={{ y: 300, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.7, type: "spring", bounce: 0.3 }}
              viewport={{ once: true, amount: 0 }}
              src={SantaLogo}
              alt="NFTYbot Logo"
            ></LogoPicThird>
          </LogoWrapThird>
          <HomeScreenshotWrapThird

          /*animate={animation}*/

          // whileHover={{ scale: 1.1 }}
          >
            <HomeScreenshotThird
              whileHover={{ scale: 1.2 }}
              initial={{ y: 300, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.7, type: "spring", bounce: 0.3 }}
              viewport={{ once: true, amount: 0 }}
              src={NFTScreen}
              alt="NFTYbot Homepage"
            ></HomeScreenshotThird>
          </HomeScreenshotWrapThird>
          <SecondScreenshotWrapThird>
            <SecondScreenshotThird
              whileHover={{ scale: 1.2 }}
              initial={{ y: 300, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.7, type: "spring", bounce: 0.3 }}
              viewport={{ once: true, amount: 0 }}
              src={SantaMobile}
              alt="NFTYbot Mobile"
            ></SecondScreenshotThird>
          </SecondScreenshotWrapThird>
          <SkillTagWrapThird>
            <SkillTagThird
              initial={{ y: 300, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.7, type: "spring", bounce: 0.3 }}
              viewport={{ once: true, amount: 0 }}
            >
              <SkillTagTextThird>Html</SkillTagTextThird>
            </SkillTagThird>

            <SkillTagThird
              initial={{ y: 300, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.7, type: "spring", bounce: 0.3 }}
              viewport={{ once: true, amount: 0 }}
            >
              <SkillTagTextThird>CSS</SkillTagTextThird>
            </SkillTagThird>

            <SkillTagThird
              initial={{ y: 300, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.9, type: "spring", bounce: 0.3 }}
              viewport={{ once: true, amount: 0 }}
            >
              <SkillTagTextThird>React</SkillTagTextThird>
            </SkillTagThird>

            <SkillTagThird
              initial={{ y: 300, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 2.1, type: "spring", bounce: 0.3 }}
              viewport={{ once: true, amount: 0 }}
            >
              <SkillTagTextThird>Spring</SkillTagTextThird>
            </SkillTagThird>

            <SkillTagThird
              initial={{ y: 300, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 2.3, type: "spring", bounce: 0.3 }}
              viewport={{ once: true, amount: 0 }}
            >
              <SkillTagTextThird>Java</SkillTagTextThird>
            </SkillTagThird>

            <SkillTagThird
              initial={{ y: 300, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 2.5, type: "spring", bounce: 0.3 }}
              viewport={{ once: true, amount: 0 }}
            >
              <SkillTagTextThird>PostgreSQL</SkillTagTextThird>
            </SkillTagThird>
          </SkillTagWrapThird>
          <WebsiteLinkWrapThird>
            <WebsiteLinkThird
              initial={{ y: 300, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.7, type: "spring", bounce: 0.3 }}
              viewport={{ once: true, amount: 0.8 }}
            ></WebsiteLinkThird>
          </WebsiteLinkWrapThird>
        </HomeProjectContainer3Third>
      </HomeWrapperThird>
      <HomeWrapperFinal>
        <HomeProjectContainer3Final>
          <HomeProjectFinalTextHeaderContainer>
            <HomeFinalTextHeaderWrapper>
              <HomeFinalTextHeader>Other Projects</HomeFinalTextHeader>
            </HomeFinalTextHeaderWrapper>
          </HomeProjectFinalTextHeaderContainer>
          <FinalTextContainer>
            <HomeFinalBoldTextWrapper>
              <HomeFinalBoldText>Sustainability App</HomeFinalBoldText>
            </HomeFinalBoldTextWrapper>
            <HomeFinalTextWrapper>
              <HomeFinalText>lorem ipsum ojasdlk;jasdjkasdjll;as</HomeFinalText>
            </HomeFinalTextWrapper>
          </FinalTextContainer>
          <FinalTextContainer>
            <HomeFinalBoldTextWrapper>
              <HomeFinalBoldText>Sustainability App</HomeFinalBoldText>
            </HomeFinalBoldTextWrapper>
            <HomeFinalTextWrapper>
              <HomeFinalText>lorem ipsum ojasdlk;jasdjkasdjll;as</HomeFinalText>
            </HomeFinalTextWrapper>
          </FinalTextContainer>
        </HomeProjectContainer3Final>
      </HomeWrapperFinal>
      <FooterContainer />
    </HomeContainer>

    // <VideoWrapper>
    //     <BgVideoStyle autoPlay loop muted src={BgVideo} type='video/mp4'></BgVideoStyle>
    // </VideoWrapper>
  );
};

export default Home;
