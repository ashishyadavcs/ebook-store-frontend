import styled from "styled-components";

const StyledHeader = styled.header`
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
    nav {
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: sticky;
        background: #fff;
        z-index: 2;
        top: 0;
        a {
            font-weight: 600;
            color: #000;
            padding: 10px;
            margin: 5px;
            &:hover {
                background: #f1f1f1;
            }
        }
        .links {
            display: flex;
            list-style: none;
            gap: 40px;
        }
        .menu-btn {
            display: none;
        }
        @media (max-width: 767px) {
            .links {
                flex-direction: column;
                gap: 10px;
                position: absolute;
                left: -100%;
                top: 100%;
                background: #000;
                width: 250px;
                min-height: 92vh;
                transition: all 0.3s;
                li {
                    position: relative;
                    &::before {
                        position: absolute;
                        content: "";
                        top: 100%;
                        left: 0;
                        width: 100%;
                        height: 2px;
                        background: linear-gradient(to right, #ddd, transparent);
                    }
                }
                a {
                    color: #fff;
                    display: block;
                    padding: 10px 30px;
                }
            }
            .menu-btn {
                display: inline-block;
                width: 30px;
                background: transparent;
                span {
                    display: block;
                    height: 2px;
                    background: #000;
                    margin-bottom: 5px;
                }
            }

            &.active {
                .links {
                    left: -30px;
                }
            }
        }
    }
`;

export default StyledHeader;
