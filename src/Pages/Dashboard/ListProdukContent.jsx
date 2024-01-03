import React, { useState } from 'react';
import { Button, Modal, Form, Table } from 'react-bootstrap';
import { FiPlusCircle } from 'react-icons/fi';

import { FaRegEdit } from 'react-icons/fa';
import { FaRegTrashAlt } from 'react-icons/fa';

const ListProdukContent = () => {
    const [showModal, setShowModal] = useState(false);
    const [productData, setProductData] = useState({
        name: '',
        description: '',
        image: null,
    });
    const [data, setData] = useState([
        { name: 'Product 1', description: 'Description 1', image: null },
        { name: 'Product 2', description: 'Description 2', image: null },
    ]);

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleAddProduct = () => {
        setData([...data, productData]);
        setProductData({
            name: '',
            description: '',
            image: null,
        });
        handleCloseModal();
    };

    return (
        <>
            <div
                className='shadow p-3 mb-5 bg-white rounded'
                style={{ marginTop: 50 }}
            >
                <div className='input-group mb-3'>
                    <input
                        type='text'
                        className='form-control'
                        placeholder='Search Produk'
                        aria-label='Search Produk'
                        aria-describedby='search-button'
                    />
                    <div
                        className='input-group-append'
                        style={{ marginRight: 30 }}
                    >
                        <button
                            className='btn btn-outline-secondary'
                            type='button'
                            id='search-button'
                        >
                            Search
                        </button>
                    </div>
                    <Button
                        onClick={() => setShowModal(true)}
                        variant='warning text-white fw-bold'
                        style={{
                            borderRadius: '8px',
                        }}
                    >
                        <FiPlusCircle
                            style={{ marginRight: 10, fontSize: '17px' }}
                        />{' '}
                        Tambah Produk
                    </Button>
                </div>
                <hr />

                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th style={{ width: '5%', textAlign: 'center' }}>
                                No
                            </th>
                            <th style={{ width: '15%', textAlign: 'center' }}>
                                Nama Produk
                            </th>
                            <th style={{ width: '15%', textAlign: 'center' }}>
                                Gambar
                            </th>
                            <th style={{ width: '50%', textAlign: 'center' }}>
                                Deskripsi
                            </th>
                            <th style={{ width: '15%', textAlign: 'center' }}>
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody style={{ textAlign: 'center' }}>
                        {data.map((product, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{product.name}</td>
                                <td>
                                    {product.image && (
                                        <img
                                            src={URL.createObjectURL(
                                                product.image,
                                            )}
                                            alt={`Product ${index + 1}`}
                                            style={{
                                                maxWidth: '100px',
                                                maxHeight: '100px',
                                            }}
                                        />
                                    )}
                                </td>
                                <td>{product.description}</td>
                                <td>
                                    <Button
                                        variant='info'
                                        style={{
                                            marginRight: 10,
                                            backgroundColor: 'transparent',
                                            border: '1px solid black',
                                        }}
                                    >
                                        <FaRegEdit className='dark' />
                                    </Button>
                                    <Button
                                        variant='info'
                                        style={{
                                            marginRight: 10,
                                            backgroundColor: 'transparent',
                                            border: '1px solid black',
                                        }}
                                    >
                                        <FaRegTrashAlt />
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>

            <Modal
                show={showModal}
                onHide={handleCloseModal}
                style={{ marginTop: 40 }}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Tambah Produk</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId='formProductName'>
                            <Form.Label>Nama Produk</Form.Label>
                            <Form.Control
                                type='text'
                                placeholder='Enter product name'
                                name='name'
                                value={productData.name}
                                onChange={(e) =>
                                    setProductData({
                                        ...productData,
                                        name: e.target.value,
                                    })
                                }
                            />
                        </Form.Group>
                        <Form.Group controlId='formProductImage'>
                            <Form.Label>Upload Image</Form.Label>
                            <Form.Control
                                type='file'
                                accept='image/*'
                                name='image'
                                onChange={(e) =>
                                    setProductData({
                                        ...productData,
                                        image: e.target.files[0],
                                    })
                                }
                            />
                        </Form.Group>
                        <Form.Group controlId='formProductDescription'>
                            <Form.Label>Deskripsi</Form.Label>
                            <Form.Control
                                as='textarea'
                                rows={3}
                                placeholder='Enter product description'
                                name='description'
                                value={productData.description}
                                onChange={(e) =>
                                    setProductData({
                                        ...productData,
                                        description: e.target.value,
                                    })
                                }
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='secondary' onClick={handleCloseModal}>
                        Close
                    </Button>
                    <Button variant='primary' onClick={handleAddProduct}>
                        Tambah Produk
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default ListProdukContent;
