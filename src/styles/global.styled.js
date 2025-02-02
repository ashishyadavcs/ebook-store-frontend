"use client";
const { createGlobalStyle } = require("styled-components");
import { Inter } from "next/font/google";
const inter = Inter({
    fallback: ["serif"],
    display: "swap",
    subsets: ["latin"],
});

export const Globalstyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
:root{
    --redpink:#FF0080;
    --hotyellow:#FFB;
    --aqua:#43FFEC;
}
::-webkit-scrollbar {
    width: 6px;
    height: 3px;
    background: transparent;
    border-left: 1px solid #f1f1f1;
  }

::-webkit-scrollbar-thumb {
    background:#FF0080;
    height: 100px;
    border-radius: 10px;
    width: 6px;
  }
html{
    font-size: 62.5%;
}
body{
    font-size: clamp(1.2rem,6vw,1.6rem);
    font-family:${inter.style.fontFamily};
}
main{
    min-height: 78vh;
}
.container{
    width:min(1440px,90%);
    margin: auto;
}
textarea{
    font-family: inherit;
    font-size: inherit;
    outline: none;
    border: none;

}
input{
    font-family: inherit;
    font-size: inherit;
    padding: 10px;
    outline: none; 
}
img{
    max-width: 100%;
}
button{
    border: none;
    outline: none;
    font-size: inherit;
}
.btn-group{
    display: flex;
    gap: 10px;
}
.btn{
    background: #ddd;
    border: none;
    border-radius: 4px;
    text-decoration: none;
    outline: none;
    font-size: inherit;
    padding: 10px 20px;
    cursor: pointer;
    text-align: center;
    display: inline-flex;
    gap: 10px;
    justify-content: center;
    align-items: center;
    color:inherit;
    position: relative;
    font-weight: 600;
    text-transform: capitalize;
}
.loader {
display: inline-block;
  border: 2px solid #f3f3f3; /* Light grey */
  border-top: 2px solid;
  border-radius: 50%;
  --size:18px;
  width: var(--size);
  height:var(--size);
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
a{
    text-decoration: none;
}
.gradient-text{
    width: max-content;
    color: transparent;
    background: linear-gradient(90deg,var(--aqua),var(--hotyellow),var(--redpink));
    background-clip: text;
    -webkit-background-clip: text;
}
#nprogress .bar {
    border-radius: 100px;
    background: linear-gradient(130deg, rgb(164, 228, 1), rgb(219, 194, 0), rgb(255, 153, 0), rgb(255, 98, 36), rgb(255, 36, 87), rgb(250, 0, 133), rgb(202, 7, 179), rgb(88, 42, 162));
    height: 5px;
}
.channel{
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
    box-shadow: 0 1px 2px rgba(0,0,0,0.3);
    color: inherit;
}
.text-center{
    text-align: center;
}
`;
