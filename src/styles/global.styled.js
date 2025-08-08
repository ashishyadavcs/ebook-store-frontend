"use client";
const { createGlobalStyle, css } = require("styled-components");
import { colors } from "@/config/constant";
import { media } from "@/config/media";
import { Inter } from "next/font/google";
const inter = Inter({
    fallback: ["serif"],
    display: "swap",
    preload: false,
    subsets: ["latin"],
});

export const Globalstyle = createGlobalStyle`
${css`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    :root {
        --redpink: ${colors.redpink};
        --hotyellow: #ffb;
        --aqua: ${colors.aqua};
        --success: #00cd00;
        --lightblue: #f2f4f7;
        --container-width: min(80px, 10vw); //layout dependent in dashboard sidebar
    }
    ::-webkit-scrollbar {
        width: 6px;
        height: 3px;
        background: transparent;
        border-left: 1px solid #f1f1f1;
    }

    ::-webkit-scrollbar-thumb {
        background: #ff0080;
        height: 100px;
        border-radius: 10px;
        width: 6px;
    }
    html {
        font-size: 62.5%;
    }
    body {
        font-size: clamp(1.4rem, 6vw, 1.6rem);
        font-family: ${inter.style.fontFamily};
        background: var(--lightblue);

        /* &:has(.ebooks) {
            background: url("/images/wall.avif") fixed;
        } */

        &:has(.admin) {
            ${media.sm} {
                padding: 0 0 60px;
            }
        }
    }
    p {
        color: #555;
    }
    h1 {
        &.heading {
            margin: 0 0 20px;
        }
    }
    .text-center {
        text-align: center;
    }
    .heading {
        font-size: clamp(2rem, 3vw, 4rem);
    }
    .container {
        width: calc(100% - var(--container-width));
        margin: auto;
    }
    textarea {
        min-height: 100px;
        font-family: inherit;
        font-size: inherit;
        outline: none;
        border: none;
    }
    input {
        font-family: inherit;
        font-size: inherit;
        padding: 10px;
        outline: none;
    }
    img {
        max-width: 100%;
    }
    button {
        border: none;
        outline: none;
        font-size: inherit;
    }
    .btn-group {
        display: flex;
        gap: 10px;
    }
    a {
        text-decoration: none;
    }
    .gradient-text {
        color: transparent;
        background: linear-gradient(90deg, var(--aqua), #ba23fa, var(--redpink));
        background-clip: text;
        -webkit-background-clip: text;
    }
    #nprogress .bar {
        background: rgb(250, 0, 133);
        height: 5px;
    }
    .channel {
        position: fixed;
        bottom: 50px;
        right: 40px;
        z-index: 2;
        background: #fff;
        display: inline-flex;
        align-items: center;
        gap: 4px;
        padding: 5px 10px;
        border-radius: 100px;
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
        color: inherit;
    }
    .text-center {
        text-align: center;
    }
`}
`;
