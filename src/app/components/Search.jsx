"use client";
import styled from "styled-components";
import MyForm from "./ui/Form";

const Search = () => {
    return (
        <Searchstyle>
            <input type="search" placeholder="search ebooks" />
        </Searchstyle>
    );
};

export default Search;
const Searchstyle = styled(MyForm)`
    margin: 30px auto;

    input {
        border-radius: 100px;
        text-align: center;
    }
`;
