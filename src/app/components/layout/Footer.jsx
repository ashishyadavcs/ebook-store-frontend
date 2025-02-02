"use client";
import Footerstyle from "@/styles/footer.styled";
import Container from "@/components/ui/Container";
import Image from "next/image";
import Link from "next/link";
import { company, news, privacy } from "../../../../public/nav";

const Footer = () => {
    return (
        <Footerstyle className="footer">
            <Container className="main">
                <div className="info">
                    <Image height={70} width={70} src="/images/logo.svg" />
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
                                <Link title={a.text} href={a.link}>
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
                            <Image alt="news" height={60} width={80} src={"/images/logo.svg"} />
                            <div className="content">
                                <h4>{n.title}</h4>
                                <p>{n.description}</p>
                                <span>{n.date}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
            <Container className="sub-footer">
                <p className="copyright">copyright&copy;2024-{new Date().getFullYear() + 1}</p>
                <Link href={privacy.link}>{privacy.text}</Link>
            </Container>
        </Footerstyle>
    );
};

export default Footer;
