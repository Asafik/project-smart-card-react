import React from 'react';
import { Navbar, Card, Button } from 'react-bootstrap';
import { FaCheckCircle } from 'react-icons/fa';
import { FaRegCircleCheck } from 'react-icons/fa6';

import { Link } from 'react-router-dom'; // Pastikan untuk mengimpor Link dari 'react-router-dom'
import Footer from '../../Components/Footer/Footer';

const Selesai = () => {
    return (
        <>
            <Navbar bg='white' expand='lg'>
                {/* Gambar atau logo di sebelah kanan */}
                <Navbar.Brand>
                    <img
                        src='assets/logo.png'
                        alt='Logo'
                        height='50'
                        className='d-inline-block align-top'
                    />
                </Navbar.Brand>

                <div className='mx-auto d-flex align-items-center'>
                    <div className='d-flex flex-column align-items-center'>
                        <FaCheckCircle
                            size={32}
                            className='mx-2 text-warning'
                        />
                        <span className='text-center'>Informasi Kontak</span>
                    </div>
                    <hr
                        style={{ border: '2px solid #ffa506', width: '150px' }}
                    />
                    <div className='d-flex flex-column align-items-center'>
                        <FaCheckCircle
                            size={35}
                            className='mx-2 text-warning'
                        />
                        <span className='text-center'>Pembayaran</span>
                    </div>
                    <hr
                        style={{ border: '2px solid #ffa506', width: '150px' }}
                    />
                    <div className='d-flex flex-column align-items-center'>
                        <FaCheckCircle
                            size={35}
                            className='mx-2 text-warning'
                        />
                        <span className='text-center'>Selesai</span>
                    </div>
                </div>
            </Navbar>

            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: '30px',
                    marginBottom: '30px',
                    height: '85vh',
                }}
            >
                <Card
                    style={{
                        width: '30rem',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                        padding: '10px',
                        borderRadius: '10px',
                    }}
                >
                    <Card.Body>
                        <Card.Title className='text-center mt-5'>
                            <FaRegCircleCheck
                                size={60}
                                className='mx-2 text-warning'
                            />
                        </Card.Title>

                        <Card.Text className='text-center'>
                            <p className='fw-bold' style={{ fontSize: 20 }}>
                                Terimakasih atas pesanan anda!
                            </p>
                            <p>
                                Konfirmasi pesanan telah dikirim ke
                                loremipsum@gmail.com
                            </p>
                        </Card.Text>

                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginTop: '100px',
                                marginBottom: '80px',
                            }}
                        >
                            <Link to='/' style={{ textDecoration: 'none' }}>
                                <Button
                                    style={{ width: '200px' }}
                                    className='btn-warning text-white fw-bold'
                                >
                                    Kembali KeBeranda
                                </Button>
                            </Link>
                        </div>
                    </Card.Body>
                </Card>
            </div>
            <Footer />
        </>
    );
};

export default Selesai;
