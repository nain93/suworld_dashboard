import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import backImg from "./img/back_img.png";
// import backImg2 from "./img/back_img2.jpg";

const GlobalStyles = createGlobalStyle`
    ${reset}
    *{
        box-sizing:border-box;
    }
    body{
        line-height: 1.8;
        font-size:15px;
        background-color:black;
        overflow: hidden;
    }
    a{
        color: #000;
        text-decoration: none;
    }
    button{
        border:none;
        cursor:pointer;
        background-color: inherit;
    }
 
   
`;

export const GlobalContainer = styled.div`
  background-image: url(${backImg});
  z-index: -999;
  /* background: linear-gradient(60deg, #3a4268, black); */
  background-size: cover;
  background-position: center center;
  height: 100vh;
  width: 100%;
  position: absolute;
  opacity: 0.5;
`;

export default GlobalStyles;
