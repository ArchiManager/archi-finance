"use client";
import { useState } from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { ArchiSelectDropdownProps } from '@/components/base/ArchiSelectDropdown/archiSelectDropdownTypes';

function ArchiSelectDropdown({
    step,
    label,
    value = "",
    onChange,
    data,
    helperText,
    fullWidth = false,
    size = "small"
}: ArchiSelectDropdownProps) {
    const [valueLocal, setValueLocal] = useState<string>(value);

    const handleChange = (event: any) => {
        setValueLocal(event.target.value);

        if (onChange) {
            onChange(event);
        }
    };

    return (
        <div>
            <div>
                {!step ? (
                    <div>
                        {label && (
                            <div className="w-full ml-0 p-0">
                                <InputLabel htmlFor="archiSelectDropDownId" className='text-gray-900 text-lg my-0 font-bold'>{label}</InputLabel>
                            </div>
                        )}
                        <FormControl fullWidth={fullWidth} size={size} className="mt-3">
                            <Select
                                id="archiSelectDropDownId"
                                value={valueLocal}
                                onChange={handleChange}
                                displayEmpty
                                inputProps={{ 'aria-label': 'Without label' }}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                {data.map((item, index) => {
                                    return (
                                        <MenuItem key={index} value={item.value}>{item.label}</MenuItem>
                                    );
                                })}
                            </Select>
                            {helperText && <FormHelperText className="ml-0 mt-2">{helperText}</FormHelperText>}
                        </FormControl>
                    </div>
                ) : (
                    <div className="flex flex-row">
                        <div className="w-1/12">
                            <p className="text-primary w-8 h-8 bg-blue-300 text-xl rounded-full flex justify-center items-center">
                                {step}
                            </p>
                        </div>
                        <div className="w-11/12">
                            {label && (
                                <div className="w-full ml-0 p-0">
                                    <InputLabel htmlFor="archiSelectDropDownId" className='text-gray-900 text-lg my-0 font-bold'>{label}</InputLabel>
                                </div>
                            )}
                            <FormControl fullWidth={fullWidth} size={size} className="mt-3">
                                <Select
                                    id="archiSelectDropDownId"
                                    value={valueLocal}
                                    onChange={handleChange}
                                    displayEmpty
                                    inputProps={{ 'aria-label': 'Without label' }}
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    {data.map((item, index) => {
                                        return (
                                            <MenuItem key={index} value={item.value}>{item.label}</MenuItem>
                                        );
                                    })}
                                </Select>
                                {helperText && <FormHelperText className="ml-0 mt-2">{helperText}</FormHelperText>}
                            </FormControl>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
export default ArchiSelectDropdown;