// UbahKataSandi.js
import React from 'react';
import { Card, Form, Button } from 'react-bootstrap';

const UbahKataSandi = () => {
    return (
        <div>
            <Card
                style={{
                    maxWidth: '30rem',
                    margin: 'auto',
                    marginTop: '20vh',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    padding: '30px',
                }}
            >
                <h2 className='text-center fw-bold'>Ubah Kata Sandi</h2>
                <Card.Body>
                    <Form>
                        <Form.Group controlId='formKataSandiLama'>
                            <Form.Label>Kata Sandi Lama</Form.Label>
                            <Form.Control type='password' />
                        </Form.Group>

                        <Form.Group controlId='formKataSandiBaru'>
                            <Form.Label style={{ marginTop: '20px' }}>
                                Kata Sandi Baru
                            </Form.Label>
                            <Form.Control type='password' />
                        </Form.Group>

                        <Form.Group controlId='formKonfirmasiKataSandiBaru'>
                            <Form.Label style={{ marginTop: '20px' }}>
                                Konfirmasi Kata Sandi Baru
                            </Form.Label>
                            <Form.Control type='password' />
                        </Form.Group>

                        <Button
                            style={{
                                marginTop: '20px',
                                display: 'block',
                                marginLeft: 'auto',
                                marginRight: 'auto',
                            }}
                            variant='warning text-white fw-bold'
                            type='submit'
                        >
                            Simpan Perubahan
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    );
};

export default UbahKataSandi;
