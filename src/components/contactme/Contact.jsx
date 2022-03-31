import * as React from 'react';
import styled from "styled-components";
import { icons } from "./icons";


const Contact = (props) => {
  return (
    <>
      <StyledContact height={props.height} border={props.border} bgcolor={props.bgcolor} >
        <nav className="navbar">
          <ul className="navbar__list">
            {icons.map((icon, index) => (
              <li className="navbar__item" key={index}>
                <a href={icon.url} className="navbar__link" >
                  {icon.icon}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </StyledContact>
    </>
  );
};

export default Contact;

const StyledContact = styled.div`
  .navbar {
    border-radius: 10px;
    height: ${(props) => props.height || "70px"};
    border: ${(props)=> props.border || "none"};
    background-color: ${(props) => props.bgcolor || "transparent"};
    padding:0;
  }
  .navbar__list {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .navbar__item {
    padding:0;
    list-style-type: none;
    margin: 1em;
  }
  .navbar__link {
    padding: 0;
    margin: 0;
  }
`;
