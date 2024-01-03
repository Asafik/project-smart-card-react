import React, { useState } from 'react';
import { Form, Table, Button, Modal } from 'react-bootstrap';
import { FiPlusCircle } from 'react-icons/fi';

import { FaRegEdit } from 'react-icons/fa';
import { FaRegTrashAlt } from 'react-icons/fa';

const ListKategoriContent = () => {
    const [showModal, setShowModal] = useState(false);

    const handleShowModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

    return (
        <>
            <div
                className='shadow p-3 mb-5 bg-white rounded'
                style={{ marginTop: 50 }}
            >
                <div className='d-flex justify-content-end'>
                    <div className='me-3'>
                        <Form>
                            <Form.Group controlId='searchTerm' className='mb-3'>
                                <Form.Control
                                    type='text'
                                    placeholder='Cari...'
                                />
                            </Form.Group>
                        </Form>
                    </div>

                    <div>
                        <Button
                            variant='warning text-white fw-bold'
                            style={{
                                borderRadius: '8px',
                            }}
                            onClick={handleShowModal}
                        >
                            <FiPlusCircle
                                style={{
                                    marginRight: 10,
                                    fontSize: '17px',
                                }}
                            />
                            Tambah Kategori
                        </Button>
                    </div>
                </div>

                <hr />

                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th style={{ width: '5%', textAlign: 'center' }}>
                                No
                            </th>
                            <th style={{ width: '10%', textAlign: 'center' }}>
                                Name
                            </th>
                            <th style={{ width: '15%', textAlign: 'center' }}>
                                Gambar
                            </th>
                            <th style={{ width: '40%', textAlign: 'center' }}>
                                Deskripsi
                            </th>
                          
                            <th style={{ width: '10%', textAlign: 'center' }}>
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody style={{ textAlign: 'center' }}>
                        <tr>
                            <td>1</td>
                            <td>Hewan</td>
                            <td>
                                <img
                                    src=''
                                    alt=''
                                    style={{
                                        maxWidth: '70px',
                                        maxHeight: '70px',
                                    }}
                                />
                            </td>
                           
                            
                            <td></td>
                            <td>
                                <Button
                                    variant='info'
                                    style={{
                                        marginRight: 10,
                                        backgroundColor: 'transparent',
                                        border: '1px solid black',
                                    }}
                                >
                                    <FaRegEdit />
                                </Button>
                                <Button
                                    variant='info'
                                    style={{
                                        backgroundColor: 'transparent',
                                        border: '1px solid black',
                                        marginRight: 10,
                                    }}
                                >
                                    <FaRegTrashAlt />
                                </Button>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div>

            {/* Modal Tambah Produk */}
            <Modal show={showModal} onHide={handleCloseModal} className='mt-5'>
                <Modal.Header closeButton>
                    <Modal.Title>Tambah Produk</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId='productName'>
                            <Form.Label>Kategori</Form.Label>
                            <Form.Control type='text' />
                        </Form.Group>
                        <Form.Group controlId='productImage'>
                            <Form.Label>Gambar</Form.Label>
                            {/* Menggunakan input file untuk mengunggah gambar */}
                            <Form.Control type='file' accept='image/*' />
                        </Form.Group>
                       
                       
                     
                        <Form.Group controlId='productQuantity'>
                            <Form.Label>Deskripsi</Form.Label>
                            <Form.Control type='text' />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='secondary' onClick={handleCloseModal}>
                        Tutup
                    </Button>
                    <Button variant='primary' onClick={handleCloseModal}>
                        Simpan
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default ListKategoriContent;
