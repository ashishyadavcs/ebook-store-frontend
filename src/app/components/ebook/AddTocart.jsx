"use client";
import React from "react";
import Button from "@/components/ui/Button";
import { useAppDispatch, useAppSelector } from "@/state/hooks";
import { addToCart } from "@/state/cart";
import { toastify } from "@/components/Toast";
import { FaCartPlus } from "react-icons/fa6";
const AddTocart = ({ ebook, loading }) => {
    ebook = { ...ebook, price: 20 };
    const cart = useAppSelector(state => state.cart.data);
    const dispatch = useAppDispatch();
    const existingItem = cart.length > 0 && cart.some(i => i?._id == ebook._id);
    return (
        <Button
            disabled={existingItem}
            loading={loading}
            onClick={e => {
                dispatch(addToCart(ebook));
                toastify.success("added to cart");
            }}
        >
            <FaCartPlus size={18} />
            {existingItem ? "added into cart" : "+ add to cart"}
        </Button>
    );
};

export default AddTocart;
