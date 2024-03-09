import { Typography } from "@mui/material";
import ArchiCard from "@/components/base/ArchiCard";

interface ExpenseCardProps {
    label: string;
    value: number;
    color?: string;
}

const ExpenseCard = ({
    label,
    value,
    color
}: ExpenseCardProps) => {
    return (
        <ArchiCard>
            <div className='h-40 flex flex-col justify-start items-center'>
                <Typography gutterBottom variant="h6" component="div" className={(color) ? (color) : ""}>
                    {label}
                </Typography>
                <div className='flex flex-col justify-center items-center h-full'>
                    <Typography className={`text-5xl ${(color) ? (color) : ("text-black")}`}>
                        {value}
                    </Typography>
                </div>
            </div>
        </ArchiCard>
    )
}
export default ExpenseCard;