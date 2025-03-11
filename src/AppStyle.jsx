import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html, body {
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  background-color: #FB6B6B;
  }
  button{
  background-color:rgba(255, 255, 255, 0.08);
  padding: 0;
  }
`;
const AppStyle = styled.div`
  .app-container {
    margin: 10%;
    width: 80%;   
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow-x: hidden;
  }
`;

export { GlobalStyle, AppStyle };
