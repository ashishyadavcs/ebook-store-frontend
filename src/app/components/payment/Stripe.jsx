"use client";
import React, { useState, useEffect, useCallback } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { EmbeddedCheckoutProvider, EmbeddedCheckout } from "@stripe/react-stripe-js";
import Button from "@/components/ui/Button";
import ModalWrapper from "@/components/ModalWrapper";
import config from "@/config/index";
import styled from "styled-components";
import { FaLock } from "react-icons/fa";
import Spinner from "@/components/loaders/Spinner";
import { toastify } from "../Toast";

const stripePromise = loadStripe(config.STRIPE_PUBLISHABLE_KEY);

const Stripe1 = ({ totalprice, cart }) => {
    const [clientSecret, setClientSecret] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [loading, setloading] = useState(false);
    const amount = totalprice;

    useEffect(() => {
        document.body.style.overflow = isModalOpen ? "hidden" : "auto";
        if (!isModalOpen) return;
        (async isModalOpen => {
            if (!isModalOpen) return;
            setloading(true);
            const response = await fetch("/api/create-stripe-session", {
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    amount: Math.round(amount * 100), // Convert to cents and ensure integer
                    currency: "usd",
                    cart,
                }),
            }).catch(err => {
                setloading(false);
                setIsModalOpen(false);
                toastify.info("Failed to initiate payment. Please try again.");
            });
            const data = await response.json();
            setClientSecret(data.clientSecret);
            setloading(false);
        })(isModalOpen);
    }, [isModalOpen]);

    const options = {
        clientSecret,
    };
    return (
        <>
            <ModalWrapper
                confirm={"are you sure you want to cancel the payment?"}
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            >
                <Paystyle>
                    <EmbeddedCheckoutProvider stripe={stripePromise} options={options}>
                        {loading ? (
                            <div className="stripe-loader">
                                <h2>Preparing your secure payment...</h2>
                                <p>Please wait while we load the Stripe checkout.</p>
                                <Spinner size={30} color="blue" />
                            </div>
                        ) : (
                            <EmbeddedCheckout />
                        )}
                    </EmbeddedCheckoutProvider>
                </Paystyle>
            </ModalWrapper>

            <Button className="pay-btn" type="primary" onClick={() => setIsModalOpen(true)}>
                <FaLock style={{ marginRight: "8px" }} />
                Pay with Stripe
            </Button>
        </>
    );
};

export default Stripe1;
const Paystyle = styled.div`
    background: #ffffff;
    width: 100vw;
    height: 100dvh;
    overflow: auto;
    padding: 50px 0;
    .stripe-loader {
        display: flex;
        flex-direction: column;
        text-align: center;
        padding: 20px;
        align-items: center;
        justify-content: center;
        height: 100%;
        gap: 20px;
    }
`;
