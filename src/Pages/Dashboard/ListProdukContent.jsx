import React, { useState } from 'react';
import { Form, Table, Button, Modal } from 'react-bootstrap';
import { FiPlusCircle } from 'react-icons/fi';

import { FaRegEdit } from 'react-icons/fa';
import { FaRegTrashAlt } from 'react-icons/fa';

const ListProdukContent = () => {
    const kategori = ['Hewan', 'Sayuran'];
    const [productKategori, setProductKategori] = useState('');
    const handleKategoriChange = (event) => {
        setProductKategori(event.target.value);
    };

    const daftarStatusProduk = ['Publish', 'Draf'];
    const [statusProduk, setStatusProduk] = useState('');
    const handleStatusProdukChange = (event) => {
        setStatusProduk(event.target.value);
    };

    const daftarNomorProduct = ['1', '2', '3', '4', '5'];
    const [nomorProduct, setNomorProduct] = useState('');
    const handleNomorProductChange = (event) => {
        setNomorProduct(event.target.value);
    };

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
                    <div>
                        <div className='d-flex justify-content-end'>
                            <div className='me-3'>
                                <Form>
                                    <Form.Group
                                        controlId='searchTerm'
                                        className='mb-3'
                                    >
                                        <Form.Control
                                            type='text'
                                            placeholder='Cari...'
                                        />
                                    </Form.Group>
                                </Form>
                            </div>

                            <div className='me-3'>
                                <Form>
                                    <Form.Group controlId='stokProduk'>
                                        <Form.Select
                                            value={productKategori}
                                            onChange={handleKategoriChange}
                                        >
                                            <option value=''>Kategori</option>
                                            {kategori.map((item, index) => (
                                                <option
                                                    key={index}
                                                    value={item}
                                                >
                                                    {item}
                                                </option>
                                            ))}
                                        </Form.Select>
                                    </Form.Group>
                                </Form>
                            </div>

                            <div className='me-3'>
                                <Form>
                                    <Form.Group controlId='statusProduk'>
                                        <Form.Select
                                            value={statusProduk}
                                            onChange={handleStatusProdukChange}
                                            className='status-product-select'
                                        >
                                            <option value=''>Status</option>
                                            {daftarStatusProduk.map(
                                                (item, index) => (
                                                    <option
                                                        key={index}
                                                        value={item}
                                                    >
                                                        {item}
                                                    </option>
                                                ),
                                            )}
                                        </Form.Select>
                                    </Form.Group>
                                </Form>
                            </div>

                            <div className='me-3 nomor-product-container'>
                                <Form>
                                    <Form.Group controlId='nomorProduct'>
                                        <Form.Select
                                            value={nomorProduct}
                                            onChange={handleNomorProductChange}
                                            className='nomor-product-select'
                                        >
                                            <option value=''>1</option>
                                            {daftarNomorProduct.map(
                                                (item, index) => (
                                                    <option
                                                        key={index}
                                                        value={item}
                                                    >
                                                        {item}
                                                    </option>
                                                ),
                                            )}
                                        </Form.Select>
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
                                    Tambah Produk
                                </Button>
                            </div>
                        </div>
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
                                Produk
                            </th>
                            <th style={{ width: '15%', textAlign: 'center' }}>
                                Gambar
                            </th>
                            <th style={{ width: '10%', textAlign: 'center' }}>
                                Harga
                            </th>
                            <th style={{ width: '10%', textAlign: 'center' }}>
                                Diskon
                            </th>
                            <th style={{ width: '10%', textAlign: 'center' }}>
                                Penjualan
                            </th>
                            <th style={{ width: '10%', textAlign: 'center' }}>
                                Qity
                            </th>
                            <th style={{ width: '10%', textAlign: 'center' }}>
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody style={{ textAlign: 'center' }}>
                        <tr>
                            <td></td>
                            <td></td>
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
                            <td></td>
                            <td></td>
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
                            <Form.Label>Nama Produk</Form.Label>
                            <Form.Control type='text' />
                        </Form.Group>
                        <Form.Group controlId='productImage'>
                            <Form.Label>Gambar</Form.Label>
                            {/* Menggunakan input file untuk mengunggah gambar */}
                            <Form.Control type='file' accept='image/*' />
                        </Form.Group>
                        <Form.Group controlId='productPrice'>
                            <Form.Label>Harga</Form.Label>
                            <Form.Control type='text' />
                        </Form.Group>
                        <Form.Group controlId='productDiscount'>
                            <Form.Label>Diskon</Form.Label>
                            <Form.Control type='text' />
                        </Form.Group>
                        <Form.Group controlId='productSales'>
                            <Form.Label>Penjualan</Form.Label>
                            <Form.Control type='text' />
                        </Form.Group>
                        <Form.Group controlId='productQuantity'>
                            <Form.Label>Qity</Form.Label>
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

export default ListProdukContent;
