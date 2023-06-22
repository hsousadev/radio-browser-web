import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

  :root {
    --Dark: #1E1E21;
    --SoftDark: #2F2F33;
    --Gray: #4D4D56;
    --Blue: #1267FC;
    --White: #FFFFFF;
  }

  html {
    transition: all 0.2s ease-in-out;

    display: flex;
    align-items: center;
    justify-content: center;

    background: var(--SoftDark);

    @media(max-width: 1360px) {
      padding: 0 64px;
    }

    @media(max-width: 720px) {
      padding: 0 32px;
    }

    @media(max-width: 425px) {
      padding: 0 16px;
    }

    @media(max-width: 1380px) {
      zoom: 80%;
    }

    @media(max-width: 1232px) {
      zoom: 100%;
    }
  }

  body {
    max-width: var(--Max-content-width);
    width: 100%;
    background: var(--SoftDark) !important;
    margin: 0;
    overflow-x: hidden;
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
