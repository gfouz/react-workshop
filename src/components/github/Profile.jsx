import * as React from 'react';
import { theme, logo } from "../../theme";
import styled, { ThemeProvider } from "styled-components";
import {outlook} from './constants'

const Profile = () => {
  return (
    <>
     <ThemeProvider theme={logo}> 
      <StyledProfile>
        <figure className="profile">
          <img 
           className="article__image" 
           src="./images/workImage.jpg" 
           alt="workImage" />
           <h3 className="profile__title">selft-taught</h3>
        </figure>
        <Section className="theme3">
        <Article>
        <h4 className="article__topic">Why ReactJs?, just one reason!</h4>
        <Avatar>
              <img
                src="./images/giov.svg"
                alt="giovani"
                className="avatar__frame"
              />
        </Avatar>
        <p className="article__text">
           {outlook}
        </p>
        </Article>
        {/*this is article number two*/}
        <Article>
            <img
                src="./images/profile2.jpg"
                alt="giovani"
                className="article__image"
              />
        </Article>  
        </Section>
      </StyledProfile>
    </ThemeProvider>  
    </>
  );
};

export default Profile;

const StyledProfile = styled.div`
     margin: 0;
     figure {
     position: relative;
     min-width: 100%;
     background-color: #cec8c8;
    }
    .profile {
      position: relative;
    }
    .profile__title {
      position: absolute;
      bottom: 20px;
      left: 20px;
      color: #ffffff;
      text-transform: uppercase;
      text-shadow: 1px 1px 5px #000000;
    }
    .article__image {
     max-width: 100%;
     height: auto;
    }   
    .theme3 {
      background-color: #f5f0ed;
    }
`;
const Section = styled.section`
     display: flex;
     justify-content: space-evenly;
     flex-direction: column;
     align-items: space-evenly;
     @media (min-width: 650px) {
       flex-direction: row;
     }
     color: ${({theme})=>theme.fontcolor};
     text-align: left;
     padding: 1em;
`;
const Article = styled.article`
  padding: 1em 0;
  margin: 1em 0;
  max-width: 450px;
  min-width: 320px;
  @media (min-width: 850px) {
    font-size: calc(0.4em + 1vw);
  }
  .article__topic {
        font-family: literata, Verdana, Times New Roman, calibri;
        margin:0;
        padding: 0 0 1em 0;
        text-align: center;
        color: #325c96;
        text-transform: uppercase;
     }
  .article__text {
        margin:0 0.1em;
        padding: 0;
        font-family: calibri;
     }
  
 
`;

export const Avatar = styled.div`
    border-radius: 50%;
    text-align: center;
    width: 70px;
    height: 70px;
    padding:0.2em 0.5em 0 0;
    margin: 0.5em 0 0 0;
    float: left;
  
  .avatar__frame {
    border-radius: 50%;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
