"use client";
import { dataKeysReceivedVSExpense } from "@/app/dashboard/DashboardBody/data/chartsData/receivedVSExpenseData";
import React, { FunctionComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LabelList,
  ResponsiveContainer
} from "recharts";

const CustomizedLabel: FunctionComponent<any> = (props: any) => {
  const { x, y, stroke, value } = props;

  return (
    <text x={x} y={y} dy={-4} fill={stroke} fontSize={10} textAnchor="middle">
      {value}
    </text>
  );
};

const CustomizedAxisTick: FunctionComponent<any> = (props: any) => {
  const { x, y, payload } = props;

  return (
    <g transform={`translate(${x},${y})`}>
      <text
        x={0}
        y={0}
        dy={16}
        textAnchor="end"
        fill="#666"
        transform="rotate(-35)"
      >
        {payload.value}
      </text>
    </g>
  );
};

interface ArchiLineCharProps {
  data: any;
}

function ArchiLineChart({
  data
}: ArchiLineCharProps) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 10
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" height={60} tick={<CustomizedAxisTick />} />
        <YAxis />
        <Tooltip />
        <Legend />
        {
          dataKeysReceivedVSExpense.map((line, index) => {
            return (
              <Line key={index} type={"monotone"} dataKey={line.dataKey} stroke={line.stroke}>
                <LabelList content={<CustomizedLabel />} />
              </Line>
            );
          })
        }

      </LineChart>
    </ResponsiveContainer>
  );
}
export default ArchiLineChart;