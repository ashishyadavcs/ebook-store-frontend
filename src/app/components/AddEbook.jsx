"use client";
import styled from "styled-components";
import Button from "./Button";
import { media } from "../../config/media";
import { redirect } from "next/navigation";
import { toastify } from "./Toast";

const AddEbook = () => {
    const addEbook = async e => {
        e.preventDefault();
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
            return toastify.error(res.message || res.statusText);
        }
        await res.json();
        toastify.success("ebook added successfull");
    };
    return (
        <EbookStyles>
            <form onSubmit={addEbook}>
                <h2>Add new Ebook</h2>
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
                <Button>add ebook</Button>
            </form>
        </EbookStyles>
    );
};

export default AddEbook;
const EbookStyles = styled.div`
    margin: 60px auto;
    padding: 60px;
    ${media.sm} {
        padding: 20px;
    }
    width: min(400px, 90%);
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
    .title {
        margin: 0 0 10px;
    }
    form {
        display: flex;
        flex-direction: column;
        gap: 10px;
        label {
            display: flex;
            width: 100%;
            align-items: center;
            input {
                flex: 1;
                max-width: 100%;
            }
        }
        input {
            border: 2px solid #ddd;
            &:focus {
                border-color: blue;
            }
        }
    }
`;
