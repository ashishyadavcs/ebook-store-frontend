import styled from "styled-components";
import { constant } from "../../config/constant";
import Review from "@/components/Review";
import Button from "./Button";
const Ebook = ({ data }) => {
    const { _id, title, author, coverImageUrl = constant.image } = data;
    return (
        <Ebookstyle className="ebook">
            <img src={coverImageUrl} />
            <h2 className="title">{title}</h2>
            <p className="description">{author}</p>
            <Button type="link" href="/checkout">add to cart</Button>
            {/* <Review ebookid={_id} size={30} /> */}
        </Ebookstyle>
    );
};

export default Ebook;
const Ebookstyle = styled.div`
    .title {
        font-size: 1.8rem;
        margin: 1rem 0 0.5rem;
    }
    img {
        max-width: 100%;
    }
    padding: 10px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
`;
