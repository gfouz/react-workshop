import * as React from "react";
import styled from "styled-components";

function SkillList() {
  return (
    <StyledList>
      <div className="skills">
        <ul className="skills__list">
          <li className="skills__item">html</li>
          <li className="skills__item">css</li>
          <li className="skills__item">javascript</li>
        </ul>
        <ul className="skills__list">
          <li className="skills__item">ReactJs</li>
          <li className="skills__item">NextJs</li>
          <li className="skills__item">scss</li>
        </ul>
        <ul className="skills__list">
          <li className="skills__item">Redux</li>
          <li className="skills__item">Graphql</li>
          <li className="skills__item">Express</li>
        </ul>
      </div>
    </StyledList>
  );
}

export default SkillList;

const StyledList = styled.div`
  .skills {
    display: flex;
    justify-content: space-between;
    margin: 0 1em;
  }
  .skills__list {
    padding: 0;
    li {
      list-style-type: none;
      margin: 0.5em 0;
      color: #0b7859;
    }
  }
`;
