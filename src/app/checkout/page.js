"use client";
import Container from "@/components/ui/Container";
import { Checkoutstyle } from "@/styles/checkout.styled";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { toastify } from "@/components/Toast";
import MyForm from "@/components/ui/Form";
import { useAppDispatch, useAppSelector } from "@/state/hooks";
import { calculateCart } from "@/utils/cart.js";
import SuccessPopUp from "@/components/Successpopup.jsx";
import { colors } from "@/config/constant.js";
import { LuShield } from "react-icons/lu";
import { FaCreditCard } from "react-icons/fa6";
import { FaMobileAlt } from "react-icons/fa";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import OrderSummary from "@/components/checkout/OrderSummary.jsx";
import { IoIosCheckmarkCircle } from "react-icons/io";
const Payment = () => {
    const params = useSearchParams();
    const router = useRouter();
    const from = params.get("from");
    let mycart = useAppSelector(state => state.cart.data);
    const [cart, setcart] = useState(mycart);
    const [success, setsuccess] = useState(false);
    const [paymentGateway, setpaymentGateway] = useState("razorpay");
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
                    setcart([{ ...res.data[0], price: res.data[0].price / 100, quantity: 1 }]);
                })
                .catch(err => {
                    router.push("/");
                });
        } else {
            setcart(mycart);
        }
    }, [from]);

    const user = useAppSelector(state => state.user.data);
    const { name = "", email = "", mobile = "" } = user;
    const [userdetail, setuserdetail] = useState({
        name,
        email,
        mobile,
    });
    const [loading, setLoading] = useState(false);

    return (
        <Checkoutstyle>
            {console.log(cart)}
            {success && <SuccessPopUp goto={"/dashboard/ebooks"} />}
            <Container>
                <h2 className="title">Checkout</h2>
                <p>Complete your purchase securely</p>
            </Container>
            <Container className="payment-ui">
                <div className="payment-methods">
                    <div className="methods">
                        <h3 className="sub-title">Payment Methods</h3>
                        <p>choose your preferred payment option</p>
                        <div className="method">
                            <input
                                onChange={e => setpaymentGateway(e.target.value)}
                                checked={paymentGateway === "stripe"}
                                type="radio"
                                id="stripe"
                                name="payment"
                                value="stripe"
                            />
                            <label htmlFor="stripe">
                                <IoIosCheckmarkCircle
                                    className="checked"
                                    size={30}
                                    color={colors.green}
                                />

                                <div className="method-item">
                                    <FaCreditCard color="blue" size={30} />
                                    <div className="text">
                                        <h3>Stripe</h3>
                                        <p>International cards & digital wallets</p>
                                    </div>
                                </div>
                                <div className="more">
                                    <ul className="tags">
                                        <li>visa</li>
                                        <li>mastercard</li>
                                        <li>paypal</li>
                                    </ul>
                                </div>
                            </label>
                        </div>
                        <div className="method">
                            <input
                                onChange={e => setpaymentGateway(e.target.value)}
                                checked={paymentGateway === "razorpay"}
                                type="radio"
                                id="razorpay"
                                name="payment"
                                value="razorpay"
                            />
                            <label htmlFor="razorpay">
                                <IoIosCheckmarkCircle
                                    className="checked"
                                    size={30}
                                    color={colors.green}
                                />
                                <div className="method-item">
                                    <FaMobileAlt size={30} />
                                    <div className="text">
                                        <h3>Razorpay</h3>
                                        <p>Pay with UPI, Cards, Netbanking & Wallets</p>
                                    </div>
                                </div>

                                <div className="more">
                                    <ul className="tags">
                                        <li>upi</li>
                                        <li>cards</li>
                                        <li>wallets</li>
                                        <li>netbanking</li>
                                    </ul>
                                    <p>
                                        <IoMdCheckmarkCircleOutline color={colors.green} /> zero
                                        processing fees
                                    </p>
                                </div>
                            </label>
                        </div>
                    </div>
                    <MyForm className="form">
                        <h2 className="sub-title">Contact details</h2>
                        <label>
                            <span>Name</span>
                            <input
                                onChange={e => setuserdetail(v => ({ ...v, name: e.target.value }))}
                                type="text"
                                value={userdetail.name}
                            />
                        </label>
                        <label>
                            <span>Mobile</span>
                            <input
                                onChange={e =>
                                    setuserdetail(v => ({ ...v, mobile: e.target.value }))
                                }
                                type="tel"
                                value={userdetail.mobile}
                            />
                        </label>
                    </MyForm>
                    <div className="secure">
                        <LuShield size={30} color="#00a63e" />
                        <div className="text">
                            <h3>256-bit SSL Encryption</h3>
                            <p>
                                Your payment information is encrypted and secure. We never store
                                your card details.
                            </p>
                        </div>
                    </div>
                </div>
                <OrderSummary paymentGateway={paymentGateway} cart={cart} />
            </Container>
        </Checkoutstyle>
    );
};

export default Payment;
