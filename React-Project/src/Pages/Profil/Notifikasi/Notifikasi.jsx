import React, { useState } from 'react';
import { Card, ListGroup, Form } from 'react-bootstrap';
import { IoIosInformationCircleOutline } from 'react-icons/io';
import { IoCartOutline } from 'react-icons/io5';

const Notifikasi = () => {
    const [notificationStatus, setNotificationStatus] = useState({
        notification1: false,
        notification2: false,
        notification3: false,
        notification4: false,
        notification5: false,
        notification6: false,
    });

    const handleToggleSwitch = (notification) => {
        setNotificationStatus({
            ...notificationStatus,
            [notification]: !notificationStatus[notification],
        });
    };

    return (
        <Card
            style={{
                maxWidth: '30rem',
                margin: 'auto',
                marginTop: '10vh',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            }}
        >
            <Card.Body>
                <div style={{ padding: '35px', marginBottom: '-15px' }}>
                    <h3 className='mb-3 text-warning'>Notifikasi</h3>
                    <p style={{ marginTop: '-10px' }}>
                        Atur notifikasi yang kamu terima disini
                    </p>
                </div>

                <ListGroup style={{ padding: '20px' }}>
                    <ListGroup.Item
                        style={{ border: 'none', fontWeight: 'bold' }}
                    >
                        <IoCartOutline
                            style={{
                                marginRight: '10px',
                                fontSize: '20px',
                                marginTop: '-5px',
                            }}
                        />
                        Transaksi Pembelian
                        <span style={{ float: 'right' }}>Email</span>
                    </ListGroup.Item>

                    <ListGroup.Item style={{ border: 'none' }}>
                        Menunggu Pembayaran
                        <Form.Check
                            type='switch'
                            id='custom-switch1'
                            label=''
                            checked={notificationStatus.notification1}
                            onChange={() => handleToggleSwitch('notification1')}
                            className='float-end'
                        />
                    </ListGroup.Item>
                    <ListGroup.Item style={{ border: 'none' }}>
                        Menunggu Konfirmasi
                        <Form.Check
                            type='switch'
                            id='custom-switch2'
                            label=''
                            checked={notificationStatus.notification2}
                            onChange={() => handleToggleSwitch('notification2')}
                            className='float-end'
                        />
                    </ListGroup.Item>
                    <ListGroup.Item style={{ border: 'none' }}>
                        Pesanan Diproses
                        <Form.Check
                            type='switch'
                            id='custom-switch3'
                            label=''
                            checked={notificationStatus.notification3}
                            onChange={() => handleToggleSwitch('notification3')}
                            className='float-end'
                        />
                    </ListGroup.Item>
                    <ListGroup.Item style={{ border: 'none' }}>
                        Pesanan Dikirim
                        <Form.Check
                            type='switch'
                            id='custom-switch4'
                            label=''
                            checked={notificationStatus.notification4}
                            onChange={() => handleToggleSwitch('notification4')}
                            className='float-end'
                        />
                    </ListGroup.Item>
                    <ListGroup.Item style={{ border: 'none' }}>
                        Pesanan Tiba
                        <Form.Check
                            type='switch'
                            id='custom-switch5'
                            label=''
                            checked={notificationStatus.notification5}
                            onChange={() => handleToggleSwitch('notification5')}
                            className='float-end'
                        />
                    </ListGroup.Item>
                    <p style={{ marginLeft: '15px', marginTop: '20px' }}>
                        <IoIosInformationCircleOutline
                            style={{ fontSize: '20px', marginRight: '10px' }}
                        />
                        Informasi
                    </p>
                    <ListGroup.Item style={{ border: 'none' }}>
                        Promo
                        <Form.Check
                            type='switch'
                            id='custom-switch6'
                            label=''
                            checked={notificationStatus.notification6}
                            onChange={() => handleToggleSwitch('notification6')}
                            className='float-end'
                            style={{}}
                        />
                    </ListGroup.Item>
                </ListGroup>
            </Card.Body>
        </Card>
    );
};

export default Notifikasi;
