import styled from "styled-components";
const ItemListStyles = styled.div`
    .product {
        display: flex;
        gap: 10px;
        overflow: hidden;
        background: #fff;
        margin: 0 0 10px;
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
        a {
            height: 100%;
            img {
                width: 200px;
                height: 100%;
            }
        }
        .details {
            padding: 10px;
        }
        .btn-group {
            margin: 7px 0;
            display: flex;
            gap: 4px;
        }
    }
`;
export default ItemListStyles;
