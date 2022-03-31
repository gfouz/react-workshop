import * as React from "react";
import styled from "styled-components";
import { handle } from "./handle";
import { content } from "./content";
import Header from "../../components/header/Header";
import Contact from "../../components/contactme/Contact";
import SkillList from "./SkillsList";
import {
  StyledAbout,
  MainImage,
  Section,
  Article,
  CurvedTitle,
  Myavatar,
  TechStack,
  Footer,
} from "./about.styled";

const About = () => {
  const titleRef = React.useRef(null);
  React.useEffect(() => {
    handle(titleRef);
  }, []);

  return (
    <>
      <StyledAbout>
        <MainImage>
          <img src="./images/about1.jpg" alt="clock" />
        </MainImage>
        <Header 
          height="60px" 
          bg="#b9e0cb" 
          color="#0b7859" 
          margin="-2px 0" 
          fontweight="bolder"
          />
        <CurvedTitle>
          <div className="arch">
            <h1 ref={titleRef}> GFOUZ </h1>
          </div>
          <img
            src="./images/handshake-red.svg"
            alt="gfouz-logo"
            className="arch__icon"
          />
          <h3 className="arch__frase">web developer</h3>
        </CurvedTitle>
        <Section style={{ backgroundColor: "#f5f5f5", padding: "2em 0" }}>
          <Article>
            <Myavatar>
              <img
                src="./images/giov.svg"
                alt="giovani"
                className="myavatar__frame"
              />
            </Myavatar>
            <h3 className="section__title">A brief introduction about me</h3>
            <p className="article__paragraph">{content[2].paragraph}</p>
          </Article>
          <Article>
            <img
              src="./images/coffeecup.jpg"
              className="section__image"
              alt="laptop"
            />
            <h5 className="article__image-title">
              delicious coffee, better ideas!
            </h5>
          </Article>
        </Section>
        <TechStack>
          <img src="./images/react.svg" alt="react" />
          <div className="techstack__centerbar">
            <img src="./images/next.svg" alt="next" />
            <h3 className="techstack__title">TECHNOLOGIES</h3>
            <img src="./images/graphql.svg" alt="graphql" />
          </div>
          <img src="./images/redux.svg" alt="redux" />
        </TechStack>
        <Section>
          <Article>
            <Myavatar>
              <img
                src="./images/giov.svg"
                alt="giovani"
                className="myavatar__frame"
              />
            </Myavatar>
            <h3 className="section__title">Conceptos importantes</h3>
            <p className="article__paragraph">{content[0].paragraph}</p>
          </Article>
          <Article>
            <h3 className="section__title">Tambien importante</h3>
            <p className="article__paragraph">{content[1].paragraph}</p>
            <h3 className="section__title">TECHNOLOGIES:</h3>
            <SkillList />
          </Article>
        </Section>
        <div className="aboutme">
           <Contact 
            height="40px" 
            bgcolor="#ffffff80"
            
            />
        </div>
        
        <Footer>
          {" "}
          Gfouz &copy; {new Date().getFullYear()} reactJs-webSite{" "}
        </Footer>
      </StyledAbout>
    </>
  );
};

export default About;
