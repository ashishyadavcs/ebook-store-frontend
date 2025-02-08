"use client";
import SearchStyle from "@/styles/search.styled";
import { useRouter } from "next/navigation";

const Search = () => {
    const router = useRouter();
    const search = e => {
        router.push(`?query=${e.target.value}`);
    };
    return (
        <SearchStyle>
            <input onInput={search} type="search" placeholder="search ebooks" />
        </SearchStyle>
    );
};

export default Search;
