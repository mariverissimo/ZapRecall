import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html, body {
    width: 100%;
    min-height: 100%;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    background-color: #FB6B6B; /* Apply background color globally */
  }
`;
const AppStyle = styled.div`
  .app-container {
    margin: 20px;
    width: 100%;    
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export { GlobalStyle, AppStyle };
