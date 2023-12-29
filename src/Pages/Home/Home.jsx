import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import { IoCartOutline } from 'react-icons/io5';
import { FaChevronRight, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import './home.css';
const Home = () => {
    return (
        <>
            <Navbar />
            <div className='home'>
                <Container className='my-5 min-vh-100 '>
                    <Row>
                        {/* Kolom untuk teks di sebelah kiri */}
                        <Col md={6} className='d-flex align-items-center'>
                            <div>
                                <h1 className='mb-4'>
                                    Selamat Datang di Situs Kami
                                </h1>
                                <p>
                                    Kami menyediakan solusi pintar untuk
                                    kebutuhan Anda. Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit. Sed do eiusmod
                                    tempor incididunt ut labore et dolore magna
                                    aliqua.
                                </p>
                              <div>
                                <Link to="/produk">
                                <Button variant='warning text-white fw-bold'>
                                    Beli Sekarang{' '}
                                    <IoCartOutline className='me-0' style={{ 
                                        width: '25px',
                                        height: '25px',
                                        backgroundColor: '#D4A601',
                                        padding: '3px',
                                        borderRadius: '10px', 
                                        marginLeft: '10px'
                                     }} />
                                </Button>
                                </Link>
                              </div>
                            </div>
                        </Col>

                        {/* Kolom untuk gambar di sebelah kanan */}
                        <Col md={6} className='d-flex align-items-center'>
                            <img
                                src='assets/img/card-new.png'
                                alt='Deskripsi gambar'
                                className='img-fluid img-center-md'
                            />
                        </Col>
                    </Row>
                </Container>
                <div className='w-100 min-vh-100'>
                    <Container>
                        <Row>
                            <Col>
                                <h1 className='text-center fw-bold'>
                                    Produk Terbaru
                                </h1>
                                <p className='text-center'>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Accusantium, explicabo.
                                </p>
                            </Col>
                        </Row>
                        <Row className='justify-content-center align-items-center home-product'>
                            <Card
                                style={{
                                    width: '22rem',
                                    margin: '10px',
                                    boxShadow:
                                        '0px 4px 10px rgba(0, 0, 0, 0.1)',
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
                                    boxShadow:
                                        '0px 4px 10px rgba(0, 0, 0, 0.1)',
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
                        </Row>
                        <Row>
                            <Col>
                                <h1
                                    className='text-center'
                                    style={{ marginTop: 50 }}
                                >
                                   <div>
  <Link to="/produk">
    <Button variant='warning text-white fw-bold'>
      Lihat Semua Produk{' '}
      <FaChevronRight style={{ marginLeft: 10 }} />
    </Button>
  </Link>
</div>
                                </h1>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className='w-100 min-vh-100 d-flex align-items-center '>
                    <Container>
                        <Row className='justify-content-center'>
                            <Card
                                style={{
                                    width: '80rem',
                                    background:
                                        'linear-gradient(135deg, #FFC701 0%, #FFECAA 100%)',
                                    border: 'none',
                                    borderRadius: '15px',
                                }}
                            >
                                <Card.Body>
                                    <Row>
                                        <Col
                                            md={6}
                                            className='d-flex align-items-center justify-content-center flex-column home-about'
                                        >
                                            <h1
                                                className='text-justify mb-2 fw-bold'
                                                style={{ fontSize: '2rem' }}
                                            >
                                                Smart Card Menggunakan Teknologi
                                                Augmented Reality
                                            </h1>
                                            <p className='text-justify fw-bold'>
                                                Lorem ipsum dolor sit amet,
                                                consectetur adipiscing elit, sed
                                                do eiusmod tempor incididunt ut
                                                labore Ut enim ad minim veniam,
                                                quis nostrud exercitation
                                                ullamco laboris nisi ut aliquip
                                                ex ea commodo con. Duis aute
                                                irure dolor in .
                                            </p>
                                            <Button
                                                className='fw-bold'
                                                style={{
                                                    alignSelf: 'flex-start',
                                                }}
                                            >
                                                Selengkapnya{' '}
                                                <FaChevronRight
                                                    style={{ marginLeft: 10 }}
                                                />
                                            </Button>
                                        </Col>
                                        <Col md={6}>
                                            {/* Tambahkan gambar atau elemen lain di sebelah kanan */}
                                            <img
                                                src='assets/img/boxcard.png' // Ganti dengan path gambar yang sesuai
                                                alt='image-about'
                                                className='img-fluid img-center-md' // Membuat gambar responsif
                                            />
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Row>
                    </Container>
                </div>
                <div>
                    <Container>
                        <Row className='justify-content-center'>
                            {/* Card di tengah */}
                            <Card
                                style={{
                                    width: '32rem', // Sesuaikan lebar card dengan kebutuhan Anda
                                    borderRadius: '35px', // Atur border radius sesuai keinginan
                                    background: '#FFC701', // Atur latar belakang putih
                                    boxShadow:
                                        '0px 4px 10px rgba(0, 0, 0, 0.1)', // Atur shadow sesuai keinginan
                                }}
                            >
                                <Card.Body>
                                    {/* Isi konten sesuai kebutuhan */}
                                    <h2 className='text-center fw-bold text-white'>
                                        Tersedia Juga di Marketplace
                                    </h2>
                                </Card.Body>
                            </Card>
                        </Row>

                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                flexWrap: 'wrap', // Baris baru jika lebar layar terlalu kecil
                                marginTop: '50px',
                            }}
                        >
                            <Card
                                style={{
                                    width: '230px',
                                    heght: '20px',
                                    margin: '0 10px 20px 10px', // Tambahkan ruang di bawah card
                                    border: 'none',
                                }}
                            >
                                <Card.Body>
                                    <img
                                        src='assets/img/icon/shopee.png'
                                        alt='shopee'
                                        width={200}
                                    />
                                </Card.Body>
                            </Card>

                            <Card
                                style={{
                                    width: '230px',
                                    heght: '20px',
                                    margin: '0 10px 20px 10px', // Tambahkan ruang di bawah card
                                    border: 'none',
                                }}
                            >
                                <Card.Body>
                                    <img
                                        src='assets/img/icon/tokped.png'
                                        alt='shopee'
                                        width={200}
                                    />
                                </Card.Body>
                            </Card>

                            <Card
                                style={{
                                    width: '230px',
                                    heght: '20px',
                                    margin: '0 10px 20px 10px', // Tambahkan ruang di bawah card
                                    border: 'none',
                                }}
                            >
                                <Card.Body>
                                    <img
                                        src='assets/img/icon/tokped.png'
                                        alt='shopee'
                                        width={200}
                                    />
                                </Card.Body>
                            </Card>
                        </div>
                    </Container>
                </div>
                <Footer />
            </div>
        </>
    );
};

export default Home;
