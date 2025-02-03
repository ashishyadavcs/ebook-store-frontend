"use client";
import config from "@/config/index";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { memo } from "react";
import Container from "./ui/Container";
import styled from "styled-components";

const Breadcrumb = () => {
    const router = useRouter();
    const pathname = usePathname();
    let urls;
    try {
        urls =
            pathname &&
            pathname
                .split("/")
                .filter(el => el != "")
                .map((el, index, arr) => ({
                    position: index + 2,
                    name: el,
                    item: `${config.APP_URL}${
                        index == arr.length - 1
                            ? pathname
                            : "/" +
                              router.asPath
                                  .split("/")
                                  .filter(el => el != "")
                                  .slice(0, index + 1)
                                  .join("/")
                    }`,
                }));
    } catch (err) {
        console.log(err);
        console.log(pathname);
        urls = [];
    }

    const itemListElements = [
        {
            position: 1,
            name: "home",
            item: process.env.NEXT_PUBLIC_APP_URL,
        },
        ...urls,
    ];
    return (
        <Breadcumbstyle>
            <Container>
                <ul>
                    {itemListElements.map((a, i) => (
                        <li key={i}>
                            <Link href={a.item}>{a.name}</Link>
                        </li>
                    ))}
                </ul>
            </Container>
        </Breadcumbstyle>
    );
};

export default memo(Breadcrumb);
const Breadcumbstyle = styled.div`
    background: #fff;
    ul {
        display: flex;
        list-style: none;
        gap: 10px;
        li {
            font-style: italic;
            position: relative;
            &:not(:first-child)::before {
                content: "";
                display: inline-block;
                position: absolute;
                transform: rotate(20deg) translateY(-50%);
                height: 70%;
                width: 2px;
                background: #ddd;
                left: -7px;
                top: 50%;
            }
            &:last-child {
                pointer-events: none;
                a {
                    color: inherit;
                    opacity: 0.6;
                }
            }
        }
    }
`;
