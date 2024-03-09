import ArchiCard, { Item } from '@/components/base/ArchiCard';
import { Box } from '@mui/material';
import Grid from '@mui/material/Grid';
import ReceivedVSExpense from './ReceivedVSExpense';
import DueAmounts from './DueAmounts';
import OfficeExpense from './OfficeExpense';
import ExpenseCard from './ExpenseCard';
import FundsInsightCard from './FundsInsightCard';

interface DashboardBodyProps {
    className?: string;
}

const DashboardBody = ({
    className
}: DashboardBodyProps) => {

    return (
        <div className={`${className}`}>
            <Grid container rowSpacing={{ xs: 1, sm: 1, md: 2 }} columnSpacing={{ xs: 1, sm: 1, md: 2 }}>
                <Grid item sm={4} xs={12}>
                    <DueAmounts />
                </Grid>
                <Grid item sm={2} xs={12}>
                    <OfficeExpense />
                </Grid>
                <Grid item sm={2} xs={12}>
                    <ExpenseCard
                        label="Received"
                        value={11010}
                    />
                </Grid>
                <Grid item sm={2} xs={12}>
                    <ExpenseCard
                        label="Expense"
                        value={13210}
                    />
                </Grid>
                <Grid item sm={2} xs={12}>
                    <ExpenseCard
                        label="Net Profit"
                        value={13210}
                        color="text-orange-400"
                    />
                </Grid>

                <Grid item sm={6} xs={12}>
                    <Item>
                        <Box className='w-full p-4'>
                            <ReceivedVSExpense />
                        </Box>
                    </Item>
                </Grid>

                <Grid item sm={3} xs={12}>
                    <Box className='w-full'>
                        <FundsInsightCard type="Cash Balance" />
                    </Box>
                </Grid>

                <Grid item sm={3} xs={12}>
                    <Box className='w-full'>
                        <FundsInsightCard type="Expected Profit" />
                    </Box>
                </Grid>
            </Grid>
        </div>
    )
}
export default DashboardBody;