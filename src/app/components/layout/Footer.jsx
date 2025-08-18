"use client";
import Footerstyle from "@/styles/footer.styled";
import Container from "@/components/ui/Container";
import Image from "next/image";
import Link from "next/link";
import { company, news, legal } from "@/data/nav";

const Footer = () => {
    return (
        <Footerstyle className="footer">
            <Container className="main">
                <div className="info">
                    <Image
                        loading="lazy"
                        alt="logo"
                        height={70}
                        width={70}
                        src="/images/logo.svg"
                    />
                    <h3>Ebook Store</h3>
                    <p>
                        Nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat.{" "}
                    </p>
                </div>
                <div className="company">
                    <h3>company</h3>

                    <ul>
                        {company.map((a, i) => (
                            <li key={i}>
                                <Link
                                    title={a.text}
                                    href={a.link}
                                    target={a.target}
                                    rel={a.target && "noopener noreferrer"}
                                >
                                    {a.text}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <ul>
                        {legal.map((a, i) => (
                            <li key={i}>
                                <Link
                                    title={a.text}
                                    href={a.link}
                                    target={a.target}
                                    rel={a.target && "noopener noreferrer"}
                                >
                                    {a.text}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="blog">
                    <h3>Latest news</h3>
                    {news.map((n, i) => (
                        <div key={i} className="news">
                            <Image
                                loading="lazy"
                                alt="news"
                                height={80}
                                width={100}
                                src={n.image}
                            />
                            <div className="content">
                                <h4>{n.title}</h4>
                                <p>{n.description}</p>
                                <span>{n.date}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
            <div className="sub-footer">
                <Container>
                    <p className="copyright">copyright&copy;2024-{new Date().getFullYear() + 1}</p>
                </Container>
            </div>
        </Footerstyle>
    );
};

export default Footer;
