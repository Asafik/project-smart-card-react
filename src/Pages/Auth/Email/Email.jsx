import React from 'react';
import { Card, Form, Button, Container, Row, Col } from 'react-bootstrap';

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
                            style={{ width: '70%', height: '100px' }}
                        />

                        <Card.Title className='mt-4 mb-3 font-weight-bold'>
                            Periksa Email Anda
                        </Card.Title>
                        <Card.Text className='text-center'>
                            Kami telah mengirimkan instruksi ke alamat email
                            Anda. Silakan periksa email Anda untuk menyelesaikan
                            proses.
                        </Card.Text>
                        <hr
                            style={{
                                width: '100%',
                                height: '2px',
                                backgroundColor: 'black',
                            }}
                        />
                        <Card.Text className='mt-3 text-center'>
                            Jika Anda mengalami masalah atau memiliki pertanyaan
                            apa pun, silakan kirim email kepada kami di{' '}
                            <strong>help.smartcard@gmail.com</strong>.
                        </Card.Text>
                        <Form className='w-100'>
                            <Button
                                variant='warning'
                                type='submit'
                                className='w-100 mt-4 fw-bold text-white'
                            >
                                Selesai
                            </Button>
                        </Form>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default ForgetPassword;
