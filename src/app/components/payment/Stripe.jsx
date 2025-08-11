"use client";
import React, { useState, useEffect, useCallback } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { EmbeddedCheckoutProvider, EmbeddedCheckout } from "@stripe/react-stripe-js";
import Button from "@/components/ui/Button";
import ModalWrapper from "@/components/ModalWrapper";
import config from "@/config/index";
import styled from "styled-components";
import { FaLock } from "react-icons/fa";

const stripePromise = loadStripe(config.STRIPE_PUBLISHABLE_KEY);

const Stripe1 = ({ totalprice, cart }) => {
    const [clientSecret, setClientSecret] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const amount = totalprice;

    useEffect(() => {
        (async isModalOpen => {
            if (!isModalOpen) return;
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
            });
            const data = await response.json();
            setClientSecret(data.clientSecret);
        })(isModalOpen);
        document.body.style.overflow = isModalOpen ? "hidden" : "auto";
    }, [isModalOpen]);

    const options = {
        clientSecret,
    };
    return (
        <>
            <ModalWrapper confirm={true} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <Paystyle>
                    <EmbeddedCheckoutProvider stripe={stripePromise} options={options}>
                        <EmbeddedCheckout />
                    </EmbeddedCheckoutProvider>
                </Paystyle>
            </ModalWrapper>

            <Button type="primary" onClick={() => setIsModalOpen(true)}>
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
    height: 100vh;
    overflow: auto;
    padding: 50px 0;
`;
