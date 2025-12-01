"use client";
import React from "react";
import Button from "../ui/Button";
import useCartStore from "@/state/stores/cartStore";
import { toastify } from "../Toast";
import { FaCartPlus } from "react-icons/fa6";
const AddTocart = ({ ebook, loading }) => {
    ebook = { ...ebook, price: 20 };
    const { items: cart, addItem, getItemCount } = useCartStore();
    const existingItem = getItemCount(ebook._id) > 0;
    return (
        <Button
            disabled={existingItem}
            loading={loading}
            onClick={e => {
                addItem(ebook);
                toastify.success("added to cart");
            }}
        >
            <FaCartPlus size={18} />
            {existingItem ? "added into cart" : "+ add to cart"}
        </Button>
    );
};

export default AddTocart;
