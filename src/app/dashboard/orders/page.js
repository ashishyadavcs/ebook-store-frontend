import Row from "@/components/client-components/Row";
import Button from "@/components/ui/Button";
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
    if (!data.length) {
        return (
            <>
                <div className="no-oredrs text-center">
                    <h1 className="heading">No orders found</h1>
                    <Button type="primary" href="/">
                        exlore ebooks
                    </Button>
                </div>
            </>
        );
    }

    return (
        <>
            <h1 className="heading">Order History ({data.length})</h1>
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
