"use client";
import ArchiLineChart from "@/charts/ArchiLineChart";
import ArchiDropDownMenu from "@/components/base/ArchiDropDownMenu";
import { LineChartFilter } from "@/components/base/ArchiDropDownMenu/archiDropDownMenuTypes";
import { Typography } from "@mui/material";
import { useState } from "react";
import { receivedVSExpenseData } from "../data/chartsData/receivedVSExpenseData";

const ReceivedExpense = () => {
    const [dropDownLineChartFilter, setDropDownLineChartFilter] = useState<LineChartFilter>(LineChartFilter.WEEKLY);

    return (
        <div>
            <div className="flex flex-row justify-between">
                <Typography gutterBottom variant="h5" component="div" className='text-black'>
                    Received vs Expense
                </Typography>
                <div>
                    <ArchiDropDownMenu
                        label={dropDownLineChartFilter}
                        onChangeFilter={(value) => setDropDownLineChartFilter(value)}
                        dropDownItems={[
                            { label: 'Weekly' },
                            { label: 'Monthly' },
                            { label: 'Daily' }
                        ]}
                    />
                </div>
            </div>
            <div className="flex flex-row gap-4">
                <div className='w-full h-96'>
                    <ArchiLineChart data={receivedVSExpenseData} />
                </div>
            </div>
        </div>
    )
}
export default ReceivedExpense;