import Row from "@/components/client-components/Row";
import Table from "@/components/ui/Table";
import { useServerSideFetch } from "@/utils/ssr-api-call";

const Page = async () => {
    let data = [];
    try {
        const result = await useServerSideFetch("/api/payments");
        data = result.data || [];
    } catch (err) {
        data = [];
    }

    return (
        <>
            <h1 className="heading">Order History</h1>
            <Table>
                <thead>
                    <tr>
                        <th>PaymentId</th>
                        <th>orderId</th>
                        <th>Amount</th>
                        <th>Ebooks</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(payment => (
                        <Row pushTo={`/dashboard/orders/${payment._id}`} key={payment._id}>
                            <td>{payment._id}</td>
                            <td>{payment.orderId}</td>
                            <td>&#8377;{payment.amount}</td>
                            <td>{payment.ebooks.length}</td>
                        </Row>
                    ))}
                </tbody>
            </Table>
        </>
    );
};

export default Page;
