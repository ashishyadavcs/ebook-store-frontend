"use client";
import Button from "@/components/Button";
import Container from "@/components/Container";
import { Checkoutstyle } from "@/styles/checkout.styled";
import { useEffect } from "react";
import { constant } from "../../config/constant";
import { redirect } from "next/navigation";
import { toastify } from "@/components/Toast";
import config from "../../config/index.js";

const Payment = () => {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://checkout.razorpay.com/v1/checkout.js";
        script.async = true;
        document.body.appendChild(script);
    }, []);

    const payment = async e => {
        e.preventDefault();

        try {
            const req = await fetch(`${config.BASE_URL}/create-order`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    amount: 5000,
                }),
            });
            const result = await req.json();
            const data = result.data;

            const { amount, currency, id } = data;
            const options = {
                key: process.env.NEXT_PUBLIC_RAZORPAY_KEYID,
                amount: amount,
                currency: currency,
                name: "Ebook Store",
                description: "Test UPI Payment",
                order_id: id,
                handler: async response => {
                    console.log("handler", response.razorpay_order_id);
                    const req = await fetch(`${config.BASE_URL}/verify-payment`, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            orderid: response.razorpay_order_id,
                            paymentid: response.razorpay_payment_id,
                            signature: response.razorpay_signature,
                        }),
                    });
                    const result = await req.json();
                    if (result.success) {
                        return redirect("/");
                    }
                    toastify.error("payment failed");
                },
                prefill: {
                    name: "User Name",
                    email: "user@example.com",
                    contact: "9999999999",
                },
                theme: {
                    color: "#3399cc",
                },
            };
            const paymentobject = new window.Razorpay(options);
            paymentobject.open();
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <Checkoutstyle>
            <Container>
                <h2 className="title">Checkout</h2>
            </Container>
            <Container>
                <form className="form" onSubmit={payment}>
                    <label>
                        <span>Name</span>
                        <input type="text" />
                    </label>
                    <label>
                        <span>Mobile</span>
                        <input type="tel" />
                    </label>
                    <Button>pay now</Button>
                </form>
                <div className="cart">
                    {[...Array(3)].map((p, i) => (
                        <div key={i} className="product">
                            <img height={100} width={200} src={constant.image} />
                            <div className="details">
                                <p>My ebook title</p>
                                <div className="btn-group">
                                    <Button>&#8722;</Button>
                                    <Button>1</Button>
                                    <Button>+</Button>
                                </div>
                                <strong>Rs. 1000</strong>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </Checkoutstyle>
    );
};

export default Payment;
