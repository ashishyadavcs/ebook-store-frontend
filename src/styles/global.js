"use client";
const { createGlobalStyle } = require("styled-components");

const Globalstyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
html{
    font-size: 62.5%;
}
body{
    /* background: red; */
    font-size: 1.6rem;
    font-family: Arial, Helvetica, sans-serif;
}

.container{
    width: min(1440px,90%);
    margin: auto;
}
textarea{
    font-family: inherit;
    outline: none;
    border: none;

}
input{
    font-family: inherit;
font-size: inherit;
    padding: 10px;
    outline: none;
    
}
button{
    border: none;
    outline: none;
    font-size: inherit;
}

.btn{
    background: #f1f1f1;
    border: none;
    text-decoration: none;
    outline: none;
    font-size: inherit;
    padding: 10px 20px;
    cursor: pointer;
    text-align: center;
    display: flex;
    gap: 10px;
    justify-content: center;
    align-items: center;
}
a{
    text-decoration: none;
}
`;

export default Globalstyle;
