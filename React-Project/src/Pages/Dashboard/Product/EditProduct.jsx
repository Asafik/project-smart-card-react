// EditProductModal.js
import React, { useEffect, useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import axios from 'axios';

const EditProductModal = ({
    show,
    handleClose,
    productId,
    reloadProductList,
}) => {
    const [inputs, setInputs] = useState({});
    const [fileImage, setFileImage] = useState({});
    const [category, setCategory] = useState([]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputs((values) => ({ ...values, [name]: value }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setFileImage(file);
    };

    const uploadProduct = async () => {
        try {
            const formData = new FormData();
            formData.append('_method', 'PUT');
            formData.append('name', inputs.name);
            formData.append('description', inputs.description);
            formData.append('image', fileImage);
            formData.append('discount', inputs.discount);
            formData.append('price', inputs.price);
            formData.append('qty', inputs.qty);
            formData.append('category_id', inputs.category_id);

            await axios.post(
                `http://127.0.0.1:8000/api/productsupdate/${productId}`,
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                },
            );

            reloadProductList();
            handleClose();
        } catch (error) {
            console.error('Error updating product:', error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await uploadProduct();
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    `http://127.0.0.1:8000/api/products/${productId}`,
                );
                setInputs(response.data.Product);
            } catch (error) {
                console.error('Error fetching product details:', error);
            }
        };

        const fetchCategories = async () => {
            try {
                const response = await fetch(
                    `http://127.0.0.1:8000/api/categories`,
                );
                const data = await response.json();
                setCategory(data.categories);
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };

        fetchData();
        fetchCategories();
    }, [productId]);

    return (
        <Modal
            show={show}
            onHide={handleClose}
            centered
            style={{ marginTop: 35 }}
        >
            <Modal.Header closeButton>
                <Modal.Title>Edit Product</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId='formProductName'>
                        <Form.Label>Product Title</Form.Label>
                        <Form.Control
                            type='text'
                            value={inputs.name || ''}
                            name='name'
                            onChange={handleChange}
                        />
                    </Form.Group>

                    <Form.Group controlId='formProductDescription'>
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            type='text'
                            value={inputs.description || ''}
                            name='description'
                            onChange={handleChange}
                        />
                    </Form.Group>

                    <Form.Group controlId='formProductDiscount'>
                        <Form.Label>Discount</Form.Label>
                        <Form.Control
                            type='text'
                            value={inputs.discount || ''}
                            name='discount'
                            onChange={handleChange}
                        />
                    </Form.Group>

                    <Form.Group controlId='formProductPrice'>
                        <Form.Label>Price</Form.Label>
                        <Form.Control
                            type='text'
                            value={inputs.price || ''}
                            name='price'
                            onChange={handleChange}
                        />
                    </Form.Group>

                    <Form.Group controlId='formProductQty'>
                        <Form.Label>Quantity</Form.Label>
                        <Form.Control
                            type='text'
                            value={inputs.qty || ''}
                            name='qty'
                            onChange={handleChange}
                        />
                    </Form.Group>

                    <Form.Group controlId='formProductCategory'>
                        <Form.Label>Category</Form.Label>
                        <Form.Control
                            as='select'
                            value={inputs.category_id || ''}
                            name='category_id'
                            onChange={handleChange}
                        >
                            <option value=''>Select category</option>
                            {category.map((item) => (
                                <option key={item.id} value={item.id}>
                                    {item.name}
                                </option>
                            ))}
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId='formProductImage'>
                        <Form.Label>Product Image</Form.Label>
                        <Form.Control
                            type='file'
                            onChange={handleImageChange}
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='secondary' onClick={handleClose}>
                    Close
                </Button>
                <Button variant='warning text-white fw-bold' type='submit' onClick={handleSubmit}>
                   Simpan
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default EditProductModal;
