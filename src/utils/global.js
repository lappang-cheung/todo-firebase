import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
        -webkit-font-smoothing: antaliased;
        -moz-osx-font-smoothing: grayscale;
    }

    html {
        font-size: 62.5%;
        box-sizing: border-box;
        --color-main: ${props => props.theme.colors.main};
        --color-mainDark: ${props => props.theme.colors.mainDark};
        --color-mainLight: ${props => props.theme.colors.mainLight};
        --color-mainLighter: ${props => props.theme.colors.mainLighter};
        --color-text: ${props => props.theme.colors.text};
        --color-white: ${props => props.theme.colors.white};
        --shadow: ${props => props.theme.shadow};

        @media ${props => props.theme.mediaQueries.small} {
            font-size: 60%;
        }

        @media ${props => props.theme.mediaQueries.small} {
            font-size: 55%;
        }
    }

    body {
        font-family: 'Roboto', san-serif;
        font-weight: 400;
        line-height: 1.6;
    }

    a, input, textarea, button {
        outline: none;
        text-decoration: none;
        font-family: inherit;
    }
`;