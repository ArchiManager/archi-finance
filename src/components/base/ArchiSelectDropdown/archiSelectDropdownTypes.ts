export interface ArchiSelectDataProps {
    value: number;
    label: string;
}

export interface ArchiSelectDropdownProps {
    data: ArchiSelectDataProps[];
    step?: number;
    label?: string;
    value?: string;
    onChange?: (event: React.ChangeEvent<{ value: unknown }>) => void;
    helperText?: string;
    fullWidth?: boolean;
    size?: "small" | "medium";
}
