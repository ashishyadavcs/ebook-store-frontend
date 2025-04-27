"use client";
import SearchStyle from "@/styles/search.styled";
import { throttling } from "@/utils/common";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Search = ({ searchQuery }) => {
    const router = useRouter();
    const search = e => {
        e.preventDefault();
        let query = e.target.value.trim();
        if (query.length > 0) {
            router.push(`?query=${query}`);
            return;
        } else {
            router.push("/");
        }
        router.refresh();
    };
    return (
        <SearchStyle>
            <input onInput={throttling(search, 0)} type="search" placeholder="search ebooks..." />
        </SearchStyle>
    );
};

export default Search;
