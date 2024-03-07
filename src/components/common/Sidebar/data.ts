import DashboardIcon from '@mui/icons-material/Dashboard';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
// Icon for Expense
import ExporseIcon from '@mui/icons-material/Receipt';

export const sidebarItems = [
    {
        text: 'Dashboard',
        icon: DashboardIcon,
        link: '/dashboard'
    },
    {
        text: 'Receivable',
        icon: AttachMoneyIcon,
        link: '/receivable'
    },
    {
        text: 'Payable',
        icon: AccountBalanceIcon,
        link: '/payable'
    },
    {
        text: 'Office Expense',
        icon: ExporseIcon,
        link: '/expense'
    },
];

export const drawerWidth = 240;
