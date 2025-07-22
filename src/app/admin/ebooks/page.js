import Table from "@/components/ui/Table";
import { useServerSideFetch } from "@/utils/ssr-api-call";
import React, { Suspense } from "react";
import Image from "next/image";
import { FaEdit } from "react-icons/fa";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { constant } from "@/config/constant";
import DeleteItem from "@/components/ui/Delete";
const Page = async () => {
    let data = [];
    try {
        const result = await useServerSideFetch("/api/ebooks");
        data = result.data;
    } catch (err) {}
    return (
        <>
            <Table>
                <thead>
                    <tr>
                        <th>index</th>
                        <th>thumbnail</th>
                        <th>title</th>
                        <th>description</th>
                        <th>author</th>
                        <th>orders</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <Suspense fallback="loading...">
                    <tbody>
                        {data.map((ebook, i) => (
                            <tr key={ebook._id}>
                                <td>{i + 1}</td>
                                <td>
                                    <Link href={`/${ebook._id}`}>
                                        <Image
                                            src={ebook.coverImageUrl}
                                            height={30}
                                            width={50}
                                            alt={ebook.title}
                                        />
                                    </Link>
                                </td>
                                <td>{ebook.title}</td>
                                <td style={{ maxWidth: "300px" }}>
                                    {ebook.description ? ebook.description : "no description"}
                                </td>
                                <td>{ebook.author}</td>
                                <td>{ebook.title}</td>
                                <td>
                                    <div className="btn-group">
                                        <Button href={`/admin/ebooks/${ebook._id}`}>
                                            <FaEdit />
                                        </Button>
                                        <DeleteItem
                                            url={`/api/ebooks/${ebook._id}`}
                                            message="ebook deleted!"
                                        />
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Suspense>
            </Table>
        </>
    );
};

export default Page;
