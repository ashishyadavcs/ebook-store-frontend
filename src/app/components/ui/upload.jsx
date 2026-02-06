"use client";
import Image from "@/components/Image";
import React, { useState } from "react";
import { FaImage } from "react-icons/fa6";
import styled from "styled-components";
const Upload = ({
    imageURL = false,
    title,
    name,
    required = false,
    onchange,
    readonly = false,
}) => {
    const [image, setImage] = useState(imageURL);
    return (
        <UploadStyle
            htmlFor={name}
            className="upload"
            style={{ pointerEvents: readonly ? "none" : "all" }}
        >
            {image ? (
                <Image alt="profile image" src={image} width={90} height={100} />
            ) : (
                <span className="icon">
                    <FaImage size={70} />
                </span>
            )}
            <div className="right">
                <span>{title}</span>
                <input
                    id={name}
                    className="userimage"
                    {...{ required: required }}
                    name={name}
                    type="file"
                    accept="image/*"
                    placeholder="image"
                    onChange={e => {
                        setImage(URL.createObjectURL(e.target.files[0]));
                        onchange(e);
                    }}
                />
            </div>
        </UploadStyle>
    );
};

export default Upload;
const UploadStyle = styled.label`
    cursor: pointer;
    flex-direction: row !important;
    gap: 20px !important;
    .icon {
        display: inline-block;
        background: #ddd;
        border-radius: 8px;
        padding: 10px;
    }
    img {
        object-fit: cover;
        border-radius: 8px;
    }
    input {
        width: 100%;
        cursor: pointer;
        margin: 20px 0 0;
    }
`;
