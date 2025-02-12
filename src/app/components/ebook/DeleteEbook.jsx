"use client";
import React from "react";
import Button from "../ui/Button";
import { MdDelete } from "react-icons/md";

const DeleteEbook = id => {
    return (
        <Button>
            <MdDelete />
        </Button>
    );
};

export default DeleteEbook;
