import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { sidebarItems } from "@/components/common/Sidebar/data";

interface SidebarProps {
    open: boolean;
}

const Sidebar = ({
    open
}: SidebarProps) => {
    return (
        <div>
            <List>
                {sidebarItems.map((item) => (
                    <ListItem key={item.text} disablePadding sx={{ display: 'block' }}>
                        <ListItemButton
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5,
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : 'auto',
                                    justifyContent: 'center',
                                }}
                            >
                                <item.icon className="text-indigo-800" />
                            </ListItemIcon>
                            <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0, fontWeight: "bold" }} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </div>
    )
}
export default Sidebar;