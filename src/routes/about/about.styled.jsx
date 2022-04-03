import styled from "styled-components";

export const StyledAbout = styled.div`
 @mixin red {
  color: red;
 }
  --base-red: #ce5041;
  --blue: #0476ca;
  margin: 0;
  padding: 0;
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 300px 60px 370px auto auto auto 400px 70px;
  .outstanding__icon {
    margin: 0 0 0 2em;
    float: left;
    img {
      width: 70px;
    }
  }
  .aboutme {
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url('./images/landscape.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }
`;
export const Banner = styled.div`
  position: relative;
  background-color: #b9e0cb;
  min-width: 100%;
  height: 300px;
  padding: 2em 0 0 0;
  color: #ffffff;
  img {
    max-width: 100%;
    height: 250px;
    fit-object: cover;
  }
`;
export const Section = styled.section`
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: fit-content;
  @media (min-width: 700px) {
    flex-direction: row;
    align-items: flex-start;
  }
  .section__title {
    color: #3fb38e;
    font-family: calibri;
    margin: 0 0.7em;
    text-transform: uppercase;
  }
  .section__image {
    width: 100%;
    margin: 0;
    max-height: 350px;
    object-fit: cover;
    @media (min-width: 800px) {
    }
  }
`;
export const Article = styled.article`
  position: relative;
  text-align: left;
  max-width: 450px;
  min-width: 350px;
  height: auto;
  padding: 1em 0;
  font-size: calc(0.6em + 1vw);
  @media (min-width: 800px ) {
    flex: 1;
    font-size: calc(0.4em + 1vw);
  }
  .article__paragraph {
    margin: 0.5em 1em;
    color: #777777;
  }
  .article__image-title {
    position: absolute;
    left: 20px;
    color: #682012;
    text-shadow: 1px 1px 9px #ffffff;
    text-transform: uppercase;
    font-family: calibri;
  }
`;

export const CurvedTitle = styled.div`
  height: 370px;
  display: grid;
  place-items: center;
  padding: 0 0 3em 0;
  .arch {
    position: relative;
    display: grid;
    place-items: center;
    width: 90px;
    height: 90px;
    transform: rotate(-80deg);
    transform-origin: bottom center;
  }
  .arch span {
    position: absolute;
    bottom: -20px;
    left: -90px;
    height: 160px;
    font-size: 45px;
    transform-origin: bottom center;
    color: #682012;
    font-family: calibri;
  }
  .arch__icon {
    width: 100px;
  }
  .arch__frase {
    text-transform: uppercase;
    color: #682012;
    font-family: calibri;
  }
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
export const TechStack = styled.div`
  height: 350px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  img {
    width: 40px;
    height: auto;
    margin: 1em;
  }
  img:nth-child(3) {
    width: 40px;
  }
  .techstack__centerbar {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    height: 100%;
    img:nth-child(3) {
      width: 30px;
    }
    img:nth-child(1) {
      width: 80px;
    }
  }
  .techstack__title {
    font-family: calibri;
    color: #3fb38e;
    
  }
`;
export const Footer = styled.footer`
  height: 70px;
  background-color: #ffffff;
  //color: #333333;
  text-align: center;
  line-height: 70px;
  font-family: literata;
  font-weight: bolder;
   @include red;
`;


