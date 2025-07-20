import Container from "@/components/ui/Container";
import DevicesList from "@/components/devices/DevicesList";
import { Suspense } from "react";

export async function generateMetadata() {
    return {
        title: "Active sessions",
        description: "Manage your logged-in devices and security settings.",
        keywords: ["devices", "security", "login", "sessions", "account"],
    };
}

const DevicesPage = () => {
    return (
        <Container>
            <h1 className="heading">Logged-in Devices</h1>
            <p>Manage devices that have access to your account</p>
            <Suspense fallback="Loading devices...">
                <DevicesList />
            </Suspense>
        </Container>
    );
};

export default DevicesPage;
