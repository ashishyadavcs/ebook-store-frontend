import React, { useState, useEffect } from "react";
import Button from "./ui/Button";
import styled from "styled-components";
import MyForm from "./ui/Form";
import { toastify } from "./Toast";
import { useForm } from "@/hooks/useForm";
import { useAppSelector } from "@/state/hooks";
import { useDispatch } from "react-redux";
import { addUser } from "@/state/userslice";
import { media } from "@/config/media";

const VerifyEmail = ({ userdata, setIsModalOpen }) => {
    const { handleChange, values } = useForm();
    const [loading, setLoading] = useState(false);
    const [resendLoading, setResendLoading] = useState(false);
    const { email, name } = userdata;
    const [codeSent, setCodeSent] = useState(false);
    const [timer, setTimer] = useState(0);
    const user = useAppSelector(state => state.user.data);
    const dispatch = useDispatch();

    // Timer effect
    useEffect(() => {
        let interval = null;
        if (timer > 0) {
            interval = setInterval(() => {
                setTimer(timer => timer - 1);
            }, 1000);
        } else if (timer === 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [timer]);

    // Format timer display
    const formatTime = seconds => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs.toString().padStart(2, "0")}`;
    };

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
            setTimer(120); // 2 minutes timer
            toastify.success("Verification code sent successfully!");
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

    const resendOTP = async () => {
        setResendLoading(true);
        try {
            const res = await fetch(`/api/send-otp`, {
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email: values?.email || email, name }),
            });
            const data = await res.json();
            if (data.success) {
                setTimer(120); // Reset timer to 2 minutes
                toastify.success("Verification code resent successfully!");
            } else {
                toastify.error(data.message || "Failed to resend verification code");
            }
        } catch (error) {
            toastify.error("Failed to resend verification code");
        } finally {
            setResendLoading(false);
        }
    };

    return (
        <VerifyEmailStyles className="verify-email">
            {codeSent ? (
                <>
                    <h3>Enter Verification Code</h3>
                    <p>We've sent a verification code to your email address</p>

                    <MyForm onSubmit={verifyOTP}>
                        <input
                            required
                            value={values?.otp}
                            onChange={handleChange}
                            type="number"
                            name="otp"
                            placeholder="Enter 4-digit code"
                            maxLength={4}
                        />
                        <Button loading={loading} type="primary">
                            Verify OTP
                        </Button>
                    </MyForm>

                    <div className="resend-section">
                        {timer > 0 ? (
                            <p className="timer-text">
                                Resend code in: <span className="timer">{formatTime(timer)}</span>
                            </p>
                        ) : (
                            <div className="resend-container">
                                <p className="resend-text">Didn't receive the code?</p>
                                <Button
                                    type="secondary"
                                    onClick={resendOTP}
                                    loading={resendLoading}
                                    disabled={resendLoading}
                                    className="resend-btn"
                                >
                                    Resend Code
                                </Button>
                            </div>
                        )}
                    </div>
                </>
            ) : (
                <>
                    <h3>verify your email</h3>
                    <MyForm onSubmit={sendVerificationCode}>
                        <input
                            onChange={handleChange}
                            value={values?.otpemail || email}
                            type="email"
                            required
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
        color: #333;
    }

    p {
        margin: 12px 0;
        color: #666;
    }

    input[type="number"] {
        text-align: center;
        font-size: 1.2rem;
        letter-spacing: 2px;

        /* Remove spinner arrows */
        &::-webkit-outer-spin-button,
        &::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }

        &[type="number"] {
            -moz-appearance: textfield;
            appearance: textfield;
        }
    }

    .resend-section {
        margin-top: 20px;
        padding-top: 15px;
        border-top: 1px solid #ddd;
    }

    .timer-text {
        color: #666;
        font-size: 14px;
        margin: 0;
    }

    .timer {
        color: #007bff;
        font-weight: 600;
    }

    .resend-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
    }

    .resend-text {
        color: #666;
        font-size: 14px;
        margin: 0;
    }

    .resend-btn {
        font-size: 14px;
        padding: 8px 16px;
        min-width: auto;
    }

    ${media.sm} {
        .resend-container {
            flex-direction: column;
        }

        .resend-btn {
            width: 100%;
        }
    }
`;
