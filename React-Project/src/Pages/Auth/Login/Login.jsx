import React, { useState } from 'react';
import { Card, Form, Button, Container, Row, Col } from 'react-bootstrap';
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [validation, setValidation] = useState({});
    const navigate = useNavigate();

    const togglePasswordVisibility = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };

    const handleLogin = async (e) => {
        e.preventDefault();

        const formData = new FormData();

        formData.append('email', email);
        formData.append('password', password);

        try {
            const response = await axios.post(
                'http://127.0.0.1:8000/api/login',
                formData,
            );

            const { token, roles } = response.data.data;

            // Store token and roles in localStorage
            localStorage.setItem('token', token);
            localStorage.setItem('roles', roles);

            // Redirect based on roles
            if (roles === 'admin') {
                navigate('/dashboard');
            } else {
                navigate('/informasi');
            }
        } catch (error) {
            setValidation(error.response.data.data);
        }
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
                        <Card.Img
                            variant='top'
                            src='assets/logo.png'
                            style={{ width: '75%', height: '130px' }}
                        />
                        <Card.Body className='w-100 mt-5'>
                            <Form className='w-100' onSubmit={handleLogin}>
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
                                            style={{
                                                paddingLeft: '40px',
                                                borderWidth: '1px',
                                                borderRadius: '10px',
                                                borderColor: 'black',
                                                height: '50px',
                                            }}
                                            value={email}
                                            onChange={(e) =>
                                                setEmail(e.target.value)
                                            }
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
                                            style={{
                                                paddingLeft: '40px',
                                                borderWidth: '1px',
                                                borderRadius: '10px',
                                                borderColor: 'black',
                                                height: '50px',
                                            }}
                                            value={password}
                                            onChange={(e) =>
                                                setPassword(e.target.value)
                                            }
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
                                    Login
                                </Button>

                                {validation.email && (
                                    <small className='text-danger mt-2'>
                                        {validation.email[0]}
                                    </small>
                                )}

                                {validation.password && (
                                    <small className='text-danger mt-2'>
                                        {validation.password[0]}
                                    </small>
                                )}

                                <div className='mt-4 d-flex justify-content-between'>
                                    <p className='mb-0'>Belum punya akun? </p>
                                    <Link
                                        to='/register'
                                        className='text-warning fw-bold'
                                    >
                                        Daftar
                                    </Link>
                                </div>
                                <Link
                                    to='/lupa-password'
                                    className='text-warning fw-bold mt-1'
                                >
                                    Lupa Password?
                                </Link>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;
