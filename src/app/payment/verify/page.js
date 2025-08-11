"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import styled from "styled-components";
import { FaCheckCircle, FaTimesCircle, FaSpinner } from "react-icons/fa";
import { media } from "@/config/media";

const PaymentReturn = () => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const [status, setStatus] = useState("loading");
    const [paymentData, setPaymentData] = useState(null);

    useEffect(() => {
        const sessionId = searchParams.get("session_id");
        if (!document.referrer.includes("checkout") || !sessionId) {
            router.push("/");
        }

        // Verify payment status with backend
        const verifyPayment = async () => {
            try {
                const response = await fetch(`/api/verify-stripe-payment?session_id=${sessionId}`, {
                    method: "GET",
                    credentials: "include",
                    headers: {
                        "Content-Type": "application/json",
                    },
                });

                const { data, success = false } = await response.json();

                if (success && data.status === "paid") {
                    setStatus("success");
                    setPaymentData(data);
                } else {
                    setStatus("failed");
                }
            } catch (error) {
                console.error("Error verifying payment:", error);
                setStatus("error");
            }
        };

        setTimeout(() => {
            verifyPayment();
        }, 2000);
    }, [searchParams]);

    const handleContinue = () => {
        if (status === "success") {
            router.push("/dashboard");
        } else if (status === "error") {
            router.push("/");
        } else {
            router.push("/checkout");
        }
    };

    const renderContent = () => {
        switch (status) {
            case "loading":
                return (
                    <StatusContainer>
                        <div className="status-icon loading">
                            <FaSpinner />
                        </div>
                        <h2>verifying Payment...</h2>
                        <p>Please wait while we verify your payment.</p>
                    </StatusContainer>
                );

            case "success":
                return (
                    <StatusContainer>
                        <div className="status-icon success">
                            <FaCheckCircle />
                        </div>
                        <h2>Payment Successful!</h2>
                        <p>
                            Thank you for your purchase. Your payment has been processed
                            successfully.
                        </p>
                        {paymentData && (
                            <PaymentDetails>
                                <h4>Payment Details:</h4>
                                <div className="detail">
                                    <span>Transaction ID:</span>
                                    <span>{paymentData.paymentId}</span>
                                </div>
                                <div className="detail">
                                    <span>Amount:</span>
                                    <span>${paymentData.amount / 100}</span>
                                </div>
                                <div className="detail">
                                    <span>Status:</span>
                                    <span className="paid">Paid</span>
                                </div>
                            </PaymentDetails>
                        )}
                        <ActionButton onClick={handleContinue} className="success">
                            Continue to Dashboard
                        </ActionButton>
                    </StatusContainer>
                );

            case "failed":
                return (
                    <StatusContainer>
                        <div className="status-icon failed">
                            <FaTimesCircle />
                        </div>
                        <h2>Payment Failed</h2>
                        <p>Your payment could not be processed. Please try again.</p>
                        <ActionButton onClick={handleContinue} className="failed">
                            Retry
                        </ActionButton>
                    </StatusContainer>
                );

            case "error":
                return (
                    <StatusContainer>
                        <div className="status-icon error">
                            <FaTimesCircle />
                        </div>
                        <h2>Something went wrong</h2>
                        <p>We encountered an error while processing your request.</p>
                        <ActionButton onClick={handleContinue} className="error">
                            Return to Home
                        </ActionButton>
                    </StatusContainer>
                );

            default:
                return null;
        }
    };

    return <Container>{renderContent()}</Container>;
};

export default PaymentReturn;

// Styled Components
const Container = styled.div`
    ${media.minsm} {
        min-height: 100vh;
    }
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    padding: 20px;
`;

const StatusContainer = styled.div`
    background: white;
    border-radius: 16px;
    padding: 40px;
    text-align: center;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    width: min(500px, 95%);
    overflow: hidden;
    margin: auto;

    .status-icon {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto 24px;
        font-size: 36px;

        &.loading {
            background: #e2e8f0;
            color: #4a5568;
            animation: spin 1s linear infinite;
        }

        &.success {
            background: #c6f6d5;
            color: #38a169;
        }

        &.failed,
        &.error {
            background: #fed7d7;
            color: #e53e3e;
        }

        @keyframes spin {
            from {
                transform: rotate(0deg);
            }
            to {
                transform: rotate(360deg);
            }
        }
    }

    h2 {
        color: #2d3748;
        margin: 0 0 12px 0;
        font-size: 28px;
        font-weight: 600;
    }

    p {
        color: #718096;
        margin: 0 0 24px 0;
        font-size: 16px;
        line-height: 1.5;
    }
`;

const PaymentDetails = styled.div`
    background: #f7fafc;
    border-radius: 12px;
    padding: 20px;
    margin: 24px 0;
    text-align: left;

    h4 {
        color: #2d3748;
        margin: 0 0 16px 0;
        font-size: 18px;
        font-weight: 600;
    }

    .detail {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        padding: 8px 0;
        border-bottom: 1px solid #e2e8f0;

        &:last-child {
            border-bottom: none;
        }

        span:first-child {
            color: #4a5568;
            font-weight: 500;
        }

        span:last-child {
            color: #2d3748;
            font-weight: 600;

            &.paid {
                color: #38a169;
            }
        }
    }
`;

const ActionButton = styled.button`
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    border: none;
    border-radius: 12px;
    padding: 16px 32px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 20px rgba(102, 126, 234, 0.3);
    }

    &.success {
        background: linear-gradient(135deg, #38a169 0%, #2f855a 100%);
    }

    &.failed,
    &.error {
        background: linear-gradient(135deg, #e53e3e 0%, #c53030 100%);
    }
`;
