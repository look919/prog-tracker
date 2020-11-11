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
    }
`;

