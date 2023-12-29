import React, { useState } from 'react';
import {
    Navbar,
    Container,
    Row,
    Col,
    Card,
    Form,
    Button,
} from 'react-bootstrap';
import { FaCheckCircle } from 'react-icons/fa';
import {
    PiNumberCircleTwoLight,
    PiNumberCircleThreeLight,
} from 'react-icons/pi';
import { FaMinus, FaPlus } from 'react-icons/fa';
import Footer from '../../Components/Footer/Footer';

import { FaRegHeart } from 'react-icons/fa';
import { FaRegTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Pemesanan = () => {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count + 1);
    };

    const handleDecrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };
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
                        <PiNumberCircleTwoLight
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
            <Container className='mt-5 mb-5'>
                <Row>
                    <Col md={8} className='mb-2'>
                        <Card style={{ padding: '20px', borderColor: 'black' }}>
                            <Card.Body>
                                <Card.Title>Informasi Kontak</Card.Title>
                                <hr />
                                <Form>
                                    <div className='d-flex'>
                                        <Form.Group
                                            controlId='formEmail'
                                            className='me-3'
                                        >
                                            <Form.Label>Email</Form.Label>
                                            <Form.Control
                                                type='email'
                                                style={{ borderColor: 'black' }}
                                            />
                                        </Form.Group>

                                        <Form.Group controlId='formNomorTelepon'>
                                            <Form.Label>
                                                Nomor Telepon
                                            </Form.Label>
                                            <Form.Control
                                                type='tel'
                                                style={{ borderColor: 'black' }}
                                            />
                                        </Form.Group>
                                    </div>

                                    <Card.Title className='mt-3'>
                                        Informasi Pengiriman
                                    </Card.Title>
                                    <hr />
                                    <Form.Group controlId='formNama'>
                                        <Form.Label>Nama</Form.Label>
                                        <Form.Control
                                            type='text'
                                            style={{ borderColor: 'black' }}
                                        />
                                    </Form.Group>
                                    <div className='d-flex mt-3'>
                                        <Form.Group
                                            controlId='formProvinsi'
                                            className='me-3'
                                        >
                                            <Form.Label>Provinsi</Form.Label>
                                            <Form.Control
                                                type='text'
                                                style={{ borderColor: 'black' }}
                                            />
                                        </Form.Group>

                                        <Form.Group controlId='formKota'>
                                            <Form.Label>Kota</Form.Label>
                                            <Form.Control
                                                type='text'
                                                style={{ borderColor: 'black' }}
                                            />
                                        </Form.Group>
                                    </div>

                                    <div className='d-flex mt-2'>
                                        <Form.Group
                                            controlId='formAlamat'
                                            className='flex-grow-1 me-3'
                                        >
                                            <Form.Label>
                                                Deskripsi Alamat
                                            </Form.Label>
                                            <Form.Control
                                                as='textarea'
                                                rows={3}
                                                maxLength={300}
                                                style={{
                                                    maxWidth: '100%',
                                                    borderColor: 'black',
                                                }} // Atur warna border menjadi hitam
                                            />
                                            <Form.Text className='text-muted'>
                                                Masukkan deskripsi lengkap
                                                tentang alamat Anda, termasuk
                                                nomor rumah dan nama jalan.
                                            </Form.Text>
                                        </Form.Group>

                                        <Form.Group controlId='formKodePos'>
                                            <Form.Label>Kode Pos</Form.Label>
                                            <Form.Control
                                                type='text'
                                                style={{ borderColor: 'black' }} // Atur warna border menjadi hitam
                                            />
                                        </Form.Group>
                                    </div>

                                    <div className='d-flex justify-content-center'>
  <Link to="/detail-produk">
    <Button variant='secondary' className='me-2 fw-bold' style={{ width: '250px' }}>
      Kembali
    </Button>
  </Link>
  <Link to="/pembayaran">
    <Button
      variant='warning'
      className='text-white fw-bold'
      type='submit'
      style={{ width: '250px' }}
    >
      Pesan
    </Button>
  </Link>
</div>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>

                    {/* Kolom Kanan */}
                    <Col md={4} className='mb-2'>
                        <Card style={{ padding: 20, borderColor: 'black' }}>
                            <Card.Title>Pemesanan</Card.Title>
                            <hr />
                            <Card.Body>
                                <div
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                    }}
                                >
                                    <img
                                        src='assets/img/Card/cat.png'
                                        alt='Animal Smart Card'
                                        style={{
                                            maxWidth: '27%',
                                            height: '120px',
                                        }}
                                    />
                                    <div
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            marginLeft: 10,
                                        }}
                                    >
                                        <div
                                            style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                            }}
                                        >
                                            <div
                                                style={{
                                                    marginLeft: '10px',
                                                    marginRight: '10px',
                                                }}
                                            >
                                                <p
                                                    className='mt-3 mb-1 fw-bold'
                                                    style={{ fontSize: 20 }}
                                                >
                                                    Animal Smart Card
                                                </p>
                                                <p className='fw-bold'>
                                                    Rp.30.000
                                                </p>
                                                <div
                                                    style={{
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                    }}
                                                >
                                                    <Button
                                                        size='sm'
                                                        onClick={
                                                            handleDecrement
                                                        }
                                                        style={{
                                                            padding: '5px 10px',
                                                            fontSize: '0.5rem',
                                                            backgroundColor:
                                                                'transparent',
                                                            border: '1px solid black',
                                                            color: 'black',
                                                        }}
                                                    >
                                                        <FaMinus />
                                                    </Button>
                                                    <p
                                                        style={{
                                                            margin: '0 5px',
                                                            fontSize: '1rem',
                                                        }}
                                                        className='fw-bold'
                                                    >
                                                        {count}
                                                    </p>
                                                    <Button
                                                        size='sm'
                                                        onClick={
                                                            handleIncrement
                                                        }
                                                        style={{
                                                            padding: '5px 10px',
                                                            fontSize: '0.5rem',
                                                            backgroundColor:
                                                                'transparent',
                                                            border: '1px solid black',
                                                            color: 'black',
                                                        }}
                                                    >
                                                        <FaPlus />
                                                    </Button>
                                                    {/* Ikon Heart dan Trash Alt */}
                                                    <div
                                                        style={{
                                                            marginLeft: '15px',
                                                            fontSize: '1.5rem',
                                                        }}
                                                    >
                                                        <FaRegHeart
                                                            style={{
                                                                marginRight:
                                                                    '10px',
                                                                color: 'red',
                                                            }}
                                                        />
                                                        <FaRegTrashAlt
                                                            style={{
                                                                color: 'blue',
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='mt-5 fw-bold'>
                                    <hr />
                                    <p>
                                        Subtotal{' '}
                                        <span style={{ float: 'right' }}>
                                            Rp.30.000
                                        </span>
                                    </p>
                                    <p>
                                        Biaya Pengiriman{' '}
                                        <span style={{ float: 'right' }}>
                                            Rp. 15.000
                                        </span>
                                    </p>
                                    <hr />
                                    <p>
                                        Total{' '}
                                        <span style={{ float: 'right' }}>
                                            Rp. 45.000
                                        </span>
                                    </p>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    );
};

export default Pemesanan;
