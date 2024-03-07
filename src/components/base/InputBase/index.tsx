import * as React from 'react';
import {
  InputLabel,
  FormControl,
  InputAdornment,
  TextField,
} from "@mui/material";

interface InputProps {
  type: string;
  id: string;
  placeholder: string;
  required: boolean;
  fullWidth?: boolean;
  label?: string;
  icon?: React.ReactNode;
  variant?: "standard" | "outlined" | "filled";
  className?: string;
  width?: string;
  endAdornment?: React.ReactNode;
  multiline?: boolean;
  rows?: number;
  maxLength?: number;
  value?: string | number;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function InputBase(props: InputProps) {
  const {
    id,
    type,
    placeholder,
    required,
    label,
    icon,
    variant,
    fullWidth = true,
    className,
    width,
    endAdornment,
    multiline,
    rows = 4,
    maxLength,
    value,
    onChange
  } = props;

  const [inputValue, setInputValue] = React.useState<string>(value?.toString() || '');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (maxLength && event.target.value.length > maxLength) return;
    setInputValue(event.target.value);
    if (onChange) onChange(event);
  };

  return (
    <div>
      {label && (
        <FormControl className="w-full ml-0 p-0">
          <InputLabel htmlFor={id} className='-ml-4 text-black text-lg my-0'>{label}</InputLabel>
        </FormControl>
      )}
      <TextField
        id={id}
        InputProps={{
          startAdornment: (
            (icon && <InputAdornment position="start">{icon}</InputAdornment>)
          ),
          endAdornment: (
            (endAdornment && <InputAdornment position="end">{endAdornment}</InputAdornment>)
          ),
        }}
        className={`text-gray-900 text-sm block border border-gray-400 focus:outline-blue-700 ${className} ${label ? 'mt-7' : 'mt-0'}`}
        variant={variant || "outlined"}
        required={required}
        type={type}
        fullWidth={fullWidth}
        placeholder={placeholder}
        multiline={multiline}
        rows={rows}
        value={inputValue}
        onChange={handleChange}
        sx={{
          "& .MuiInputBase-input": {
            width: width,
          },
        }}
      />
      {(multiline && maxLength) && <p className="text-xs mt-1 w-full flex justify-end items-end">{inputValue.length}/{maxLength}</p>}
    </div>
  );
}
export default InputBase;