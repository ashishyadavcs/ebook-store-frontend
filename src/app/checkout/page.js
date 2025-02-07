"use client";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { Checkoutstyle } from "@/styles/checkout.styled";
import { useEffect, useState } from "react";
import { redirect } from "next/navigation";
import { toastify } from "@/components/Toast";
import config from "../../config/index.js";
import MyForm from "@/components/ui/Form";
import { useAppSelector } from "@/state/hooks";

const Payment = () => {
    const cart = useAppSelector(state => state.cart.data);
    const user = useAppSelector(state => state.user.data);

    const [loading, setLoading] = useState(false);
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://checkout.razorpay.com/v1/checkout.js";
        script.async = true;
        document.body.appendChild(script);
    }, []);

    const payment = async e => {
        e.preventDefault();
        try {
            setLoading(true);
            const req = await fetch(`/api/create-order`, {
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
                        redirect("/");
                    }
                    toastify.error("payment failed");
                },
                prefill: {
                    name: user?.name,
                    email: user?.email,
                    contact: user?.mobile,
                },
                theme: {
                    color: "#3399cc",
                },
            };
            const paymentobject = new window.Razorpay(options);
            paymentobject.open();
            setLoading(false);
        } catch (err) {
            setLoading(false);
            console.log(err);
        }
    };
    return (
        <Checkoutstyle>
            <Container>
                <h2 className="title">Checkout</h2>
            </Container>
            <Container>
                <MyForm className="form" onSubmit={payment}>
                    <label>
                        <span>Name</span>
                        <input readOnly type="text" defaultValue={user.name} />
                    </label>
                    <label>
                        <span>Mobile</span>
                        <input readOnly type="tel" defaultValue={user.mobile} />
                    </label>
                    <Button loading={loading}>pay now</Button>
                </MyForm>
                <div className="cart">
                    {[...cart].map((p, i) => (
                        <div key={p._id} className="product">
                            <img height={100} width={200} src={p.coverImageUrl} />
                            <div className="details">
                                <p>{p.title}</p>
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
