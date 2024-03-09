import ArchiCard, { Item } from "@/components/base/ArchiCard";
import {
    Box,
    Typography,
} from "@mui/material";

interface FundsInsightCardData {
    cashBalance: number;
    expectedProfit: number;
    totalReceivable: number;
    totalPayable: number;
    cashIn: number;
    cashOut: number;
}

interface FundsInsightCardProps {
    type: "Cash Balance" | "Expected Profit",
    data: FundsInsightCardData;
}

const FundsInsightCard = ({
    type,
    data
}: FundsInsightCardProps) => {
    const { cashBalance, expectedProfit, totalReceivable, totalPayable, cashIn, cashOut } = data;

    return (
        <Item className="border border-gray-300 border-solid rounded-md h-full w-full">
            <Box className='w-full p-4'>
                <Typography gutterBottom variant="h5" component="div" className='text-green-500'>
                    {type}
                </Typography>
                <Box className="flex flex-row justify-center py-5">
                    <Typography gutterBottom variant="h4" component="div" className="text-green-500 text-5xl">
                        <span className="text-base">
                            Pkr
                        </span>
                        {" "}
                        {(type === "Cash Balance") ? (cashBalance) : (expectedProfit)}
                    </Typography>
                </Box>
                <div className="flex flex-col gap-4">
                    <ArchiCard className='w-full border-blue-600 border-solid border'>
                        <Typography gutterBottom variant="h6" component="div" className={`text-md ${type === "Cash Balance" ? "text-green-500 capitalize" : "text-blue-600"}`}>
                            {type === "Cash Balance" ? "Cash In" : "Total Receivable"}
                        </Typography>
                        <Typography className={`text-5xl mt-3 ${type === "Cash Balance" ? "text-green-500" : "text-blue-600"}`}>
                            {type === "Cash Balance" ? cashIn : totalReceivable}
                        </Typography>
                    </ArchiCard>
                    <ArchiCard className='w-full border-red-500 border-solid border'>
                        <Typography gutterBottom variant="h6" component="div" className={`${type === "Cash Balance" ? "capitalize" : "normal"} text-red-500`}>
                            {type === "Cash Balance" ? "Cash Out" : "Total Payable"}
                        </Typography>
                        <Typography className='text-5xl text-red-500'>
                            {type === "Cash Balance" ? cashOut : totalPayable}
                        </Typography>
                    </ArchiCard>
                </div>
            </Box>
        </Item>
    )
}
export default FundsInsightCard;