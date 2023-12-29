import React, { useState } from 'react';
import { Card, Form, Button, Container, Row, Col } from 'react-bootstrap';
import { FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';

const ChangePassword = () => {
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const toggleNewPasswordVisibility = () => {
        setShowNewPassword(!showNewPassword);
    };

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
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
                            height: '500px',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                            padding: '35px',
                            borderRadius: '20px',
                        }}
                        className='d-flex flex-column align-items-center justify-content-center'
                    >
                        {/* Ganti URL gambar dengan gambar yang sesuai */}
                        <Card.Img
                            variant='top'
                            src='assets/logo.png'
                            style={{ width: '75%', height: '130px' }}
                        />

                        <Card.Title className='mt-4 mb-3 fw-bold'>
                            Ubah Kata Sandi
                        </Card.Title>

                        <Form className='w-100 mt-4'>
                            <Form.Group controlId='formNewPassword'>
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
                                            showNewPassword
                                                ? 'text'
                                                : 'password'
                                        }
                                        placeholder='New Password'
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
                                        onClick={toggleNewPasswordVisibility}
                                    >
                                        {showNewPassword ? (
                                            <FaEyeSlash />
                                        ) : (
                                            <FaEye />
                                        )}
                                    </div>
                                </div>
                            </Form.Group>

                            <Form.Group
                                controlId='formConfirmPassword'
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
                                            showConfirmPassword
                                                ? 'text'
                                                : 'password'
                                        }
                                        placeholder='Confirm Password'
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
                                        onClick={
                                            toggleConfirmPasswordVisibility
                                        }
                                    >
                                        {showConfirmPassword ? (
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
                                Simpan Perubahan
                            </Button>
                        </Form>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default ChangePassword;
