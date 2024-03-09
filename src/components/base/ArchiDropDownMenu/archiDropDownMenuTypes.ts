export interface ArchiDropDownMenuItems {
    label: string;
    icon?: React.ReactNode;
}

export enum LineChartFilter {
    WEEKLY = 'Weekly',
    MONTHLY = 'Monthly',
    DAILY = 'Daily'
}

export interface ArchiDropDownMenuProps {
    variant?: 'contained' | 'outlined' | 'text';
    dropDownItems: ArchiDropDownMenuItems[];
    label?: string;
    onChangeFilter: (value: LineChartFilter) => void;
}