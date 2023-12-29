import React, { useState } from 'react';
import { Button, Modal, Form, Table } from 'react-bootstrap';
import { FiPlusCircle } from 'react-icons/fi';

import { FaRegEdit } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";

const ListKategoriContent = () => {
    const [showModal, setShowModal] = useState(false);
    const [categoryData, setCategoryData] = useState({
        name: '',
        description: '',
        image: null,
    });
    const [data, setData] = useState([
        { name: 'Category 1', description: 'Description 1', image: null },
        { name: 'Category 2', description: 'Description 2', image: null },
    ]);

    const [editIndex, setEditIndex] = useState(null);

    const handleInputChange = (e) => {
        const { name, value, files } = e.target;
        setCategoryData({
            ...categoryData,
            [name]: files ? files[0] : value,
        });
    };

    const handleShowModal = () => setShowModal(true);
    const handleCloseModal = () => {
        setShowModal(false);
        setEditIndex(null);
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
                        placeholder='Search Divisi'
                        aria-label='Search Divisi'
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
                    <Button onClick={() => setShowModal(true)} variant='warning text-white fw-bold' style={{ 
                        borderRadius: '8px'
                     }}>
                        <FiPlusCircle style={{ marginRight: 10, fontSize: '17px' }} /> Tambah Produk
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
                                Nama Kategori
                            </th>
                            <th style={{ width: '15%', textAlign: 'center' }}>
                                Gambar
                            </th>
                            <th style={{ width: '40%', textAlign: 'center' }}>
                                Deskripsi
                            </th>
                            <th style={{ width: '20%', textAlign: 'center' }}>
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody style={{ textAlign: 'center' }}>
                        {data.map((category, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{category.name}</td>
                                <td>
                                    {category.image && (
                                        <img
                                            src={URL.createObjectURL(
                                                category.image,
                                            )}
                                            alt={`Category ${index + 1}`}
                                            style={{
                                                maxWidth: '100px',
                                                maxHeight: '100px',
                                            }}
                                        />
                                    )}
                                </td>
                                <td>{category.description}</td>
                                <td>
                                <Button
                                        variant='info'
                                        style={{ marginRight: 10, backgroundColor : 'transparent', border: '1px solid black'  }}
                                    >
                                        <FaRegEdit className='dark'/>
                                    </Button>
                                    <Button variant='info'  style={{ marginRight: 10, backgroundColor : 'transparent', border: '1px solid black'  }}><FaRegTrashAlt/></Button>
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
                    <Modal.Title>
                        {editIndex !== null ? 'Edit' : 'Tambah'} Kategori
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId='formCategoryName'>
                            <Form.Label>Nama Kategori</Form.Label>
                            <Form.Control
                                type='text'
                                placeholder='Enter category name'
                                name='name'
                                value={categoryData.name}
                                onChange={handleInputChange}
                            />
                        </Form.Group>
                        <Form.Group controlId='formCategoryImage'>
                            <Form.Label>Upload Image</Form.Label>
                            <Form.Control
                                type='file'
                                accept='image/*'
                                name='image'
                                onChange={handleInputChange}
                            />
                        </Form.Group>
                        <Form.Group controlId='formCategoryDescription'>
                            <Form.Label>Deskripsi</Form.Label>
                            <Form.Control
                                as='textarea'
                                rows={3}
                                placeholder='Enter category description'
                                name='description'
                                value={categoryData.description}
                                onChange={handleInputChange}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='secondary' onClick={handleCloseModal}>
                        Close
                    </Button>
                    <Button variant='primary'>
                        {editIndex !== null ? 'Edit' : 'Tambah'} Kategori
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default ListKategoriContent;
