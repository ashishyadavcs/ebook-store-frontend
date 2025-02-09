import { media } from "@/config/media";
import styled from "styled-components";
const PriceDetailStyles = styled.div`
    border-radius: 8px;
    background: #fff;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
    width: 100%;
    h3 {
        padding: 15px;
    }
    ul {
        list-style: none;
        li {
            padding: 15px;
            display: flex;
            width: 100%;
            justify-content: space-between;
            border-top: 1px solid #ddd;
        }
    }
`;
export default PriceDetailStyles;
