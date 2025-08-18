"use client";
import MyForm from "@/components/ui/Form";
import { media } from "@/config/media";
import styled from "styled-components";
const SearchStyle = styled(MyForm)`
    margin: 30px auto;
    flex-direction: row;
    background: #fff;
    border-radius: 100px;
    overflow: hidden;
    &:invalid {
        .btn {
            pointer-events: none;
            opacity: 0.5;
        }
    }
    --btn-width: 23%;
    .btn {
        display: flex;
        align-items: center;
        padding: 10px 20px;
        border-radius: 0;
        color: #fff;
        background: linear-gradient(90deg, var(--aqua), #ba23fa, var(--redpink));
        ${media.sm} {
            span {
                display: none;
            }
            width: 23%;
        }
    }
    input {
        width: calc(100% - var(--btn-width));
        padding: 10px 20px;
        border: none;
    }
`;
export default SearchStyle;
