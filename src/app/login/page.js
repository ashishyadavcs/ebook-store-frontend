"use client";
import React from "react";
import AuthStyle from "@/styles/auth.styled";
import Button from "@/components/Button";
import Googlelogin from "@/components/Googlelogin";
import { useRouter } from "next/navigation";
import { toastify } from "@/components/Toast";
const Page = () => {
    const router = useRouter();
    const loginUser = async e => {
        e.preventDefault();
        try {
            const { email, password } = e.target;
            const res = await fetch("/api/auth/login", {
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: email.value,
                    password: password.value,
                }),
            });
            const result=await res.json()
            if (!result.success) {
                console.log("sucecss false");
                throw Error("failed");
            } else {
                toastify.success("loggedin successfull");
                router.push("/dashboard");
            }
        } catch (err) {
            toastify.error(err.message);
        }
    };
    return (
        <AuthStyle>
            <h2 className="title">Login</h2>
            <form onSubmit={loginUser}>
                <label htmlFor="email">
                    <input
                        defaultValue={"as@as.as"}
                        name="email"
                        type="text"
                        required
                        placeholder="email"
                    />
                </label>
                <label htmlFor="password">
                    <input
                        defaultValue={"123"}
                        name="password"
                        type="text"
                        required
                        placeholder="password"
                    />
                </label>
                <Button>login</Button>
                or
                <Googlelogin />
            </form>
        </AuthStyle>
    );
};

export default Page;
