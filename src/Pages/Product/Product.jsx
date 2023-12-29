import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';


import './product.css';

const Product = () => {
    return (
        <>
            <Navbar />
            <div className='w-100 min-vh-100 product-page'>
                <Container>
                    <Row style={{ marginTop: 50 }}>
                        <Col>
                            <h1 className='text-center fw-bold'>Produk Kami</h1>
                            <p className='text-center'>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Accusantium, explicabo.
                            </p>
                        </Col>
                    </Row>
                    <Row className='justify-content-center align-items-center product'>
                        <Card
                            style={{
                                width: '22rem',
                                margin: '10px',
                                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                                borderRadius: '15px',
                            }}
                        >
                            <Card.Img
                                variant='top'
                                src='assets/img/Card/card.png'
                            />
                            <Card.Body>
                                <div className='d-flex align-items-center mb-2'>
                                    {Array(5)
                                        .fill()
                                        .map((_, index) => (
                                            <FaStar
                                                key={index}
                                                color='#ffc107'
                                                size={20}
                                            />
                                        ))}
                                </div>
                                <Card.Title className='me-2'>
                                    Seri Hewan
                                </Card.Title>
                                <Card.Text style={{ marginBottom: '5px' }}>
                                    Terdiri Dari 24 Kartu Binatang
                                </Card.Text>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <Card.Text
                                        className='fw-bold'
                                        style={{
                                            marginTop: '10px',
                                            color: 'blue',
                                        }}
                                    >
                                        Rp. 30.000
                                    </Card.Text>
                                    <div>
                                        <Link to="/detail-produk">
                                        <Button variant='warning text-white fw-bold'>Beli Sekarang</Button>
                                        </Link>
                                       </div>
                                </div>
                            </Card.Body>
                        </Card>

                        <Card
                            style={{
                                width: '22rem',
                                margin: '10px',
                                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                                borderRadius: '15px',
                            }}
                        >
                            <Card.Img
                                variant='top'
                                src='assets/img/Card/card.png'
                            />
                            <Card.Body>
                                <div className='d-flex align-items-center mb-2'>
                                    {Array(5)
                                        .fill()
                                        .map((_, index) => (
                                            <FaStar
                                                key={index}
                                                color='#ffc107'
                                                size={20}
                                            />
                                        ))}
                                </div>
                                <Card.Title className='me-2'>
                                    Seri Sayuran
                                </Card.Title>
                                <Card.Text style={{ marginBottom: '5px' }}>
                                    Terdiri Dari 24 Kartu Binatang
                                </Card.Text>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <Card.Text
                                        className='fw-bold'
                                        style={{
                                            marginTop: '10px',
                                            color: 'blue',
                                        }}
                                    >
                                        Rp. 30.000
                                    </Card.Text>
                                    <div>
                                        <Link to="/detail-produk">
                                        <Button variant='warning text-white fw-bold'>Beli Sekarang</Button>
                                        </Link>
                                       </div>
                                </div>
                            </Card.Body>
                        </Card>
                        <Card
                            style={{
                                width: '22rem',
                                margin: '10px',
                                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                                borderRadius: '15px',
                            }}
                        >
                            <Card.Img
                                variant='top'
                                src='assets/img/Card/card.png'
                            />
                            <Card.Body>
                                <div className='d-flex align-items-center mb-2'>
                                    {Array(5)
                                        .fill()
                                        .map((_, index) => (
                                            <FaStar
                                                key={index}
                                                color='#ffc107'
                                                size={20}
                                            />
                                        ))}
                                </div>
                                <Card.Title className='me-2'>
                                    Seri Tanaman
                                </Card.Title>
                                <Card.Text style={{ marginBottom: '5px' }}>
                                    Terdiri Dari 24 Kartu Binatang
                                </Card.Text>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <Card.Text
                                        className='fw-bold'
                                        style={{
                                            marginTop: '10px',
                                            color: 'blue',
                                        }}
                                    >
                                        Rp. 30.000
                                    </Card.Text>
                                    <div>
                                        <Link to="/detail-produk">
                                        <Button variant='warning text-white fw-bold'>Beli Sekarang</Button>
                                        </Link>
                                       </div>
                                </div>
                            </Card.Body>
                        </Card>
                        <Card
                            style={{
                                width: '22rem',
                                margin: '10px',
                                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                                borderRadius: '15px',
                            }}
                        >
                            <Card.Img
                                variant='top'
                                src='assets/img/Card/card.png'
                            />
                            <Card.Body>
                                <div className='d-flex align-items-center mb-2'>
                                    {Array(5)
                                        .fill()
                                        .map((_, index) => (
                                            <FaStar
                                                key={index}
                                                color='#ffc107'
                                                size={20}
                                            />
                                        ))}
                                </div>
                                <Card.Title className='me-2'>
                                    Seri Ikan
                                </Card.Title>
                                <Card.Text style={{ marginBottom: '5px' }}>
                                    Terdiri Dari 24 Kartu Binatang
                                </Card.Text>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <Card.Text
                                        className='fw-bold'
                                        style={{
                                            marginTop: '10px',
                                            color: 'blue',
                                        }}
                                    >
                                        Rp. 30.000
                                    </Card.Text>
                                    <div>
                                        <Link to="/detail-produk">
                                        <Button variant='warning text-white fw-bold'>Beli Sekarang</Button>
                                        </Link>
                                       </div>
                                </div>
                            </Card.Body>
                        </Card>
                        <Card
                            style={{
                                width: '22rem',
                                margin: '10px',
                                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                                borderRadius: '15px',
                            }}
                        >
                            <Card.Img
                                variant='top'
                                src='assets/img/Card/card.png'
                            />
                            <Card.Body>
                                <div className='d-flex align-items-center mb-2'>
                                    {Array(5)
                                        .fill()
                                        .map((_, index) => (
                                            <FaStar
                                                key={index}
                                                color='#ffc107'
                                                size={20}
                                            />
                                        ))}
                                </div>
                                <Card.Title className='me-2'>
                                    Seri Buah Buahan
                                </Card.Title>
                                <Card.Text style={{ marginBottom: '5px' }}>
                                    Terdiri Dari 24 Kartu Binatang
                                </Card.Text>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <Card.Text
                                        className='fw-bold'
                                        style={{
                                            marginTop: '10px',
                                            color: 'blue',
                                        }}
                                    >
                                        Rp. 30.000
                                    </Card.Text>
                                    <div>
                                        <Link to="/detail-produk">
                                        <Button variant='warning text-white fw-bold'>Beli Sekarang</Button>
                                        </Link>
                                       </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Row>
                </Container>
            </div>
            <Footer />
        </>
    );
};

export default Product;
