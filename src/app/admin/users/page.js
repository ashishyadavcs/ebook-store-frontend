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
        const result = await useServerSideFetch("/api/users");
        data = result.data || [];
    } catch (err) {}
    return (
        <>
            <Suspense fallback="loading...">
                <Table>
                    <thead>
                        <tr>
                            <th>Picture</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Mobile</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((user, i) => (
                            <tr key={user._id}>
                                <td>
                                    <Link href={`/admin/users/${user._id}`}>
                                        <Image
                                            src={user.image || constant.image}
                                            height={30}
                                            width={50}
                                            alt={user.title || ""}
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
                                        <DeleteItem
                                            url={`/api/user/${user._id}`}
                                            message="user deleted!"
                                        />
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Suspense>
        </>
    );
};

export default Page;
