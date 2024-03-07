import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { ControlledRadioButtonsGroupOptionsType } from './types';

interface ControlledRadioButtonsGroupProps {
    value: ControlledRadioButtonsGroupOptionsType;
    setValue: React.Dispatch<React.SetStateAction<ControlledRadioButtonsGroupOptionsType>>;
    label?: string;
    options: ControlledRadioButtonsGroupOptionsType[];
    className?: string;
}

function ControlledRadioButtonsGroup({
    value,
    setValue,
    label,
    options,
    className
}: ControlledRadioButtonsGroupProps) {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(options.find(option => option.label === event.target.value) || options[0]);
    };

    return (
        <FormControl className={className}>
            {label && (
                <FormLabel id={`${label}-controlled-radio-buttons-group`} className='text-2xl mb-2 text-gray-700'>{label}</FormLabel>
            )}
            <RadioGroup
                aria-labelledby={`${label}-controlled-radio-buttons-group`}
                name={`${label}-controlled-radio-buttons-group`}
                value={value.label}
                onChange={handleChange}
            >
                {options.map((option: ControlledRadioButtonsGroupOptionsType) => (
                    <div key={option.label}>
                        <FormControlLabel
                            value={option.label}
                            control={<Radio />}
                            label={<h5 className='text-lg font-medium my-0'>{option.label}</h5>}
                        />
                        {(option.description) && (
                            <p className="text-md text-gray-500 mt-0 ml-8">
                                {option.description}
                            </p>
                        )}
                    </div>
                ))}
            </RadioGroup>
        </FormControl>
    );
}
export default ControlledRadioButtonsGroup;