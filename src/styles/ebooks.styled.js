"use client";
import styled from "styled-components";
export const EbooksContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 30px;
    a{
        color: inherit;
    }
`;
