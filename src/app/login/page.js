"use client";
import React, { Suspense, useState } from "react";
import AuthStyle from "@/styles/auth.styled";
import Button from "@/components/Button";
import Googlelogin from "@/components/Googlelogin";
import { useRouter, useSearchParams } from "next/navigation";
import { toastify } from "@/components/Toast";
const Page = () => {
    const [loading, setloading] = useState(false);
    const router = useRouter();
    const from = useSearchParams().get("from");
    const loginUser = async e => {
        e.preventDefault();
        try {
            setloading(true);
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
            const result = await res.json();
            if (!result.success) {
                throw Error("failed");
            } else {
                setloading(false);
                toastify.success("loggedin successfull");
                router.push(from || "/dashboard");
            }
        } catch (err) {
            setloading(false);
            toastify.error(err.message);
        }
    };
    return (
        <Suspense fallback="loading...">
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
                    <Button loading={loading}>login</Button>
                    <p>or</p>
                    <Googlelogin />
                </form>
            </AuthStyle>
        </Suspense>
    );
};

export default Page;
