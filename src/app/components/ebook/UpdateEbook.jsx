"use client";
import styled from "styled-components";
import Button from "@/components/ui/Button";
import { media } from "@/config/media";
import { toastify } from "@/components/Toast";
import MyForm from "@/components/ui/Form";
import { useState } from "react";
import Upload from "@/components/ui/upload";
import { useForm } from "@/hooks/useForm";
const UpdateEbook = ({ ebook }) => {
    const { handleChange, values } = useForm();
    const [loading, setloading] = useState(false);
    const addEbook = async e => {
        e.preventDefault();
        setloading(true);
        const formdata = new FormData();
        Object.keys(values).forEach(field => {
            formdata.append(field, values[field]);
        });
        const res = await fetch(`/api/ebook/${ebook._id}`, {
            method: "PATCH",
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
                        <input
                            defaultValue={ebook.title}
                            onChange={handleChange}
                            name="title"
                            type="text"
                            placeholder="Ebook title"
                        />
                    </label>
                    <label htmlFor="author">
                        <input
                            defaultValue={ebook.author}
                            onChange={handleChange}
                            name="author"
                            type="text"
                            placeholder="Ebook Author"
                        />
                    </label>

                    <label htmlFor="description">
                        <textarea
                            defaultValue={ebook.description}
                            onChange={handleChange}
                            className="textarea"
                            name="description"
                            placeholder="ebook description"
                        />
                    </label>
                    <Upload
                        imageURL={ebook.coverImageUrl}
                        name="coverImageUrl"
                        title="Upload cover Image"
                        onchange={handleChange}
                    />
                    <label htmlFor="price">
                        <input
                            onChange={handleChange}
                            name="price"
                            type="number"
                            placeholder="price"
                        />
                    </label>
                    <Upload onchange={handleChange} name="fileUrl" title="Upload Ebook" />
                </div>
                <Button disabled={!values} type="primary" loading={loading}>
                    update ebook
                </Button>
            </MyForm>
        </EbookStyles>
    );
};

export default UpdateEbook;
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
                align-items: self-start;
                gap: 20px;
                label {
                    margin: 0;
                }
            }
        }
    }
`;
