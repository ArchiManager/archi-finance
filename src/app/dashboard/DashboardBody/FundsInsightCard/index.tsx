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
    loanPayable: number;
    loanPaid: number;
    loanReceived: number;
}

interface FundsInsightCardProps {
    type: "Cash Balance" | "Expected Profit" | "Loan Payable",
    data: FundsInsightCardData;
}

const FundsInsightCard = ({
    type,
    data
}: FundsInsightCardProps) => {
    const {
        cashBalance,
        expectedProfit,
        totalReceivable,
        totalPayable,
        cashIn,
        cashOut,
        loanPayable,
        loanPaid,
        loanReceived
    } = data;

    return (
        <Item className="border border-gray-300 border-solid rounded-md h-full w-full">
            <Box className='w-full p-4'>
                <Typography gutterBottom variant="h5" component="div" className={`${(type === "Cash Balance" || type === "Expected Profit") ? ('text-green-500') : ('text-black')}`}>
                    {type}
                </Typography>
                <Box className="flex flex-row justify-center py-5">
                    <Typography gutterBottom variant="h4" component="div" className={`${(type === "Cash Balance" || type === "Expected Profit") ? ('text-green-500') : ('text-black')} text-5xl`}>
                        {(type === "Cash Balance" || type === "Expected Profit") ? (
                            <span className="text-base">
                                Pkr
                            </span>
                        ) : (
                            <span>
                                Rs.
                            </span>
                        )}
                        {" "}
                        {
                            (type === "Cash Balance") ?
                                (cashBalance) :
                                (type === "Expected Profit") ?
                                    (expectedProfit) :
                                    (type === "Loan Payable") ?
                                        (loanPayable) :
                                        (null)
                        }
                    </Typography>
                </Box>
                <div className="flex flex-col gap-4">
                    <ArchiCard className='w-full border-blue-600 border-solid border'>
                        <Typography gutterBottom variant="h6" component="div" className={`text-md ${type === "Cash Balance" ? "text-green-500 capitalize" : "text-blue-600"}`}>
                            {type === "Cash Balance" ?
                                "Cash In" :
                                (type === "Expected Profit") ? (
                                    "Total Receivable"
                                ) : (type === "Loan Payable") ? (
                                    "Loan Paid"
                                ) : null
                            }
                        </Typography>
                        <Typography className={`text-5xl mt-3 ${type === "Cash Balance" ? "text-green-500" : "text-blue-600"}`}>
                            {type === "Cash Balance" ?
                                cashIn :
                                (type === "Expected Profit") ? (
                                    totalReceivable
                                ) : (type === "Loan Payable") ? (
                                    loanPaid
                                ) : null
                            }
                        </Typography>
                    </ArchiCard>
                    <ArchiCard className='w-full border-red-500 border-solid border'>
                        <Typography gutterBottom variant="h6" component="div" className={`${type === "Cash Balance" ? "capitalize" : "normal"} text-red-500`}>
                            {type === "Cash Balance" ?
                                "Cash Out" :
                                (type === "Expected Profit") ?
                                    "Total Payable" :
                                    (type === "Loan Payable") ?
                                        "Loan Received" :
                                        null
                            }
                        </Typography>
                        <Typography className='text-5xl text-red-500'>
                            {type === "Cash Balance" ?
                                cashOut :
                                (type === "Expected Profit") ?
                                    totalPayable
                                    : (type === "Loan Payable") ?
                                        loanReceived
                                        : null
                            }
                        </Typography>
                    </ArchiCard>
                </div>
            </Box>
        </Item>
    )
}
export default FundsInsightCard;