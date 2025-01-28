"use client";
import Button from "@/components/Button";
import Container from "@/components/Container";
import Googlelogin from "@/components/Googlelogin";
import AuthStyle from "@/styles/auth.styled";
import MyForm from "@/components/Form";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { toastify } from "@/components/Toast";
import { useState } from "react";
import Link from "next/link";

const Page = () => {
    const [loading, setloading] = useState(false);
    const router = useRouter();
    const registerUser = async (e) => {
        e.preventDefault();
        try {
            setloading(true);
            const formdata = new FormData(e.target);
            const formobj = Object.fromEntries(formdata.entries());

            const res = await fetch("/api/auth/register", {
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formobj),
            });
            const result = await res.json();
            if (!result.success) {
                throw Error("failed");
            } else {
                setloading(false);
                toastify.success("registered successfully");
                router.push("/login");
            }
        } catch (err) {
            setloading(false);
            toastify.error(err.message);
        }
    };
    return (
        <Container>
            <AuthStyle className="register">
                <Image height={600} width={400} alt="ebookstore" src="/images/book-cover.svg" />
                <MyForm onSubmit={registerUser}>
                    <h2 className="title">Sign Up</h2>
                    <label htmlFor="email">
                        <span>Name</span>
                        <input
                            defaultValue={"Ashish Yadav"}
                            name="name"
                            type="text"
                            required
                            placeholder="email"
                        />
                    </label>
                    <label htmlFor="email">
                        <span>Email</span>
                        <input
                            defaultValue={"as@as.as"}
                            name="email"
                            type="email"
                            required
                            placeholder="email"
                        />
                    </label>
                    <label htmlFor="password">
                        <span>Password</span>
                        <input
                            defaultValue={"123"}
                            name="password"
                            type="password"
                            required
                            placeholder="password"
                        />
                    </label>
                    <Button loading={loading}>Signup</Button>
                    <p className="already">Already have an account <Link href="/login">login</Link> </p>
                    <span className="or">or</span>
                    <Googlelogin title="signup with google" />
              

                </MyForm>
            </AuthStyle>
        </Container>
    );
};

export default Page;
