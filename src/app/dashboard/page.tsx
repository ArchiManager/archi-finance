import DashboardHeader from "@/app/dashboard/DashboardHeader";
import DashboardBody from "./DashboardBody";

export default function DashboardPage() {
    return (
        <div>
            <DashboardHeader />
            <DashboardBody className="mt-4" />
        </div>
    );
}
