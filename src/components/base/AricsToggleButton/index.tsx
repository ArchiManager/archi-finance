"use client";
import { useState } from "react";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { ColorToggleListType } from "./ColorToggleListType";
import { InputLabel } from "@mui/material";

interface ColorToggleButtonProps {
    value: string;
    onChange: (event: React.MouseEvent<HTMLElement>, newAlignment: string | null) => void;
    list: ColorToggleListType[];
    step?: number;
    label?: string;
}

const ArchiToggleButton = ({
    value,
    onChange,
    list,
    step,
    label,
}: ColorToggleButtonProps) => {
    const [alignment, setAlignment] = useState(value);

    const handleChange = (event: React.MouseEvent<HTMLElement>
        , newAlignment: string | null
    ) => {
        setAlignment(newAlignment as string);

        onChange(event, newAlignment);
    };

    return (
        <>
            {(!step) ? (
                <>
                    {label && (
                        <div className="w-full ml-0 p-0">
                            <InputLabel htmlFor="toggleButtonGroup" className='text-gray-900 text-lg my-0 font-bold'>{label}</InputLabel>
                        </div>
                    )}
                    <ToggleButtonGroup
                        color="primary"
                        value={alignment}
                        exclusive
                        onChange={handleChange}
                        aria-label="Platform"
                        className="mt-4"
                    >
                        {list.map((item, index) => (
                            <ToggleButton key={index} value={item.value}>{item.label}</ToggleButton>
                        ))}
                    </ToggleButtonGroup>
                </>
            ) : (
                <div className={`flex flex-row`}>
                    <div className="w-1/12">
                        <p className="text-primary w-8 h-8 bg-blue-300 text-xl rounded-full flex justify-center items-center">
                            {step}
                        </p>
                    </div>
                    <div className={`w-11/12`}>
                        {label && (
                            <div className="w-full ml-0 p-0">
                                <InputLabel htmlFor="toggleButtonGroup" className='text-gray-900 text-lg my-0 font-bold'>{label}</InputLabel>
                            </div>
                        )}
                        <ToggleButtonGroup
                            color="primary"
                            value={alignment}
                            exclusive
                            onChange={handleChange}
                            aria-label="Platform"
                            id="toggleButtonGroup"
                            className="mt-4"
                        >
                            {list.map((item: ColorToggleListType, index: number) => (
                                <ToggleButton key={index} value={item.value}>{item.label}</ToggleButton>
                            ))}
                        </ToggleButtonGroup>
                    </div>
                </div>
            )}
        </>
    );
}
export default ArchiToggleButton;