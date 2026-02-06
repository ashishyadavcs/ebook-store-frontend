"use client";
import SearchStyle from "@/styles/search.styled";
import { useRouter } from "next/navigation";
import { FaSearch } from "react-icons/fa";
import Button from "@/components/ui/Button";

const Search = ({ searchQuery }) => {
    const router = useRouter();
    const search = e => {
        e.preventDefault();
        let query = e.target.query.value.trim();
        if (query.length > 0) {
            router.push(`?query=${query}`);
            return;
        } else {
            router.push("/");
        }
        router.refresh();
    };
    return (
        <SearchStyle
            onSubmit={e => {
                e.preventDefault();
                search(e);
            }}
        >
            <input
                required
                minLength={3}
                name="query"
                type="search"
                placeholder="search ebooks..."
            />
            <Button type="default">
                <FaSearch size={20} />
                <span>Search</span>
            </Button>
        </SearchStyle>
    );
};

export default Search;
