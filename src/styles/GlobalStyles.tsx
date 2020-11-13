import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    *,
    *::after,
    *::before {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
    }
    html,
    body {
        min-width: 100%;
        max-width: 100%;
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
    html {
        font-size: 62.5%;
    }   
    body {
        box-sizing: border-box;
        font-size: 1.6rem;
        background-image: linear-gradient(to right bottom, #2980b9, #2c3e50);  
    }
    #root{
        height: 100%;
        width: 100%;
        padding: 1rem 2rem;
        font-family: 'Roboto', sans-serif;

        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;
