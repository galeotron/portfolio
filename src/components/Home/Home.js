import React from "react";
// import BgVideo from "../../videos/BgVideo3.mp4";
import SantaScreenshot from "../../images/SantaHomepageSquare.png";
import SantaLogo from "../../images/SantaLogo.PNG";
import SantaMobile from "../../images/SantaMobile.png";
import CopperLogo from "../../images/CopperLogo.png";
import NFTScreen from "../../images/NFTscreen.png";
import CopperHome from "../../images/CopperHome.png"
import CopperPortfolio from "../../images/CopperPortfolio.png"
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
} from "./HomeElementsSecond";

import {
  HomeProjectContainer3Third,
  HomeScreenshotThird,
  HomeScreenshotWrapThird,
  HomeWrapperThird,
  ProjectTextThird,
  ProjectTextWrapThird,
  SkillTagTextThird,
  SkillTagWrapThird,
  /*VideoWrapper,*/
  WebsiteLinkWrapThird,
  SkillTagThird,
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
              I started my career as an environmental engineer working in environmental consulting.
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
            <SkillTag
              initial={{ y: 300, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 2.7, type: "spring", bounce: 0.3 }}
              viewport={{ once: true, amount: 0 }}
            >
              <SkillTagText>Javascript</SkillTagText>
            </SkillTag>
          </SkillTagWrap>
          <WebsiteLinkWrap>
            <WebsiteDescText
              initial={{ y: 300, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.7, type: "spring", bounce: 0.3 }}
              viewport={{ once: true, amount: 0.8 }}
            >
              This project really pushed my limits in a multitude of ways.
              I designed the architecture and UI for this full stack website.
              The website was designed for a twitch streamer who wanted to include
              an e commerce store, branding opportunities, as well as a tournament application.
              The front end was created with the help of React, while the backend utilizes the Spring framework.
              It was designed with AWS integration in mind, however it is currently configured for use with a local PostgreSQL database.
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
              src={CopperHome}
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
              src={CopperPortfolio}
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
              <SkillTagTextSecond>Framer-motion</SkillTagTextSecond>
            </SkillTagSecond>

            <SkillTagSecond
              initial={{ y: 300, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 2.3, type: "spring", bounce: 0.3 }}
              viewport={{ once: true, amount: 0 }}
            >
              <SkillTagTextSecond>Javascript</SkillTagTextSecond>
            </SkillTagSecond>

            {/* <SkillTagSecond
              initial={{ y: 300, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 2.5, type: "spring", bounce: 0.3 }}
              viewport={{ once: true, amount: 0 }}
            >
              <SkillTagTextSecond>PostgreSQL</SkillTagTextSecond>
            </SkillTagSecond> */}
          </SkillTagWrapSecond>
          <WebsiteLinkWrapSecond>
            <WebsiteDescText
              initial={{ y: 300, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.7, type: "spring", bounce: 0.3 }}
              viewport={{ once: true, amount: 0.8 }}
            >
              {" "}
              Copper Creek Photography is a website I designed for a photographer located in Gilette, Wyoming
              It includes a javascript based photo portfolio. The design was created with the branding of the photographer in mind.
              Although not as flashy as other projects I've completed, I believe it represents a higher level of competency, both in the simplicity
              of the design, and in the amount of time and research it took to develop.
            </WebsiteDescText>
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
          {/* <LogoWrapThird>
            <LogoPicThird
              whileHover={{ scale: 1.2 }}
              initial={{ y: 300, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.7, type: "spring", bounce: 0.3 }}
              viewport={{ once: true, amount: 0 }}
              src={SantaLogo}
              alt="NFTYbot Logo"
            ></LogoPicThird>
          </LogoWrapThird> */}
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
          {/* <SecondScreenshotWrapThird>
            <SecondScreenshotThird
              whileHover={{ scale: 1.2 }}
              initial={{ y: 300, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.7, type: "spring", bounce: 0.3 }}
              viewport={{ once: true, amount: 0 }}
              src={SantaMobile}
              alt="NFTYbot Mobile"
            ></SecondScreenshotThird>
          </SecondScreenshotWrapThird> */}
          <SkillTagWrapThird>
            <SkillTagThird
              initial={{ y: 300, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.7, type: "spring", bounce: 0.3 }}
              viewport={{ once: true, amount: 0 }}
            >
              <SkillTagTextThird>Spring</SkillTagTextThird>
            </SkillTagThird>

            <SkillTagThird
              initial={{ y: 300, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.7, type: "spring", bounce: 0.3 }}
              viewport={{ once: true, amount: 0 }}
            >
              <SkillTagTextThird>AWS</SkillTagTextThird>
            </SkillTagThird>

            <SkillTagThird
              initial={{ y: 300, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.9, type: "spring", bounce: 0.3 }}
              viewport={{ once: true, amount: 0 }}
            >
              <SkillTagTextThird>Elastic Beanstalk</SkillTagTextThird>
            </SkillTagThird>

            <SkillTagThird
              initial={{ y: 300, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 2.1, type: "spring", bounce: 0.3 }}
              viewport={{ once: true, amount: 0 }}
            >
              <SkillTagTextThird>Java</SkillTagTextThird>
            </SkillTagThird>

            <SkillTagThird
              initial={{ y: 300, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 2.3, type: "spring", bounce: 0.3 }}
              viewport={{ once: true, amount: 0 }}
            >
              <SkillTagTextThird>DynamoDB</SkillTagTextThird>
            </SkillTagThird>

            {/* <SkillTagThird
              initial={{ y: 300, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 2.5, type: "spring", bounce: 0.3 }}
              viewport={{ once: true, amount: 0 }}
            >
              <SkillTagTextThird>PostgreSQL</SkillTagTextThird>
            </SkillTagThird> */}
          </SkillTagWrapThird>
          <WebsiteLinkWrapThird>
            <WebsiteDescText
              initial={{ y: 300, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.7, type: "spring", bounce: 0.3 }}
              viewport={{ once: true, amount: 0.8 }}
            >
              {" "}
              NFTY Bot is one of the more exciting projects I was able to work on.
              NFTY Bot was the first Twitter/Discord bot designed specifically for NFT sales. 
              I assisted with the architecture and RESTful API design in order to optimize the function of the bots.
            </WebsiteDescText>
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
              <HomeFinalBoldText><br/>Sustainability App</HomeFinalBoldText>
            </HomeFinalBoldTextWrapper>
            <HomeFinalTextWrapper>
              <HomeFinalText>While working with Trihydro, I was recruited to help tie a third party greenhouse gas emissions calculator with our internal
                spreadsheets and PowerBI. Using VBA I accomplished this and the package was deployed for use with our client. This project helped improve
                relations with the client and created an easy to use format to help make sustainability based decisions.<br/>
              </HomeFinalText>
            </HomeFinalTextWrapper>
          </FinalTextContainer>
          <FinalTextContainer>
            <HomeFinalBoldTextWrapper>
              <HomeFinalBoldText><br/>Labor hour sheet workbook</HomeFinalBoldText>
            </HomeFinalBoldTextWrapper>
            <HomeFinalTextWrapper>
              <HomeFinalText>This was another small project assigned to me while working with Trihydro. Although a small assignment I am proud of the difference
                I could help make within my team. I designed and implemented a labor hour sheet using VBA in excel. This labor hour workbook is utilized by the team
                to keep track of all member's schedules. It allows management to better understand and optimize the time put in to each project.
              </HomeFinalText>
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
