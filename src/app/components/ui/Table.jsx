import TableStyle from "@/styles/table.styled";
import Image from "next/image";
import { FaEdit } from "react-icons/fa";
import Button from "./Button";
import Link from "next/link";
import DeleteEbook from "../ebook/DeleteEbook";
const Table = ({ data = [] }) => {
    return (
        <TableStyle>
            <table>
                <thead>
                    <th>thumbnail</th>
                    <th>title</th>
                    <th>author</th>
                    <th>orders</th>
                    <th>Action</th>
                </thead>
                <tbody>
                    {data.map((ebook, i) => (
                        <tr key={i}>
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
            </table>
        </TableStyle>
    );
};

export default Table;
