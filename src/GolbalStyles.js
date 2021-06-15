import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import backImg from "./img/back_img.jpg";

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
  background-size: cover;
  height: 100vh;
  width: 100%;
  position: absolute;
  z-index: -999;
  opacity: 0.5;
`;

export default GlobalStyles;
