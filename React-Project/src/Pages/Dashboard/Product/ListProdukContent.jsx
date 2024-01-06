import React, { useEffect, useState } from 'react';
import { Button, Table, Form } from 'react-bootstrap';
import axios from 'axios';
import AddProductModal from './AddProduct'; // Sesuaikan path dengan struktur proyek Anda
import EditProduct from './EditProduct'; // Sesuaikan path dengan struktur proyek Anda

import { FaRegEdit, FaRegTrashAlt } from 'react-icons/fa';
import { FiPlusCircle } from 'react-icons/fi';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [showAddProductModal, setShowAddProductModal] = useState(false);
    const [showEditProductModal, setShowEditProductModal] = useState(false);
    const [selectedProductId, setSelectedProductId] = useState(null);

    const handleShowAddProductModal = () => setShowAddProductModal(true);
    const handleCloseAddProductModal = () => setShowAddProductModal(false);

    const handleShowEditProductModal = (productId) => {
        setSelectedProductId(productId);
        setShowEditProductModal(true);
    };

    const handleCloseEditProductModal = () => {
        setSelectedProductId(null);
        setShowEditProductModal(false);
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await fetch('http://127.0.0.1:8000/api/products');
            const data = await response.json();
            setProducts(data.products);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    const deleteProduct = (id) => {
        axios
            .delete(`http://127.0.0.1:8000/api/productsdelete/${id}`)
            .then((response) => {
                alert('Successfully Deleted');
                fetchProducts(); // Reload products after deletion
            })
            .catch((error) => {
                console.error('Error deleting product:', error);
            });
    };

    return (
        <div
            className='shadow p-3 mb-5 bg-white rounded'
            style={{ marginTop: 50 }}
        >
            <div className='d-flex justify-content-end'>
                <div className='me-3'>
                    <Form>
                        <Form.Group controlId='searchTerm' className='mb-3'>
                            <Form.Control type='text' placeholder='Cari...'  
                            style={{ border: '1px solid black' }}/>
                        </Form.Group>
                    </Form>
                </div>
                <div className='me-3' >
                    <Form.Select  aria-label='Default select example'style={{ border: '1px solid black' }} >
                        <option>Status</option>
                        <option value='1'>Draf</option>
                        <option value='2'>Publis</option>
                    </Form.Select>
                </div>

                <div className='me-3' style={{ width: '60px' }}>
                    <Form.Select aria-label='Default select example'style={{ border: '1px solid black' }} >
                        <option>1</option>
                        <option value='1'>2</option>
                        <option value='2'>3</option>
                    </Form.Select>
                </div>

                <div>
                    <Button
                        variant='warning text-white fw-bold'
                        onClick={handleShowAddProductModal}
                    >
                        <FiPlusCircle
                            style={{ fontSize: '20px', marginTop: '0px' }}
                        />{' '}
                        Tambah Produk
                    </Button>
                </div>
            </div>
            <hr />
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th style={{ width: '5%', textAlign: 'center' }}>No</th>
                        <th style={{ width: '10%', textAlign: 'center' }}>
                            Product{' '}
                        </th>
                        <th style={{ width: '10%', textAlign: 'center' }}>
                            Description
                        </th>
                        <th style={{ width: '10%', textAlign: 'center' }}>
                            Image
                        </th>
                        <th style={{ width: '10%', textAlign: 'center' }}>
                            Discount
                        </th>
                        <th style={{ width: '10%', textAlign: 'center' }}>
                            Price
                        </th>
                        <th style={{ width: '10%', textAlign: 'center' }}>
                            Quantity
                        </th>
                        <th style={{ width: '10%', textAlign: 'center' }}>
                            Category
                        </th>
                        <th style={{ width: '10%', textAlign: 'center' }}>
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody style={{ textAlign: 'center' }}>
                    {products.map((product, index) => (
                        <tr key={product.id}>
                            <td>{index + 1}</td>
                            <td>{product.name}</td>
                            <td>{product.description}</td>
                            <td>
                                <img
                                    src={`http://127.0.0.1:8000/storage/${product.image}`}
                                    alt=''
                                    style={{
                                        maxWidth: '70px',
                                        maxHeight: '70px',
                                    }}
                                />
                            </td>
                            <td>{product.discount}</td>
                            <td>{product.price}</td>
                            <td>{product.qty}</td>
                            <td>{product.category.name}</td>
                            <td>
                                <Button
                                    variant='info'
                                    style={{
                                        marginRight: 10,
                                        backgroundColor: 'transparent',
                                        border: '1px solid black',
                                    }}
                                    onClick={() =>
                                        handleShowEditProductModal(product.id)
                                    }
                                >
                                    <FaRegEdit />
                                </Button>
                                <Button
                                    variant='info'
                                    style={{
                                        marginRight: 10,
                                        backgroundColor: 'transparent',
                                        border: '1px solid black',
                                    }}
                                    onClick={() => deleteProduct(product.id)}
                                >
                                    <FaRegTrashAlt />
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <AddProductModal
                show={showAddProductModal}
                handleClose={handleCloseAddProductModal}
                reloadProductList={fetchProducts}
            />
            {selectedProductId && (
                <EditProduct
                    show={showEditProductModal}
                    handleClose={handleCloseEditProductModal}
                    productId={selectedProductId}
                    reloadProductList={fetchProducts}
                />
            )}
        </div>
    );
};

export default ProductList;
