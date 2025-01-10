"use client";
import React from "react";
import AuthStyle from "@/styles/auth.styled";
import Button from "@/components/Button";
import Googlelogin from "@/components/Googlelogin";
import {useRouter} from "next/navigation";
const Page = () => {
    const router=useRouter()
    const loginUser = async e => {
        e.preventDefault();
        const { email, password } = e.target;
        const result = await fetch("/api/auth", {
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
        if(!result.ok){
            alert("login failed")
        }
        router.push("/admin")
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
