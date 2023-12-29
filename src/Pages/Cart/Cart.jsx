import React, { useState } from 'react';
import { Button, Navbar, Container, Table, Card, Form } from 'react-bootstrap';
import { BsPerson, BsCart } from 'react-icons/bs'; // Import ikon dari react-icons
import { FaMinus, FaPlus } from 'react-icons/fa';

const CustomNavbar = () => {
    const [items, setItems] = useState([
        { id: 1, count: 0 },
        { id: 2, count: 0 },
        // Tambahkan item lain sesuai kebutuhan
    ]);

    const handleIncrement = (itemId) => {
        setItems((prevItems) =>
            prevItems.map((item) =>
                item.id === itemId ? { ...item, count: item.count + 1 } : item,
            ),
        );
    };

    const handleDecrement = (itemId) => {
        setItems((prevItems) =>
            prevItems.map((item) =>
                item.id === itemId && item.count > 0
                    ? { ...item, count: item.count - 1 }
                    : item,
            ),
        );
    };

    // Menghitung total produk
    const totalProducts = items.reduce((total, item) => total + item.count, 0);

    return (
        <>
            <Navbar expand='lg' variant='light' bg='light'>
                <Container>
                    <Navbar.Brand href='#'>
                        <div className='d-flex align-items-center'>
                            <img
                                src='assets/logo.png' // Ganti dengan path atau URL logo Anda
                                alt='Logo'
                                height='50'
                                className='d-inline-block align-top'
                            />
                            <div
                                style={{
                                    height: '50px',
                                    borderRight: '2px solid #ccc',
                                    margin: '0 20px',
                                }}
                            ></div>
                        </div>
                    </Navbar.Brand>
                    <div className='ml-auto'>
                        <Button
                            variant='warning'
                            style={{
                                marginRight: '15px',
                                borderRadius: '50px',
                            }}
                        >
                            <BsPerson
                                style={{ fontSize: '1.5rem', color: 'white' }}
                            />
                        </Button>
                        <Button
                            variant='warning'
                            style={{ borderRadius: '50px' }}
                        >
                            <BsCart
                                style={{ fontSize: '1.5rem', color: 'white' }}
                            />
                        </Button>
                    </div>
                </Container>
            </Navbar>
            <div className='text-center' style={{ marginTop: '50px' }}>
                <Card style={{ maxWidth: '80rem' }} className='mx-auto shadow'>
                    <Card.Body>
                        <Table striped bordered hover responsive>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Produk</th>
                                    <th>Gambar</th>
                                    <th>Harga Satuan</th>
                                    <th>Kuantitas</th>
                                    <th>Total Harga</th>
                                    <th>Aksi</th>
                                </tr>
                            </thead>
                            <tbody>
                                {items.map((item) => (
                                    <tr key={item.id}>
                                        <td style={{ textAlign: 'center' }}>
                                            <Form.Check
                                                aria-label={`option ${item.id}`}
                                                defaultChecked
                                            />
                                        </td>
                                        <td style={{ textAlign: 'center' }}>
                                            Produk {item.id}
                                        </td>
                                        <td style={{ textAlign: 'center' }}>
                                            <img
                                                src='https://via.placeholder.com/50'
                                                alt='Gambar Produk'
                                                style={{
                                                    width: '50px',
                                                    height: 'auto',
                                                }}
                                            />
                                        </td>
                                        <td style={{ textAlign: 'center' }}>
                                            Rp 100.000
                                        </td>
                                        <td style={{ textAlign: 'center' }}>
                                            <div className='d-flex justify-content-center'>
                                                <Button
                                                    variant='danger'
                                                    className='text-warning'
                                                    onClick={() =>
                                                        handleDecrement(item.id)
                                                    }
                                                    style={{
                                                        border: '1px solid #ffa506',
                                                        boxShadow: 'none',
                                                        background: 'none',
                                                    }}
                                                >
                                                    <FaMinus
                                                        style={{
                                                            marginTop: '-5px',
                                                        }}
                                                    />
                                                </Button>{' '}
                                                <span
                                                    className='text-warning fw-bold'
                                                    style={{ margin: '0 10px' }}
                                                >
                                                    {item.count}
                                                </span>
                                                <Button
                                                    variant='primary'
                                                    className='text-warning'
                                                    onClick={() =>
                                                        handleIncrement(item.id)
                                                    }
                                                    style={{
                                                        border: '1px solid #ffa506',
                                                        boxShadow: 'none',
                                                        background: 'none',
                                                    }}
                                                >
                                                    <FaPlus
                                                        style={{
                                                            marginTop: '-5px',
                                                        }}
                                                    />
                                                </Button>
                                            </div>
                                        </td>
                                        <td style={{ textAlign: 'center' }}>
                                            Rp 200.000
                                        </td>
                                        <td style={{ textAlign: 'center' }}>
                                            <Button variant='danger'>
                                                Hapus
                                            </Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>

                        {/* Total Produk dan Tombol Kembali dan Bayar */}
                        <div className='d-flex justify-content-between mt-3'>
                            <Button variant='secondary' className='mr-2'>
                                Kembali
                            </Button>
                            <div className='d-flex align-items-center'>
                                <p className='fw-bold mb-0'>
                                    Total ({totalProducts}) Produk
                                </p>
                                <Button
                                    variant='warning text-white fw-bold'
                                    style={{ marginLeft: '20px' }}
                                >
                                    Bayar
                                </Button>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        </>
    );
};

export default CustomNavbar;
