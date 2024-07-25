import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: ${(props) => props.theme['background']};
        color: ${(props) => props.theme['base-text']};
        -webkit-font-smoothing: antialiased;

        margin-left: 15%;
        margin-right: 15%;
    }

    body, input, textarea, button {
        font-family: 'Baloo 2', sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }
`;
