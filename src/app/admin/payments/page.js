import Table from "@/components/ui/Table";
import { useServerSideFetch } from "@/utils/ssr-api-call";
export const dynamic = "auto"; // or auto
export const revalidate = 60; // optional ISR

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
                    {data.map((payment, i) => (
                        <tr key={payment._id}>
                            <td style={{ maxWidth: "100px", overflow: "hidden" }}>{payment._id}</td>
                            <td>{payment.orderId}</td>
                            <td>&#8377;{payment.amount}</td>
                            <td>{payment.ebooks.length}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </>
    );
};

export default Page;
