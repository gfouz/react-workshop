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
             height="100px" 
             fontweight="bolder"/>
            <Logo />
            <Project />
            <Profile />
            <div className="skills">
                 <div className="skills__item">
                 <h4 className="skills__title">
                    Reality leaves a lot to the imagination.
                 </h4>
                 <p className="skills__paragraph">
                   This sounds too simple but has a lot of depth to it. 
                   What is reality? What is the “real” way to live? 
                   How should things work? The irony is that the answer 
                   itself lies in our imagination. Schools, democracy, 
                   military, architecture – everything which is real was 
                   first conceived in the imagination.
                   <strong>-John Lennon</strong>
                 </p>
                 <h4 className="skills__title">MY-SKILLS:</h4>
                 <p className="skills__paragraph">
                   HTML CSS SCSS JS TS REACTJS & ECOSYSTEM.
                 </p>
                 </div>
                 <div className="skills__item">
                  <img className="skills__image" 
                  src="./images/w3c.jpg" 
                  alt="deno" />
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
  height: 100%;
  background-color: #f0f0f0;
  .l-grid {
    min-height: 100vh;
    grid-template-column: 1fr;
    grid-template-rows: 100px 370px auto auto auto 426px 70px;
  }
  .skills {
    border: 1px solid #f1f1f1;
    margin: 3em auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    @media (min-width: 650px) {
       flex-direction: row;
     }
    max-width: 650px;
    font-family: calibri;
    background-color: #ffffff;
  }
  .skills__item { 
     width:320px;
     padding: 1em 0;
     text-align: left;
    }
  .skills__image {
    max-width: 100%;
    height: auto;
  }
  .skills__title {
    color: #444444;
    text-align: left;
    margin:0 0.1em;
    padding: 0 0.5em;
  }
  .skills__paragraph {
    color: #40638d;
    text-align: left;
    margin:0 0.1em;
    padding: 0 0.5em;
    font-size: 12px;
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
