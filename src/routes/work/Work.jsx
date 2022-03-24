import React from "react";
import { theme, logo } from "../../theme";
import styled, { ThemeProvider } from "styled-components";
import Logo from "../../components/logo/Logo";
import Project from "../../components/github/Projects";
import Profile from '../../components/github/Profile'
import Header from '../../components/header/Header'
import EmailMe from '../../components/form/EmailMe'

const Work = () => {
  return (
    <>
      <ThemeProvider theme={logo}>
        <StyledWork>
          <div className="work l-grid" >
            <Header bg="#f0f0f0" color="#000000"/>
            <Logo />
            <Project />
            <Profile />
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
  --blue: #008DFF;
  background-color: #f0f0f0; 
  .l-grid {
    min-height: 100vh;
    grid-template-column: 1fr;
    grid-template-rows:60px 375px auto auto auto  70px;
    
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
       color: ${({theme})=>theme.blue};
    }
`;
