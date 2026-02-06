"use client";
import styled from "styled-components";
import config from "@/config/index";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { toastify } from "@/components/Toast";
import { useRouter, useSearchParams } from "next/navigation";
import { useAppDispatch } from "@/state/hooks/index.js";
import { addUser } from "@/state/userslice.js";
import { revalidatePathAction } from "@/actions/common";
import { useState } from "react";

const Googlelogin = ({ title = "Login with", setLoading }) => {
    if (typeof localStorage === "undefined") return null;
    const [autoselect, setautoselect] = useState(
        localStorage.getItem("useGoogleSignin") === "true"
    );
    const router = useRouter();
    const searchParams = useSearchParams();
    const dispatch = useAppDispatch();
    const handleSuccess = async res => {
        localStorage.setItem("useGoogleSignin", true);
        setLoading(true);
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

        if (result.success) {
            revalidatePathAction("/viewcart");
            const isAdmin = result.user.role == "admin";
            setTimeout(() => {
                toastify.success("login successfull");
                dispatch(addUser(result.user));
                router.refresh();
                setLoading(false);
                router.push(searchParams.get("from") || (isAdmin ? "/admin" : "/dashboard"));
            }, 200);
        }
    };
    return (
        <GStyle>
            <GoogleOAuthProvider clientId={config.GOOGLE_CLIENT_ID}>
                <GoogleLogin
                    useOneTap
                    {...(autoselect && { auto_select: true })}
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
