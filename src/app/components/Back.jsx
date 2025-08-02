"use client";
import { useRouter } from "next/navigation";
import { BiArrowBack } from "react-icons/bi";
import styled from "styled-components";
const Back = ({ title }) => {
    const router = useRouter();
    return (
        <Backstyle className="back" title="go back">
            <BiArrowBack size={26} onClick={e => router.back()} />
            <h2>{title}</h2>
        </Backstyle>
    );
};

export default Back;
const Backstyle = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    margin: 0 0 30px;
    h2 {
        text-transform: capitalize;
    }
    svg {
        cursor: pointer;
    }
`;
