import Button from "@/components/ui/Button";
import styled from "styled-components";

export const Buttonstyle = styled(Button)`
    .btn {
        background: #ddd;
        border: none;
        text-decoration: none;
        outline: none;
        font-size: inherit;
        padding: 10px 20px;
        cursor: pointer;
        text-align: center;
        display: inline-flex;
        gap: 10px;
        justify-content: center;
        align-items: center;
        color: inherit;
        position: relative;
    }
    .loader {
        display: inline-block;
        border: 2px solid #f3f3f3; /* Light grey */
        border-top: 2px solid;
        border-radius: 50%;
        --size: 18px;
        width: var(--size);
        height: var(--size);
        animation: spin 2s linear infinite;
    }

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;

export default Buttonstyle