import React from 'react';
import { Card } from 'react-bootstrap';
import { BsBox } from 'react-icons/bs';
import { FaRegUser } from 'react-icons/fa';
import { BsCart3 } from 'react-icons/bs';

import Diagram from './Diagram';
import Diagram2 from './Diagram2';

const DashboardContent = () => {
    const cardContainerStyle = {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap', // Baris baru jika lebar layar terlalu kecil
        marginTop: '70px',
    };

    const cardStyle = {
        width: '250px',

        margin: '0 10px 20px 10px', // Tambahkan ruang di bawah card
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    };

    const cardTitleStyle = {
        textAlign: 'center', // Teks judul di tengah
    };

    const cardTextStyle = {
        textAlign: 'center', // Teks dalam Card.Text di tengah
        marginTop: '20px',
        fontWeight: 'bold',
    };

    const cardContainerDiagram = {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap', // Baris baru jika lebar layar terlalu kecil
        marginTop: '10px',
    };

    const cardDiagram = {
        width: '450px',

        margin: '0 10px 20px 10px', // Tambahkan ruang di bawah card
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    };

    return (
        <div>
            <div style={cardContainerStyle}>
                <Card style={cardStyle}>
                    <Card.Body>
                        <Card.Title style={cardTitleStyle}>
                            <BsBox
                                style={{
                                    fontSize: 50,
                                    color: '#ffa506',
                                    marginTop: 20,
                                }}
                            />
                        </Card.Title>
                        <Card.Text style={cardTextStyle}>
                            25
                            <br />
                            Produk
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card style={cardStyle}>
                    <Card.Body>
                        <Card.Title style={cardTitleStyle}>
                            <FaRegUser
                                style={{
                                    fontSize: 50,
                                    color: '#ffa506',
                                    marginTop: 20,
                                }}
                            />
                        </Card.Title>
                        <Card.Text style={cardTextStyle}>
                            15
                            <br />
                            Pelanggan
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card style={cardStyle}>
                    <Card.Body>
                        <Card.Title style={cardTitleStyle}>
                            <BsCart3
                                style={{
                                    fontSize: 50,
                                    color: '#ffa506',
                                    marginTop: 20,
                                }}
                            />
                        </Card.Title>
                        <Card.Text style={cardTextStyle}>
                            18
                            <br />
                            pesanan
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>

            <div style={cardContainerDiagram}>
                <Card style={cardDiagram}>
                    <Diagram />
                </Card>

                <Card style={cardDiagram}>
                    <Diagram2 />
                </Card>
            </div>
        </div>
    );
};

export default DashboardContent;
