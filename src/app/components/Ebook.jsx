import styled from "styled-components";

const Ebook = ({ data }) => {
    const { title, author } = data;
    return (
        <Ebookstyle className="card">
            <h2>{title}</h2>
            <p>{author}</p>
        </Ebookstyle>
    );
};

export default Ebook;
const Ebookstyle = styled.div`
    padding: 10px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
`;
