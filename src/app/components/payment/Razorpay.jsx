import React, { useEffect, useState } from "react";
import { FaLock } from "react-icons/fa";
import Button from "@/components/ui/Button";
import { toastify } from "@/components/Toast";
import { colors } from "@/config/constant";
import { useAppSelector } from "@/state/hooks";
import { calculateCart } from "@/utils/cart";
import SuccessPopUp from "@/components/Successpopup";
import { revalidatePathAction } from "../../actions/common";
import { redirect } from "next/navigation";
const Razorpay = ({ cart }) => {
    const [loading, setLoading] = useState(false);
    const [success, setsuccess] = useState(false);
    const user = useAppSelector(state => state.user.data);
    const { totalitems, totalprice } = calculateCart(cart);
    const { name = "", email = "", mobile = "" } = user;
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://checkout.razorpay.com/v1/checkout.js";
        script.async = true;
        document.body.appendChild(script);
        return () => {
            document.body.style.overflow = "auto";
        };
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
                    amount: totalprice * 100, // convert in paise
                    cart,
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
                image: "/images/logo.svg",
                animation: false,
                order_id: id,
                remember_customer: true, // to save cards
                handler: async response => {
                    const req = await fetch(`/api/verify-payment`, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            orderid: response.razorpay_order_id,
                            paymentid: response.razorpay_payment_id,
                            signature: response.razorpay_signature,
                            ebooks: cart.map(e => e._id),
                            amount,
                        }),
                    });
                    const result = await req.json();
                    if (result.success) {
                        setLoading(false);
                        setsuccess(true);
                        setTimeout(() => {
                            setsuccess(false);
                            revalidatePathAction("/dashboard/ebooks");
                            redirect("/dashboard/ebooks");
                        }, 2000);
                        dispatch(emptyCart(null));
                        return;
                    }
                    setLoading(false);
                    toastify.error("payment failed");
                },
                modal: {
                    ondismiss: () => {
                        document.body.style.overflow = "auto";
                        setLoading(false);
                    },
                },

                prefill: {
                    name,
                    email,
                    contact: user?.mobile,
                },
                theme: {
                    color: colors.redpink,
                },
            };
            const razorpay = new window.Razorpay(options);
            await razorpay.open();
            setLoading(false);
        } catch (err) {
            setLoading(false);
            toastify.info("something went wrong at payment gateway");
        }
    };
    return (
        <>
            {success && <SuccessPopUp goto={"/dashboard/ebooks"} />}
            <Button onClick={payment} btnType="button" type="primary" loading={loading}>
                <FaLock />
                Pay with Razorpay
            </Button>
        </>
    );
};

export default Razorpay;
