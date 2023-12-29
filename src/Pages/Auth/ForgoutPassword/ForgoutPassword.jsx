import React from 'react';
import { Card, Form, Button, Container, Row, Col } from 'react-bootstrap';
import { FaEnvelope } from 'react-icons/fa';

import { Link } from 'react-router-dom';
const ForgetPassword = () => {
    return (
        <Container
            className='d-flex align-items-center justify-content-center'
            style={{ minHeight: '100vh' }}
        >
            <Row>
                <Col xs={12} md={6}>
                    <Card
                        style={{
                            width: '30rem',
                            height: '450px',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                            padding: '35px',
                            borderRadius: '20px',
                        }}
                        className='d-flex flex-column align-items-center justify-content-center'
                    >
                        <Card.Img
                            variant='top'
                            src='assets/logo.png' // Ganti dengan URL gambar Anda
                            style={{ width: '70%', height: '100px' }}
                        />

                        <Card.Title className='mt-4 mb-3 fw-bold'>
                            Lupa Kata Sandi Anda ?
                        </Card.Title>
                        <Card.Text className='text-center mb-4'>
                            Masukkan alamat email anda, kami akan mengirimkan
                            anda tautan untuk mengatur ulang kata sandi anda
                        </Card.Text>
                        <Form className='w-100'>
                            <Form.Group controlId='formBasicEmail'>
                                <div className='position-relative'>
                                    <FaEnvelope
                                        className='position-absolute text-secondary'
                                        style={{
                                            top: '50%',
                                            left: '15px',
                                            transform: 'translateY(-50%)',
                                        }}
                                    />
                                    <Form.Control
                                        type='email'
                                        placeholder='Email'
                                        style={{
                                            paddingLeft: '40px',
                                            borderWidth: '1px',
                                            borderRadius: '10px',
                                            borderColor: 'black',
                                            height: '50px',
                                        }}
                                    />
                                </div>
                            </Form.Group>
                            <Button
                                variant='warning'
                                type='submit'
                                className='w-100 mt-4 fw-bold text-white'
                            >
                                Kirim Email Reset Password
                            </Button>

                            <div className='mt-4 mb-0 text-center'>
                                <Link
                                    to='/login'
                                    className='text-warning fw-bold'
                                    style={{
                                        textDecoration: 'none',
                                        borderBottom: '1px solid #FFC107',
                                        marginTop: '20px',
                                    }}
                                >
                                    Kembali ke Halaman Login
                                </Link>
                            </div>
                        </Form>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default ForgetPassword;
