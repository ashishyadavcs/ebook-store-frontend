import React from "react";
const Razorpay = dynamic(() => import("@/components/payment/Razorpay"), { ssr: false });
const Stripe = dynamic(() => import("@/components/payment/Stripe"), { ssr: false });
import { FaLock } from "react-icons/fa";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { LuShield } from "react-icons/lu";
import { colors } from "@/config/constant";
import dynamic from "next/dynamic";
import { calculateCart } from "@/utils/cart";

const OrderSummary = ({ cart, paymentGateway }) => {
    const { totalitems, totalprice } = calculateCart(cart);
    return (
        <div className="order-summary">
            <h3>Order Summary</h3>
            <ul className="prices">
                <li>
                    Subtotal({cart.length} items) <span>&#8377;{totalprice}</span>
                </li>
                <li className="savings">
                    Savings <span>&#8377;0</span>
                </li>
                <li>
                    Tax <span>&#8377;0</span>
                </li>
                <li>
                    Total <span>&#8377;{totalprice}</span>
                </li>
            </ul>
            {paymentGateway === "razorpay" && (
                <Razorpay
                    totalprice={totalprice}
                    cart={cart}
                    currency="INR"
                    // onSuccess={handlePaymentSuccess}
                    // onError={handlePaymentError}
                />
            )}
            {paymentGateway === "stripe" && (
                <Stripe
                    totalprice={totalprice}
                    cart={cart}
                    currency="INR"
                    // onSuccess={handlePaymentSuccess}
                    // onError={handlePaymentError}
                />
            )}
            <ul className="security">
                <li>
                    <IoIosCheckmarkCircle color={colors.green} />
                    secure
                </li>
                <li>
                    <LuShield color={colors.blue} />
                    encrypted
                </li>
                <li>
                    <FaLock color={colors.gray} />
                    protected
                </li>
            </ul>
        </div>
    );
};

export default OrderSummary;
