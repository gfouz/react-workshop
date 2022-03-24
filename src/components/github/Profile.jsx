import * as React from 'react';
import { theme } from "../../theme";
import styled, { ThemeProvider } from "styled-components";
import {outlook} from './constants'

const Profile = () => {
  return (
    <>
      <StyledProfile>
        <article className="l-flex">
        <div className="outlook">
        <h4 className="outlook__topic">Mi perspectiva personal</h4>
        <img src="./images/lamp.svg" alt="developer" className="outlook__image"/>
        <p className="outlook__text">
           {outlook}
        </p>
        </div>
        </article>
      </StyledProfile>
    </>
  );
};

export default Profile;

const StyledProfile = styled.div`
     display: grid;
     place-items: center;
     margin: 2em 0;
   .l-flex {
     display: flex;
     flex-direction: column;
     align-items: flex-start;
     justify-content: center;
     max-width: 800px;
     color: ${({theme})=>theme.fontcolor};
     text-align: left;
     padding: 1em;
   }
   .outlook {
     font-size: calc(0.7em + 1vw);
     
     &__topic {
        font-family: calibri;
        margin: 0.3em;
        text-align: center;
        color: #008DFF;
        text-transform: uppercase;
     }
     &__image {
        float: left;
        width:60px;
        margin:0 0.5em;
     }
     &__text {
        margin: 0.3em;
     }
   }
`;
