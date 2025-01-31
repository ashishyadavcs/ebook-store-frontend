"use client";
import styled from "styled-components";
import Button from "./Button";
import { media } from "../../config/media";
import { redirect } from "next/navigation";
import { toastify } from "./Toast";
import { useState } from "react";
import MyForm from "./Form";

const AddEbook = () => {
    const [loading, setloading] = useState(false);
    const addEbook = async e => {
        e.preventDefault();
        setloading(true);
        const formdata = new FormData(e.target);
        formdata.delete("coverImageUrl");
        formdata.append("coverImageUrl", e.target.coverImageUrl.files[0]);
        const res = await fetch("/api/ebook", {
            method: "POST",
            credentials: "include",
            body: formdata,
        });
        if (res.redirected) {
            redirect(res.url);
        }
        if (!res.ok) {
            setloading(false);
            return toastify.error(res.message || res.statusText);
        }

        await res.json();
        setloading(false);
        toastify.success("ebook added successfull");
        redirect("/");
    };
    return (
        <EbookStyles>
            <MyForm onSubmit={addEbook}>
                <h2 className="title">Add new Ebook</h2>
                <label htmlFor="email">
                    <input
                        defaultValue={"How to be successfull"}
                        name="title"
                        type="text"
                        required
                        placeholder="Ebook title"
                    />
                </label>
                <label htmlFor="author">
                    <input
                        defaultValue={"Ashish Kumar"}
                        name="author"
                        type="text"
                        required
                        placeholder="Ebook Author"
                    />
                </label>
                <label htmlFor="cover-image">
                    <input
                        required
                        name="coverImageUrl"
                        type="file"
                        accept="images/*"
                        placeholder="cover image"
                    />
                </label>
                <Button loading={loading}>add ebook</Button>
            </MyForm>
        </EbookStyles>
    );
};

export default AddEbook;
const EbookStyles = styled.div`
    padding: 40px;
    ${media.sm} {
        padding: 20px;
    }
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
    .title {
        margin: 0 0 10px;
    }
`;
