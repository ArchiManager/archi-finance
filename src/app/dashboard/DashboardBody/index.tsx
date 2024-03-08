import ArchiCard, { Item } from '@/components/base/ArchiCard';
import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';

interface DashboardBodyProps {
    className?: string;
}

const DashboardBody = ({
    className
}: DashboardBodyProps) => {
    return (
        <div className={`${className}`}>
            <Grid container rowSpacing={{ xs: 1, sm: 1, md: 2 }} columnSpacing={{ xs: 1, sm: 1, md: 2 }}>
                <Grid item xs={4}>
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
                </Grid>
                <Grid item xs={2}>
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
                </Grid>
                <Grid item xs={2}>
                    <ArchiCard>
                        <div className='h-40 flex flex-col justify-start items-center'>
                            <Typography gutterBottom variant="h6" component="div">
                                Received
                            </Typography>
                            <div className='flex flex-col justify-center items-center h-full'>
                                <Typography className='text-5xl text-black'>
                                    11010
                                </Typography>
                            </div>
                        </div>
                    </ArchiCard>
                </Grid>
                <Grid item xs={2}>
                    <ArchiCard>
                        <div className='h-40 flex flex-col justify-start items-center'>
                            <Typography gutterBottom variant="h6" component="div">
                                Expense
                            </Typography>
                            <div className='flex flex-col justify-center items-center h-full'>
                                <Typography className='text-5xl text-black'>
                                    13210
                                </Typography>
                            </div>
                        </div>
                    </ArchiCard>
                </Grid>
                <Grid item xs={2}>
                    <ArchiCard>
                        <div className='h-40 flex flex-col justify-start items-center'>
                            <Typography gutterBottom variant="h6" component="div" className='text-orange-400'>
                                Net Profit
                            </Typography>
                            <div className='flex flex-col justify-center items-center h-full'>
                                <Typography className='text-5xl text-orange-400'>
                                    12478
                                </Typography>
                            </div>
                        </div>
                    </ArchiCard>
                </Grid>
            </Grid>
        </div>
    )
}
export default DashboardBody;