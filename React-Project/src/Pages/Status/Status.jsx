import React from 'react';
import { Card, Row, Col, Button } from 'react-bootstrap';
import { FaCheckCircle } from 'react-icons/fa';
import {
    PiNumberCircleTwoLight,
    PiNumberCircleThreeLight,
} from 'react-icons/pi';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';

const Status = () => {
    return (
        <>
            <Navbar />
            <div
                className='align-items-center min-vh-100'
                style={{ marginTop: '100px' }}
            >
                <Card
                    className='shadow mx-auto'
                    style={{ maxWidth: '530px', borderRadius: '10px' }}
                >
                    <Card.Body className='text-center'>
                        <Row>
                            <Col>
                                <img
                                    src='assets/img/icon/box.png'
                                    alt='Gambar 1'
                                    style={{ width: '40%', height: 'auto' }}
                                />
                                <p className='mt-2 text-warning fw-bold'>
                                    Dikemas
                                </p>
                                <FaCheckCircle
                                    className='text-warning'
                                    size={35}
                                />
                            </Col>
                            <hr
                                style={{
                                    position: 'absolute',
                                    top: '81%',
                                    left: '33.5%',
                                    transform: 'translate(-50%, -50%)',
                                    border: '2px solid #ffa506',
                                    width: '28%',
                                    margin: '0',
                                }}
                            />
                            <Col>
                                <img
                                    src='assets/img/icon/fast-delivery.png'
                                    alt='Gambar 2'
                                    style={{ width: '40%', height: 'auto' }}
                                />
                                <p className='mt-2 text-warning fw-bold'>
                                    Dalam Perjalanan
                                </p>
                                <PiNumberCircleTwoLight
                                    className='text-warning'
                                    size={40}
                                />
                            </Col>

                            <hr
                                style={{
                                    position: 'absolute',
                                    top: '81%',
                                    left: '66.5%',
                                    transform: 'translate(-50%, -50%)',
                                    border: '2px solid #ffa506',
                                    width: '28%',
                                    margin: '0',
                                }}
                            />

                            <Col>
                                <img
                                    src='assets/img/icon/arrival.png'
                                    alt='Gambar 3'
                                    style={{ width: '40%', height: 'auto' }}
                                />
                                <p className='mt-2 text-warning fw-bold'>
                                    Diterima
                                </p>
                                <PiNumberCircleThreeLight
                                    className='text-warning'
                                    size={40}
                                />
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>

                <Card
                    className='shadow mx-auto'
                    style={{
                        maxWidth: '530px',
                        borderRadius: '10px',
                        marginTop: '10px',
                        padding: '15px',
                    }}
                >
                    <Card.Body>
                        <div className='fw-bold'>
                            <p style={{ fontSize: '15px' }}>Penerima: Grisse</p>
                            <p style={{ fontSize: '15px' }}>
                                Alamat: Jl. Loremipsum Gg.X No.12 RT 03 RW 02 -
                                688432
                            </p>
                            <p style={{ fontSize: '15px' }}>
                                No Handphone: 0813456789021
                            </p>
                            <p style={{ fontSize: '15px' }}>Detail Order</p>
                        </div>
                        <div
                            className='d-flex align-items-center'
                            style={{ marginLeft: '20px' }}
                        >
                            <img
                                src='assets/img/Card/cat.png'
                                alt=''
                                style={{
                                    width: '100px',
                                    height: '125px',
                                    marginRight: '10px',
                                    borderRadius: '10px',
                                }}
                            />
                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    marginLeft: '10px',
                                    fontWeight: 'bold',
                                }}
                            >
                                <p style={{ margin: '0', marginBottom: '5px' }}>
                                    Order ID: 3245321
                                </p>
                                <p style={{ margin: '0', marginBottom: '5px' }}>
                                    Order Item: Animal Smart Card
                                </p>
                                <hr style={{ margin: '5px 0' }} />
                                <p style={{ margin: '0' }}>
                                    Estimasi Diterima: 23 September 2023
                                </p>
                            </div>
                        </div>
                        <div
                            className='d-flex justify-content-center '
                            style={{ marginTop: 40 }}
                        >
                            <Button
                                style={{ width: '200px' }}
                                className='fw-bold btn btn-warning text-white'
                            >
                                OK
                            </Button>
                        </div>
                    </Card.Body>
                </Card>
            </div>
            <Footer />
        </>
    );
};

export default Status;
