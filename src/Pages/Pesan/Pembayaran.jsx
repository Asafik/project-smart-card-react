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
import { PiNumberCircleThreeLight } from 'react-icons/pi';
import { FaMinus, FaPlus } from 'react-icons/fa';
import Footer from '../../Components/Footer/Footer';

import { FaRegHeart } from 'react-icons/fa';
import { FaRegTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Pembayaran = () => {
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
            <Container className='mt-5 mb-5'>
                <Row>
                    <Col md={8} className='mb-2'>
                        <Card style={{ padding: '20px', borderColor: 'black' }}>
                            <Card.Body>
                                <Card.Title>Pembayaran</Card.Title>
                                <hr />
                                <div className='d-flex justify-content-between'>
                                    <img
                                        src='assets/img/Pembayaran/dana.png'
                                        alt='Image 2'
                                        className='img-fluid'
                                        style={{
                                            width: '100px',
                                            marginRight: '10px',
                                            border: '2px solid #ffa506',
                                            borderRadius: '8px',
                                            padding: '10px',
                                        }}
                                    />
                                    <img
                                        src='assets/img/Pembayaran/shopeepay.png'
                                        alt='Image 3'
                                        className='img-fluid'
                                        style={{
                                            width: '100px',
                                            marginRight: '10px',
                                            border: '2px solid #ffa506',
                                            borderRadius: '8px',
                                            padding: '10px',
                                        }}
                                    />
                                    <img
                                        src='assets/img/Pembayaran/gopay.png'
                                        alt='Image 1'
                                        className='img-fluid'
                                        style={{
                                            width: '100px',
                                            marginRight: '10px',
                                            border: '2px solid #ffa506',
                                            borderRadius: '8px',
                                            padding: '10px',
                                        }}
                                    />
                                    <img
                                        src='assets/img/Pembayaran/banktf.png'
                                        alt='Image 4'
                                        className='img-fluid'
                                        style={{
                                            width: '100px',
                                            border: '2px solid #ffa506',
                                            borderRadius: '8px',
                                            padding: '10px',
                                        }}
                                    />
                                </div>
                                <div
                                    className='d-flex flex-column align-items-start mt-4'
                                    style={{ marginLeft: 20 }}
                                >
                                    <Form>
                                        <Form.Group>
                                            <div className='d-flex align-items-center mb-4'>
                                                <Form.Check
                                                    type='radio'
                                                    label=''
                                                    name='paymentMethod'
                                                    id='radio1'
                                                />
                                                <img
                                                    src='assets/img/Pembayaran/bri.png'
                                                    alt='Image 2'
                                                    className='img-fluid '
                                                    style={{
                                                        width: '100px',
                                                        marginLeft: '20px',
                                                    }}
                                                />
                                            </div>

                                            <div className='d-flex align-items-center mb-4'>
                                                <Form.Check
                                                    type='radio'
                                                    label=''
                                                    name='paymentMethod'
                                                    id='radio2'
                                                />
                                                <img
                                                    src='assets/img/Pembayaran/bni.png'
                                                    alt='Image 3'
                                                    className='img-fluid '
                                                    style={{
                                                        width: '100px',
                                                        marginLeft: '20px',
                                                    }}
                                                />
                                            </div>

                                            <div className='d-flex align-items-center mb-4'>
                                                <Form.Check
                                                    type='radio'
                                                    label=''
                                                    name='paymentMethod'
                                                    id='radio3'
                                                />
                                                <img
                                                    src='assets/img/Pembayaran/bca.png'
                                                    alt='Image 1'
                                                    className='img-fluid '
                                                    style={{
                                                        width: '100px',
                                                        marginLeft: '20px',
                                                    }}
                                                />
                                            </div>

                                            <div className='d-flex align-items-center mb-4'>
                                                <Form.Check
                                                    type='radio'
                                                    label=''
                                                    name='paymentMethod'
                                                    id='radio4'
                                                />
                                                <img
                                                    src='assets/img/Pembayaran/mandiri.png'
                                                    alt='Image 4'
                                                    className='img-fluid '
                                                    style={{
                                                        width: '100px',
                                                        marginLeft: '20px',
                                                    }}
                                                />
                                            </div>

                                            <div className='d-flex align-items-center mb-3'>
                                                <Form.Check
                                                    type='radio'
                                                    label=''
                                                    name='paymentMethod'
                                                    id='radio5'
                                                />
                                                {/* Add the fifth image source here */}
                                                <img
                                                    src='assets/img/Pembayaran/permata.png'
                                                    alt='Image 5'
                                                    className='img-fluid '
                                                    style={{
                                                        width: '100px',
                                                        marginLeft: '20px',
                                                    }}
                                                />
                                            </div>
                                        </Form.Group>
                                    </Form>
                                </div>
                                <div className='d-flex justify-content-center'>
  <Link to="/pemesanan">
    <Button variant='secondary' className='me-2 fw-bold' style={{ width: '250px' }}>
      Kembali
    </Button>
  </Link>
  <Link to="/petunjuk">
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

export default Pembayaran;
