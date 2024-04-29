"use client";
import { useState } from "react";
import {
  InputLabel,
  FormControl,
  InputAdornment,
  TextField,
  TextFieldVariants,
} from "@mui/material";

interface InputProps {
  id: string;
  placeholder: string;
  type?: "text" | "password" | "email" | "number" | "tel" | "url" | "search" | "date" | "time" | "datetime-local" | "month" | "week" | "file" | "color" | "hidden" | "image" | "month" | "range" | "reset" | "submit" | "button" | "checkbox" | "radio" | "datetime" | "datetime-local" | "time" | "week" | "text" | "email" | "number" | "tel" | "url" | "search" | "date" | "time" | "datetime-local" | "month" | "week" | "file" | "color" | "hidden" | "image" | "month" | "range" | "reset" | "submit" | "button" | "checkbox" | "radio" | "datetime" | "datetime-local" | "time" | "week" | "text" | "email" | "number" | "tel" | "url" | "search" | "date" | "time" | "datetime-local" | "month" | "week" | "file" | "color" | "hidden" | "image" | "month" | "range" | "reset" | "submit" | "button" | "checkbox" | "radio" | "datetime" | "datetime-local" | "time" | "week" | "text" | "email" | "number" | "tel" | "url" | "search" | "date" | "time" | "datetime-local" | "month" | "week" | "file" | "color" | "hidden" | "image" | "month" | "range" | "reset" | "submit" | "button" | "checkbox" | "radio" | "datetime" | "datetime-local" | "time" | "week" | "text" | "email" | "number" | "tel" | "url" | "search" | "date" | "time" | "datetime-local" | "month" | "week" | "file" | "color" | "hidden" | "image" | "month" | "range" | "reset";
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
  step?: number;
}

function ArchiInput(props: InputProps) {
  const {
    id,
    placeholder,
    type = "text",
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
    onChange,
    step,
  } = props;

  const [inputValue, setInputValue] = useState<string>(value?.toString() || '');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (maxLength && event.target.value.length > maxLength) return;
    setInputValue(event.target.value);
    if (onChange) onChange(event);
  };

  return (
    <div>
      {(!step) ? (
        <div className="mt-2">
          {label && (
            <div className="w-full ml-0 p-0">
              <InputLabel htmlFor={id} className='text-gray-900 text-lg my-0 font-bold'>{label}</InputLabel>
            </div>
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
              )
            }}
            className={`block ${customStyles ? (inputclassName) : ('border border-gray-400 focus:outline-blue-700 text-gray-900 text-sm')} ${label ? 'mt-4' : 'mt-0'}`}
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
                padding: 1,
                ...sxInput,
              },
              // Multine line input styles padding 1
              "& .MuiOutlinedInput-multiline": {
                padding: 1,
                margin: 0
              },
            }}
            margin="normal"
            InputLabelProps={{
              shrink: false,
            }}
          />
        </div>
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
                <InputLabel htmlFor={id} className='text-gray-900 text-lg my-0 font-bold'>{label}</InputLabel>
              </div>
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
              }}
              className={`block ${customStyles ? (inputclassName) : ('border border-gray-400 focus:outline-blue-700 text-gray-900 text-sm')} ${label ? 'mt-4' : 'mt-0'}`}
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
                  padding: 1,
                  paddingLeft: 2,
                  ...sxInput,
                },
                // Multine line input styles padding 1
                "& .MuiOutlinedInput-multiline": {
                  padding: 1,
                  paddingLeft: 2,
                  margin: 0,
                },
              }}
              margin="normal"
              InputLabelProps={{
                shrink: false,
              }}
            />
          </div>
        </div>
      )}
      {(multiline && maxLength) && <p className="text-xs mt-1 w-full flex justify-end items-end">{inputValue.length}/{maxLength}</p>}
    </div>
  );
}
export default ArchiInput;