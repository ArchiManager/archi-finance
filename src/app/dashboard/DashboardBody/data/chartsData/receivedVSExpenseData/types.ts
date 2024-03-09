export interface ReceivedVSExpenseData {
    name: string;
    uv: number;
    pv: number;
    amt: number;
}

export interface DataKeysReceivedVSExpense {
    dataKey: string;
    stroke: string;
    isLabelCustomized?: boolean;
}