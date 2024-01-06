import React, { useEffect, useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import axios from 'axios';
import { config } from '../../../utils/config';

function AddProductModal(props) {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        image: null,
        discount: 0,
        price: 0,
        qty: 0,
        category_id: '',
    });

    const [category, setCategory] = useState([]);

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: files ? files[0] : value,
        }));
    };

    const uploadProduct = async () => {
        const form = new FormData();
        form.append('name', formData.name);
        form.append('description', formData.description);
        form.append('image', formData.image);
        form.append('discount', formData.discount);
        form.append('price', formData.price);
        form.append('qty', formData.qty);
        form.append('category_id', formData.category_id);

        try {
            await axios.post('http://127.0.0.1:8000/api/products', form, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });

            // Menutup modal setelah sukses menyimpan data
            props.handleClose();
            // Mereload data di ProductList tanpa mereset halaman
            props.reloadProductList();
        } catch (error) {
            console.error('Error uploading product:', error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await uploadProduct();
    };

    const getCategory = async () => {
        try {
            const response = await fetch(`${config.baseUrl}/api/categories`);
            const data = await response.json();
            setCategory(data.categories);
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    };

    useEffect(() => {
        getCategory();
    }, []);

    return (
        <Modal
            show={props.show}
            onHide={props.handleClose}
            style={{ marginTop: 40 }}
        >
            <Modal.Header closeButton>
                <Modal.Title>Add Product</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId='formProductName'>
                        <Form.Label>Product Title</Form.Label>
                        <Form.Control
                            type='text'
                            name='name'
                            onChange={handleChange}
                        />
                    </Form.Group>

                    <Form.Group controlId='formProductDescription'>
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            type='text'
                            name='description'
                            onChange={handleChange}
                        />
                    </Form.Group>

                    <Form.Group controlId='formProductDiscount'>
                        <Form.Label>Discount</Form.Label>
                        <Form.Control
                            type='text'
                            name='discount'
                            onChange={handleChange}
                        />
                    </Form.Group>

                    <Form.Group controlId='formProductPrice'>
                        <Form.Label>Price</Form.Label>
                        <Form.Control
                            type='text'
                            name='price'
                            onChange={handleChange}
                        />
                    </Form.Group>

                    <Form.Group controlId='formProductQty'>
                        <Form.Label>Quantity</Form.Label>
                        <Form.Control
                            type='text'
                            name='qty'
                            onChange={handleChange}
                        />
                    </Form.Group>

                    <Form.Group controlId='formProductCategory'>
                        <Form.Label>Category</Form.Label>
                        <Form.Control
                            as='select'
                            name='category_id'
                            onChange={handleChange}
                        >
                            <option value=''>Select category</option>
                            {category.map((item, key) => (
                                <option value={item.id} key={key}>
                                    {item.name}
                                </option>
                            ))}
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId='formProductImage'>
                        <Form.Label>Product Image</Form.Label>
                        <Form.Control
                            type='file'
                            name='image'
                            onChange={handleChange}
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='secondary' onClick={props.handleClose}>
                    Close
                </Button>
                <Button variant='warning text-white fw-bold' type='submit' onClick={handleSubmit}>
                    Simpan
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default AddProductModal;
