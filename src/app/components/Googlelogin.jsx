import styled from "styled-components";
import config from "../../config/index.js";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLogin } from "@react-oauth/google";
import { toastify } from "./Toast.jsx";
import { redirect } from "next/navigation.js";
import { useAppDispatch } from "@/state/hooks/index.js";
import { addUser } from "@/state/userslice.js";
const Googlelogin = ({ title = "Login with" }) => {
    const dispatch = useAppDispatch();
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
        dispatch(addUser(result.user));

        if (result.success) {
            const isAdmin = result.user.role == "admin";
            redirect(isAdmin ? "/admin" : "/dashboard");
        }
    };
    return (
        <GStyle>
            <GoogleOAuthProvider clientId={config.GOOGLE_CLIENT_ID}>
                <GoogleLogin
                    useOneTap
                    onSuccess={res => handleSuccess(res)}
                    onError={() => {
                        toastify.error("login failed");
                    }}
                />
            </GoogleOAuthProvider>
        </GStyle>
    );
};

export default Googlelogin;
const GStyle = styled.div`
    background: #fff;
    margin: auto;
    border-radius: 100px;
    filter: drop-shadow(0 1px 2px #ddd);
`;
