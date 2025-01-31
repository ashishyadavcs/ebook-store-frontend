"use client";
import styled from "styled-components";
import config from "../../config/index.js";
import Button from "./ui/Button.jsx";
import { FcGoogle } from "react-icons/fc";
const Googlelogin = ({ title = "Login with" }) => {
    return (
        <GStyle className="glogin" type="link" href={`${config.BASE_URL}/auth/google`}>
            <FcGoogle />
            {title}
        </GStyle>
    );
};

export default Googlelogin;
const GStyle = styled(Button)`
    background: #fff;
    border-radius: 100px;
    filter: drop-shadow(0 1px 2px #ddd);
`;
