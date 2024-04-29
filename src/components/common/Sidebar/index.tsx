"use client";
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { sidebarItems } from "@/components/common/Sidebar/data";
import { AddCircleOutline } from "@mui/icons-material";
import { useRouter } from "nextjs13-progress";

interface SidebarProps {
    open: boolean;
}

const Sidebar = ({
    open
}: SidebarProps) => {
    const router = useRouter();

    return (
        <div>
            <List className="py-0 my-0">
                <ListItem disablePadding className="block">
                    <ListItemButton
                        sx={{
                            minHeight: 48,
                            justifyContent: open ? 'initial' : 'center',
                            px: 2.5,
                        }}
                        className={`bg-green-700 min-h-12 ${open ? "justify-normal" : "justify-center"} px-4.5`}
                        onClick={() => router.push("/create/project")}
                    >
                        <ListItemIcon
                            sx={{
                                minWidth: 0,
                                mr: open ? 3 : 'auto',
                                justifyContent: 'center',
                            }}
                        >
                            <AddCircleOutline className="text-white" />
                        </ListItemIcon>
                        <ListItemText primary="Create"
                            className={`text-white ${open ? "opacity-100" : "opacity-0"}`}
                        />
                    </ListItemButton>
                </ListItem>
            </List>
            <List>
                {sidebarItems.map((item) => (
                    <ListItem key={item.text} disablePadding sx={{ display: 'block' }}
                        onClick={() => { router.push(item.link) }}
                    >
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