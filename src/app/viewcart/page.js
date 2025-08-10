"use client";
import Container from "@/components/ui/Container";
import { ViewcartStyles } from "@/styles/checkout.styled";
import { useAppSelector } from "@/state/hooks";
import PriceDetails from "@/components/checkout/PriceDetails";
import ItemList from "@/components/checkout/ItemList";
import Button from "@/components/ui/Button";

const Payment = () => {
    const cart = useAppSelector(state => state.cart.data);
    return (
        <ViewcartStyles>
            <Container className={cart.length > 0 && "has-items"}>
                {cart.length > 0 ? (
                    <>
                        <ItemList items={cart} />
                        <PriceDetails items={cart} />
                    </>
                ) : (
                    <>
                        <h2 className="title">No Items in Cart</h2>
                        <Button href="/" type="primary">
                            explore ebooks to buy
                        </Button>
                    </>
                )}
            </Container>
        </ViewcartStyles>
    );
};

export default Payment;
