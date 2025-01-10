"use client";
import styled from "styled-components";
import Button from "./Button";
import { media } from "../../config/media";

const AddEbook = () => {
    const addEbook = async e => {
        e.preventDefault();
        const { title, author } = e.target;
        const res = await fetch("/api/ebook", {
            method: "POST",
            credentials: "include",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({
                title: title.value,
                author: author.value,
            }),
        });
        if (!res.ok) {
            console.log(res.statusText);
        }
        console.log(await res.json());
    };
    return (
        <EbookStyles>
            <form onSubmit={addEbook}>
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
                <Button>add</Button>
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
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
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
