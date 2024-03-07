import { BsCheckCircleFill, BsCheckCircle } from "react-icons/bs";
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import { IoRadioButtonOn, IoRadioButtonOffSharp } from "react-icons/io5";

interface BudgetTypeRadioButtonProps {
  selected?: boolean;
  type: "hourly" | "fixed";
  onChangeSelected: () => void;
}

const BudgetTypeRadioButton = ({
  selected,
  type,
  onChangeSelected,
}: BudgetTypeRadioButtonProps) => {
  return (
    <div
      className={`border border-solid rounded-md hover:rounded-md h-fit w-60 hover:border-blue-500 ${selected ? "border-blue-500 bg-[rgba(45,22,255,0.09)]" : "border-gray-300"
        } cursor-pointer transition-all ease-linear border-2 py-2 h-auto pr-3 pl-5`}
      onClick={onChangeSelected}
    >
      <div className="flex justify-end">
        <div>
          {selected ? (
            <IoRadioButtonOn color="rgb(43, 103, 219)" size="30" />
          ) : (
            <IoRadioButtonOffSharp color="gray" size="30" />
          )}
        </div>
      </div>
      <div className="flex justify-start my-0">{
        (type === "hourly" ? <QueryBuilderIcon fontSize="large" /> : <MonetizationOnIcon fontSize="large" />)}
      </div>

      <div className="mt-1">
        {type === "hourly" ? (
          <h2 className="text-lg">
            <span className="text-green-600 font-bold">Hourly Rate</span>
          </h2>
        ) : (
          <h2 className="text-lg">
            <span className="text-primary font-bold">Fixed Price</span>
          </h2>
        )}
      </div>
    </div>
  );
};
export default BudgetTypeRadioButton;
