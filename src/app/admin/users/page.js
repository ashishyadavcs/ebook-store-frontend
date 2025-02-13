import Table from "@/components/ui/Table";
import { useServerSideFetch } from "@/utils/ssr-api-call";
import React from "react";
import Image from "next/image";
import { FaEdit } from "react-icons/fa";
import Button from "@/components/ui/Button";
import Link from "next/link";
import DeleteEbook from "@/components/ebook/DeleteEbook";
const Page = async () => {
    let data = [];
    try {
        const result = await useServerSideFetch("/api/users");
        data = result.data;
    } catch (err) {}
    return (
        <>
            <Table>
                <thead>
                    <th>Picture</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Mobile</th>
                    <th>Action</th>
                </thead>
                <tbody>
                    {data.map((user, i) => (
                        <tr key={i}>
                            <td>
                                <Link href={`/${user._id}`}>
                                    <Image
                                        src={user.image}
                                        height={30}
                                        width={50}
                                        alt={user.title}
                                    />
                                </Link>
                            </td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.mobile}</td>
                            <td>
                                <div className="btn-group">
                                    <Button href={`/admin/users/${user._id}`}>
                                        <FaEdit />
                                    </Button>
                                    <DeleteEbook id={user._id} />
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </>
    );
};

export default Page;
