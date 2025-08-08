import React, { useState } from "react";
import Button from "./ui/Button";
import styled from "styled-components";
import MyForm from "./ui/Form";
import { toastify } from "./Toast";
import { useForm } from "@/hooks/useForm";
import { useAppSelector } from "@/state/hooks";
import { useDispatch } from "react-redux";
import { addUser } from "@/state/userslice";

const VerifyEmail = ({ userdata, setIsModalOpen }) => {
    const { handleChange, values } = useForm();
    const [loading, setLoading] = useState(false);
    const { email, name } = userdata;
    const [codeSent, setCodeSent] = useState(false);
    const user = useAppSelector(state => state.user.data);
    const dispatch = useDispatch();
    const sendVerificationCode = async e => {
        e.preventDefault();
        setLoading(true);
        const res = await fetch(`/api/send-otp`, {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: e.target.otpemail.value, name }),
        });
        const data = await res.json();
        if (data.success) {
            setLoading(false);
            setCodeSent(true);
        } else {
            setLoading(false);
            toastify.error(data.message || "Failed to send verification code");
        }
    };
    const verifyOTP = async e => {
        e.preventDefault();
        setLoading(true);
        const res = await fetch(`/api/verify-otp`, {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: values?.email || email, otp: e.target.otp.value }),
        });
        const data = await res.json();
        if (data.success) {
            toastify.success(data.message || "Email verified successfully");
            dispatch(addUser({ ...user, verified: true }));
            setIsModalOpen(false);
        } else {
            toastify.error(data.message || "Failed to verify email");
        }
        setLoading(false);
    };
    return (
        <VerifyEmailStyles className="verify-email">
            {codeSent ? (
                <>
                    <p>code has been sent to your email address</p>
                    <MyForm onSubmit={verifyOTP}>
                        <input
                            value={values?.otp}
                            onChange={handleChange}
                            type="number"
                            name="otp"
                            placeholder="Enter verification code"
                        />
                        <Button loading={loading} type="primary">
                            Verify OTP
                        </Button>
                    </MyForm>
                </>
            ) : (
                <>
                    <h3>verify your email</h3>
                    <MyForm onSubmit={sendVerificationCode}>
                        <input
                            onChange={handleChange}
                            value={values?.otpemail || email}
                            type="email"
                            name="otpemail"
                            placeholder="email"
                        />
                        <Button loading={loading} type="primary">
                            Send verification code
                        </Button>
                    </MyForm>
                </>
            )}
        </VerifyEmailStyles>
    );
};

export default VerifyEmail;
const VerifyEmailStyles = styled.div`
    text-align: center;
    padding: 20px;
    border: 1px solid #eee;
    border-radius: 8px;
    background: #f9f9f9;
    .btn {
        margin: 10px 0 0;
    }

    h3 {
        margin: 0 0 20px;
    }

    p {
        margin: 12px 0;
    }
`;
