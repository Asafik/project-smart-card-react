// PersistentDrawerLeft.jsx
import React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Typography from '@mui/material/Typography';
import { MdOutlineDashboard } from 'react-icons/md';
import { FaList } from 'react-icons/fa';

import DashboardContent from '../../Pages/Dashboard/DashboardContent';
import ListKategoriContent from '../../Pages/Dashboard/ListKategoriContent';
import ListProdukContent from '../../Pages/Dashboard/ListProdukContent';

import './Style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const drawerWidth = 200;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    }),
);

const CustomAppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundColor: 'white',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

const Sidebar = () => {
    const theme = useTheme();
    const [open, setOpen] = React.useState(true); // Set to true for initial open state
    const [selectedMenu, setSelectedMenu] = React.useState('dashboard');

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const renderContent = () => {
        switch (selectedMenu) {
            case 'dashboard':
                return <DashboardContent />;
            case 'list Kategori':
                return <ListKategoriContent />;
            case 'list Produk':
                return <ListProdukContent />;
            default:
                return null;
        }
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <CustomAppBar position='fixed' open={open}>
                <Toolbar>
                    <IconButton
                        color='black'
                        aria-label='open drawer'
                        onClick={handleDrawerOpen}
                        edge='start'
                        sx={{ mr: 2, ...(open && { display: 'none' }) }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant='h6'
                        noWrap
                        component='div'
                        color='black'
                    >
                        {selectedMenu.charAt(0).toUpperCase() +
                            selectedMenu.slice(1)}
                    </Typography>
                    <img
                        src='assets/admin.jpeg'
                        alt='logo'
                        width={40}
                        height={35}
                        style={{
                            marginLeft: 'auto',
                            marginRight: 10,
                            borderRadius: '50%',
                        }}
                    />
                    <Typography variant='subtitle1' color='black'>
                        Administration
                    </Typography>
                </Toolbar>
            </CustomAppBar>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                        backgroundColor: 'white',
                        boxShadow: '2px 0px 4px rgba(0, 0, 0, 0.1)',
                    },
                }}
                variant='persistent'
                anchor='left'
                open={open}
            >
                <DrawerHeader>
                    <img
                        src='assets/logo.png'
                        alt='logo'
                        width={100}
                        style={{ marginRight: 10 }}
                    />
                    <IconButton color='black' onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? (
                            <ChevronLeftIcon />
                        ) : (
                            <ChevronRightIcon />
                        )}
                    </IconButton>
                </DrawerHeader>
                <div className='sidebar'>
                    <div
                        className='menu-sidebar'
                        onClick={() => setSelectedMenu('dashboard')}
                    >
                        <MdOutlineDashboard />
                        Dashboard
                    </div>
                    <div
                        className='menu-sidebar'
                        onClick={() => setSelectedMenu('list Kategori')}
                    >
                        <FaList />
                        List Kategori
                    </div>
                    <div
                        className='menu-sidebar'
                        onClick={() => setSelectedMenu('list Produk')}
                    >
                        {' '}
                        <FaList /> List Produk
                    </div>
                </div>
            </Drawer>
            <Main open={open}>{renderContent()}</Main>
        </Box>
    );
};

export default Sidebar;
