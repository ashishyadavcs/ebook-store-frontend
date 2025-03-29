import Table from "@/components/ui/Table";
import { useServerSideFetch } from "@/utils/ssr-api-call";
import React, { Suspense } from "react";
import Image from "next/image";
import { FaEdit } from "react-icons/fa";
import Button from "@/components/ui/Button";
import Link from "next/link";
import DeleteEbook from "@/components/ebook/DeleteEbook";
import { constant } from "@/config/constant";
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
                            <tr key={i}>
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
                                <td>{ebook.description ? ebook.description : "no description"}</td>
                                <td>{ebook.author}</td>
                                <td>{ebook.title}</td>
                                <td>
                                    <div className="btn-group">
                                        <Button href={`/admin/ebooks/${ebook._id}`}>
                                            <FaEdit />
                                        </Button>
                                        <DeleteEbook id={ebook._id} />
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
