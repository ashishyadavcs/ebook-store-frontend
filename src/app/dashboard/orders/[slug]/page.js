import { useServerSideFetch } from "@/utils/ssr-api-call";
import OrderDetailStyle from "@/styles/orderDetail.styled";
import Back from "@/components/Back";
import Link from "next/link";

const Page = async ({ params }) => {
    const { slug: orderid } = await params;
    let order = [];
    try {
        const result = await useServerSideFetch(`/api/payments/${orderid}`);
        order = result.data || [];
    } catch (err) {
        order = [];
    }
    return (
        <>
            <Back />
            <OrderDetailStyle>
                <h1 className="heading">Order Details </h1>
                <table>
                    <tbody>
                        <tr>
                            <th>Ebooks ( {order.ebooks.length})</th>
                            <td>
                                {[...order.ebooks].map(id => (
                                    <Link key={id} href={`/${id}`}>
                                        {id}
                                    </Link>
                                ))}
                            </td>
                        </tr>
                        <tr>
                            <th>Order ID</th>
                            <td>{order.orderId}</td>
                        </tr>

                        <tr>
                            <th>Payment ID</th>
                            <td>{order.paymentId}</td>
                        </tr>
                        <tr>
                            <th>Amount</th>
                            <td>{order.amount ? `₹${order.amount}` : "-"}</td>
                        </tr>
                        <tr>
                            <th>Status</th>
                            <td>
                                <span className={order.status}>{order.status || "-"}</span>
                            </td>
                        </tr>

                        <tr>
                            <th>Date</th>
                            <td>
                                {order.createdAt ? new Date(order.createdAt).toLocaleString() : "-"}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </OrderDetailStyle>
        </>
    );
};

export default Page;
