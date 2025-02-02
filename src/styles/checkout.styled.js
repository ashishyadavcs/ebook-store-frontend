import styled from "styled-components";
import { media } from "../config/media";

export const Checkoutstyle = styled.section`
    padding: 40px 0;
    .title {
        margin: 0 0 30px;
    }
    .container {
        display: flex;
        ${media.sm} {
            flex-direction: column-reverse;
        }
        gap: 60px;
        .form,
        .cart {
            flex: 1;
        }

        .product {
            display: flex;
            border: 1px solid teal;
            gap: 10px;
            margin: 0 0 10px;
            .details {
                padding: 10px;
            }
            .btn-group {
                margin: 7px 0;
                display: flex;
                gap: 4px;
            }
        }
    }
`;
