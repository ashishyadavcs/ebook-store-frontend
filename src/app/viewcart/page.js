"use client";
import Container from "@/components/ui/Container";
import { Checkoutstyle } from "@/styles/checkout.styled";
import { useAppSelector } from "@/state/hooks";
import PriceDetails from "@/components/checkout/PriceDetails";
import ItemList from "@/components/checkout/ItemList";

const Payment = () => {
    const cart = useAppSelector(state => state.cart.data);
    return (
        <Checkoutstyle>
            <Container>
                <ItemList items={cart} />
                <PriceDetails items={cart} />
            </Container>
        </Checkoutstyle>
    );
};

export default Payment;
