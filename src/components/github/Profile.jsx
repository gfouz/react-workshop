import * as React from 'react';
import { theme, logo } from "../../theme";
import styled, { ThemeProvider } from "styled-components";
import {outlook} from './constants'

const Profile = () => {
  return (
    <>
     <ThemeProvider theme={logo}> 
      <StyledProfile>
        <figure>
          <img src="./images/workImage.jpg" alt="workImage" />
        </figure>
        <Article>
        <Outlook>
        <h4 className="outlook__topic">Mi perspectiva personal</h4>
        <Myavatar>
              <img
                src="./images/giov.svg"
                alt="giovani"
                className="myavatar__frame"
              />
        </Myavatar>
        <p className="outlook__text">
           {outlook}
        </p>
        </Outlook>
        </Article>
      </StyledProfile>
    </ThemeProvider>  
    </>
  );
};

export default Profile;

const StyledProfile = styled.div`
     display: grid;
     place-items: center;
     margin: 2em 0 0 0;
     figure {
     position: relative;
     top: -2.1em;
     min-width: 100%;
     background-color: #cec8c8;
       img {
        max-width: 100%;
        height: auto;
       }
     }
`;
const Article = styled.article`
     display: flex;
     flex-direction: column;
     align-items: flex-start;
     justify-content: center;
     max-width: 700px;
     color: ${({theme})=>theme.fontcolor};
     text-align: left;
     padding: 1em;
`;
const Outlook = styled.div`
  .outlook__topic {
        font-family: literata, Verdana, Times New Roman, calibri;
        margin: 0.3em;
        text-align: center;
        color: #008DFF;
        text-transform: uppercase;
     }
  .outlook__image {
        float: left;
        width:60px;
        margin:0 0.5em;
     }
  .outlook__text {
        margin: 0.3em;
        font-family: calibri;
     }
  font-size: calc(0.7em + 1vw);
`;
export const Myavatar = styled.div`
    border-radius: 50%;
    text-align: center;
    width: 70px;
    height: 70px;
    margin: 1em 0.5em 0 1em;
    float: left;
  
  .myavatar__frame {
    border-radius: 50%;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
