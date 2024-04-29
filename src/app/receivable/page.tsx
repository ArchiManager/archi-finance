import ReceivableHeader from "@/app/receivable/ReceivableHeader";
import ReceivableBody from "@/app/receivable/ReceivableBody";
import ArchiPieChart from "@/charts/ArchiPieChart";

const ReceivableDashboardPage = () => {
    return (
        <div>
            <ReceivableHeader />
            <ReceivableBody />
        </div>
    )
}
export default ReceivableDashboardPage;