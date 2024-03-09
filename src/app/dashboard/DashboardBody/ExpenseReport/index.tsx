"use client";
import ArchiLineChart from "@/charts/ArchiLineChart";
import ArchiDropDownMenu from "@/components/base/ArchiDropDownMenu";
import { LineChartFilter } from "@/components/base/ArchiDropDownMenu/archiDropDownMenuTypes";
import { Typography } from "@mui/material";
import { useState } from "react";
import { receivedVSExpenseData } from "../data/chartsData/receivedVSExpenseData";
import ArchiPieChart from "@/charts/ArchiPieChart";

const ExpenseReport = () => {
    const [dropDownLineChartFilter, setDropDownLineChartFilter] = useState<LineChartFilter>(LineChartFilter.WEEKLY);

    return (
        <div>
            <div className="flex flex-row justify-between">
                <Typography gutterBottom variant="h5" component="div" className='text-black'>
                    Expense Report
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
                    <ArchiPieChart />
                </div>
            </div>
        </div>
    )
}
export default ExpenseReport;