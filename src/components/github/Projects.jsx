import * as React from 'react';
import { theme, logo } from "../../theme";
import styled, { ThemeProvider } from "styled-components";

const Project = () => {
  return (
    <>
      <ThemeProvider theme={logo}>
      <StyledProject>
        <article className="technology">
          <div className="l-flex l-flex--vw">
            <img
              src="./tech/react.svg"
              alt="react"
              className="technology__icon"
            />

            <div className="l-flex l-flex--column">
              <img
                src="./tech/next.svg"
                alt="logo"
                className="technology__icon technology__icon--l"
              />

              <nav className="navbar">
                <h5 className="navbar__title"><span>SOURCE</span> CODE ON <span>GITHUB</span></h5>
                <ul className="navbar__list">
                  <li className="navbar__item">
                    <a
                      className="navbar__link"
                      href="https://github.com/gfouz/react-workshop.git"
                    >
                      React-workshop
                    </a>
                  </li>
                  <li className="navbar__item">
                    <a
                      className="navbar__link"
                      href="https://github.com/gfouz/apollo-server.git"
                    >
                      Apollo-server
                    </a>
                  </li>
                  <li className="navbar__item">
                    <a
                      className="navbar__link"
                      href="https://github.com/gfouz/nextcms.git"
                    >
                      NextJs-CMS
                    </a>
                  </li>
                </ul>
              </nav>

              <img
                src="./tech/graphql.svg"
                alt="logo"
                className="technology__icon"
              />
            </div>

            <img
              src="./tech/redux.svg"
              alt="logo"
              className="technology__icon"
            />
          </div>
        </article>
      </StyledProject>
    </ThemeProvider>
    </>
  );
};

export default Project;

const StyledProject = styled.div`
  --yellow: #f9c035;
  --blue: #008DFF;
  --light: #999999;
  background-color: #1A1819;
  .technology {
    display: flex;
    margin: 0;
    align-items: center;
    justify-content: center;
    background-color: #1A1819;
    
    &__icon {
      width: 40px;
      margin: 1em;
    }
    &__icon--l {
      width: 100px;
    }
  }
  .l-flex {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
  .l-flex--column {
    flex-direction: column;
    justify-content: center;
  }
  .l-flex--vw {
    width: 100%;
  }

  .navbar {
    &__title {
      color: #ffffff;
      font-family: literata;
    }
    &__list {
      text-align: center;
    }
    &__item {
      margin: 0.2em 0;
      list-style-type: none;
    }
    &__link {
      color: #b5903f;
      text-decoration: none;
    }
    span {
      color:var(--blue);
    }
  }

  .technology {
    
  }
`;
