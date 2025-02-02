"use client";
import Image from "next/image";
import React, { useState } from "react";

const Upload = ({ user }) => {
    const [image, setImage] = useState(user.image);
    return (
        <label htmlFor="image" className="image">
            {image && <Image alt="profile image" src={image} layout="fill" />}
            <input
                id="image"
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
