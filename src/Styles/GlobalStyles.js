import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --global_radius: 8px;
        --global_padding: 12px;
    }

    * {
        font-family: "Roboto";
    }

    h1 {
        font-size: 24px;
        color:rgb(58, 59, 65);
    }

    hr{
        margin: 0;
        border: 1px solid  rgba(99, 99, 99, 0.13);
        border-radius: var(--global_radius);
        width: 100%;
    }
`