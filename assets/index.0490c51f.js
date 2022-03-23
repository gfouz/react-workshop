var O=Object.defineProperty,H=Object.defineProperties;var J=Object.getOwnPropertyDescriptors;var _=Object.getOwnPropertySymbols;var F=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable;var q=(a,t,i)=>t in a?O(a,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):a[t]=i,f=(a,t)=>{for(var i in t||(t={}))F.call(t,i)&&q(a,i,t[i]);if(_)for(var i of _(t))A.call(t,i)&&q(a,i,t[i]);return a},x=(a,t)=>H(a,J(t));var E=(a,t)=>{var i={};for(var s in a)F.call(a,s)&&t.indexOf(s)<0&&(i[s]=a[s]);if(a!=null&&_)for(var s of _(a))t.indexOf(s)<0&&A.call(a,s)&&(i[s]=a[s]);return i};import{W as P,j as T,s as c,F as j,r as g,L as b,C as w,u as G,m as W,a as B,b as M,A as U,d as Y,T as Z,c as R,e as $,B as K,f as V,g as Q,h as X,i as ee,k as ae,l as D,n as ne,R as te,S as oe,o as re,p as ie,q as se,H as le,t as ce,v as u}from"./vendor.12718d1c.js";const de=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const m of r.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&s(m)}).observe(document,{childList:!0,subtree:!0});function i(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerpolicy&&(r.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?r.credentials="include":o.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(o){if(o.ep)return;o.ep=!0;const r=i(o);fetch(o.href,r)}};de();const I={primaryDark:"#0D0C1D",primaryLight:"#EFFFFA",primaryHover:"#343078",primary:"#ffffff",darkGray:"#282c34",mystic:"#282c34",olive:"#282c34",githubLinks:"#069696",transparent:"#d4d4d42d",scionGreen:"#1ab601",bgGrey:"d5d5d5",ultraViolet:"#601d8c",bk:"#000000",greenBase:"#e5f8d2",greenA700:"#00c853",greenA200:"#69f0ae",green100:"#c8e6c9",greenDark:"#071919",greenDK:"#173535",lightGreen:"#76ff03",blueGrey900:"#263238",grey800:"#424242",grey500:"#9e9e9e",mobile:"576px",fontcolor:"#444444",workbg:"linear-gradient(#071919, #173535)"},me={color:"#c51162",fontshadow:"1px 1px 9px #ffffff"},L=P`
  html, body {
    margin: 0;
    padding: 0;
    max-width: 1300px;
    height: 100vh;
  }
  *, *::after, *::before {
    box-sizing: border-box;
  }
  body {
    text-align: center;
    font-family: literata;
    height: 100vh;
    font-family: expanse;
    text-rendering: optimizeLegibility;
  
  }
  

  `,e=T.exports.jsx,n=T.exports.jsxs,d=T.exports.Fragment,he=()=>e(j,{theme:I,children:n(g.exports.Fragment,{children:[e(L,{}),e(ge,{children:n("div",{className:"l-grid homepage",children:[n("section",{className:"homepage__item",children:[e("h1",{className:"homepage__title",children:"portfolio"}),e("div",{className:"homepage__line"})]}),e("nav",{className:"navbar",children:n("ul",{className:"navbar__list",children:[e("li",{className:"navbar__item",children:e(b,{to:"/about",className:"navbar__link",children:"ABOUT"})}),e("li",{className:"navbar__item",children:e(b,{to:"/work",className:"navbar__link",children:"WORK"})}),e("li",{className:"navbar__item",children:e(b,{to:"/blog",className:"navbar__link",children:"BLOG"})})]})}),n("section",{className:"logo",children:[e("div",{className:"logo__image-container",children:e("img",{className:"logo__image",src:"./images/handshake-amber.svg",alt:"gfouz-logo"})}),e("h6",{className:"logo__skills",children:"WEB DEVELOPER"}),n("h1",{className:"logo__acronym",children:["GFOUZ \xA9 ",new Date().getFullYear()]})]})]})})]})}),ge=c.div`
  --green: #88ce02;
  --blue: #40c4ff;
  --brown: #F1993F;
  --green-weird: #255842;
  --red: #f92472;
  --black: #000000;
  --white: #ffffff;
  
  .l-grid {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    min-height: 100vh;
    background-color: #222222;
    color: #888888;
    }
  .homepage { 
    background-image: linear-gradient(#000000, #222222, #000000);
    &__item {
      width: 100%;
    }

    &__title {
      margin: 3em 0 0.1em 0;
      text-transform: uppercase;
      font-family: literata;
      font-size: 3em;
      color: var(--blue);
      animation: title 1s;
      animation-fill-mode: forwards;
    }
    &__line {
      height: 2px;
      margin: 0 auto;
      animation: line 3s;
      animation-fill-mode: forwards;
    }
    
  }
  .navbar {
    &__list {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 30px;
      width: 300px;
      padding: 0 !important;
      animation: navbar 1s;
      animation-fill-mode: forwards;
    }
    &__item {
      list-style-type: none;
    }
    &__link {
      margin: 0 1em;
      text-decoration: none;
      color: var(--white);
      text-shadow: 1px 1px 10px var(--black);
    }
  }
  .logo {
   &__image-container {
    width: 220px;
    height: auto;
    margin: 1em 0;
   }
   &__image {
      width: 100px;
   }

   &__skills {
      color: #ffffff;
      margin: 1em 0;
    }
    &__acronym {
    margin: 1.5em 0;
    color: var(--white);

    }
  }
  
  @keyframes line {
    0% {
      width: 0;
    }

    100% {
      width: 80%;
      background-color: #ffffff;
    }
  }
  @keyframes navbar {
    0% {
      transform: translateY(-50px);
      opacity: 0;
    }
    50% {
      transform: translateY(0);
      opacity: 0.1;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
  @keyframes title {
    0% {
      transform: translateY(50px);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
`,ue=()=>e(d,{children:e(j,{theme:me,children:e(pe,{children:n("picture",{className:"l-logo",children:[n("div",{className:"logo",children:[e("div",{className:"logo__item",children:e("h1",{className:"logo__letter",children:"G"})}),e("div",{className:"logo__item",children:e("h1",{className:"logo__letter",children:"F"})}),e("div",{className:"logo__item",children:e("h1",{className:"logo__letter",children:"O"})}),e("div",{className:"logo__item",children:e("h1",{className:"logo__letter",children:"U"})}),e("div",{className:"logo__item",children:e("h1",{className:"logo__letter",children:"Z"})})]}),e("img",{src:"./images/workLogo.svg",alt:"logo",className:"logo__image"}),e("h1",{className:"logo__title",children:"WORK"})]})})})}),pe=c.div`
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
    color: ${({theme:a})=>a.color};
    margin: 0;
    font-size: 1.5em;
    font-family: literata;
  }
  .logo__title {
    margin: 1.5em 0;
    color: ${({theme:a})=>a.color};
    text-shadow: ${({theme:a})=>a.fontshadow};
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
`,fe=()=>e(d,{children:e(be,{children:e("article",{className:"technology",children:n("div",{className:"l-flex l-flex--vw",children:[e("img",{src:"./tech/react.svg",alt:"react",className:"technology__icon"}),n("div",{className:"l-flex l-flex--column",children:[e("img",{src:"./tech/next.svg",alt:"logo",className:"technology__icon technology__icon--l"}),n("nav",{className:"navbar",children:[e("h5",{className:"navbar__title",children:"SOURCE CODE ON GITHUB"}),n("ul",{className:"navbar__list",children:[e("li",{className:"navbar__item",children:e("a",{className:"navbar__link",href:"https://github.com/gfouz/markdown-jsx.git",children:"Markdown-jsx"})}),e("li",{className:"navbar__item",children:e("a",{className:"navbar__link",href:"https://github.com/gfouz/apollo-server.git",children:"Apollo-server"})}),e("li",{className:"navbar__item",children:e("a",{className:"navbar__link",href:"https://github.com/gfouz/nextcms.git",children:"NextJs-CMS"})})]})]}),e("img",{src:"./tech/graphql.svg",alt:"logo",className:"technology__icon"})]}),e("img",{src:"./tech/redux.svg",alt:"logo",className:"technology__icon"})]})})})}),be=c.div`
  .technology {
    display: flex;
    padding: 2.5em 0;
    align-items: center;
    justify-content: center;
    background-color: #222222;
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
      color: #999999;
      font-family: literata;
    }
    &__item {
      margin: 0.4em 0;
      list-style-type: none;
    }
    &__link {
      color: #777777;
      text-decoration: none;
    }
  }

  .technology {
    &__icon {
      width: 40px;
      margin: 1em;
    }
    &__icon--l {
      width: 100px;
    }
  }
`,ye=`S\xE9 que para gustos los colores, pero en mi caso he podido 
          comprobar las cosas muy buenas y grandes beneficios que ofrece React Js y su
          ecosistema, esta tecnolog\xEDa me ha exigido aprender m\xE1s acerca de
          JavaScript y mejorar como desarrollador web. Tesla, Netflix, Whatsapp,
          PayPal, Uber, BBC, Airbnb, Dropbox, evidentemente Facebook e Instagram
          y muchas otras, se han decidido por emplear React y estas empresas se
          encuentran ahora en la cima del \xE9xito de la industria de las
          tecnolog\xEDas, este \xE9xito de React se debe a la eficiencia, rapidez y
          c\xF3digo simplificado de esta ligera herramienta la cual ha
          revolucionado con nuevas innovaciones la manera en que se crean las
          interfaces de usuarios. Opino que tambien hay otras tecnolog\xEDas de
          gran importancia para ser incluidas en mi stack 
          Pero las tecnolog\xEDas est\xE1n en constante cambios e innovaciones, de modo que
          hay que seguir aprendiendo y estudiando los nuevos conceptos y conocimientos de
          forma continua.
`,ve=()=>e(d,{children:e(_e,{children:e("article",{className:"l-flex",children:n("div",{className:"outlook",children:[e("h4",{className:"outlook__topic",children:"Mi perspectiva personal"}),e("img",{src:"./images/lamp.svg",alt:"developer",className:"outlook__image"}),e("p",{className:"outlook__text",children:ye})]})})})}),_e=c.div`
     display: grid;
     place-items: center;
     margin: 2em 0;
   .l-flex {
     display: flex;
     flex-direction: column;
     align-items: flex-start;
     justify-content: center;
     max-width: 800px;
     color: ${({theme:a})=>a.fontcolor};
     text-align: left;
     padding: 1em;
   }
   .outlook {
     font-size: calc(0.7em + 1vw);
     
     &__topic {
        font-family: calibri;
        margin: 0.3em;
        text-align: center;
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
`,xe=c.div`
  --tallness: ${a=>a.height||"60px"};  
  
  width: 100%;
  height: var(--tallness);
  top: 0;
  left: 0;
  right: 0;
  margin: ${a=>a.margin||"margin: 0"};
  background-color: ${a=>a.bg||"#444444"};
  position: ${a=>a.position};

  .links {
    display: flex;
    justify-content: space-evenly;
    a {
      color: ${a=>a.color||"#ffffff"};
      text-decoration: none;
      text-transform: uppercase;
      line-height: var(--tallness);
      @media (max-width: 500px){
         display: ${a=>a.display||""};
      }
    }
  }
  .logo {
    width: var(--tallness);
    height: var(--tallness);
    display: ${a=>a.logo||"none"};
    justify-content: center;
    align-items: center;
    place-items: center;
    img {
      width: calc(var(--tallness) - 40%);
      display: block;
    }
  }
  .hidden {
    display: none;
  }
  .visible {
    font-family: inherit;
  }

  ${a=>a.dark&&w`
      background: ${({theme:t})=>t.grey800};
      .navbar-links {
        a {
          color: #ffffff;
        }
      }
    `}

    ${a=>a.mixed&&w`
      background-image: linear-gradient(#808080, #000000);
      .navbar-links {
        a {
          color: #ffffff;
        }
      }
    `}

  ${a=>a.light&&w`
      background: ${({theme:t})=>t.grey100};
      .navbar-links {
        a {
          color: ${({theme:t})=>t.cyan900};
        }
      }
    `}

  ${a=>a.primary&&w`
      background: ${({theme:t})=>t.blue500};
      .navbar-links {
        a {
          color: ${({theme:t})=>t.wt};
        }
      }
    `}
`;function S(a){const t=["/about","/work","/blog","/"],i=G(),{pathname:s}=i,o=t.filter(r=>r!==s);return e(d,{children:e(xe,{color:a.color,bg:a.bg,fontFamily:a.font,position:a.position,height:a.height,margin:a.margin,logo:a.logo,children:n("div",{className:"links",children:[e("div",{className:"logo",children:a.children}),o.map((r,m)=>e("div",{children:e(b,{className:"links__item",to:`${r}`,children:r==="/"?"home":r.slice(1)})},r+m))]})})})}const we=W(a=>({l_grid:{margin:"1em 0",display:"flex",flexDirection:"column",alignItems:"center",padding:"2em 0"},avatar:{margin:a.spacing(2),backgroundColor:a.palette.secondary.main},form:{width:"100%",marginTop:a.spacing(1)},form__input:{display:"flex",flexDirection:"column",alignItems:"center"},warnings:{color:"#c51162",textTransform:"uppercase",fontSize:"10px"},formHide:{display:"none"},submit:{display:"block",margin:"2em auto"}})),ke=()=>{g.exports.useState("");const a=we(),{control:t,handleSubmit:i}=B({defaultValues:{email:"",message:""}});function s(o){V.post("https://formsubmit.co/gfouz1975@gmail.com",{data:o}).then(function(r){console.log(r)}).catch(function(r){console.log(r)})}return e(M,{children:n("div",{className:a.l_grid,children:[e(U,{className:a.avatar,children:e(Y,{})}),e(Z,{component:"h1",variant:"h6",children:"Contact me"}),n("form",{className:"form",onSubmit:i(s),children:[e(R,{name:"email",control:t,rules:{pattern:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,required:!0},render:({field:o,formState:{errors:r,isSubmitted:m}})=>{var l,h;return n("div",{className:a.form__input,children:[e($,x(f({},o),{variant:"outlined",margin:"normal",label:"Email",color:r.email?"secondary":"primary"})),((l=r.email)==null?void 0:l.type)==="pattern"&&e("span",{className:a.warnings,children:"email includes an @ symbol !"}),((h=r.email)==null?void 0:h.type)==="required"&&e("span",{className:a.warnings,children:"email is required !"})]})}}),e(R,{name:"message",control:t,rules:{required:!0},render:({field:o,formState:{errors:r,isSubmitted:m}})=>{var l;return n("div",{className:a.form__input,children:[e($,x(f({},o),{variant:"outlined",margin:"normal",label:"Message",color:r.message?"secondary":"primary"})),((l=r.message)==null?void 0:l.type)==="required"&&e("span",{className:a.warnings,children:"This field must not be empty !"})]})}}),e(K,{type:"submit",variant:"contained",color:"secondary",className:a.submit,children:"Submit"})]})]})})},Ne=()=>e(d,{children:e(j,{theme:I,children:e(je,{children:n("div",{className:"l-grid",children:[e(S,{bg:"#f0f0f0",color:"#000000"}),e(ue,{}),e(fe,{}),e(ve,{}),e(ke,{}),e("footer",{className:"l-grid__footer",children:n("h4",{className:"l-grid__title",children:["Gfouz \xA9 ",new Date().getFullYear()," Made with ReactJs"]})})]})})})}),je=c.div`
  background-color: #f0f0f0; 
  .l-grid {
    min-height: 100vh;
    grid-template-column: 1fr;
    grid-template-rows:60px 375px auto auto auto 70px;
    &__footer {
       height: 70px;
       display: grid;
       place-items: center;
       color: #ffffff;
       background-color: #222222;
       font-family: literata;
    }
    &__title {
       margin: 1em;
       font-size: 0.7em;
    }
  }
`,Se=c.div`
  --red: #cb3837;
  --yellow: #ffc329;
  --brown: #a0450e;
  --orange: #f7482e;
  --green:  #80cc28;
  --grey: #797777;
  --brick: #973443;
  --clay: #7a4338;
  --beige: #b38f55;
  --amber: #e2cd9a;

  .about-container {
    margin: 0;
    padding: 0;
    min-height: 100vh;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 350px 100px auto 250px auto 250px 70px;
  }
  .upperbar {
    height: 350px;
    display: grid;
    place-items: center;
  }
  .upperbar__image {
    width: 140px;
  }
  .outstanding {
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: fit-content;
    @media (min-width: 500px) {
      flex-direction: row;
      align-items: flex-start;
    }
  }
  .outstanding__item {
    position: relative;
    text-align: left;
    height: auto;
    font-size: calc(0.8em + 1vw);
    @media (min-width: 500px) {
      flex: 1;
      font-size: calc(0.6em + 1vw);
    }
  }
  .outstanding__avatar-container {
    border-radius: 50%;
    text-align: center;
    width: 70px;
    height: 70px;
    margin: 1em 0.5em 0 1em;
    float: left;
  }
  .outstanding__avatar {
    border-radius: 50%;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .outstanding__title {
    color: #666666;
    margin: 0 0.5em 0 1em;
  }
  .outstanding__paragraph {
    margin: 0.5em 1em;
    color: #777777;
  }
  .outstanding__laptop-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .outstanding__image-title {
    position: absolute;
    bottom: 40px;
    right: 30px;
    text-shadow: 1px 1px 9px #ffffff;
  }
  .outstanding__icon {
    margin: 0 1em;
    float: left;
    img {
      width: 70px;
    }
  }
  .outstanding__stack {
    color: #666666;
    margin: 2em 0.5em 0 1em;
  }
  .list-group {
    display: flex;
    justify-content: space-between;
    margin: 0 0.8em;
  }
  .list {
    padding: 0;
     li {
      list-style-type: none;
      margin: 0;
      color: #33691e;
    }
  }
  .technologies {
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
  }
  .column {
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
  footer {
    height: 70px;
    background-color: #222222;
    color: #999999;
    text-align: center;
    line-height: 70px;
    font-family: literata;
  }
  .upperbar__title-container {
    position: relative;
    display: grid;
    place-items: center;
    width: 90px;
    height: 90px;
    transform: rotate(-80deg);
    transform-origin: bottom center;
  }
  .upperbar__title-container span {
    position: absolute;
    bottom: -20px;
    left: -90px;
    height: 160px;
    font-size: 45px;
    transform-origin: bottom center;
    color: #ff0000;
  }
`,Ce=`
  'const' nos va ayudar a declarar variables inmutables, 
  esto es, a declarar variables cuyo valor no pueda ser 
  cambiado a lo largo del ciclo de vida de una variable.
  si intentamos asignar un nuevo valor a la constante, 
  se nos lanzar\xE1 una excepci\xF3n con el error provocado.
  Tenemos que tener cuidado cuando deseemos almacenar 
  un objeto JSON en una constante de JavaScript.
  cuando asignamos un objeto a una variable, no estamos 
  almacenando el objeto en si en esa variable, si no que
  se est\xE1 almacenando una referencia al objeto. Se almacena 
  el puntero con la posici\xF3n donde se encuentra el objeto real.
  Por tanto, si seguimos esta l\xF3gica, lo que \u2018const\u2019 est\xE1 convirtiendo 
  en inmutable no es el objeto en si, si no la referencia a ese objeto.
`,ze=`
  La composici\xF3n es la piedra angular que nos permitir\xE1 a partir de 
  funciones puras gen\xE9ricas crear funciones m\xE1s espec\xEDficas para al 
  final construir nuestros programas.Similar a como en la m\xFAsica las notas 
  (funciones puras) conforman acordes (funciones de dominio compuestas)
   y los acordes conforman obras (pieza de software), la composici\xF3n ser\xE1 
   el pegamento que nos permitir\xE1 desarrollar nuestros programas.
`,Te=`
  I use modern JavaScript frameworks such as React and Vue to create
  single page application or full static sites so that among my
  skills are HTML, CSS, SCSS and JAVASCRIPT. And i am not afraid of
  getting out of the comfort zone and trying out new things. I began
  learning C plus plus in 2017 in order to write firmwares for
  micro-controllers. I was studying this language for more than a
  year but eventually i realized that i needed to learn technologies
  that afford a job, so that i have been wagering on ReactJs as my
  favourite choosing.
`,z=[{title:"Constantes de JavaScript",paragraph:Ce},{title:"Composici\xF3n funcional",paragraph:ze},{title:"introduction",paragraph:Te}],k={fontSize:"30px",color:"#455a64"},Ie=[{icon:e(Q,{style:k}),url:"https://github.com/gfouz",name:"github"},{icon:e(X,{style:k}),url:"//https://api.whatsapp.com/send?phone=+5354278815",name:"telegram"},{icon:e(ee,{style:k}),url:"https://github.com/gfouz",name:"email"},{icon:e(ae,{style:k}),url:"//https://api.whatsapp.com/send?phone=+5354278815",name:"whatsapp"}],qe=a=>e(d,{children:e(Fe,{height:a.height,children:e("nav",{className:"navbar",children:e("ul",{className:"navbar__list",children:Ie.map((t,i)=>e("li",{className:"navbar__item",children:e("a",{href:t.url,className:"navbar__link",children:t.icon})},i))})})})}),Fe=c.div`
  .navbar {
    height: ${a=>a.height||"70px"};
  }
  .navbar__list {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .navbar__item {
    list-style-type: none;
    margin: 2em;
  }
  .navbar__link {
    padding: 0;
    margin: 0;
  }
`,Ae=()=>{const a=g.exports.useRef(null),t=()=>{const i=a.current.textContent.split("");a.current.textContent="",i.forEach((s,o)=>{a.current.innerHTML+='<span style="transform:rotate('+(o+1)*20+'deg)">'+s+"</span>"})};return g.exports.useEffect(()=>{t()},[]),e(d,{children:n(Se,{children:[n("figure",{className:"upperbar",children:[e("div",{className:"upperbar__title-container",children:n("h1",{ref:a,className:"upperbar__title",children:[" ","GFOUZ"," "]})}),e("img",{src:"./images/handshake-red.svg",alt:"gfouz-logo",className:"upperbar__image"})]}),e(S,{height:"100px",bg:"#ffffff",color:"#ff0000",margin:"2em 0"}),n("section",{className:"outstanding",children:[n("article",{className:"outstanding__item",children:[e("div",{className:"outstanding__avatar-container",children:e("img",{src:"./images/giov.svg",alt:"giovani",className:"outstanding__avatar"})}),e("h3",{className:"outstanding__title",children:"A brief introduction about me"}),e("p",{className:"outstanding__paragraph",children:z[2].paragraph})]}),n("article",{className:"outstanding__item",children:[e("img",{src:"./images/laptop.jpg",className:"outstanding__laptop-image",alt:"laptop"}),e("h4",{className:"outstanding__image-title",children:"ReactJs developer"})]})]}),n("article",{className:"technologies",children:[e("img",{src:"./images/react.svg",alt:"react"}),n("div",{className:"column",children:[e("img",{src:"./images/next.svg",alt:"next"}),e("h3",{children:"THIS IS MY STACK"}),e("img",{src:"./images/graphql.svg",alt:"graphql"})]}),e("img",{src:"./images/redux.svg",alt:"redux"})]}),n("section",{className:"outstanding",children:[n("article",{className:"outstanding__item",children:[e("div",{className:"outstanding__icon",children:e("img",{src:"./images/greylamp.svg",alt:"giovani"})}),e("h3",{className:"outstanding__title",children:"Conceptos importantes"}),e("p",{className:"outstanding__paragraph",children:z[0].paragraph})]}),n("article",{className:"outstanding__item",children:[e("h3",{className:"outstanding__title",children:"Tambien importante"}),e("p",{className:"outstanding__paragraph",children:z[1].paragraph}),e("h5",{className:"outstanding__stack",children:"STACK QUE UTILIZO:"}),n("div",{className:"list-group",children:[n("ul",{className:"list",children:[e("li",{children:"html"}),e("li",{children:"css"}),e("li",{children:"javascript"})]}),n("ul",{className:"list",children:[e("li",{children:"ReactJs"}),e("li",{children:"NextJs"}),e("li",{children:"scss"})]}),n("ul",{className:"list",children:[e("li",{children:"Redux"}),e("li",{children:"Graphql"}),e("li",{children:"Express"})]})]})]})]}),e(qe,{height:"250px"}),n("footer",{className:"bottom-bar",children:[" ","Gfouz \xA9 ",new Date().getFullYear()," "]})]})})};var N=[{id:1644015600,img:"deploy.jpg\r",title:"Continuous deployment.\r",author:"Giovani Fouz Jim\xE9nez\r",date:"febraury 5, 2022\r",description:"Continuous deployment and...\r",position:"right\r",content:`\r
Continuous integration (CI) and continuous delivery (CD) are two\r
approaches to software development that are designed to improve code\r
quality and enable rapid delivery and deployment of code. They are\r
usually deployed together (CI/CD) to ensure rapid overall delivery of\r
new software features and fixes.\r
\r
## Continuous integration vs. continuous delivery\r
\r
The develop and test phase of software development is the\r
focus of continuous integration. As developers change software code,\r
those changes are immediately checked into a central source code\r
control system. When code is checked in, automated build processes and\r
tests are triggered to make sure that the changes did not break the\r
larger software system being worked on. When shorter and more frequent\r
develop-build-test cycles are used, coding errors are caught more\r
quickly, and the risk associated with large-scale code changes is\r
mitigated.\r
\r
Continuous delivery means that as new software features and\r
fixes pass through the develop-build-test cycle, they become available\r
as rapidly as possible. When smaller changes are delivered more\r
frequently into production, the risk of large-scale changes breaking\r
the system goes down, and the delay in releasing them to customers is\r
minimized.\r
\r
## What is continuous deployment?\r
Continuous deployment extends CI/CD so that all changes that pass the\r
CI/CD phase are immediately exposed to customers. With continuous\r
deployment, customers get faster access to new features and bug fixes,\r
and developers get more immediate feedback about the changes they\u2019ve\r
made. \r
\r
Top CI/CD tools Some common CI/CD tools are: CloudBees`},{id:1645398e3,img:"inmutable.jpg\r",title:"Inmutabilidad\r",author:"Giovani Fouz Jim\xE9nez\r",date:"febraury 21, 2022\r",description:"Que significa inmutabilidad y porque es tan importante...\r",position:"center\r",content:`\r
## Mutable o Inmutable.\r
\r
El desarrollo con datos inmutables es un principio fundamental de la\r
programaci\xF3n funcional que se est\xE1 extendiendo tambi\xE9n en la\r
programaci\xF3n orientada a objeto. Su planteamiento b\xE1sico es muy\r
sencillo: un dato u objeto, una vez creado, no puede ser cambiado,\r
manteniendo su estado original en todo momento. Si por alg\xFAn motivo se\r
tuviera que cambiar el dato, entonces se obtendr\xEDa una copia con los\r
datos modificados, pero nunca se cambian los valores originales. Lo\r
contrario a la inmutabilidad es la mutabilidad, es decir, la capacidad\r
para cambiar el valor o el estado de los elementos de un lenguaje de\r
programaci\xF3n. Cuando cambiamos el valor de una propiedad, o la\r
referencia de una variable, estamos haciendo uso de mutabilidad, es\r
decir, de la capacidad de cambiar.\r
\r
## Utilidad de 'const' en JavaScript.\r
\r
'const' nos va ayudar a declarar variables inmutables, esto es, a\r
declarar variables cuyo valor no pueda ser cambiado a lo largo del\r
ciclo de vida de una variable. si intentamos asignar un nuevo valor a\r
la constante, se nos lanzar\xE1 una excepci\xF3n con el error provocado.\r
Tenemos que tener cuidado cuando deseemos almacenar un objeto JSON en\r
una constante de JavaScript. cuando asignamos un objeto a una\r
variable, no estamos almacenando el objeto en si en esa variable, si\r
no que se est\xE1 almacenando una referencia al objeto. Se almacena el\r
puntero con la posici\xF3n donde se encuentra el objeto real. Por tanto,\r
si seguimos esta l\xF3gica, lo que \u2018const\u2019 est\xE1 convirtiendo en inmutable\r
no es el objeto en si, si no la referencia a ese objeto.\r
\r
\`\`\`js\r
(() => {\r
  const url = "https://gist.github.com/";\r
  url = "http://www.as.com"; // Lanza un error!\r
})();\r
\`\`\`\r
\r
#### Sin embargo, no se produce error al asignar nuevos valores \r
a la propiedades de un objeto:\r
\r
\`\`\`js\r
(() => {\r
  const obj = {\r
    nombre: "Giovani",\r
  };\r
  obj.apellidos = "propiedad, valor mutable";\r
  obj.nombre = "cambio el valor,no hay excepci\xF3n";\r
\r
  console.log(any);\r
})();\r
\r
\`\`\`\r
Reitero lo anterior respecto a JavaScript,cuando asignamos un \r
objeto a una variable,no estamos almacenando el objeto en si \r
en esa variable, si no que se est\xE1 almacenando una referencia \r
del objeto. Se almacena el puntero con la posici\xF3n en memoria \r
donde se encuentra el objeto real.\r
\r
`},{id:1642201200,img:"laptopstand.jpg\r",title:"What is a hash table.\r",author:"Giovani Fouz Jim\xE9nez\r",date:"january 15, 2022\r",description:"What is a hash table...\r",position:"top\r",content:`\r
## What is a hash table?\r
A hash table (often called a hash map) is a data structure that maps\r
keys to values. Hash tables combine lookup, insert, and delete\r
operations in an efficient way. The key is sent to a hash function that\r
performs arithmetic operations on it. The result (called the hash\r
value or hash) is an index of the key-value pair.\r
This data structure is widely used in many kinds of computer software,\r
particularly for associative arrays, database indexing, caches, and\r
sets. Usually, this operation returns the same hash for a given key.\r
The performance of a hash table depends on three fundamental factors\r
hash function, size of the hash table, and collision handling method.\r
\r
## Hash tables are made up of two parts:\r
Object: An object with the table where the data is stored. The array holds all the key-value\r
entries in the table. The size of the array should be set according to the amount of data expected.\r
Hash function (or mapping function): This function determines the index of our key-value\r
pair. It should be a one-way function and produce the a different hash for each key.\r
Note: In JavaScript, hash tables are generally implemented using arrays\r
as they provide access to elements in constant time.\r
\r
## Uses of hash tables\r
Hash tables provide access to elements in constant time, so they are\r
highly recommended for algorithms that prioritize search and data\r
retrieval operations. Hashing is ideal for large amounts of data, as\r
they take a constant amount of time to perform insertion, deletion,\r
and search. In terms of time complexity, the operation is 0(1). On\r
average, a hash table lookup is more efficient than other table lookup\r
data structures.\r
Some common uses of hash tables are:\r
Database indexing\r
Caches\r
Unique data representation\r
Lookup in an unsorted array\r
Lookup in sorted array using binary search\r
\r
## What is a hash function?\r
A hash function is a method or function that takes an item\u2019s key as an\r
input, assigns a specific index to that key and returns the index\r
whenever the key is looked up. This operation usually returns the same\r
hash for a given key. A good hash function should be efficient to\r
compute and uniformly distribute keys. Hash functions help to limit\r
the range of the keys to the boundaries of the array, so we need a\r
function that converts a large key into a smaller key. This is the job\r
of the hash function.\r
\r
there is much more to talk on this interesting subject \r
but i will cover it on a future article.\r
\r
Happy learning!`},{id:1645052400,img:"golden.jpg\r",title:"Ternary operators \r",author:"Giovani Fouz Jim\xE9nez\r",date:"febraury 17, 2022\r",description:"How to simplify your code with...\r",position:"center\r",content:`\r
## Check Data Quickly with the Ternary Operator\r
\r
I love simple code. I\u2019ll always try to get\r
an expression reduced down to the fewest characters I can.\r
I used to code as the following snippet shows some time back:\r
\r
\`\`\`js\r
    if(active) {\r
        var display = 'bold'\r
      }else {\r
        var display = 'normal'\r
    }\r
\`\`\`\r
But when i get to know 'ternary operators' \r
I simplified the code to a one-line expression \r
and my code has never been the same.\r
\r
\`\`\`js\r
 var display = active ? 'bold' : 'normal';   \r
\r
\`\`\`\r
\r
Ternary operators are common in most languages, and they allow you to\r
do a quick if/then check. (Although they aren\u2019t exclusively for this\r
purpose, it is by far the most common usage.) If the ternary operator\r
isn\u2019t new, why should it interest me? In returning to some of the\r
larger themes we\u2019ve been exploring, ternary expressions allow your\r
code to be not just more simple as I\u2019ve mentioned, but also more pre-\r
dictable. They do this because they cut down on the number of\r
variables that are being reassigned. Besides, with new variable types,\r
we hit some problems with excessive if/else statements. If you try to\r
check a variable and you\u2019re using a block scoped variable, you won\u2019t\r
be able to access the variable outside of the check.\r
\r
\`\`\`js\r
 if (title === 'manager') {\r
    const permissions = ['time', 'pay'];\r
    } else {\r
    const permissions = ['time'];\r
    }\r
    permissions;\r
// ReferenceError: permissions is not defined\r
\r
\`\`\`\r
Now you\u2019re forced to either use  var , which is accessible outside the block\r
scope, or you have to define the variable with  let and then reassign it inside\r
the  if/else block. Here\u2019s how it would look with the assignment before the block:\r
\r
\`\`\`js\r
 if (title === 'manager') {\r
    const permissions = ['time', 'pay'];\r
    } else {\r
    const permissions = ['time'];\r
    }\r
    permissions;\r
// ReferenceError: permissions is not defined\r
\r
\`\`\`\r
Before  let and  const , we didn\u2019t have to worry so much about when variables\r
were created. Now, in addition to excessive code, there\u2019s a potential for scope\r
conflicts.\r
Ternary expressions solve these problems. Clearly, they cut down on a lot of\r
extra code. But they also allow us to be more predictable by assigning a\r
value directly to  const . How could you rewrite the preceding code to use  const\r
and a ternary?\r
\r
\`\`\`js\r
 const permissions = title === 'manager' ? ['time', 'pay'] : ['time']\r
\r
\`\`\`\r
Much cleaner and you now have a predictable value.\r
There\u2019s one caution we should keep in mind: Though we can chain multiple\r
ternary expressions together, we should avoid doing so.\r
Ternary expressions can simplify things, but use them when they add value\r
and go back to standard 'if blocks' if they create too much ambiguity.\r
`}];function Ee(){return e(d,{children:e(Re,{children:e("div",{className:"postlist",children:n("div",{className:"posts",children:[e("h3",{className:"posts__topic",children:"you might interest"}),N.length&&N.map((a,t)=>n("div",{className:"posts__card",children:[e("img",{className:"posts__image",src:`./images/${a.img}`,alt:"post"}),n("div",{className:"posts__card-text",children:[e("h4",{className:"posts__title",children:a.title}),n("small",{className:"posts__info",children:["Published on: ",a.date," by ",a.author]}),e("p",{className:"posts__description",children:a.description}),e(b,{className:"posts__link",to:`/post/${a.id}`,children:"Read More"})]})]},a.id))]})})})})}const Re=c.div`
 height: 100%;
 --violet: #820aa1;
 --blue: #3f8897;
 --black: #444444;
 --brown: #4b2c17;
 --chocolate: #443c2d;

 @mixin bg {
   background-color: red;
 }
.postlist {
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
    min-height: 100%;
    margin: 3em 0;

}
.posts__topic {
   color: var(--chocolate);
   font-family: literata;
   text-transform: uppercase;
}
.posts__card {
    display: flex;
    max-width: 700px;
    height: 200px;
    color: #c7bfa41;
    margin: 2em;
    transition: all 0.2s;
    text-align: left;
    font-family: literata;
    border-radius: 5px;
    box-shadow: 1px 1px 10px #9c4508;
  }
.posts__card:hover {
  transform: scale(1.02);
  box-shadow: 1px 1px 10px #000000;
}
.posts__card-text {
    border-color:#0168b8;
    border-radius: 5px;
    padding: 1em;
    margin: 0 0.5em;
    color: #333333;
    font-size: calc(0.6em + 1vw)
} 

.posts__title {
    color: #999999;
    margin: 0;
    padding: 0 0.3em;
    font-weight: bolder;
    text-transform: uppercase;
  }
.posts__image {
   max-width: 150px;
   height: auto;
   object-fit: cover;
}  
.posts__body {
  
 }
.posts__description {
  color: #999999;
}
.posts__link {
  position: relative;
  top: 10px;
  margin: 0 0 1em 0;
  color: #0168b8;
}


`;function $e(){return e(d,{children:e(De,{children:n("div",{className:"l-blog",children:[e(S,{bg:"#25180c",color:"#ffffff"}),n("section",{className:"blog",children:[e("div",{className:"blog__image",children:e("h1",{className:"blog__title",children:"Let's be inquisitive as children."})}),e("article",{className:"blog__posts",children:e(Ee,{})})]}),e("footer",{className:"blog-footer",children:n("h3",{children:["gfouz \xA9 ",new Date().getFullYear()," made with react"]})})]})})})}const De=c.div`
  --violet: #820aa1;
  --grey: #222222;
  --blue: #3f8897;
  --brown: #25180c;

  .l-blog {
    display: grid;
    grid-template-rows: 60px auto 60px;
    grid-template-cols: 1fr;
    min-height: 100vh;
  }
  .blog {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

  }
  .blog__image {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    width: 100%;
    height: 500px;
    background-image: url('./images/blog.jpg');
    background-size: 1300px;
    background-position: center;
    background-repeat: no-repeat;
    }
  .blog__title {
    margin: 0 0 2.2em 0;
    font-family: calibri;
    color: #ffffff;
    text-transform: uppercase;
    background-color: #846040;
    padding: 0 5px;
    border-radius: 9px;
  }
    
  }
  .blog-footer {
    background-color: var(--brown);
    display: grid;
    place-items: center;
    color: #ffffff;
  }
`,Le=a=>{const t=D(),i=ne(),s=parseInt(t.id),o=a.posts.map(p=>p.id),r=o.indexOf(s),[m,l]=g.exports.useState(!0),[h,C]=g.exports.useState(r);g.exports.useEffect(()=>{i(`/post/${o[h]}`)},[h]);function y(){h<o.length-1?C(p=>p+1):l(!1),h===o.length-1?l(!1):l(!0)}function v(){h>0?C(p=>p-1):i("/blog"),l(!0)}return e(d,{children:e(Oe,{color:a.color,children:n("section",{className:"navigate",children:[e("nav",{className:"navigate__prev",children:e("button",{className:"btn btn-back",onClick:v,children:"PREV"})}),e("nav",{className:"navigate__next",children:e("button",{className:m?"btn":"btn  btn--disabled",onClick:y,children:"NEXT"})})]})})})},Oe=c.div`
  --violet: #820aa1;
  --blue: #3f8897;
  .navigate {
    margin: 2em 0;
    heigth: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .btn {
    width: 80px;
    outline: none;
    border: none;
    border-radius: 8px;
    padding: 0.3em 1em;
    margin: 1em;
    color: #222222;
    text-transform: uppercase;
    font-weight: bolder;
  }
  .btn--disabled {
    color: #ff0000;
    background-color: #999999;
  }
`;function He(){const a={},t=D(),i=parseInt(t.id);N.forEach((o,r)=>{i===o.id&&(a.content=o.content?o.content:"no given content",a.id=o.id?o.id:"no given id",a.img=o.img?o.img:"no give data",a.position=o.position?o.position:"no given position")});const s={backgroundImage:`url(./images/${a.img})`,backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:a.position,height:"400px"};return e(d,{children:e(Je,{children:e("div",{className:"l-post",children:n("section",{className:"post",children:[e(S,{bg:"#25180c",color:"#ffffff"}),e("div",{className:"post__image",style:s}),e(te,{id:a.id,className:"post__markdown",children:a.content,components:{code(C){var y=C,{node:o,inline:r,className:m,children:l}=y,h=E(y,["node","inline","className","children"]);const v=/language-(\w+)/.exec(m||"");return!r&&v?e(oe,f({children:String(l).replace(/\n$/,""),style:re,language:v[1],PreTag:"div"},h)):e("code",x(f({className:m},h),{children:l}))}}}),e(Le,{posts:N})]})})})})}const Je=c.div`
  .l-post {
    margin: 0 auto;
    border: 2px solid #f1f1f1;
    @media (min-width: 700px) {
      max-width: 80%;
    }
  }
  .post__markdown {
    margin: 2em 0;
    padding: 0 0 3em 0;
    h2 {
      text-align: left;
      color: #444444;
      padding: 0 0.7em;
      margin: 0;
    }
    p {
      color: #373839;
      text-align: left;
      padding: 0.7em;
      margin: 0;
    }
    
  }
`,Pe=()=>e(d,{children:e(Ge,{children:e("h1",{children:"the page you are looking for does not exist"})})}),Ge=c.div`
 

`;ie.render(e(se.StrictMode,{children:e(d,{children:n(j,{theme:I,children:[e(L,{}),e(le,{children:n(ce,{children:[e(u,{path:"/",element:e(he,{})}),e(u,{path:"/about",element:e(Ae,{})}),e(u,{path:"/work",element:e(Ne,{})}),e(u,{path:"/blog",element:e($e,{})}),e(u,{path:"/404",element:e(Pe,{})}),e(u,{path:"/post/:id",element:e(He,{})})]})})]})})}),document.getElementById("root"));