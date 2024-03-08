import { Button as BaseButton } from "@mui/material";

interface ButtonProps {
  text: string;
  type?: "button" | "submit" | "reset";
  className?: string;
  fullWidth?: boolean;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  variant?: "contained" | "outlined" | "text";
  customStyles?: boolean;
}

const ArchiButton = (props: ButtonProps) => {
  const {
    type,
    text,
    disabled = false,
    onClick,
    variant = "contained",
    className,
    fullWidth = false,
    customStyles = false
  } = props;
  return (
    <BaseButton
      type={type}
      fullWidth={fullWidth}
      className={`${!disabled
        ? `${!customStyles && 'bg-primary rounded-md text-white hover:bg-blue-700 focus:ring-blue-800'} cursor-pointer`
        : "bg-gray-200 cursor-not-allowed text-gray-400"
        } focus:outline-none font-medium text-md sm:w-auto px-5 py-2.5 ${(fullWidth) && ("min-w-full")} text-center font-sans first-letter
        ${className}
        `
      }
      onClick={onClick}
      disabled={disabled}
      variant={variant}
    >
      {text}
    </BaseButton >
  );
};
export default ArchiButton;
