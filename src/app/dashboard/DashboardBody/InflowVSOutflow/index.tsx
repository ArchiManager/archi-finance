"use client";
import { useState } from "react";
import { Typography } from "@mui/material";
import ArchiDropDownMenu from "@/components/base/ArchiDropDownMenu";
import { LineChartFilter } from "@/components/base/ArchiDropDownMenu/archiDropDownMenuTypes";
import ArchiBarChart from "@/charts/ArchiBarChart";

const InflowVSOutflow = () => {
    const [dropDownLineChartFilter, setDropDownLineChartFilter] = useState<LineChartFilter>(LineChartFilter.WEEKLY);

    return (
        <div>
            <div className="flex flex-row justify-between">
                <Typography gutterBottom variant="h5" component="div" className='text-black'>
                    Inflow Vs Outflow
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
                <div className='w-full h-96 pt-4'>
                    <ArchiBarChart />
                </div>
            </div>
        </div>
    )
}
export default InflowVSOutflow;