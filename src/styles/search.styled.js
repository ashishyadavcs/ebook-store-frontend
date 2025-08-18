"use client";
import MyForm from "@/components/ui/Form";
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
    .btn {
        padding: 10px 20px;
        border-radius: 0;
        color: #fff;
        background: linear-gradient(90deg, var(--aqua), #ba23fa, var(--redpink));
    }
    input {
        padding: 10px 20px;
        border: none;
    }
`;
export default SearchStyle;
