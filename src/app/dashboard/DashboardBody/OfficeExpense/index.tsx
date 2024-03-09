import ArchiCard from "@/components/base/ArchiCard";
import { Box, Typography } from "@mui/material";

const OfficeExpense = () => {
    return (
        <ArchiCard className='w-full'>
            <div className='h-40 flex flex-col justify-start items-center'>
                <Typography gutterBottom variant="h6" component="div">
                    Office Expense
                </Typography>
                <div className='flex flex-col justify-center items-center h-full mt-0'>
                    <Typography className='text-5xl text-black'>
                        11010
                    </Typography>
                    <Box className="mt-4">
                        <Typography variant="body2" color="text.secondary">
                            <span className='text-green-500'>+ 10%</span> than last month
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <span className='text-red-500'>- 10%</span> than last month
                        </Typography>
                    </Box>
                </div>
            </div>
        </ArchiCard>
    )
}
export default OfficeExpense;