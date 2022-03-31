import React from "react";
import { theme, logo } from "../../theme";
import styled, { ThemeProvider } from "styled-components";
import Logo from "../../components/logo/Logo";
import Project from "../../components/github/Projects";
import Profile from "../../components/github/Profile";
import Header from "../../components/header/Header";
import EmailMe from "../../components/form/EmailMe";

const Work = () => {
  return (
    <>
      <ThemeProvider theme={logo}>
        <StyledWork>
          <div className="work l-grid" >
            <Header 
             bg="#f0f0f0" 
             color="#000000" 
             height="150px" 
             fontweight="bolder"/>
            <Logo />
            <Project />
            <Profile />
            <div className="skills">
                 <div className="skills__item">
                 <img className="skills__image" 
                 src="./images/w3c.jpg" 
                 alt="deno" />
                 </div>
                 <div className="skills__item">
                 <h3 className="skills__text">
                   MY SKILLS: HTML CSS SCSS JS TS.
                 </h3>
                 </div>
            </div>
            <EmailMe /> 
            <footer className="work__footer">
              <h4 className="work__footer-title">
                Gfouz &copy; {new Date().getFullYear()} Made with ReactJS.
              </h4>
            </footer>
          </div>
        </StyledWork>
      </ThemeProvider>
    </>
  );
};

export default Work;

const StyledWork = styled.div`
  --blue: #008dff;
  background-color: #f0f0f0;
  .l-grid {
    min-height: 100vh;
    grid-template-column: 1fr;
    grid-template-rows: 150px 375px auto auto auto auto 70px;
  }
  .skills {
    margin: 0 auto;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    max-width: 650px;
    background-color: #ffffff;
    .skills__item {
      width: 50%;
    }
  }
  .skills__image {
    max-width: 100%;
    height: auto;
  }
  .skills__text {
    color: #40638d;
    font-family: calibri;
  }
  .work__footer {
    height: 70px;
    display: grid;
    place-items: center;
    color: #ffffff;
    background-color: #222222;
    font-family: literata;
  }
  .work__footer-title {
    margin: 1em;
    font-family: calibri;
    color: ${({ theme }) => theme.blue};
  }
`;
