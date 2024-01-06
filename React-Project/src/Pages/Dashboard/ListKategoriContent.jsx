import React, { useState, useEffect } from 'react';
import { Form, Table, Button, Modal } from 'react-bootstrap';
import { FiPlusCircle } from 'react-icons/fi';
import { FaRegEdit, FaRegTrashAlt } from 'react-icons/fa';
import axios from 'axios';

const ListKategoriContent = () => {
    const [categories, setCategories] = useState([]);
    const [showAddModal, setShowAddModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [selectedCategoryId, setSelectedCategoryId] = useState(null);
    const [newCategory, setNewCategory] = useState({
        name: '',
        image: null,
        description: '',
    });

    const handleShowAddModal = () => {
        setNewCategory({
            name: '',
            image: null,
            description: '',
        });
        setShowAddModal(true);
    };

    const handleCloseAddModal = () => setShowAddModal(false);

    const handleShowEditModal = (categoryId) => {
        setSelectedCategoryId(categoryId);
        const selectedCategory = categories.find(
            (category) => category.id === categoryId,
        );
        setNewCategory({
            name: selectedCategory.name,
            image: null, // You may want to fetch the current image URL if needed
            description: selectedCategory.description,
        });
        setShowEditModal(true);
    };

    const handleCloseEditModal = () => setShowEditModal(false);

    const handleAddCategory = async () => {
        try {
            const formData = new FormData();
            formData.append('name', newCategory.name);
            formData.append('image', newCategory.image);
            formData.append('description', newCategory.description);

            await axios.post('http://127.0.0.1:8000/api/categories', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            fetchCategories();
            handleCloseAddModal();
        } catch (error) {
            console.error('Error adding category:', error);
        }
    };

    const handleUpdateCategory = async () => {
        try {
            const formData = new FormData();
            formData.append('_method', 'PUT');
            formData.append('name', newCategory.name);
            formData.append('description', newCategory.description);
            formData.append('image', newCategory.image);

            await axios.post(
                `http://127.0.0.1:8000/api/categoriesupdate/${selectedCategoryId}`,
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                },
            );

            fetchCategories();
            handleCloseEditModal();
        } catch (error) {
            console.error('Error updating category:', error);
        }
    };

    const handleDeleteCategory = async (categoryId) => {
        try {
            await axios.delete(
                `http://127.0.0.1:8000/api/categoriesdelete/${categoryId}`,
            );

            fetchCategories();
        } catch (error) {
            console.error('Error deleting category:', error);
        }
    };

    const fetchCategories = async () => {
        try {
            const response = await axios.get(
                'http://127.0.0.1:8000/api/categories',
            );
            setCategories(response.data.categories);
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    };

    useEffect(() => {
        fetchCategories();
    }, []);

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
                                            style={{ border: '1px solid black' }}
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
                                    onClick={handleShowAddModal}
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
                                Kategori
                            </th>
                            <th style={{ width: '15%', textAlign: 'center' }}>
                                Gambar
                            </th>
                            <th style={{ width: '35%', textAlign: 'center' }}>
                                Deskripsi
                            </th>
                            <th style={{ width: '15%', textAlign: 'center' }}>
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody style={{ textAlign: 'center' }}>
                        {categories.map((category, index) => (
                            <tr key={category.id}>
                                <td>{index + 1}</td>
                                <td>{category.name}</td>
                                <td>
                                    <img
                                        src={`http://127.0.0.1:8000/storage/${category.image}`}
                                        alt={category.name}
                                        style={{
                                            maxWidth: '70px',
                                            maxHeight: '70px',
                                        }}
                                    />
                                </td>
                                <td>{category.description}</td>
                                <td>
                                    <Button
                                        variant='info'
                                        style={{
                                            marginRight: 10,
                                            backgroundColor: 'transparent',
                                            border: '1px solid black',
                                        }}
                                        onClick={() =>
                                            handleShowEditModal(category.id)
                                        }
                                    >
                                        <FaRegEdit />
                                    </Button>
                                    <Button
                                        variant='info'
                                        style={{
                                            backgroundColor: 'transparent',
                                            border: '1px solid black',
                                        }}
                                        onClick={() =>
                                            handleDeleteCategory(category.id)
                                        }
                                    >
                                        <FaRegTrashAlt />
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>

            {/* Modal Tambah Kategori */}
            <Modal
                show={showAddModal}
                onHide={handleCloseAddModal}
                className='mt-5'
            >
                <Modal.Header closeButton>
                    <Modal.Title>Tambah Kategori</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId='productName'>
                            <Form.Label>Kategori</Form.Label>
                            <Form.Control
                                type='text'
                                value={newCategory.name}
                                onChange={(e) =>
                                    setNewCategory({
                                        ...newCategory,
                                        name: e.target.value,
                                    })
                                }
                            />
                        </Form.Group>
                        <Form.Group controlId='productImage'>
                            <Form.Label>Gambar</Form.Label>
                            <Form.Control
                                type='file'
                                accept='image/*'
                                onChange={(e) =>
                                    setNewCategory({
                                        ...newCategory,
                                        image: e.target.files[0],
                                    })
                                }
                            />
                        </Form.Group>
                        <Form.Group controlId='productQuantity'>
                            <Form.Label>Deskripsi</Form.Label>
                            <Form.Control
                                type='text'
                                value={newCategory.description}
                                onChange={(e) =>
                                    setNewCategory({
                                        ...newCategory,
                                        description: e.target.value,
                                    })
                                }
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='secondary' onClick={handleCloseAddModal}>
                        Tutup
                    </Button>
                    <Button variant='warning text-white fw-bold' onClick={handleAddCategory}>
                        Simpan
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* Modal Edit Kategori */}
            <Modal
                show={showEditModal}
                onHide={handleCloseEditModal}
                className='mt-5'
            >
                <Modal.Header closeButton>
                    <Modal.Title>Edit Kategori</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId='productName'>
                            <Form.Label>Kategori</Form.Label>
                            <Form.Control
                                type='text'
                                value={newCategory.name}
                                onChange={(e) =>
                                    setNewCategory({
                                        ...newCategory,
                                        name: e.target.value,
                                    })
                                }
                            />
                        </Form.Group>
                        <Form.Group controlId='productImage'>
                            <Form.Label>Gambar</Form.Label>
                            <Form.Control
                                type='file'
                                accept='image/*'
                                onChange={(e) =>
                                    setNewCategory({
                                        ...newCategory,
                                        image: e.target.files[0],
                                    })
                                }
                            />
                        </Form.Group>
                        <Form.Group controlId='productQuantity'>
                            <Form.Label>Deskripsi</Form.Label>
                            <Form.Control
                                type='text'
                                value={newCategory.description}
                                onChange={(e) =>
                                    setNewCategory({
                                        ...newCategory,
                                        description: e.target.value,
                                    })
                                }
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='secondary' onClick={handleCloseEditModal}>
                        Tutup
                    </Button>
                    <Button variant='warning text-white fw-bold' onClick={handleUpdateCategory}>
                        Simpan
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default ListKategoriContent;
