"use client";
import Form from "next/form";
import styled from "styled-components";
export const FormStyle = styled(Form)`
    width: min(400px, 100%);
    display: flex;
    flex-direction: column;
    .title {
        margin: 0 0 10px;
    }
    label {
        color: #666;
        display: flex;
        gap: 5px;
        flex-direction: column;
        width: 100%;
        margin: 0 0 15px;
    }

    input,
    textarea {
        flex: 1;
        border-radius: 4px;
        padding: 10px;
        border: 2px solid #ddd;
        &:focus {
            border-color: blue;
        }
    }
`;
export default FormStyle;
