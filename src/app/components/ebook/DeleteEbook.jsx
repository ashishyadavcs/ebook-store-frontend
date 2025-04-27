"use client";
import React, { useState } from "react";
import Button from "../ui/Button";
import { MdDelete } from "react-icons/md";
import { useRouter } from "next/navigation";
import { toastify } from "../Toast";

const DeleteEbook = ({ id }) => {
    const [loading, setloading] = useState(false);
    const router = useRouter();
    const deleteEbook = async id => {
        try {
            setloading(true);
            const res = await fetch(`/api/ebooks/${id}`, {
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
                await deleteEbook(id);
            }}
        >
            <MdDelete />
        </Button>
    );
};

export default DeleteEbook;
