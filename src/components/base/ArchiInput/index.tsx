import * as React from 'react';
import {
  InputLabel,
  FormControl,
  InputAdornment,
  TextField,
  TextFieldVariants,
  inputClasses,
} from "@mui/material";

interface InputProps {
  type: "text" | "password" | "email" | "number" | "tel" | "url" | "search" | "date" | "time" | "datetime-local" | "month" | "week" | "file" | "color" | "hidden" | "image" | "month" | "range" | "reset" | "submit" | "button" | "checkbox" | "radio" | "datetime" | "datetime-local" | "time" | "week" | "text" | "email" | "number" | "tel" | "url" | "search" | "date" | "time" | "datetime-local" | "month" | "week" | "file" | "color" | "hidden" | "image" | "month" | "range" | "reset" | "submit" | "button" | "checkbox" | "radio" | "datetime" | "datetime-local" | "time" | "week" | "text" | "email" | "number" | "tel" | "url" | "search" | "date" | "time" | "datetime-local" | "month" | "week" | "file" | "color" | "hidden" | "image" | "month" | "range" | "reset" | "submit" | "button" | "checkbox" | "radio" | "datetime" | "datetime-local" | "time" | "week" | "text" | "email" | "number" | "tel" | "url" | "search" | "date" | "time" | "datetime-local" | "month" | "week" | "file" | "color" | "hidden" | "image" | "month" | "range" | "reset" | "submit" | "button" | "checkbox" | "radio" | "datetime" | "datetime-local" | "time" | "week" | "text" | "email" | "number" | "tel" | "url" | "search" | "date" | "time" | "datetime-local" | "month" | "week" | "file" | "color" | "hidden" | "image" | "month" | "range" | "reset";
  id: string;
  placeholder: string;
  sxInput?: any;
  customStyles?: boolean;
  required?: boolean;
  fullWidth?: boolean;
  label?: string;
  icon?: React.ReactNode;
  variant?: TextFieldVariants;
  className?: string;
  inputclassName?: string;
  disableUnderline?: boolean;
  width?: string;
  endAdornment?: React.ReactNode;
  multiline?: boolean;
  rows?: number;
  maxLength?: number;
  value?: string | number;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function ArchiInput(props: InputProps) {
  const {
    id,
    type,
    placeholder,
    sxInput,
    customStyles,
    required,
    label,
    icon,
    variant,
    fullWidth = true,
    className,
    inputclassName,
    disableUnderline,
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
    <div className={`${className}`}>
      {label && (
        <FormControl className="w-full ml-0 p-0">
          <InputLabel htmlFor={id} className='-ml-4 text-black text-lg my-0'>{label}</InputLabel>
        </FormControl>
      )}
      <TextField
        id={id}
        InputProps={{
          startAdornment: (
            (icon && <InputAdornment position="start">
              <div
                className={`${(variant === "standard" || variant === "filled") ? ('-mt-4') : ("")}`}
              >
                {icon}
              </div>
            </InputAdornment>)
          ),
          endAdornment: (
            (endAdornment && <InputAdornment position="end">{endAdornment}</InputAdornment>)
          ),
          disableUnderline: disableUnderline,
        }}
        className={`block ${customStyles ? (inputclassName) : ('border border-gray-400 focus:outline-blue-700 text-gray-900 text-sm')} ${label ? 'mt-7' : 'mt-0'}`}
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
            ...sxInput,
          },
        }}
      />
      {(multiline && maxLength) && <p className="text-xs mt-1 w-full flex justify-end items-end">{inputValue.length}/{maxLength}</p>}
    </div>
  );
}
export default ArchiInput;