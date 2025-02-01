"use client";
import Image from "next/image";
import React, { useState } from "react";

const Upload = ({ user }) => {
    const [image, setImage] = useState(false);
    return (
        <label htmlFor="image" className="image">
            <Image src={image} layout="fill" />
            <input
                id="image"
                defaultValue={user.image}
                hidden
                name="image"
                type="file"
                accept="image/*"
                placeholder="image"
                onChange={e => setImage(URL.createObjectURL(e.target.files[0]))}
            />
        </label>
    );
};

export default Upload;
