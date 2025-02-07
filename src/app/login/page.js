"use client";
import React, { useState } from "react";
import AuthStyle from "@/styles/auth.styled";
import Button from "@/components/ui/Button";
import Googlelogin from "@/components/Googlelogin";
import { toastify } from "@/components/Toast";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import MyForm from "@/components/ui/Form";
import Link from "next/link";
import Container from "@/components/ui/Container";
import { useAppDispatch } from "@/state/hooks";
import { addUser } from "@/state/userslice";
const Page = () => {
    const [loading, setloading] = useState(false);
    const searchParams = useSearchParams();
    const router = useRouter();
    const dispatch = useAppDispatch();
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
                throw Error("login failed");
            } else {
                console.log(result);
                dispatch(addUser(result.user));
                setloading(false);
                toastify.success("loggedin successfull");
                router.push(searchParams.get("from") || "/dashboard");
            }
        } catch (err) {
            setloading(false);
            toastify.error(err.message);
        }
    };
    return (
        <Container>
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
                    <p className="already">
                        don't have an account <Link href="/register">signup</Link>{" "}
                    </p>
                    <span className="or">or</span>
                    <Googlelogin title="Login with google" />
                </MyForm>
            </AuthStyle>
        </Container>
    );
};

export default Page;
