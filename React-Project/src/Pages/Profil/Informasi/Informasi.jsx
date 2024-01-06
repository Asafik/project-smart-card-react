import React, { useState } from 'react';
import { Card, Button, Image, Modal, Form } from 'react-bootstrap';

const Informasi = () => {
    const [showModal, setShowModal] = useState(false);
    const [profileData, setProfileData] = useState({
        nama: 'Ahmad Amrozi',
        email: 'grisserdg@example.com',
        telepon: '08123456789',
        alamat: 'Jl. Contoh No. 123',
        fotoProfil: 'https://placekitten.com/100/100',
    });

    const handleModalClose = () => {
        setShowModal(false);
    };

    const handleModalShow = () => {
        setShowModal(true);
    };

    const handleEditSubmit = (event) => {
        event.preventDefault();
        // Simpan perubahan pada state profil
        setProfileData({
            nama: event.target.formNama.value,
            email: event.target.formEmail.value,
            telepon: event.target.formTelepon.value,
            alamat: event.target.formAlamat.value,
            fotoProfil: event.target.formFotoProfil.value, // Ganti dengan logika penyimpanan gambar yang sesuai
        });
        // Tutup modal
        handleModalClose();
    };

    return (
        <div>
            <Card
                style={{
                    maxWidth: '50rem',
                    margin: 'auto',
                    marginTop: '70px',
                    borderRadius: '15px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                }}
            >
                <Card.Body>
                    <div className='text-center'>
                        <Image
                            src={profileData.fotoProfil}
                            alt='Foto Profil'
                            roundedCircle
                            style={{
                                width: '100px',
                                height: '100px',
                                marginBottom: '10px',
                            }}
                            onClick={handleModalShow}
                        />
                        <h3 className='mb-3'>Informasi Pribadi</h3>
                        <p>
                            Kelola informasi profil Anda untuk mengontrol,
                            melindungi, dan mengamankan akun
                        </p>
                    </div>
                    <div style={{ padding: '20px' }}>
                        <p style={{ padding: '10px' }}>
                            <strong>Nama</strong>
                            <span
                                style={{
                                    marginLeft: '85px',
                                    padding: '10px',
                                }}
                            >
                                : {profileData.nama}
                            </span>
                        </p>
                        <p style={{ padding: '10px' }}>
                            <strong>Email </strong>
                            <span
                                style={{
                                    marginLeft: '85px',
                                    padding: '10px',
                                }}
                            >
                                : {profileData.email}
                            </span>
                        </p>
                        <p style={{ padding: '10px' }}>
                            <strong>Nomor Telepon </strong>
                            <span
                                style={{
                                    marginLeft: '10px',
                                    padding: '10px',
                                }}
                            >
                                : {profileData.telepon}
                            </span>
                        </p>
                        <p style={{ padding: '10px' }}>
                            <strong>Alamat</strong>
                            <span
                                style={{
                                    marginLeft: '75px',
                                    padding: '10px',
                                }}
                            >
                                : {profileData.alamat}
                            </span>
                        </p>
                    </div>
                    <Button
                        variant='warning text-white fw-bold'
                        className='w-100 mt-3'
                        onClick={handleModalShow}
                    >
                        Ubah Informasi
                    </Button>
                </Card.Body>
            </Card>

            {/* Modal Popup untuk Edit Informasi */}
            <Modal
                show={showModal}
                onHide={handleModalClose}
                style={{ marginTop: '40px' }}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Edit Informasi Pribadi</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleEditSubmit}>
                        <Form.Group className='mb-3' controlId='formNama'>
                            <Form.Label>Nama</Form.Label>
                            <Form.Control
                                type='text'
                                placeholder='Masukkan Nama'
                                defaultValue={profileData.nama}
                            />
                        </Form.Group>
                        <Form.Group className='mb-3' controlId='formEmail'>
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type='email'
                                placeholder='Masukkan Email'
                                defaultValue={profileData.email}
                            />
                        </Form.Group>
                        <Form.Group className='mb-3' controlId='formTelepon'>
                            <Form.Label>Nomor Telepon</Form.Label>
                            <Form.Control
                                type='tel'
                                placeholder='Masukkan Nomor Telepon'
                                defaultValue={profileData.telepon}
                            />
                        </Form.Group>
                        <Form.Group className='mb-3' controlId='formAlamat'>
                            <Form.Label>Alamat</Form.Label>
                            <Form.Control
                                type='text'
                                placeholder='Masukkan Alamat'
                                defaultValue={profileData.alamat}
                            />
                        </Form.Group>

                        <Form.Group controlId='formFotoProfil' className='mb-3'>
                            <Form.Label>Foto Profil</Form.Label>
                            <div className='text-center'>
                                <Image
                                    src={profileData.fotoProfil}
                                    alt='Foto Profil'
                                    roundedCircle
                                    style={{
                                        width: '70px',
                                        height: '70px',
                                        marginBottom: '10px',
                                    }}
                                />
                            </div>
                            <Form.Control
                                type='file'
                                accept='image/*'
                                onChange={(e) =>
                                    setProfileData({
                                        ...profileData,
                                        fotoProfil: URL.createObjectURL(
                                            e.target.files[0],
                                        ),
                                    })
                                }
                            />
                        </Form.Group>

                        <Button variant='primary' type='submit'>
                            Simpan Perubahan
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default Informasi;
