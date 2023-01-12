import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        font-family: 'Inter', sans-serif;
        box-sizing: border-box;
        
    }

    .App {
        background-color:  ${props => props.theme.colors.primary};
        min-height: 100vh;
        display: flex;
        flex-direction:column;
        justify-content: center;
        align-items: center;
        position: relative;
        overflow: hidden;
    }
    

`