"use client";
import React, { useEffect, useState } from "react";
import Button from "../ui/Button";
import Review from "../Review";
import AddTocart from "@/components/ebook/AddTocart";
import { FaBookReader } from "react-icons/fa";
import { LuUser } from "react-icons/lu";
import { useServerSideFetch } from "@/utils/ssr-api-call";
import { usePathname } from "next/navigation";
import EbookActionSkeleton from "@/components/loaders/EbookAction";
import { useAppSelector } from "@/state/hooks";
import Rating from "@/components/ui/Rating";

const EbookAction = ({ ebook }) => {
    const pathname = usePathname();
    const user = useAppSelector(state => state.user.data);
    const {
        _id: id,
        title = "",
        description = "",
        author = "",
        averageRating = "",
        price = 2000,
    } = ebook || {};
    const [paid, setpaid] = useState(null);

    useEffect(() => {
        if (!user) {
            setpaid(false);
            return;
        }
        useServerSideFetch(`/api/user-ebooks`)
            .then(res => {
                const purchasedEbooks = res.data;
                setpaid(purchasedEbooks.find(el => el._id == id)?._id ? true : false);
            })
            .catch(err => {
                setpaid(false);
            });
    }, [pathname, id]);

    const EbookBTN = () => {
        switch (paid) {
            case true:
                return (
                    <Button type="primary" href={`/dashboard/readnow/${id}`}>
                        Read Ebook <FaBookReader />
                    </Button>
                );
            case false:
                return (
                    <>
                        <AddTocart ebook={ebook} />
                        <Button type="primary" href={`/checkout?from=${id}`}>
                            Buy Now
                        </Button>
                    </>
                );
            default:
                return <EbookActionSkeleton />;
        }
    };

    return (
        <div className="details">
            <div className="info">
                <div className="left">
                    <h1>{title}</h1>
                    <p className="desc">{description || "no description"}</p>
                    <span className="author">
                        <LuUser /> {author.toLowerCase() || "Mr.John"}
                    </span>
                    {averageRating && <Rating value={averageRating} number />}
                    <br />
                    <p className="price">
                        &#8377;{price / 100}{" "}
                        <strong className={`price ${paid ? "paid" : ""}`}>
                            {paid ? "purchased" : ""}
                        </strong>
                    </p>
                </div>
                <div className="btn-group">
                    <EbookBTN />
                </div>
            </div>

            {paid && !averageRating > 0 && <Review ebookid={id} size={30} />}
        </div>
    );
};

export default EbookAction;
