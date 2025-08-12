"use client";
import { useMemo } from "react";
import Container from "@/components/ui/Container";
import { ViewcartStyles } from "@/styles/checkout.styled";
import { useAppSelector } from "@/state/hooks";
import Button from "@/components/ui/Button";
import PriceDetails from "@/components/checkout/PriceDetails";
import ItemList from "@/components/checkout/ItemList";

const ViewCart = () => {
    const cart = useAppSelector(state => state.cart.data);
    const { totalItems, totalPrice, totalDiscount } = useMemo(() => {
        if (!cart || cart.length === 0) {
            return { totalItems: 0, totalPrice: 0, totalDiscount: 0 };
        }

        return cart.reduce(
            (acc, item) => {
                const quantity = item.quantity || 1;
                const price = (item.price || 0) * quantity;
                const itemDiscount = item.originalPrice
                    ? (item.originalPrice - item.price) * quantity
                    : 0;

                return {
                    totalItems: acc.totalItems + quantity,
                    totalPrice: acc.totalPrice + price,
                    totalDiscount: acc.totalDiscount + itemDiscount,
                };
            },
            { totalItems: 0, totalPrice: 0, totalDiscount: 0 }
        );
    }, [cart]);

    if (!cart || cart.length === 0) {
        return (
            <ViewcartStyles>
                <Container>
                    <h1 className="heading">Shopping Cart</h1>
                    <div className="empty-cart" role="status">
                        <div className="empty-icon" aria-hidden="true"></div>
                        <h2>Your Cart is Empty</h2>
                        <p>Looks like you haven't added any ebooks to your cart yet</p>
                        <Button href="/" type="primary" aria-label="Browse eBooks">
                            Explore eBooks
                        </Button>
                    </div>
                </Container>
            </ViewcartStyles>
        );
    }

    return (
        <ViewcartStyles>
            <Container>
                <h1 className="heading">
                    Shopping Cart ({totalItems} {totalItems === 1 ? "item" : "items"})
                </h1>
                <div className="cart-content">
                    <ItemList items={cart} />
                    <PriceDetails
                        totalItems={totalItems}
                        totalPrice={totalPrice}
                        totalDiscount={totalDiscount}
                    />
                </div>
            </Container>
        </ViewcartStyles>
    );
};

export default ViewCart;
