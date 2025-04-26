"use client";
import styled from "styled-components";
import config from "../../config/index.js";
import { GoogleOAuthProvider, GoogleLogin, useGoogleLogin } from "@react-oauth/google";
import { toastify } from "./Toast.jsx";
import { useRouter, useSearchParams } from "next/navigation";
import { useAppDispatch } from "@/state/hooks/index.js";
import { addUser } from "@/state/userslice.js";

const Googlelogin = ({ title = "Login with" }) => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const dispatch = useAppDispatch();
    const handleSuccess = async res => {
        localStorage.setItem("useGoogleSignin", true);
        const token = res.credential;
        const response = await fetch(`/api/auth/google`, {
            method: "POST",
            credentials: "include",
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
            router.refresh();
            const isAdmin = result.user.role == "admin";
            router.push(searchParams.get("from") || (isAdmin ? "/admin" : "/dashboard"));
            toastify.info("Refresh page if not redirecting automatically");
        }
    };
    return (
        <GStyle>
            <GoogleOAuthProvider clientId={config.GOOGLE_CLIENT_ID}>
                <GoogleLogin
                    useOneTap
                    {...(localStorage.getItem("useGoogleSignin") && { auto_select: true })}
                    onSuccess={res => handleSuccess(res)}
                    onError={() => {
                        toastify.error("login failed");
                    }}
                    cancel_on_tap_outside
                    shape="circle"
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
    .google-login {
        color: inherit;
    }
`;
