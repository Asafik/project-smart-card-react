import React from 'react';
import { Navbar, Card, Button, Accordion } from 'react-bootstrap';
import { FaCheckCircle, FaChevronLeft } from 'react-icons/fa';
import { PiNumberCircleThreeLight } from 'react-icons/pi';
import { Link } from 'react-router-dom';

import Footer from '../../Components/Footer/Footer';

const Petunjuk = () => {
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
                        <PiNumberCircleThreeLight
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
                }}
            >
                <Card
                    style={{
                        width: '35rem',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                        padding: '10px',
                    }}
                >
                    <Card.Body>
                        <Card.Title
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                marginLeft: 30,
                            }}
                        >
                            <Link
                                to='/pembayaran'
                                style={{ textDecoration: 'none' }}
                            >
                                <div
                                    className='bg-secondary'
                                    style={{
                                        borderRadius: '50%',
                                        padding: '2px',
                                        marginRight: '20px',
                                        height: '30px',
                                        width: '30px',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        cursor: 'pointer',
                                    }}
                                >
                                    <FaChevronLeft style={{ color: 'white' }} />
                                </div>
                            </Link>
                            Pembayaran
                        </Card.Title>
                        <hr />
                        <Card.Text
                            style={{ padding: '40px', marginTop: '-30px' }}
                        >
                            <p>
                                Total Pembayaran{' '}
                                <span
                                    style={{ float: 'right' }}
                                    className='text-warning fw-bold'
                                >
                                    Rp. 60.000
                                </span>
                            </p>
                            <p>
                                Bayar Dalam{' '}
                                <span
                                    style={{ float: 'right' }}
                                    className='text-warning fw-bold'
                                >
                                    23 jam 55 menit 40 detik
                                </span>
                            </p>
                            <p
                                style={{
                                    float: 'right',
                                    fontSize: '12px',
                                    marginTop: '-10px',
                                }}
                            >
                                Jatuh tempo 10 Ags 2023, 09:46
                            </p>
                        </Card.Text>
                        <div style={{ padding: '40px', marginTop: '-50px' }}>
                            <img
                                src='assets/img/Pembayaran/bni.png'
                                alt='Image 2'
                                className='img-fluid '
                                style={{
                                    width: '80px',
                                }}
                            />
                            <p>
                                No. Rekening <br />
                                <span className='text-warning fw-bold'>
                                    8088 081 1432 3456
                                </span>{' '}
                                <span
                                    className='text-black-50'
                                    style={{ marginLeft: '10px' }}
                                >
                                    Salin
                                </span>
                            </p>
                        </div>
                        <Accordion
                            defaultActiveKey='0'
                            style={{ marginTop: '-70px', padding: '40px' }}
                        >
                            <Accordion.Item eventKey='null'>
                                <Accordion.Header>
                                    Petunjuk Transfer mBanking
                                </Accordion.Header>
                                <Accordion.Body>
                                    Petunjuk Transfer mBanking
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey='1'>
                                <Accordion.Header>
                                    Petunjuk Transfer iBanking
                                </Accordion.Header>
                                <Accordion.Body>
                                    Content for Section 2 goes here.
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey='2'>
                                <Accordion.Header>
                                    Petunjuk Transfer ATM
                                </Accordion.Header>
                                <Accordion.Body>
                                    Content for Section 3 goes here.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <Link to='/selesai'>
                                <Button
                                    style={{ width: '200px' }}
                                    className='btn-warning text-white fw-bold'
                                >
                                    OK
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

export default Petunjuk;
