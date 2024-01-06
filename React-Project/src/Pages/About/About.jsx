import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

import { FiArrowUpRight } from 'react-icons/fi';
import { FaArrowRight } from 'react-icons/fa6';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import './about.css';

const Home = () => {
    return (
        <>
            <Navbar />
            <div className='about-page'>
                <div className='w-100 min-vh-100 d-flex align-items-center'>
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
                                        <Col md={6}>
                                            {/* Tambahkan gambar atau elemen lain di sebelah kiri */}
                                            <img
                                                src='assets/img/boxcard.png' // Ganti dengan path gambar yang sesuai
                                                alt='image-about'
                                                className='img-fluid img-center-md' // Membuat gambar responsif
                                            />
                                        </Col>
                                        <Col
                                            md={6}
                                            className='d-flex r justify-content-center flex-column about'
                                        >
                                            <h1
                                                className='text-justify mb-2 fw-bold'
                                                style={{ fontSize: '2rem' }}
                                            >
                                                LoremIpsum
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
                                                    backgroundColor:
                                                        'transparent',
                                                    color: 'black',
                                                    border: '1px solid black',
                                                    borderRadius: '30px',
                                                }}
                                            >
                                                Selengkapnya{' '}
                                                <FiArrowUpRight
                                                    style={{
                                                        marginLeft: 10,
                                                        fontSize: '25px',
                                                    }}
                                                />
                                            </Button>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Row>
                    </Container>
                </div>
                <div>
                    <Container>
                        <Row className='mt-4'>
                            {/* Kolom 1 dengan teks */}
                            <Col md={6}>
                                <div className='about-title'>
                                    <h2 className='fw-bold'>
                                        Smart Card Kami <br /> Memiliki
                                        Keunggulan
                                    </h2>
                                    <p className='text-justify'>
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Vitae nihil hic
                                        numquam sint expedita nemo sit at.
                                        Maiores odio veritatis beatae possimus
                                        atque officia eum accusamus illum harum
                                        id, dicta debitis neque necessitatibus
                                        facere enim praesentium voluptas quos
                                        dignissimos doloribus deserunt
                                        repudiandae omnis? Est facilis error
                                        similique nam odit obcaecati.
                                    </p>
                                    <Button
                                        className='fw-bold'
                                        style={{
                                            alignSelf: 'flex-start',
                                            backgroundColor: 'transparent',
                                            color: 'black',
                                            border: '1px solid black',
                                            borderRadius: '30px',
                                        }}
                                    >
                                        Lihat Semua Produk
                                        <FaArrowRight
                                            style={{
                                                marginLeft: 10,
                                                fontSize: '25px',
                                            }}
                                        />
                                    </Button>
                                </div>
                            </Col>

                            <Col md={6}>
                                <Row className='about-card'>
                                    <Col>
                                        <Card
                                            className='shadow mb-4 card-about'
                                            style={{ width: '15rem' }}
                                        >
                                            {/* Konten Kartu 1 */}
                                            <Card.Body className='text-center'>
                                                <Card.Img
                                                    variant='top'
                                                    src='assets/img/about/eating.png'
                                                    style={{
                                                        height: '100px',
                                                        width: '100px',
                                                        objectFit: 'cover',
                                                        borderRadius: 0,
                                                    }}
                                                />
                                                <Card.Text>
                                                    Lebih Mudah Mengenali Hewan
                                                    Dalam Bentuk Augmented
                                                    Reality
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col>
                                        <Card
                                            className='shadow mb-4 card-about2'
                                            style={{ width: '15rem' }}
                                        >
                                            {/* Konten Kartu 2 */}
                                            <Card.Body className='text-center'>
                                                <Card.Img
                                                    variant='top'
                                                    src='assets/img/about/cookie-man.png'
                                                    style={{
                                                        height: '100px',
                                                        width: '150px',
                                                        objectFit: 'cover',
                                                        borderRadius: 0,
                                                    }}
                                                />
                                                <Card.Text>
                                                    Belajar Rantai <br />{' '}
                                                    Makanan Dalam <br /> Game
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col>
                                        <Card
                                            className='shadow mb-4 card-about'
                                            style={{ width: '15rem' }}
                                        >
                                            {/* Konten Kartu 3 */}
                                            <Card.Body className='text-center'>
                                                <Card.Img
                                                    variant='top'
                                                    src='assets/img/about/School-prep.png'
                                                    style={{
                                                        height: '100px',
                                                        width: '150px',
                                                        objectFit: 'cover',
                                                        borderRadius: 0,
                                                    }}
                                                />
                                                <Card.Text>
                                                    Lebih Mudah <br />{' '}
                                                    Mempelajari <br /> Tentang
                                                    Hewan
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col>
                                        <Card
                                            className='shadow card-about4'
                                            style={{ width: '15rem' }}
                                        >
                                            {/* Konten Kartu 4 */}
                                            <Card.Body className='text-center'>
                                                <Card.Img
                                                    variant='top'
                                                    src='assets/img/about/Frog.png'
                                                    style={{
                                                        height: '100px',
                                                        width: '150px',
                                                        objectFit: 'cover',
                                                        borderRadius: 0,
                                                    }}
                                                />
                                                <Card.Text>
                                                    Memperluas <br />{' '}
                                                    Pengetahuan <br /> Sang
                                                    Anak!
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className='w-100 min-vh-100 d-flex align-items-center'>
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
                                        <Col md={6}>
                                            {/* Tambahkan gambar atau elemen lain di sebelah kiri */}
                                            <img
                                                src='assets/img/Card/video.jpg' // Ganti dengan path gambar yang sesuai
                                                alt='image-about'
                                                className='img-fluid image-about' // Membuat gambar responsif
                                            />
                                        </Col>
                                        <Col
                                            md={6}
                                            className='d-flex r justify-content-center flex-column about'
                                        >
                                            <h1
                                                className='text-justify mb-2 fw-bold'
                                                style={{ fontSize: '3rem' }}
                                            >
                                                Belajar Lebih Mudah dan Asik
                                                Dengan smart Card
                                            </h1>

                                            <Button
                                                className='fw-bold'
                                                style={{
                                                    alignSelf: 'flex-start',
                                                    backgroundColor:
                                                        'transparent',
                                                    color: 'black',
                                                    border: '1px solid black',
                                                    borderRadius: '30px',
                                                    marginTop: '20px',
                                                }}
                                            >
                                                Selengkapnya{' '}
                                                <FiArrowUpRight
                                                    style={{
                                                        marginLeft: 10,
                                                        fontSize: '25px',
                                                    }}
                                                />
                                            </Button>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Row>
                    </Container>
                </div>
                <div className='w-100' style={{ marginBottom: '50px' }}>
                    <h1 className='text-center fw-bold'>
                        Ulasan Pelanggan Kami
                    </h1>
                    <p className='text-center'>
                        Beberapa komentar,saran, dan masukan dari pelanggan kami
                    </p>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={10}
                        pagination={{
                            clickable: true,
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 40,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 20,
                            },

                            1285: {
                                slidesPerView: 4,
                                spaceBetween: 50,
                            },
                        }}
                        modules={[Pagination]}
                        className='mySwiper'
                    >
                        <SwiperSlide>
                            <Card
                                style={{
                                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                                    width: '20rem',
                                    height: '13rem',
                                    borderRadius: '10px',
                                    padding: '10px',
                                }}
                            >
                                <div>
                                    <p style={{ margin: '10px' }}>
                                        Bagus sekali untuk pembelajaran anak
                                        anak, sangat menarik dan edukatif.
                                    </p>
                                    <div
                                        className='d-flex alig-items-center'
                                        style={{ marginTop: '20px' }}
                                    >
                                        <img
                                            src='assets/img/testimonial/people-1.jpg'
                                            alt='Slide 1'
                                            style={{
                                                borderRadius: '50%',
                                                width: '50px',
                                                height: '50px',
                                                marginLeft: '50px',
                                            }}
                                        />
                                        <p
                                            style={{
                                                margin: '10px 0',
                                                fontWeight: 'bold',
                                                marginLeft: '10px',
                                            }}
                                        >
                                            John Doe
                                        </p>
                                    </div>
                                </div>
                            </Card>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card
                                style={{
                                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                                    width: '20rem',
                                    height: '13rem',
                                    borderRadius: '10px',
                                    padding: '10px',
                                }}
                            >
                                <div>
                                    <p style={{ margin: '10px' }}>
                                        Bagus sekali untuk pembelajaran anak
                                        anak, sangat menarik dan edukatif.
                                    </p>
                                    <div
                                        className='d-flex alig-items-center'
                                        style={{ marginTop: '20px' }}
                                    >
                                        <img
                                            src='assets/img/testimonial/people-1.jpg'
                                            alt='Slide 1'
                                            style={{
                                                borderRadius: '50%',
                                                width: '50px',
                                                height: '50px',
                                                marginLeft: '50px',
                                            }}
                                        />
                                        <p
                                            style={{
                                                margin: '10px 0',
                                                fontWeight: 'bold',
                                                marginLeft: '10px',
                                            }}
                                        >
                                            John Doe
                                        </p>
                                    </div>
                                </div>
                            </Card>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card
                                style={{
                                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                                    width: '20rem',
                                    height: '13rem',
                                    borderRadius: '10px',
                                    padding: '10px',
                                }}
                            >
                                <div>
                                    <p style={{ margin: '10px' }}>
                                        Bagus sekali untuk pembelajaran anak
                                        anak, sangat menarik dan edukatif.
                                    </p>
                                    <div
                                        className='d-flex alig-items-center'
                                        style={{ marginTop: '20px' }}
                                    >
                                        <img
                                            src='assets/img/testimonial/people-1.jpg'
                                            alt='Slide 1'
                                            style={{
                                                borderRadius: '50%',
                                                width: '50px',
                                                height: '50px',
                                                marginLeft: '50px',
                                            }}
                                        />
                                        <p
                                            style={{
                                                margin: '10px 0',
                                                fontWeight: 'bold',
                                                marginLeft: '10px',
                                            }}
                                        >
                                            John Doe
                                        </p>
                                    </div>
                                </div>
                            </Card>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card
                                style={{
                                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                                    width: '20rem',
                                    height: '13rem',
                                    borderRadius: '10px',
                                    padding: '10px',
                                }}
                            >
                                <div>
                                    <p style={{ margin: '10px' }}>
                                        Bagus sekali untuk pembelajaran anak
                                        anak, sangat menarik dan edukatif.
                                    </p>
                                    <div
                                        className='d-flex alig-items-center'
                                        style={{ marginTop: '20px' }}
                                    >
                                        <img
                                            src='assets/img/testimonial/people-1.jpg'
                                            alt='Slide 1'
                                            style={{
                                                borderRadius: '50%',
                                                width: '50px',
                                                height: '50px',
                                                marginLeft: '50px',
                                            }}
                                        />
                                        <p
                                            style={{
                                                margin: '10px 0',
                                                fontWeight: 'bold',
                                                marginLeft: '10px',
                                            }}
                                        >
                                            John Doe
                                        </p>
                                    </div>
                                </div>
                            </Card>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card
                                style={{
                                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                                    width: '20rem',
                                    height: '13rem',
                                    borderRadius: '10px',
                                    padding: '10px',
                                }}
                            >
                                <div>
                                    <p style={{ margin: '10px' }}>
                                        Bagus sekali untuk pembelajaran anak
                                        anak, sangat menarik dan edukatif.
                                    </p>
                                    <div
                                        className='d-flex alig-items-center'
                                        style={{ marginTop: '20px' }}
                                    >
                                        <img
                                            src='assets/img/testimonial/people-1.jpg'
                                            alt='Slide 1'
                                            style={{
                                                borderRadius: '50%',
                                                width: '50px',
                                                height: '50px',
                                                marginLeft: '50px',
                                            }}
                                        />
                                        <p
                                            style={{
                                                margin: '10px 0',
                                                fontWeight: 'bold',
                                                marginLeft: '10px',
                                            }}
                                        >
                                            John Doe
                                        </p>
                                    </div>
                                </div>
                            </Card>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card
                                style={{
                                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                                    width: '20rem',
                                    height: '13rem',
                                    borderRadius: '10px',
                                    padding: '10px',
                                }}
                            >
                                <div>
                                    <p style={{ margin: '10px' }}>
                                        Bagus sekali untuk pembelajaran anak
                                        anak, sangat menarik dan edukatif.
                                    </p>
                                    <div
                                        className='d-flex alig-items-center'
                                        style={{ marginTop: '20px' }}
                                    >
                                        <img
                                            src='assets/img/testimonial/people-1.jpg'
                                            alt='Slide 1'
                                            style={{
                                                borderRadius: '50%',
                                                width: '50px',
                                                height: '50px',
                                                marginLeft: '50px',
                                            }}
                                        />
                                        <p
                                            style={{
                                                margin: '10px 0',
                                                fontWeight: 'bold',
                                                marginLeft: '10px',
                                            }}
                                        >
                                            John Doe
                                        </p>
                                    </div>
                                </div>
                            </Card>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Home;
