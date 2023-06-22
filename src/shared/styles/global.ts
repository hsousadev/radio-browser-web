import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

  :root {
    --Black: #000000;
    --Dark: #1E1E21;
    --SoftDark: #2F2F33;
    --Gray: #4D4D56;
    --LightGray: #62626C;
    --Blue: #1267FC;
    --White: #FFFFFF;
  }

  html {
    transition: all 0.2s ease-in-out;

    display: flex;
    align-items: center;
    justify-content: center;

    background: var(--SoftDark);

    height: 100%;
  }

  body {
    max-width: var(--Max-content-width);
    width: 100%;
    background: var(--SoftDark) !important;
    margin: 0;
    overflow-x: hidden;

    height: 100%;

    #__next {
      height: 100%;
    }
  }

  h1, h2, h3, h4, p, strong {
    transition: all 0.2s ease-in-out;

    margin: 0;
    font-family: "Inter", sans-serif;
    font-style: normal;
    color: var(--White);
  }

  h1 {
    font-weight: 700;
    font-size: 28px;
  }

  h2 {
    font-weight: 400;
    font-size: 24px;
  }

  h4 {
    font-weight: 400;
    font-size: 16px;
  }

  p {
    font-weight: 400;
    font-size: 14px;
  }

  button {
    cursor: pointer;
    outline: none;
    appearance: none;
    border: none;
    background: transparent;
    padding: 0;
  }

  input {
    appearance: none;
    border: none;
    background-color: transparent;
    outline: none;

    gap: 4px;
    border-radius: 16px;
    padding: 12px 16px;

    font-family: "Inter";
    font-size: 16px;
    color: var(--White);

  }

`;
