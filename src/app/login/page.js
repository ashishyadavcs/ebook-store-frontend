"use client";
import React, { useState } from "react";
import AuthStyle from "@/styles/auth.styled";
import Button from "@/components/Button";
import Googlelogin from "@/components/Googlelogin";
import { toastify } from "@/components/Toast";
import { useRouter } from "next/navigation";
import Image from "next/image";
import MyForm from "@/components/Form";
import Link from "next/link";
const Page = () => {
    const [loading, setloading] = useState(false);
    const router = useRouter();
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
                router.push("/dashboard");
            }
        } catch (err) {
            setloading(false);
            toastify.error(err.message);
        }
    };
    return (
        <AuthStyle>
            <Image height={600} width={400} alt="ebookstore" src="/images/book-cover.svg" />

            <MyForm onSubmit={loginUser}>
                <h2 className="title">Login</h2>
                <label htmlFor="email">
                    <span>Email</span>
                    <input
                        defaultValue={"as@as.as"}
                        name="email"
                        type="text"
                        required
                        placeholder="email"
                    />
                </label>
                <label htmlFor="password">
                <span>Password</span>

                    <input
                        defaultValue={"123"}
                        name="password"
                        type="text"
                        required
                        placeholder="password"
                    />
                </label>
                <Button loading={loading}>login</Button>
                <p className="already">don't have an account <Link href="/register">signup</Link> </p>
                <span className="or">or</span>
                <Googlelogin title="Login with google"/>
                
            </MyForm>
        </AuthStyle>
    );
};

export default Page;
