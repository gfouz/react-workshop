import * as React from 'react';
import { logo } from "../../theme";
import styled, { ThemeProvider } from "styled-components";

const Logo = () => {
  return (
   <>
     <ThemeProvider theme={logo}>
     <StyledLogo>
      <picture className="l-logo">
        <div className="logo">
          <div className="logo__item">
            <h1 className="logo__letter">G</h1>
          </div>
          <div className="logo__item">
            <h1 className="logo__letter">F</h1>
          </div>
          <div className="logo__item">
            <h1 className="logo__letter">O</h1>
          </div>
          <div className="logo__item">
            <h1 className="logo__letter">U</h1>
          </div>
          <div className="logo__item">
            <h1 className="logo__letter">Z</h1>
          </div>
        </div>
        <img src="./images/workLogo.svg" alt="logo" className="logo__image" />
        <h1 className="logo__title">WORK</h1>
      </picture>
    </StyledLogo>
  </ThemeProvider>
</>
  );
};
export const StyledLogo = styled.div`
  background-color: #f0f0f0; 
  .l-logo {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 2.5em 0 0 0;
  }
  .logo {
    position: relative;
    margin: 2em 0 0 0;
    width: 250px;
    height: 90px;
    overflow: hidden;
  }
  .logo__item {
    display: flex;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 115px;
    width: 20px;
    height: 170px;
    transform-origin: bottom;
    text-shadow: 1px 1px 9px #ffffff;
  }
  .logo__letter {
    color: ${({theme})=> theme.blue};
    margin: 0;
    font-size: 1.5em;
    font-family: literata;
  }
  .logo__title {
    margin: 1.5em 0;
    color: ${({theme})=> theme.blue};
    text-shadow: ${({theme})=> theme.fontshadow};
  }
  .logo__image {
    width: 100px;
  }
  .logo__item:nth-child(1) {
    transform: rotate(-40deg);
  }
  .logo__item:nth-child(2) {
    transform: rotate(-20deg);
  }
  .logo__item:nth-child(3) {
    transform: rotate(0);
  }
  .logo__item:nth-child(4) {
    transform: rotate(20deg);
  }
  .logo__item:nth-child(5) {
    transform: rotate(40deg);
  }
`;

export default Logo;
