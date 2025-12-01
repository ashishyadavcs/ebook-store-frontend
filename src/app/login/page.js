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
import useUserStore from "@/state/stores/userStore";
const Page = () => {
    const [loading, setloading] = useState(false);
    const searchParams = useSearchParams();
    const router = useRouter();
    const { setUser } = useUserStore();
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
                throw Error(result.errors[0].msg);
            } else {
                setTimeout(() => {
                    router.refresh();
                    setUser(result.user);
                    router.push(
                        searchParams.get("from") ||
                            (result.user.role == "admin" ? "/admin" : "/dashboard")
                    );
                    toastify.success("loggedin successfull");
                    setloading(false);
                }, 200);
            }
        } catch (err) {
            setloading(false);
            toastify.error(err.message);
        }
    };
    return (
        <Container>
            <AuthStyle>
                <Image
                    height={600}
                    width={400}
                    alt="ebookstore"
                    priority
                    src="/images/book-cover.png"
                />
                <MyForm onSubmit={loginUser}>
                    <h2 className="title">Login</h2>
                    <label htmlFor="email">
                        <span>Email</span>
                        <input name="email" type="email" required placeholder="email" />
                    </label>
                    <label htmlFor="password">
                        <span>Password</span>

                        <input name="password" type="password" required placeholder="password" />
                    </label>
                    <Button type="primary" loading={loading}>
                        login
                    </Button>
                    <p className="already">
                        don't have an account <Link href="/register">signup</Link>{" "}
                    </p>
                    <span className="or">or</span>
                    <Googlelogin setLoading={setloading} title="Login with google" />
                </MyForm>
            </AuthStyle>
        </Container>
    );
};

export default Page;
