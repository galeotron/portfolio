import React from "react";
// import BgVideo from "../../videos/BgVideo3.mp4";
import SantaScreenshot from "../../images/SantaHomepageSquare.png";
import SantaLogo from "../../images/SantaLogo.PNG";
import SantaMobile from "../../images/SantaMobile.png";
import stars from "../../images/stars.jpg";
import {
  Gap,
  /*BgVideoStyle,*/
  HomeContainer,
  HomeLgText,
  HomeProjectContainer,
  HomeProjectContainer2,
  HomeProjectContainer3,
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
  BgImage,
  FooterContainer,
} from "./HomeElements";

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
            <HomeSmText>I am an engineer blah blah</HomeSmText>
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
            <WebsiteLink
              initial={{ y: 300, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.7, type: "spring", bounce: 0.3 }}
              viewport={{ once: true, amount: 0.8 }}
            ></WebsiteLink>
          </WebsiteLinkWrap>
        </HomeProjectContainer>
      </HomeWrapper>
      <HomeWrapper>
        <HomeProjectContainer2>
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
            <WebsiteLink
              initial={{ y: 300, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.7, type: "spring", bounce: 0.3 }}
              viewport={{ once: true, amount: 0.8 }}
            ></WebsiteLink>
          </WebsiteLinkWrap>
        </HomeProjectContainer2>
      </HomeWrapper>
      <HomeWrapper>
        <HomeProjectContainer3>
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
            <WebsiteLink
              initial={{ y: 300, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.7, type: "spring", bounce: 0.3 }}
              viewport={{ once: true, amount: 0.8 }}
            ></WebsiteLink>
          </WebsiteLinkWrap>
        </HomeProjectContainer3>
      </HomeWrapper>
      <FooterContainer />
    </HomeContainer>

    // <VideoWrapper>
    //     <BgVideoStyle autoPlay loop muted src={BgVideo} type='video/mp4'></BgVideoStyle>
    // </VideoWrapper>
  );
};

export default Home;
