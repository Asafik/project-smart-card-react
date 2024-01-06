// PersistentDrawerLeft.jsx
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

// Sidebar.js
import React, { useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Typography from '@mui/material/Typography';
import {
    AiOutlineInfoCircle,
    AiOutlineBook,
    AiOutlineBell,
    AiOutlineLock,
    AiOutlineLogout,
} from 'react-icons/ai';
import { Button, Modal, Navbar } from 'react-bootstrap';
import Informasi from '../../Informasi/Informasi';
import KoleksiSaya from '../../Koleksi/KoleksiSaya';
import Notifikasi from '../../Notifikasi/Notifikasi';
import UbahKataSandi from '../../ChangePassword/UbahKataSandi';

import './sidebarprofil.css';

import axios from 'axios';

const drawerWidth = 250;

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
    const [open, setOpen] = React.useState(true);
    const [showModal, setShowModal] = useState(false);
    const [selectedMenu, setSelectedMenu] = React.useState('informasi');

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const handleKeluar = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const renderContent = () => {
        switch (selectedMenu) {
            case 'informasi':
                return <Informasi />;
            case 'koleksiKartu':
                return <KoleksiSaya />;
            case 'notifikasi':
                return <Notifikasi />;
            case 'ubahKataSandi':
                return <UbahKataSandi />;
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
                        {selectedMenu
                            ? selectedMenu.charAt(0).toUpperCase() +
                              selectedMenu.slice(1)
                            : 'informasi'}
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
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginRight: '20px',
                        }}
                    >
                        <Navbar.Brand href='/'>
                            {' '}
                            <img src='assets/logo.png' alt='logo' width={120} />
                        </Navbar.Brand>
                    </div>
                    <IconButton color='black' onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? (
                            <ChevronLeftIcon />
                        ) : (
                            <ChevronRightIcon />
                        )}
                    </IconButton>
                </DrawerHeader>
                <div>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginTop: '40px',
                        }}
                    >
                        <h2
                            className='fw-bold'
                            style={{ marginBottom: '10px' }}
                        >
                            Akun Saya
                        </h2>
                        <img
                            src='assets/admin.jpeg'
                            alt='imge-user'
                            width={70}
                            style={{
                                borderRadius: '50%',
                                border: '2px solid #ddd',
                                margin: '10px',
                            }}
                        />
                        <h5 className='fw-bold' style={{ marginBottom: '5px' }}>
                            Nama User
                        </h5>
                        <p style={{ marginBottom: '20px' }}>dsdfeg@gmail.com</p>
                    </div>

                    <div className='sidebar-informasi'>
                        <div
                            className='sidebar-informasi-menu'
                            onClick={() => setSelectedMenu('informasi')}
                        >
                            <AiOutlineInfoCircle /> Informasi
                        </div>
                        <div
                            className='sidebar-informasi-menu'
                            onClick={() => setSelectedMenu('koleksiKartu')}
                        >
                            <AiOutlineBook /> Koleksi Kartu
                        </div>
                        <div
                            className='sidebar-informasi-menu'
                            onClick={() => setSelectedMenu('notifikasi')}
                        >
                            <AiOutlineBell /> Notifikasi
                        </div>
                        <div
                            className='sidebar-informasi-menu'
                            onClick={() => setSelectedMenu('ubahKataSandi')}
                        >
                            <AiOutlineLock /> Ubah Kata Sandi
                        </div>
                        <div
                            className='sidebar-informasi-menu'
                            onClick={handleKeluar}
                        >
                            <AiOutlineLogout /> Keluar
                        </div>
                    </div>
                </div>
            </Drawer>
            <Main open={open}>{renderContent()}</Main>

            <Modal
                show={showModal}
                onHide={handleCloseModal}
                style={{ marginTop: '40px' }}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Konfirmasi Keluar</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Apakah Anda yakin ingin keluar dari akun Anda?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='secondary' onClick={handleCloseModal}>
                        Batal
                    </Button>
                    <Button variant='danger' onClick={handleCloseModal}>
                        Keluar
                    </Button>
                </Modal.Footer>
            </Modal>
        </Box>
    );
};

export default Sidebar;
