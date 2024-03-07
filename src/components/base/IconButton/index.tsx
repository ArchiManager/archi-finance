import { HTMLProps, ReactNode } from "react";
import Button from "@mui/material/Button";
import { styled } from '@mui/material/styles';

interface IconButtonProps {
  type?: "button" | "submit" | "reset" | undefined;
  icon: ReactNode;
  uploadButton?: boolean;
  text?: string;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>
    | React.ChangeEvent<HTMLInputElement>
  ) => void;
  variant?: "contained" | "outlined" | "text";
  className?: string;
  fullWidth?: boolean;
  customStyles?: boolean;
  helperText?: string;
}

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: "auto",
});

const IconButton = ({
  type = "button",
  icon,
  uploadButton,
  text,
  disabled,
  onClick,
  variant = "outlined",
  className,
  fullWidth = false,
  customStyles = false,
  helperText,
}: IconButtonProps) => {

  const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (onClick) {
      onClick(event);
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      onClick && onClick(event);
    }
  };

  return (
    <>
      {uploadButton ? (
        <Button
          disabled={disabled}
          role={undefined}
          variant={"contained"}
          fullWidth={false}
          tabIndex={-1}
          className={`border border-gray-300 border-solid w-auto ${!customStyles && 'py-2 rounded-md'} hover:shadow-md cursor-pointer ${className}`}
          component="label"
        >
          {icon} {text && <p className="ml-2 w-full my-0">{text}</p>}

          <VisuallyHiddenInput
            className={`border border-gray-300 border-solid w-auto ${customStyles && 'py-2 rounded-md'} hover:shadow-md cursor-pointer ${className}`}
            onChange={handleFileChange}
            type="file"
          />
        </Button>
      ) : (
        <Button
          type={type}
          aria-label="icon-button"
          disabled={disabled}
          onClick={handleClick}
          variant={variant}
          fullWidth={fullWidth}
          className={`border border-gray-300 border-solid ${!customStyles && 'py-2 rounded-md w-auto'} flex justify-center items-center hover:shadow-md cursor-pointer ${className}`}
        >
          {icon} {text && <p className="ml-2 w-full my-0">{text}</p>}
        </Button>
      )}

      {helperText && (
        <p className="text-sm text-gray-500 text-left mt-5 ml-0">{helperText}</p>
      )}
    </>
  );
};
export default IconButton;
