import styled from "styled-components";
import config from "../../config/index.js";
import Button from "./ui/Button.jsx";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLogin } from "@react-oauth/google";
import { toastify } from "./Toast.jsx";
import { redirect } from "next/navigation.js";
const Googlelogin = ({ title = "Login with" }) => {
    const handleSuccess = async res => {
        const token = res.credential;
        const response = await fetch(`/api/auth/google`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                token,
            }),
        });
        const result = await response.json();
        if (result.success) {
            redirect("/dashboard");
        }
    };
    return (
        <>
            <GoogleOAuthProvider clientId={config.GOOGLE_CLIENT_ID}>
                <GoogleLogin
                    onSuccess={res => handleSuccess(res)}
                    onError={() => {
                        toastify.error("login failed");
                    }}
                />
            </GoogleOAuthProvider>
        </>
    );
};

export default Googlelogin;
const GStyle = styled(Button)`
    background: #fff;
    border-radius: 100px;
    filter: drop-shadow(0 1px 2px #ddd);
`;
