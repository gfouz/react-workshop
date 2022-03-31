var O=Object.defineProperty,R=Object.defineProperties;var G=Object.getOwnPropertyDescriptors;var w=Object.getOwnPropertySymbols;var I=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable;var T=(a,t,r)=>t in a?O(a,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):a[t]=r,v=(a,t)=>{for(var r in t||(t={}))I.call(t,r)&&T(a,r,t[r]);if(w)for(var r of w(t))F.call(t,r)&&T(a,r,t[r]);return a},k=(a,t)=>R(a,G(t));var D=(a,t)=>{var r={};for(var l in a)I.call(a,l)&&t.indexOf(l)<0&&(r[l]=a[l]);if(a!=null&&w)for(var l of w(a))t.indexOf(l)<0&&F.call(a,l)&&(r[l]=a[l]);return r};import{W as P,s as i,j as e,F as b,a as n,r as u,L as _,b as m,C as N,u as W,S as U,B as Y,I as V,d as Z,m as K,c as Q,e as X,A as ee,f as ae,T as ne,g as $,h as L,i as te,k as re,l as oe,n as ie,o as se,p as le,q as ce,t as H,v as de,R as me,w as he,x as ue,y as pe,z as ge,H as fe,D as be,E as f}from"./vendor.304e806b.js";const ye=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))l(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&l(d)}).observe(document,{childList:!0,subtree:!0});function r(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerpolicy&&(s.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?s.credentials="include":o.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(o){if(o.ep)return;o.ep=!0;const s=r(o);fetch(o.href,s)}};ye();const M={primaryDark:"#0D0C1D",primaryLight:"#EFFFFA",primaryHover:"#343078",primary:"#ffffff",darkGray:"#282c34",mystic:"#282c34",olive:"#282c34",githubLinks:"#069696",transparent:"#d4d4d42d",scionGreen:"#1ab601",bgGrey:"d5d5d5",ultraViolet:"#601d8c",bk:"#000000",greenBase:"#e5f8d2",greenA700:"#00c853",greenA200:"#69f0ae",green100:"#c8e6c9",greenDark:"#071919",greenDK:"#173535",lightGreen:"#76ff03",blueGrey900:"#263238",grey800:"#424242",grey500:"#9e9e9e",mobile:"576px",fontcolor:"#444444",workbg:"linear-gradient(#071919, #173535)"},z={blue:"#008DFF",red:"#c51162",fontshadow:"1px 1px 9px #ffffff"},B=P`
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
  

  `,ve=()=>e(b,{theme:M,children:n(u.exports.Fragment,{children:[e(B,{}),e(_e,{children:n("div",{className:"l-grid homepage",children:[n("section",{className:"homepage__item",children:[e("h1",{className:"homepage__title",children:"portfolio"}),e("div",{className:"homepage__line"})]}),e("nav",{className:"navbar",children:n("ul",{className:"navbar__list",children:[e("li",{className:"navbar__item",children:e(_,{to:"/about",className:"navbar__link",children:"ABOUT"})}),e("li",{className:"navbar__item",children:e(_,{to:"/work",className:"navbar__link",children:"WORK"})}),e("li",{className:"navbar__item",children:e(_,{to:"/blog",className:"navbar__link",children:"BLOG"})})]})}),n("section",{className:"logo",children:[e("div",{className:"logo__image-container",children:e("img",{className:"logo__image",src:"./images/handshake-amber.svg",alt:"gfouz-logo"})}),e("h6",{className:"logo__skills",children:"WEB DEVELOPER"}),n("h1",{className:"logo__acronym",children:["GFOUZ \xA9 ",new Date().getFullYear()]})]})]})})]})}),_e=i.div`
  --green: #88ce02;
  --blue: #40c4ff;
  --brown: #f1993f;
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
      font-size: 2.5em;
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
      margin: 2em 0 0 0;
    }
    &__image {
      width: 100px;
    }

    &__skills {
      color: #ffffff;
      margin: 1em 0;
    }
    &__acronym {
      margin: 3em 0;
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
`,xe=()=>e(m,{children:e(b,{theme:z,children:e(we,{children:n("picture",{className:"l-logo",children:[n("div",{className:"logo",children:[e("div",{className:"logo__item",children:e("h1",{className:"logo__letter",children:"G"})}),e("div",{className:"logo__item",children:e("h1",{className:"logo__letter",children:"F"})}),e("div",{className:"logo__item",children:e("h1",{className:"logo__letter",children:"O"})}),e("div",{className:"logo__item",children:e("h1",{className:"logo__letter",children:"U"})}),e("div",{className:"logo__item",children:e("h1",{className:"logo__letter",children:"Z"})})]}),e("img",{src:"./images/workLogo.svg",alt:"logo",className:"logo__image"}),e("h1",{className:"logo__title",children:"WORK"})]})})})}),we=i.div`
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
    color: ${({theme:a})=>a.blue};
    margin: 0;
    font-size: 1.5em;
    font-family: literata;
  }
  .logo__title {
    margin: 1.5em 0;
    color: ${({theme:a})=>a.blue};
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
`,ke=()=>e(m,{children:e(b,{theme:z,children:e(Ne,{children:e("article",{className:"technology",children:n("div",{className:"l-flex l-flex--vw",children:[e("img",{src:"./tech/react.svg",alt:"react",className:"technology__icon"}),n("div",{className:"l-flex l-flex--column",children:[e("img",{src:"./tech/next.svg",alt:"logo",className:"technology__icon technology__icon--l"}),n("nav",{className:"navbar",children:[n("h5",{className:"navbar__title",children:[e("span",{children:"SOURCE"})," CODE ON ",e("span",{children:"GITHUB"})]}),n("ul",{className:"navbar__list",children:[e("li",{className:"navbar__item",children:e("a",{className:"navbar__link",href:"https://github.com/gfouz/react-workshop.git",children:"React-workshop"})}),e("li",{className:"navbar__item",children:e("a",{className:"navbar__link",href:"https://github.com/gfouz/apollo-server.git",children:"Apollo-server"})}),e("li",{className:"navbar__item",children:e("a",{className:"navbar__link",href:"https://github.com/gfouz/nextcms.git",children:"NextJs-CMS"})})]})]}),e("img",{src:"./tech/graphql.svg",alt:"logo",className:"technology__icon"})]}),e("img",{src:"./tech/redux.svg",alt:"logo",className:"technology__icon"})]})})})})}),Ne=i.div`
  --yellow: #f9c035;
  --blue: #008DFF;
  --light: #999999;
  .technology {
    display: flex;
    padding: 2.5em 0;
    margin: 0;
    align-items: center;
    justify-content: center;
    background-color: #1A1819;
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
    &__icon {
      width: 40px;
      margin: 1em;
    }
    &__icon--l {
      width: 100px;
    }
  }
`,Se=`S\xE9 que para gustos los colores, pero en mi caso he podido 
          comprobar las cosas muy buenas y grandes beneficios que ofrece React Js y su
          ecosistema, esta tecnolog\xEDa me ha exigido aprender m\xE1s acerca de
          JavaScript y mejorar habilidades aunque otros frameworks
          tambien cumplen ese prop\xF3sito. Tesla, Netflix, Whatsapp,
          PayPal, Uber, BBC, Airbnb, Dropbox, evidentemente Facebook e Instagram
          y muchas otras, se han decidido por emplear React y estas empresas se
          encuentran ahora en la cima del \xE9xito de la industria de las
          tecnolog\xEDas, este \xE9xito de React se debe a la eficiencia, rapidez y
          c\xF3digo simplificado de esta ligera herramienta la cual ha
          revolucionado con nuevas innovaciones la manera en que se crean las
          interfaces de usuarios. Opino que tambien hay otras tecnolog\xEDas de
          gran importancia para ser incluidas, las tecnolog\xEDas est\xE1n en constante cambios 
          e innovaciones, asi que estoy entusiasmado al aprender m\xE1s por ejemplo de Deno
          junto a graphql y websockets las ventajas que nos ofrece para el back-end
          ya que por ejemplo Deno permite el uso de TypeScript sin tener que instalar
          dependencias aunado a otras ventajas relacionadas con seguridad inform\xE1tica.
`,je=()=>e(m,{children:e(b,{theme:z,children:n(Ce,{children:[e("figure",{children:e("img",{src:"./images/workImage.jpg",alt:"workImage"})}),e(ze,{children:n(Ee,{children:[e("h4",{className:"outlook__topic",children:"Mi perspectiva personal"}),e(qe,{children:e("img",{src:"./images/giov.svg",alt:"giovani",className:"myavatar__frame"})}),e("p",{className:"outlook__text",children:Se})]})})]})})}),Ce=i.div`
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
`,ze=i.article`
     display: flex;
     flex-direction: column;
     align-items: flex-start;
     justify-content: center;
     max-width: 700px;
     color: ${({theme:a})=>a.fontcolor};
     text-align: left;
     padding: 1em;
`,Ee=i.div`
  .outlook__topic {
        font-family: literata, Verdana, Times New Roman, calibri;
        margin: 0.3em;
        text-align: center;
        color: #325c96;
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
        font-size: calc(0.7em + 1vw);
     }
 
`,qe=i.div`
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
`,Te=i.div`
  --tallness: ${a=>a.height||"60px"};  
  
  width: 100%;
  height: var(--tallness);
  top: 0;
  left: 0;
  right: 0;
  margin: ${a=>a.margin||"margin: 0"};
  background-color: ${a=>a.bg||"#444444"};
  position: ${a=>a.position};
  font-weight: ${a=>a.fontweight||"normal"};

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

  ${a=>a.dark&&N`
      background: ${({theme:t})=>t.grey800};
      .navbar-links {
        a {
          color: #ffffff;
        }
      }
    `}

    ${a=>a.mixed&&N`
      background-image: linear-gradient(#808080, #000000);
      .navbar-links {
        a {
          color: #ffffff;
        }
      }
    `}

  ${a=>a.light&&N`
      background: ${({theme:t})=>t.grey100};
      .navbar-links {
        a {
          color: ${({theme:t})=>t.cyan900};
        }
      }
    `}

  ${a=>a.primary&&N`
      background: ${({theme:t})=>t.blue500};
      .navbar-links {
        a {
          color: ${({theme:t})=>t.wt};
        }
      }
    `}
`;function E(a){const t=["/about","/work","/blog","/"],r=W(),{pathname:l}=r,o=t.filter(s=>s!==l);return e(m,{children:e(Te,{color:a.color,bg:a.bg,fontFamily:a.font,fontweight:a.fontweight,position:a.position,height:a.height,margin:a.margin,logo:a.logo,children:n("div",{className:"links",children:[e("div",{className:"logo",children:a.children}),o.map((s,d)=>e("div",{children:e(_,{className:"links__item",to:`${s}`,children:s==="/"?"home":s.slice(1)})},s+d))]})})})}function Ie({close:a,setClose:t}){function r(o,s){s!=="clickaway"&&t(!1)}const l=n(u.exports.Fragment,{children:[e(Y,{color:"primary",size:"small",onClick:r,children:"UNDO"}),e(V,{size:"small","aria-label":"close",color:"inherit",onClick:r,children:e(Z,{fontSize:"small"})})]});return e("div",{children:e(U,{open:a,autoHideDuration:2e3,onClose:r,message:"SUBMITTED",action:l})})}const Fe=K(a=>({l_grid:{margin:"1em 0",display:"flex",flexDirection:"column",alignItems:"center",padding:"2em 0"},avatar:{margin:a.spacing(3),backgroundColor:a.palette.primary.main},form:{width:"100%",marginTop:a.spacing(1)},form__input:{display:"flex",flexDirection:"column",alignItems:"center"},title:{color:"#3f51b5",fontSize:"14px",textTransform:"uppercase"},warnings:{color:"#c51162",textTransform:"uppercase",fontSize:"10px"},formHide:{display:"none"},submit:{margin:"2em auto"}})),De=()=>{const[a,t]=u.exports.useState(!1),r=Fe(),{control:l,handleSubmit:o}=Q({defaultValues:{email:"",message:""}});function s(d){t(!0),oe.post("https://formspree.io/f/mbjwalqp",{data:d}).then(function(c){console.log(c)}).catch(function(c){console.log(c)})}return e(X,{children:n("div",{className:r.l_grid,children:[e(ee,{className:r.avatar,children:e(ae,{})}),e(ne,{component:"h1",variant:"h6",className:r.title,children:"contact here!"}),n("form",{className:"form",onSubmit:o(s),children:[e($,{name:"email",control:l,rules:{pattern:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,required:!0},render:({field:d,formState:{errors:c,isSubmitted:h}})=>{var g,p;return n("div",{className:r.form__input,children:[e(L,k(v({},d),{variant:"outlined",margin:"normal",label:"Email",color:c.email?"secondary":"primary"})),((g=c.email)==null?void 0:g.type)==="pattern"&&e("span",{className:r.warnings,children:"email includes an @ symbol !"}),((p=c.email)==null?void 0:p.type)==="required"&&e("span",{className:r.warnings,children:"email is required !"})]})}}),e($,{name:"message",control:l,rules:{required:!0},render:({field:d,formState:{errors:c}})=>{var h;return n("div",{className:r.form__input,children:[e(L,k(v({},d),{variant:"outlined",margin:"normal",label:"Message",color:c.message?"secondary":"primary"})),((h=c.message)==null?void 0:h.type)==="required"&&e("span",{className:r.warnings,children:"This field must not be empty !"})]})}}),e(te,{type:"sumit",size:"medium",color:"primary",variant:"contained",className:r.submit,endIcon:e(re,{}),children:"Send"})]}),e(Ie,{close:a,setClose:t})]})})},$e=()=>e(m,{children:e(b,{theme:z,children:e(Le,{children:n("div",{className:"work l-grid",children:[e(E,{bg:"#f0f0f0",color:"#000000",height:"150px",fontweight:"bolder"}),e(xe,{}),e(ke,{}),e(je,{}),n("div",{className:"skills",children:[e("div",{className:"skills__item",children:e("img",{className:"skills__image",src:"./images/w3c.jpg",alt:"deno"})}),e("div",{className:"skills__item",children:e("h3",{className:"skills__text",children:"MY SKILLS: HTML CSS SCSS JS TS."})})]}),e(De,{}),e("footer",{className:"work__footer",children:n("h4",{className:"work__footer-title",children:["Gfouz \xA9 ",new Date().getFullYear()," Made with ReactJS."]})})]})})})}),Le=i.div`
  --blue: #008dff;
  background-color: #f0f0f0;
  .l-grid {
    min-height: 100vh;
    grid-template-column: 1fr;
    grid-template-rows: 150px 375px auto auto auto auto 70px;
  }
  .skills {
    margin: 0 auto;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    max-width: 650px;
    background-color: #ffffff;
    .skills__item {
      width: 50%;
    }
  }
  .skills__image {
    max-width: 100%;
    height: auto;
  }
  .skills__text {
    color: #40638d;
    font-family: calibri;
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
    color: ${({theme:a})=>a.blue};
  }
`,Je=a=>{const t=a.current.textContent.split("");a.current.textContent="",t.forEach((r,l)=>{a.current.innerHTML+='<span style="transform:rotate('+(l+1)*20+'deg)">'+r+"</span>"})},Ae=`
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
`,He=`
  La composici\xF3n es la piedra angular que nos permitir\xE1 a partir de 
  funciones puras gen\xE9ricas crear funciones m\xE1s espec\xEDficas para al 
  final construir nuestros programas.Similar a como en la m\xFAsica las notas 
  (funciones puras) conforman acordes (funciones de dominio compuestas)
   y los acordes conforman obras (pieza de software), la composici\xF3n ser\xE1 
   el pegamento que nos permitir\xE1 desarrollar nuestros programas.
`,Me=`
  Hello, my name is Giovani and I use modern JavaScript frameworks such 
  as React or Vue to create single page application or full static 
  sites so that among my skills are HTML, CSS, SCSS, JavaScript and TypeScript. 
  And i am not afraid of getting out of the comfort zone and trying 
  out new things. I began learning C plus plus in 2017 in order to 
  write firmwares for micro-controllers. I was studying this language 
  for more than a year but eventually i realized that i needed to 
  learn technologies that afford a job, so that i have been wagering 
  on JavaScript and all technologies around it as my favourite language.
`,q=[{title:"Constantes de JavaScript",paragraph:Ae},{title:"Composici\xF3n funcional",paragraph:He},{title:"introduction",paragraph:Me}],S={fontSize:"20px",color:"#ff0000"},Be=[{icon:e(ie,{style:S}),url:"https://github.com/gfouz",name:"github"},{icon:e(se,{style:S}),url:"//https://api.whatsapp.com/send?phone=+5354278815",name:"telegram"},{icon:e(le,{style:S}),url:"https://github.com/gfouz",name:"email"},{icon:e(ce,{style:S}),url:"//https://api.whatsapp.com/send?phone=+5354278815",name:"whatsapp"}],Oe=a=>e(m,{children:e(Re,{height:a.height,border:a.border,bgcolor:a.bgcolor,children:e("nav",{className:"navbar",children:e("ul",{className:"navbar__list",children:Be.map((t,r)=>e("li",{className:"navbar__item",children:e("a",{href:t.url,className:"navbar__link",children:t.icon})},r))})})})}),Re=i.div`
  .navbar {
    border-radius: 10px;
    height: ${a=>a.height||"70px"};
    border: ${a=>a.border||"none"};
    background-color: ${a=>a.bgcolor||"transparent"};
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
`;function Ge(){return e(Pe,{children:n("div",{className:"skills",children:[n("ul",{className:"skills__list",children:[e("li",{className:"skills__item",children:"html"}),e("li",{className:"skills__item",children:"css"}),e("li",{className:"skills__item",children:"javascript"})]}),n("ul",{className:"skills__list",children:[e("li",{className:"skills__item",children:"ReactJs"}),e("li",{className:"skills__item",children:"NextJs"}),e("li",{className:"skills__item",children:"scss"})]}),n("ul",{className:"skills__list",children:[e("li",{className:"skills__item",children:"Redux"}),e("li",{className:"skills__item",children:"Graphql"}),e("li",{className:"skills__item",children:"Express"})]})]})})}const Pe=i.div`
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
`,We=i.div`
  --base-red: #ce5041;
  --blue: #0476ca;
  margin: 0;
  padding: 0;
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 250px 60px 370px auto auto auto 400px 70px;
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
`,Ue=i.div`
  position: relative;
  background-color: #b9e0cb;
  min-width: 100%;
  height: 250px;
  color: #ffffff;
  .main__logo {
    position: absolute;
    left:20%;
    top: 60%;
    color: #044034;
    transform: translate(-50%, -50%);
    text-transform: uppercase;
    font-family: calibri;
  }
  img {
    max-width: 100%;
    height: 250px;
    fit-object: cover;
  }
`,J=i.section`
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
`,j=i.article`
  position: relative;
  text-align: left;
  max-width: 450px;
  min-width: 350px;
  height: auto;
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
`,Ye=i.div`
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
`,A=i.div`
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
`,Ve=i.div`
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
    color: #ff0000;
    
  }
`,Ze=i.footer`
  height: 70px;
  background-color: #ffffff;
  color: #333333;
  text-align: center;
  line-height: 70px;
  font-family: literata;
  font-weight: bolder;

`,Ke=()=>{const a=u.exports.useRef(null);return u.exports.useEffect(()=>{Je(a)},[]),e(m,{children:n(We,{children:[n(Ue,{children:[e("h1",{className:"main__logo",children:"gfouz"}),e("img",{src:"./images/about1.jpg",alt:"clock"})]}),e(E,{height:"60px",bg:"#b9e0cb",color:"#0b7859",margin:"-2px 0",fontweight:"bolder"}),n(Ye,{children:[e("div",{className:"arch",children:e("h1",{ref:a,children:" GFOUZ "})}),e("img",{src:"./images/handshake-red.svg",alt:"gfouz-logo",className:"arch__icon"}),e("h3",{className:"arch__frase",children:"web developer"})]}),n(J,{style:{backgroundColor:"#f5f5f5",padding:"2em 0"},children:[n(j,{children:[e(A,{children:e("img",{src:"./images/giov.svg",alt:"giovani",className:"myavatar__frame"})}),e("h3",{className:"section__title",children:"A brief introduction about me"}),e("p",{className:"article__paragraph",children:q[2].paragraph})]}),n(j,{children:[e("img",{src:"./images/coffeecup.jpg",className:"section__image",alt:"laptop"}),e("h5",{className:"article__image-title",children:"delicious coffee, better ideas!"})]})]}),n(Ve,{children:[e("img",{src:"./images/react.svg",alt:"react"}),n("div",{className:"techstack__centerbar",children:[e("img",{src:"./images/next.svg",alt:"next"}),e("h3",{className:"techstack__title",children:"TECHNOLOGIES"}),e("img",{src:"./images/graphql.svg",alt:"graphql"})]}),e("img",{src:"./images/redux.svg",alt:"redux"})]}),n(J,{children:[n(j,{children:[e(A,{children:e("img",{src:"./images/giov.svg",alt:"giovani",className:"myavatar__frame"})}),e("h3",{className:"section__title",children:"Conceptos importantes"}),e("p",{className:"article__paragraph",children:q[0].paragraph})]}),n(j,{children:[e("h3",{className:"section__title",children:"Tambien importante"}),e("p",{className:"article__paragraph",children:q[1].paragraph}),e("h3",{className:"section__title",children:"TECHNOLOGIES:"}),e(Ge,{})]})]}),e("div",{className:"aboutme",children:e(Oe,{height:"40px",bgcolor:"#ffffff80"})}),n(Ze,{children:[" ","Gfouz \xA9 ",new Date().getFullYear()," reactJs-webSite"," "]})]})})};var C=[{id:1648591200,img:"bem.jpg\r",title:" CSS BEM. \r",author:"Giovani Fouz Jim\xE9nez.\r",date:"march 30, 2022\r",description:"CSS Architecture...\r",position:"top\r",content:`\r
## BEM.\r
When it comes to finding the right class name, it can quickly drive you to despair. \r
Even the most experienced CSS developers don't always find the right class name right away.\r
The Block, Element, Modifier methodology (commonly referred to as BEM) is a popular naming convention for classes in HTML and CSS. Developed by the team at Yandex, its goal is to help developers better understand the relationship between the HTML and CSS in a given project.\r
\r
Here\u2019s an example of what a CSS developer writing in the BEM style might write:\r
\`\`\`css\r
\r
/* Block component */\r
.btn {}\r
\r
/* Element that depends upon the block */ \r
.btn__price {}\r
\r
/* Modifier that changes the style of the block */\r
.btn--orange {} \r
.btn--big {}\r
\r
\`\`\`\r
In this CSS methodology a block is a top-level abstraction of a new component, for example a button: .btn { }. This block should be thought of as a parent. Child items, or elements, can be placed inside and these are denoted by two underscores following the name of the block like .btn__price { }. Finally, modifiers can manipulate the block so that we can theme or style that particular component without inflicting changes on a completely unrelated module. This is done by appending two hyphens to the name of the block just like btn--orange.\r
\r
The markup might then look like this:\r
\`\`\`html\r
 <a class="btn btn--big btn--orange" href="https://css-tricks.com">\r
  <span class="btn__price">$9.99</span>\r
  <span class="btn__text">Subscribe</span>\r
</a>\r
\`\`\`\r
If another developer wrote this markup, and we weren\u2019t familiar with the CSS, we should still have a good idea of which classes are responsible for what and how they depend on one another. Developers can then build their own components and modify the existing block to their heart\u2019s content. Without writing much CSS, developers are potentially capable of creating many different combinations of buttons simply by changing a class in the markup.\r
\r
## Why should we consider BEM?\r
If we want to make a new style of a component, we can easily see which modifiers and children already exist. We might even realize we don\u2019t need to write any CSS in the first place because there is a pre-existing modifier that does what we need.\r
If we are reading the markup instead of CSS, we should be able to quickly get an idea of which element depends on another (in the previous example we can see that .btn__price depends on .btn, even if we don\u2019t know what that does just yet.)\r
Designers and developers can consistently name components for easier communication between team members. In other words, BEM gives everyone on a project a declarative syntax that they can share so that they\u2019re on the same page.`},{id:1644015600,img:"deploy.jpg\r",title:"Continuous deployment.\r",author:"Giovani Fouz Jim\xE9nez\r",date:"febraury 5, 2022\r",description:"CI/CD workflow...\r",position:"right\r",content:`\r
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
Top CI/CD tools Some common CI/CD tools are: CloudBees`},{id:1645398e3,img:"inmutable.jpg\r",title:"Inmutabilidad\r",author:"Giovani Fouz Jim\xE9nez\r",date:"febraury 21, 2022\r",description:"Que significa inmutabilidad y...\r",position:"center\r",content:`\r
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
  obj.apellidos = "propiedad, valor";\r
  obj.nombre = "cambio el valor,no excepci\xF3n";\r
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
`},{id:1642201200,img:"laptopstand.jpg\r",title:"What is a hash table.\r",author:"Giovani Fouz Jim\xE9nez\r",date:"january 15, 2022\r",description:"Hash tables? ...\r",position:"top\r",content:`\r
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
Happy learning!`},{id:1648335600,img:"javascript.jpg\r",title:" Convenciones Javascript. \r",author:"Giovani Fouz Jim\xE9nez\r",date:"march 27, 2022\r",description:"Una gu\xEDa de estilos...\r",position:"top\r",content:`\r
## Gu\xEDa de estilos Javascript.\r
Hay muchas convenciones de codificaci\xF3n cuando se trata de usar el\r
lenguaje de programaci\xF3n JavaScript. Las convenciones de codificaci\xF3n\r
son pautas de estilo para la programaci\xF3n. Seguir esas convenciones\r
mejorar\xE1 su codificaci\xF3n JavaScript y har\xE1 que su c\xF3digo sea f\xE1cil de\r
mantener y de leer. Entonces, en este art\xEDculo, decid\xED mostrarte\r
algunas convenciones de codificaci\xF3n simples que debes conocer.\r
\r
## Denominaci\xF3n de variables.\r
El uso de variables en JavaScript parece ser una tarea muy simple,\r
pero debe seguir algunas reglas al nombrar sus variables, por ejemplo,\r
tendr\xE1 que usar camelCase para los nombres de los identificadores.\r
Todos los nombres deben comenzar con una letra . El siguiente ejemplo\r
sigue estas reglas:\r
\r
\`\`\`js\r
\r
 let firstName = "giovani";\r
 let lastName = "fouz"\r
 let price = 19.99;\r
 let tax = 0.15;\r
 let fullPrice = price + (price * tax);\r
\r
\`\`\`\r
## Longitud de la l\xEDnea.\r
Para mayor legibilidad, aseg\xFArese de evitar l\xEDneas de m\xE1s de 80\r
caracteres. pero si su declaraci\xF3n de JavaScript no cabe en una l\xEDnea,\r
el mejor lugar donde puede romperla es despu\xE9s de una coma o un\r
operador. Eche un vistazo al siguiente ejemplo:\r
\r
\`\`\`js\r
 /*Estas reglas har\xE1n que nuestro c\xF3digo\r
   sea f\xE1cil de leer y comprender. */\r
   document.getElementById("id").innerHTML = \r
   "Hello World!";  \r
\r
\`\`\`\r
## Espacios alrededor de los operadores.\r
Siempre ponga espacios entre operadores ( = + - * / ) en su c\xF3digo\r
JavaScript porque hace que se vea agradable y f\xE1cil de leer. Si lo\r
hace como lo hicimos en el ejemplo siguiente, est\xE1 bien.\r
\`\`\`js\r
let x = y + z;\r
let fullName = ["giovani", "fouz", "jim\xE9nez"];\r
const fn = (params) => {};\r
\r
\`\`\`\r
## Utilice nombres de archivo en min\xFAsculas.\r
La mayor\xEDa de los servidores web (apache\u2026) distinguen entre may\xFAsculas\r
y min\xFAsculas en los nombres de archivos. Por otro lado, algunos\r
servidores web (Microsoft) no distinguen entre may\xFAsculas y min\xFAsculas\r
en los nombres de archivos. Entonces, digamos que se mud\xF3 del servidor\r
Apache al servidor de Microsoft donde estaba usando may\xFAsculas para\r
los nombres de archivo. Apache distingue entre may\xFAsculas y\r
min\xFAsculas, por lo que puede da\xF1ar su sitio web. Para evitar esa\r
confusi\xF3n, utilice siempre nombres de archivo en min\xFAsculas (si es\r
posible).\r
\r
## Reglas de declaraci\xF3n.\r
Existen algunas convenciones de codificaci\xF3n que debe tener en cuenta\r
al escribir sus declaraciones de JavaScript:\r
\r
Siempre termine una declaraci\xF3n simple con un punto y coma.\r
Coloque el corchete de apertura al final de la primera l\xEDnea.\r
Utilice un espacio antes del soporte de apertura.\r
Coloque el corchete de cierre en una nueva l\xEDnea, sin espacios iniciales.\r
\r
\`\`\`js\r
// objetos y matrices.\r
let frutas = ["mango", "peras", "manzana"];\r
\r
let person = {\r
    firstName: "giovani",\r
    lastName: "fouz",\r
    age: 46,\r
    hairColor: "brown"\r
};\r
\r
\`\`\`\r
\r
\`\`\`js\r
// condicionales en javascript.\r
if(weather === "sunny") {\r
    time = true;\r
}else {\r
    time = false;\r
}\r
\r
\`\`\`\r
## Conclusi\xF3n.\r
De modo que , seguir las convenciones de codificaci\xF3n en JavaScript\r
hace que nuestro c\xF3digo sea mantenible y f\xE1cil de leer por otros\r
desarrolladores. Solo quer\xEDa enumerar estas reglas simples, porque\r
todos los desarrolladores de JavaScript deber\xEDan considerarlas. As\xED\r
que eso es todo para este art\xEDculo, si est\xE1 utilizando todas estas\r
convenciones, eso es genial, est\xE1 en camino de convertirse en un buen\r
desarrollador, o tal vez ya sea un buen desarrollador de JavaScript.`},{id:1645052400,img:"golden.jpg\r",title:"Ternary operators \r",author:"Giovani Fouz Jim\xE9nez\r",date:"febraury 17, 2022\r",description:"How to simplify your code with...\r",position:"center\r",content:`\r
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
`}];function Qe(){return e(m,{children:e(Xe,{children:n(ea,{children:[e("h3",{className:"main-title",children:"you might interest"}),e(aa,{children:C.length&&C.map((a,t)=>n(na,{className:"post__card--hover",children:[e("img",{className:"posts__image",src:`./images/${a.img}`,alt:"post"}),n(ta,{children:[e("h5",{className:"posts__title",children:a.title}),n("small",{className:"posts__info",children:["Published on: ",a.date," by ",a.author]}),e("p",{className:"posts__description",children:a.description}),e(_,{className:"posts__link",to:`/post/${a.id}`,children:"Read More"})]})]},a.id))})]})})})}const Xe=i.div`
 background-color: #eeeeee;
 min-height: 100%;
}
`,ea=i.div`
  padding: 2em 0;
  max-width: 960px;
  .main-title {
    color: #444444;
    font-family: literata;
    text-transform: uppercase;
  }
`,aa=i.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 1em 0;
  @media (max-width: 880px) {
    justify-content: center;
  }
  .post__card--hover:hover {
    transition: 0.7s all;
    transform: scale(1.02);
    background-color: #000000;
    box-shadow: 1px 1px 10px #000000;
  }
  .posts__image {
    max-width: 150px;
    height: auto;
    object-fit: cover;
  }
  .posts__body {
  }
`,na=i.div`
  display: flex;
  height: 170px;
  max-width: 400px;
  color: #c7bfa41;
  margin: 1em;
  transition: all 0.2s;
  text-align: left;
  font-family: literata;
  font-size: 12px;
  border-radius: 5px;
  font-size: 14px;
  background-color: #ffffff;
`,ta=i.div`
  border-color: #0168b8;
  border-radius: 5px;
  padding: 1em;
  margin: 0 0.5em;
  color: #333333;
  .posts__title {
    color: #999999;
    margin: 0;
    padding: 0;
    font-weight: bolder;
    text-transform: uppercase;
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
`;function ra(){return u.exports.useEffect(()=>{const a=()=>{document.title=window.innerWidth};window.addEventListener("resize",a)},[]),e(m,{children:e(oa,{children:n(ia,{children:[e(E,{bg:"#25180c",color:"#ffffff"}),n(sa,{children:[e("div",{className:"blog__image",children:e("h1",{className:"blog__title",children:"Inquisitive as children."})}),e("article",{className:"blog__posts",children:e(Qe,{})})]}),e("footer",{className:"blog-footer",children:n("h3",{children:["gfouz \xA9 ",new Date().getFullYear()," made with react"]})})]})})})}const oa=i.div`
  background-color: #eeeeee;
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
    background-color: #25180c;
    display: grid;
    place-items: center;
    color: #ffffff;
  }
`,ia=i.div`
  display: grid;
  grid-template-rows: 60px auto 60px;
  grid-template-cols: 1fr;
  min-height: 100vh;
`,sa=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`,la=a=>{const t=H(),r=de(),l=parseInt(t.id),o=a.posts.map(y=>y.id),s=o.indexOf(l),[d,c]=u.exports.useState(!0),[h,g]=u.exports.useState(s);u.exports.useEffect(()=>{r(`/post/${o[h]}`)},[h]);function p(){h<o.length-1?g(y=>y+1):c(!1),h===o.length-1?c(!1):c(!0)}function x(){h>0?g(y=>y-1):r("/blog"),c(!0)}return e(m,{children:e(ca,{color:a.color,children:n("section",{className:"navigate",children:[e("nav",{className:"navigate__prev",children:e("button",{className:"btn btn-back",onClick:x,children:"PREV"})}),e("nav",{className:"navigate__next",children:e("button",{className:d?"btn":"btn  btn--disabled",onClick:p,children:"NEXT"})})]})})})},ca=i.div`
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
`;function da(){const a={},t=H(),r=parseInt(t.id);C.forEach((o,s)=>{r===o.id&&(a.content=o.content?o.content:"no given content",a.id=o.id?o.id:"no given id",a.img=o.img?o.img:"no give data",a.position=o.position?o.position:"no given position")});const l={backgroundImage:`url(./images/${a.img})`,backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:a.position,height:"400px"};return e(m,{children:e(ha,{children:e(ma,{children:n("section",{className:"post",children:[e(E,{bg:"transparent",color:"#222222"}),e("div",{className:"post__image",style:l}),e(me,{id:a.id,className:"post__markdown",children:a.content,components:{code(g){var p=g,{node:o,inline:s,className:d,children:c}=p,h=D(p,["node","inline","className","children"]);const x=/language-(\w+)/.exec(d||"");return!s&&x?e(he,v({children:String(c).replace(/\n$/,""),style:ue,language:x[1],PreTag:"div"},h)):e("code",k(v({className:d},h),{children:c}))}}}),e(la,{posts:C})]})})})})}const ma=i.div`
  margin: 0 auto;
  border: 2px solid #f1f1f1;
  @media (min-width: 700px) {
    max-width: 85%;
  }
`,ha=i.div`
  background-color: #f1f1f1;
  .post__markdown {
    margin: 2em 0;
    padding: 0 0 3em 0;
    h2 {
      text-align: left;
      color: #444444;
      padding: 0 0.5em;
      margin: 0;
    }
    p {
      color: #333333;
      text-align: left;
      padding: 0.7em;
      margin: 0;
    }
  }
`,ua=()=>e(m,{children:e(pa,{children:e("h1",{children:"the page you are looking for does not exist"})})}),pa=i.div`
 

`;pe.render(e(ge.StrictMode,{children:e(m,{children:n(b,{theme:M,children:[e(B,{}),e(fe,{children:n(be,{children:[e(f,{path:"/",element:e(ve,{})}),e(f,{path:"/about",element:e(Ke,{})}),e(f,{path:"/work",element:e($e,{})}),e(f,{path:"/blog",element:e(ra,{})}),e(f,{path:"/404",element:e(ua,{})}),e(f,{path:"/post/:id",element:e(da,{})})]})})]})})}),document.getElementById("root"));
