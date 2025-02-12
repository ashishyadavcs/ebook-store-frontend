"use client";
import styled from "styled-components";
import Button from "@/components/ui/Button";
import { media } from "@/config/media";
import { toastify } from "@/components/Toast";
import MyForm from "@/components/ui/Form";
import { useState } from "react";
import Upload from "@/components/ui/upload";

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
    };
    return (
        <EbookStyles className="add-ebook">
            <MyForm onSubmit={addEbook}>
                <div className="fields">
                    <label htmlFor="email">
                        <input name="title" type="text" required placeholder="Ebook title" />
                    </label>
                    <label htmlFor="author">
                        <input name="author" type="text" required placeholder="Ebook Author" />
                    </label>

                    <label htmlFor="description">
                        <textarea
                            className="textarea"
                            name="description"
                            type="text"
                            required
                            placeholder="ebook description"
                        />
                    </label>
                    <Upload name="coverImageUrl" title="Upload cover Image" />
                    <label htmlFor="price">
                        <input name="price" type="number" required placeholder="price" />
                    </label>
                    <Upload name="fileUrl" title="Upload Ebook" />
                </div>
                <Button type="primary" loading={loading}>
                    add ebook
                </Button>
            </MyForm>
        </EbookStyles>
    );
};

export default AddEbook;
const EbookStyles = styled.div`
    width: 100%;
    background: #fff;
    padding: 40px;
    border-radius: 8px;
    ${media.sm} {
        padding: 20px;
    }
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
    form {
        width: 100%;
        ${media.minsm} {
            .fields {
                display: grid;
                margin: 0 0 20px;
                grid-template-columns: 50% 50%;
                gap: 20px;
                label {
                    margin: 0;
                }
            }
        }
    }
`;
