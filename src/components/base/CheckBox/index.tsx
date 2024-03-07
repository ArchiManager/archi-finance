interface ICheckBoxProps {
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  id: string;
}

const CheckBox = ({
  checked = false,
  onChange,
  label = "Remember me",
  id,
}: ICheckBoxProps) => {
  return (
    <div className="flex flex-row">
      <input
        id={id}
        type="checkbox"
        defaultValue="remember"
        className="w-5 h-5 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 block"
        required
        checked={checked}
        onChange={onChange}
      />
      <div className="flex items-center h-7">
        <label
          htmlFor={id}
          className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 block"
        >
          {label}
        </label>
      </div>
    </div>
  );
};
export default CheckBox;
