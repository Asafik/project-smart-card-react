import React from 'react';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './navbar.css';

const CustomNavbar = () => {
    return (
        <Navbar bg='white' expand='lg' fixed='top'>
            <Container>
                {/* Logo / Gambar di kiri */}
                <Navbar.Brand href='#'>
                    <img
                        src='assets/logo.png' // Ganti dengan URL logo yang sesuai
                        alt='Logo'
                        height='50'
                        className='d-inline-block align-top'
                    />
                </Navbar.Brand>

                {/* Tombol Masuk di kanan */}
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse
                    id='basic-navbar-nav'
                    className='justify-content-end'
                >
                    <Nav className='mx-auto link-nav'>
                        <Nav.Link href='/'>Beranda</Nav.Link>
                        <Nav.Link href='/produk'>Produk</Nav.Link>
                        <Nav.Link href='/about'>Tentang Kami</Nav.Link>
                        <Nav.Link href='/status'>Cek Status Pesanan</Nav.Link>
                    </Nav>
                    <Link to='/login'>
                        <Button variant='warning text-white fw-bold navbar-button'>
                            Masuk
                        </Button>
                    </Link>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default CustomNavbar;
