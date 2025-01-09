"use client";

import {useRouter} from "next/router";

const loginUser = async e => {
    e.preventDefault();
    const router=useRouter()
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
export default loginUser;
