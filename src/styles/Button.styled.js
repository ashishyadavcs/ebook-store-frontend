import styled from "styled-components";
export const Buttonstyle = button => styled(button)`
    background: #ddd;
    border: none;
    border-radius: 4px;
    text-decoration: none;
    outline: none;
    font-size: inherit;
    padding: 10px 20px;
    cursor: pointer;
    text-align: center;
    display: inline-flex;
    gap: 10px;
    justify-content: center;
    align-items: center;
    color: inherit;
    position: relative;
    font-weight: 600;
    text-transform: capitalize;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
    &.primary {
        background: #ff0080;
        color: #fff;
        .loader {
            border-top-color: #ff0080;
        }
    }
    &:disabled {
        cursor: not-allowed;
        pointer-events: none;
    }
    &.default {
        background: transparent;
        box-shadow: none;
        padding: 0;
    }
`;

export default Buttonstyle;
