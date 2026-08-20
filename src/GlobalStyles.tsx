import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    /* CSS Variables from the theme */
    :root {
        /* Colors */
        --color-primary: #FF004D;
        --color-primary-dark: #7E2553;
        --color-primary-light: #FF77A8;
        --color-secondary: #29ADFF;
        --color-secondary-dark: #1D2B53;
        --color-tertiary: #00E436;
        --color-background: #FFCCAA;
        --color-text: #000000;
        --color-white: #FFF1E8;
        --color-gray: #C2C3C7;

        /* Typography */
        --text-sm: 0.85rem;
        --text-base: 1re;
        --text-md: 1.25rem;
        --text-lg: 1.5rem;

        /* Fonts */
        --font-headings: "Outfit", sans-serif;
        --font-body: "Fraunces", serif;

        /* Spacing */
        --space-xs: 0.25rem;
        --space-sm: 0.5rem;
        --space-base: 1rem;
        --space-md: 1.5rem;
        --space-lg: 2rem;
        --space-xl: 2.5rem;

        /* Border radius */
        --radius-sm: 0.6rem;
        --radius-base: 1rem;
        --radius-lg: 1.4rem;
    }

    body {
        background-color: var(--color-background);
        color: var(--color-text);
    }

    h1, h2, h3, h4 {
        font-family: var(--font-headings);
    }

    h2 {
        font-size: var(--text-lg);
    }

    p, div, span {
        font-family: var(--font-body);
        font-size: var(--text-md);
    }
`

export default GlobalStyles;