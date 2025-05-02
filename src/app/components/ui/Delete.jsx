"use client";
import React, { useState } from "react";
import Button from "./Button";
import { MdDelete } from "react-icons/md";
import { useRouter } from "next/navigation";
import { toastify } from "../Toast";

const DeleteItem = ({ url }) => {
    const [loading, setloading] = useState(false);
    const router = useRouter();
    const deleteItem = async () => {
        try {
            setloading(true);
            const res = await fetch(url, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            if (res.ok) {
                await res.json();
                toastify.success("ebook deleted!");
                setloading(false);
                router.refresh();
            }
        } catch (err) {
            setloading(false);
        }
    };
    return (
        <Button
            loading={loading}
            replace={true}
            onClick={async e => {
                await deleteItem();
            }}
        >
            <MdDelete />
        </Button>
    );
};

export default DeleteItem;
