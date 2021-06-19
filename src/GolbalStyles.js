import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import backImg from "./img/back_img.png";

const GlobalStyles = createGlobalStyle`
    ${reset}
    *{
        box-sizing:border-box;
    }
    body{
        font-family: 'Noto Sans KR', sans-serif;
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
  /* background-image: url(${backImg});
  z-index: -999; */
  background-size: cover;
  background-position: center center;
  height: 100vh;
  width: 100%;
  position: absolute;
  opacity: 0.5;
`;

export default GlobalStyles;
