"use client";
import { useMemo } from "react";
import Container from "@/components/ui/Container";
import { ViewcartStyles } from "@/styles/checkout.styled";
import { useAppSelector, useAppDispatch } from "@/state/hooks";
import { addToCart, removeFromCart } from "@/state/cart";
import Button from "@/components/ui/Button";
import Image from "next/image";
import { MdDelete } from "react-icons/md";

const ViewCart = () => {
    const cart = useAppSelector(state => state.cart.data);
    const dispatch = useAppDispatch();

    // Memoize calculations to prevent unnecessary recalculations on re-renders
    const { totalItems, totalPrice, totalDiscount } = useMemo(() => {
        const items = cart.reduce((total, item) => total + (item.quantity || 1), 0);
        const price = cart.reduce((total, item) => total + item.price * (item.quantity || 1), 0);
        const discount = cart.reduce((savings, item) => {
            const itemDiscount = item.originalPrice
                ? (item.originalPrice - item.price) * (item.quantity || 1)
                : 0;
            return savings + itemDiscount;
        }, 0);

        return { totalItems: items, totalPrice: price, totalDiscount: discount };
    }, [cart]);

    // Handlers with consistent naming pattern
    const handleAddItem = item => {
        dispatch(addToCart(item));
    };

    const handleRemoveItem = item => {
        dispatch(removeFromCart(item));
    };

    const handleRemoveCompletely = item => {
        dispatch(removeFromCart({ ...item, quantity: 0 }));
    };

    // Cart item component for better code organization
    const CartItem = ({ item }) => (
        <div className="cart-item">
            <div className="item-image">
                {item.coverImageUrl ? (
                    <Image
                        src={item.coverImageUrl}
                        alt={item.title}
                        width={100}
                        height={150}
                        loading="lazy"
                    />
                ) : (
                    <div className="placeholder-image"></div>
                )}
            </div>
            <div className="item-info">
                <h3>{item.title}</h3>
                <p className="author">{item.author || "Robert C. Martin"}</p>
                <div className="quantity-controls">
                    <Button
                        className="quantity-btn"
                        onClick={() => handleRemoveItem(item)}
                        aria-label="Decrease quantity"
                        type="default"
                    >
                        −
                    </Button>
                    <span className="quantity">{item.quantity || 1}</span>
                    <Button
                        className="quantity-btn"
                        onClick={() => handleAddItem(item)}
                        aria-label="Increase quantity"
                        type="default"
                    >
                        +
                    </Button>
                </div>
            </div>
            <div className="item-price">
                {item.originalPrice && <div className="original">₹{item.originalPrice}</div>}
                <div className="current">₹{item.price}</div>
                <Button
                    className="remove-btn"
                    onClick={() => handleRemoveCompletely(item)}
                    aria-label="Remove item"
                    type="default"
                >
                    <MdDelete size={20} />
                </Button>
            </div>
        </div>
    );

    // Price summary component for better code organization
    const PriceSummary = () => (
        <div className="price-card">
            <h2>Price Details</h2>
            <ul>
                <li>
                    <span>Price ({totalItems} items)</span>
                    <span>₹{totalPrice}</span>
                </li>
                {totalDiscount > 0 && (
                    <li className="discount">
                        <span>Discount</span>
                        <span>-₹{totalDiscount}</span>
                    </li>
                )}
                <li className="total">
                    <span>Total Payable</span>
                    <span>₹{totalPrice}</span>
                </li>
            </ul>

            <div className="actions">
                <Button type="primary" href="/checkout" className="checkout-btn">
                    Proceed To Checkout
                </Button>
                <Button type="secondary" href="/" className="continue-btn">
                    Continue Shopping
                </Button>
            </div>
        </div>
    );

    return (
        <ViewcartStyles>
            <Container>
                <h1 className="heading">Shopping Cart</h1>

                {cart.length > 0 ? (
                    <div className="cart-content">
                        <div className="cart-items">
                            <div className="cart-header">Cart Items ({cart.length})</div>
                            {cart.map(item => (
                                <CartItem key={item._id} item={item} />
                            ))}
                        </div>

                        <div className="price-details">
                            <PriceSummary />
                        </div>
                    </div>
                ) : (
                    <div className="empty-cart">
                        <div className="empty-icon" aria-hidden="true"></div>
                        <h2>Your Cart is Empty</h2>
                        <p>Looks like you haven't added any ebooks to your cart yet</p>
                        <Button href="/" type="primary">
                            Explore eBooks
                        </Button>
                    </div>
                )}
            </Container>
        </ViewcartStyles>
    );
};

export default ViewCart;
