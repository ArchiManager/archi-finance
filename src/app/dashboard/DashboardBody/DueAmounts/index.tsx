import ArchiCard, { Item } from "@/components/base/ArchiCard";
import {
    Box,
    Typography,
} from "@mui/material";


const DueAmounts = () => {
    return (
        <Item>
            <Box className='w-full p-4'>
                <Typography gutterBottom variant="h5" component="div" className='text-green-500'>
                    Due Amounts
                </Typography>
                <div className="flex flex-row gap-4">
                    <ArchiCard className='w-6/12 border-blue-600 border-solid border'>
                        <Typography gutterBottom variant="h6" component="div">
                            Receivable
                        </Typography>
                        <Typography className='text-5xl text-blue-600'>
                            11010
                        </Typography>
                    </ArchiCard>
                    <ArchiCard className='w-6/12 border-red-500 border-solid border'>
                        <Typography gutterBottom variant="h6" component="div">
                            Payable
                        </Typography>
                        <Typography className='text-5xl text-red-500'>
                            12111
                        </Typography>
                    </ArchiCard>
                </div>
            </Box>
        </Item>
    )
}
export default DueAmounts;