"use client";
import { toastify } from "@/components/Toast";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import MyForm from "@/components/ui/Form";
import { useState } from "react";
import styled from "styled-components";

const Page = () => {
    const [loading, setloading] = useState(false);
    const sendMSG = async e => {
        e.preventDefault();
        setloading(true);
        const {
            name: { value: name },
            email: { value: email },
            mobile: { value: mobile },
            body: { value: body },
        } = e.target;
        try {
            const res = await fetch(`/api/send-email`, {
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    from: email,
                    subject: "contact",
                    type: "contact",
                    mobile,
                    name,
                    body,
                }),
            });
            if (!res.ok) {
                throw Error(res.statusText);
            }
            const result = await res.json();
            if (result.success) {
                toastify.success("message sent");
            }
            setloading(false);
        } catch (err) {
            toastify.error(err.message);
            setloading(false);
        }
    };
    return (
        <Pagestyle>
            <Container>
                <h1>Contact Us</h1>
                <p>
                    We aim to respond to all queries within 24 hours. For a quicker response, please
                    ensure your contact details are correct.
                </p>
                <MyForm onSubmit={sendMSG}>
                    <label htmlFor="email">
                        <span>Name</span>
                        <input required name="name" type="text" placeholder="Name" />
                    </label>
                    <label htmlFor="mobile">
                        <span>Mobile</span>
                        <input
                            required
                            title="Enter a valid 10-digit mobile number"
                            maxLength={12}
                            name="mobile"
                            type="tel"
                            placeholder="Mobile Number"
                        />
                    </label>
                    <label htmlFor="email">
                        <span>Email</span>
                        <input
                            title="Enter a valid email address (e.g. name@example.com)"
                            pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                            required
                            name="email"
                            type="email"
                            placeholder="Email id"
                        />
                    </label>
                    <label>
                        <span>message</span>
                        <textarea required name="body" placeholder="type your msg..." />
                    </label>

                    <Button type="primary" loading={loading}>
                        submit
                    </Button>
                </MyForm>
            </Container>
        </Pagestyle>
    );
};

export default Page;
const Pagestyle = styled.section`
    padding: 40px 0;
    display: flex;
    justify-content: center;
    h1 {
        margin: 0 0 40px;
        text-align: center;
    }
    p {
        margin: 0 0 20px;
        line-height: 1.5;
        text-align: center;
    }
    .container {
        width: min(400px, 90%);
        margin: auto;
    }
    form {
        background: #fff;
        padding: 20px;
        border-radius: 8px;
    }
`;
