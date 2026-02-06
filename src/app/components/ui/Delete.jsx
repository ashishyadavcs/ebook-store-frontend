"use client";
import React, { useState } from "react";
import Button from "@/components/ui/Button";
import { MdDelete } from "react-icons/md";
import { useRouter } from "next/navigation";
import { toastify } from "@/components/Toast";

const DeleteItem = ({ url, message = "item deleted!" }) => {
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
                toastify.success(message);
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
