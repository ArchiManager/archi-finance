"use client";
import * as React from 'react';
import Image from 'next/image';
import NavLogo from './NavLogo';
import { auth } from "@/firebase";
import Box from '@mui/material/Box';
import { useSnackbar } from 'notistack';
import { signOut } from 'firebase/auth';
import Toolbar from '@mui/material/Toolbar';
import { useRouter } from 'nextjs13-progress';
import { styled } from '@mui/material/styles';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import MoreIcon from "@mui/icons-material/MoreVert";
import ArchiInput from '@/components/base/ArchiInput';
import { Badge, Menu, MenuItem } from "@mui/material";
import { useAuthState } from 'react-firebase-hooks/auth';
import AccountCircle from "@mui/icons-material/AccountCircle";
import { drawerWidth } from '@/components/common/Sidebar/data';
import NotificationsIcon from "@mui/icons-material/Notifications";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';

interface NavbarProps {
    open: boolean;
    handleDrawerOpen: () => void;
}

interface AppBarProps extends MuiAppBarProps {
    open: boolean;
}

const Navbar = (props: NavbarProps) => {
    const { open, handleDrawerOpen } = props;

    const AppBar = styled(MuiAppBar, {
        shouldForwardProp: (prop) => prop !== 'open',
    })<AppBarProps>(({ theme, open }) => ({
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        ...(open && {
            marginLeft: drawerWidth,
            width: `calc(100% - ${drawerWidth}px)`,
            /* width: "100%", */
            transition: theme.transitions.create(['width', 'margin'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
        }),
    }));

    const router = useRouter();

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
        React.useState<null | HTMLElement>(null);

    const menuId = "primary-search-account-menu";

    const { enqueueSnackbar, closeSnackbar } = useSnackbar();

    // For Loading
    const [user, loadingAuth, errorAuth] = useAuthState(auth);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    // For Logout
    const handleLogout = async () => {
        try {
            await signOut(auth);

            enqueueSnackbar("You have been logged out successfully", {
                variant: "success",
                anchorOrigin: {
                    vertical: "top",
                    horizontal: "right",
                },
            });
        } catch (error) {
            enqueueSnackbar("An error occurred while logging out", {
                variant: "error",
                anchorOrigin: {
                    vertical: "top",
                    horizontal: "right",
                },
            });

            console.error(error);
        }
    }

    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            style={{ marginTop: "40px" }}
            anchorOrigin={{
                vertical: "top",
                horizontal: "right",
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: "top",
                horizontal: "right",
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
            <MenuItem onClick={handleMenuClose}>Dashboard</MenuItem>
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </Menu>
    );

    const mobileMenuId = "primary-search-account-menu-mobile";
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: "top",
                horizontal: "right",
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: "top",
                horizontal: "right",
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                    <Badge badgeContent={4} color="error">
                        <MailIcon />
                    </Badge>
                </IconButton>
                <p>Messages</p>
            </MenuItem>
            <MenuItem>
                <IconButton
                    size="large"
                    aria-label="show 17 new notifications"
                    color="inherit"
                >
                    <Badge badgeContent={17} color="error">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
                <p>Notifications</p>
            </MenuItem>
            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
                <p>Profile</p>
            </MenuItem>
        </Menu>
    );

    return (
        <AppBar position="fixed" open={open} className='bg-primary'>
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    edge="start"
                    sx={{
                        marginRight: 5,
                        ...(open && { display: 'none' }),
                    }}
                >
                    <MenuIcon />
                </IconButton>
                <NavLogo
                    open={false}
                />
                <Box sx={{ flexGrow: 1 }} />
                <Box sx={{ display: { xs: "none", md: "flex" } }}>
                    <div className={`h-16 ${!open ? ("flex") : "hidden"} flex-col justify-center mr-4`}>
                        <ArchiInput
                            id="searchInputNavbar"
                            type="text"
                            placeholder='Search for projects or people or tasks...'
                            customStyles={true}
                            disableUnderline={true}
                            className='rounded-sm border border-white border-solid hover:border-white focus:border-blue-400 focus:border-2 bg-transparent'
                            inputclassName='w-96 text-white'
                            variant={"filled"}
                            icon={
                                <SearchIcon
                                    sx={{
                                        color: "white",
                                        marginTop: "0px",
                                    }}
                                />
                            }
                            sxInput={{
                                padding: "8px",
                                fontSize: "18px",
                                color: "white"
                            }}
                        />
                    </div>
                    <IconButton
                        size="large"
                        aria-label="show 4 new mails"
                        color="inherit"
                    >
                        <Badge badgeContent={4} color="error">
                            <MailIcon />
                        </Badge>
                    </IconButton>
                    <IconButton
                        size="large"
                        aria-label="show 17 new notifications"
                        color="inherit"
                    >
                        <Badge badgeContent={17} color="error">
                            <NotificationsIcon />
                        </Badge>
                    </IconButton>
                    <Box className="flex flex-row">
                        <div className='h-full flex flex-col justify-center items-end ml-4 mr-2'>
                            {loadingAuth ? (
                                <p className="text-sm text-gray-300 p-0">
                                    Loading...
                                </p>
                            ) : (
                                <h4 className="text-md my-0 p-0">
                                    {user?.displayName}
                                </h4>
                            )}
                            <p className="text-sm text-gray-300 m-0 p-0 text-left">
                                PK
                            </p>
                        </div>
                        <IconButton
                            size="large"
                            edge="end"
                            aria-label="account of current user"
                            aria-controls={menuId}
                            aria-haspopup="true"
                            onClick={handleProfileMenuOpen}
                            color="inherit"
                        >
                            {user ? (
                                <Image
                                    src={user?.photoURL as string}
                                    alt="profile"
                                    width={35}
                                    height={35}
                                    className="rounded-full border-2 border-white border-solid"
                                    loading="lazy"
                                />
                            ) : (
                                <AccountCircle />
                            )}
                        </IconButton>
                    </Box>
                </Box>
                <Box sx={{ display: { xs: "flex", md: "none" } }}>
                    <IconButton
                        size="large"
                        aria-label="show more"
                        aria-controls={mobileMenuId}
                        aria-haspopup="true"
                        onClick={handleMobileMenuOpen}
                        color="inherit"
                    >
                        <MoreIcon />
                    </IconButton>
                </Box>
            </Toolbar>
            {renderMobileMenu}
            {renderMenu}
        </AppBar>
    );
}
export default Navbar;