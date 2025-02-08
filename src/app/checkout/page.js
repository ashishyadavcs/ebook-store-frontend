"use client";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { Checkoutstyle } from "@/styles/checkout.styled";
import { useEffect, useState } from "react";
import { redirect, useRouter, useSearchParams } from "next/navigation";
import { toastify } from "@/components/Toast";
import config from "../../config/index.js";
import MyForm from "@/components/ui/Form";
import { useAppSelector } from "@/state/hooks";
import PriceDetails from "@/components/checkout/PriceDetails.jsx";
import { calculateCart } from "@/utils/cart.js";

const Payment = () => {
    const params = useSearchParams();
    const router = useRouter();
    const from = params.get("from");
    let mycart = useAppSelector(state => state.cart.data);
    const [cart, setcart] = useState(mycart);

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://checkout.razorpay.com/v1/checkout.js";
        script.async = true;
        document.body.appendChild(script);
    }, []);

    useEffect(() => {
        if (from) {
            const fetchEBook = async from => {
                const response = await fetch(`/api/ebooks/${from}`);
                if (!response.ok) {
                    toastify.info("wrong checkout url");
                    throw new Error("wrong id");
                }
                return await response.json();
            };
            fetchEBook(from)
                .then(res => {
                    setcart([{ ...res.data, price: 20, quantity: 1 }]);
                })
                .catch(err => {
                    router.push("/");
                });
        } else {
            setcart(mycart);
        }
    }, [from]);

    console.log(cart);

    const user = useAppSelector(state => state.user.data);
    const { name = "", email = "", mobile = "" } = user;
    const [loading, setLoading] = useState(false);
    const { totalitems, totalprice } = calculateCart(cart);
    let orderDetails = {
        title: "",
        description: "",
        amount: totalprice,
    };

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
                    amount: totalprice * 100, // convert in paise
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
                    name,
                    email,
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
                <PriceDetails items={cart} />
            </Container>
        </Checkoutstyle>
    );
};

export default Payment;
