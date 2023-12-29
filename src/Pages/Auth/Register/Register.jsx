import React, { useState } from 'react';
import { Card, Form, Button, Container, Row, Col } from 'react-bootstrap';
import { FaUser, FaEnvelope, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Import Link dari react-router-dom

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };

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
                            height: '550px',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                            padding: '35px',
                            borderRadius: '20px',
                        }}
                        className='d-flex flex-column align-items-center justify-content-center'
                    >
                        <Card.Img
                            variant='top'
                            src='assets/logo.png' // Ganti dengan URL gambar Anda
                            style={{ width: '75%', height: '130px' }}
                        />
                        <Card.Body className='w-100 mt-4'>
                            <Form className='w-100'>
                                <Form.Group controlId='formBasicUsername'>
                                    <div className='position-relative'>
                                        <Form.Control
                                            type='text'
                                            placeholder='Username'
                                            style={{
                                                borderWidth: '1px',
                                                borderRadius: '10px',
                                                borderColor: 'black',
                                                height: '50px',
                                                paddingLeft: '40px',
                                            }}
                                        />
                                        <FaUser
                                            className='position-absolute'
                                            style={{
                                                left: '15px',
                                                top: '50%',
                                                transform: 'translateY(-50%)',
                                            }}
                                        />
                                    </div>
                                </Form.Group>

                                <Form.Group
                                    controlId='formBasicEmail'
                                    className='mt-4'
                                >
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

                                <Form.Group
                                    controlId='formBasicPassword'
                                    className='mt-4'
                                >
                                    <div className='position-relative'>
                                        <FaLock
                                            className='position-absolute text-secondary'
                                            style={{
                                                top: '50%',
                                                left: '15px',
                                                transform: 'translateY(-50%)',
                                            }}
                                        />
                                        <Form.Control
                                            type={
                                                showPassword
                                                    ? 'text'
                                                    : 'password'
                                            }
                                            placeholder='Password'
                                            style={{
                                                paddingLeft: '40px',
                                                borderWidth: '1px',
                                                borderRadius: '10px',
                                                borderColor: 'black',
                                                height: '50px',
                                            }}
                                        />
                                        <div
                                            className='position-absolute text-secondary'
                                            style={{
                                                top: '50%',
                                                right: '15px',
                                                transform: 'translateY(-50%)',
                                                cursor: 'pointer',
                                            }}
                                            onClick={togglePasswordVisibility}
                                        >
                                            {showPassword ? (
                                                <FaEyeSlash />
                                            ) : (
                                                <FaEye />
                                            )}
                                        </div>
                                    </div>
                                </Form.Group>

                                <Button
                                    variant='warning'
                                    type='submit'
                                    className='w-100 mt-4 fw-bold text-white'
                                >
                                    Register
                                </Button>

                                <div className='mt-4 d-flex justify-content-between'>
                                    <p className='mb-0'>Sudah Punya Akun? </p>
                                    <Link
                                        to='/login'
                                        className='text-warning fw-bold'
                                    >
                                        Login
                                    </Link>
                                </div>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Register;
