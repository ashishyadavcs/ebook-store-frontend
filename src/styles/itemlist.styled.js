import { media } from "@/config/media";
import styled from "styled-components";
const ItemListStyles = styled.div`
    .products {
        ${media.minsm} {
            max-height: 60vh;
            overflow: auto;
        }
        padding: 0 2px;
        margin: 0 0 20px;
    }
    .product {
        display: flex;
        overflow: hidden;
        background: #fff;
        margin: 0 0 10px;
        height: 200px;
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);

        a {
            width: 200px;
            height: 100%;
            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                object-position: top;
            }
        }
        .details {
            padding: 20px;
        }
        .btn-group {
            margin: 10px 0;
            display: flex;
            gap: 10px;
        }
    }
    .btn-wrap {
        position: sticky;
        bottom: 0px;
        padding: 10px 18px;
        background: var(--lightblue);
        margin: 0 -18px;
    }
    .btn {
        background: #fff;
        ${media.sm} {
            display: block;
        }
    }
`;
export default ItemListStyles;
