"use client";
import * as React from 'react';
import { useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Badge, Menu, MenuItem } from "@mui/material";
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MoreIcon from "@mui/icons-material/MoreVert";
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from '@mui/icons-material/Mail';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from "@/firebase";
import { useRouter } from 'next/navigation';
import { useSnackbar } from 'notistack';
import Image from 'next/image';
import { drawerWidth } from '@/components/common/Sidebar/data';
import { logout } from '@/utils/methods/auth';
import ArchiInput from '@/components/base/ArchiInput';
import NavLogo from './NavLogo';

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

    useEffect(() => {
        if (!loadingAuth) {
            if (user) {
                // alert("User is already Signed In" + user.email);
                // do something with the user
                console.log("User @ Admin ==> ", user);
            } else {
                console.log("user is null");

                enqueueSnackbar("You are not logged in. Please login to continue", {
                    variant: "error",
                    anchorOrigin: {
                        vertical: "top",
                        horizontal: "center",
                    },
                    autoHideDuration: 3000,
                });

                setTimeout(() => {
                    router.push("/login");
                }, 3000);
                // alert("User is not Signed In");
                // if user is not logged in, redirect to login page
            }
            // if user is null, redirect to login page
        }
    }, [user, loadingAuth, router]);

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
    const handleLogout = () => {
        const isLoggedOut: boolean = logout();

        if (isLoggedOut) {
            enqueueSnackbar("Logout Successful", {
                variant: "success",
                anchorOrigin: {
                    vertical: "top",
                    horizontal: "right",
                },
            });
        } else {
            enqueueSnackbar("Logout Failed", {
                variant: "error",
                anchorOrigin: {
                    vertical: "top",
                    horizontal: "right",
                },
            });
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