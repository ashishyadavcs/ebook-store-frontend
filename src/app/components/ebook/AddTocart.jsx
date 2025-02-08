"use client";
import React from "react";
import Button from "../ui/Button";
import { useAppDispatch, useAppSelector } from "@/state/hooks";
import { addToCart } from "@/state/cart";
import { toastify } from "../Toast";
const AddTocart = ({ ebook }) => {
    ebook = { ...ebook, price: 20 };
    const cart = useAppSelector(state => state.cart.data);
    const dispatch = useAppDispatch();
    const existingItem = cart.length > 0 && cart.some(i => i?._id == ebook._id);
    return (
        <Button
            disabled={existingItem}
            onClick={e => {
                dispatch(addToCart(ebook));
                toastify.success("added to cart");
            }}
        >
            {existingItem ? "added to cart" : "+ add to cart"}
        </Button>
    );
};

export default AddTocart;
