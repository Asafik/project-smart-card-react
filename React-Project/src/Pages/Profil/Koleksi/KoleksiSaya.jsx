import React from 'react';
import { Container, Row, Col, Card, Accordion } from 'react-bootstrap';

const KoleksiSaya = () => {
    return (
        <Container>
            <h2 className='text-warning' style={{ marginTop: '70px' }}>
                Koleksi Saya
            </h2>
            <Row className='mt-4'>
                <Col md={6} className='mb-4'>
                    <Card className='shadow'>
                        <Accordion defaultActiveKey={null}>
                            <Accordion.Item eventKey='0'>
                                <Accordion.Header>
                                    <div
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                        }}
                                    >
                                        <Card.Img
                                            variant='top'
                                            src='assets/img/kelas/kelas-1.png'
                                            style={{
                                                marginRight: '10px',
                                                height: '100px',
                                                width: '70px',
                                                objectFit: 'cover',
                                            }}
                                        />
                                        <div>
                                            <Card.Title
                                                className='fw-bold'
                                                style={{ marginLeft: '30px' }}
                                            >
                                                Singa (Lion)
                                            </Card.Title>
                                            <Card.Text
                                                style={{ marginLeft: '30px' }}
                                            >
                                                Seri Hewan
                                            </Card.Text>
                                        </div>
                                    </div>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <Card.Text
                                        style={{
                                            textAlign: 'justify',
                                            lineHeight: '1.5',
                                        }}
                                    >
                                        Singa adalah spesies hewan dari keluarga
                                        felidae atau keluarga kucing. Singa
                                        berada di benua Afrika dan sebagian di
                                        wilayah India. Singa merupakan hewan
                                        yang hidup berkelompok. Biasanya terdiri
                                        dari seekor jantan & banyak betina.
                                        Kelompok ini menjaga daerah
                                        kekuasaannya.
                                    </Card.Text>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Card>
                    <Card className='shadow' style={{ marginTop: '10px' }}>
                        <Accordion defaultActiveKey={null}>
                            <Accordion.Item eventKey='0'>
                                <Accordion.Header>
                                    <div
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                        }}
                                    >
                                        <Card.Img
                                            variant='top'
                                            src='assets/img/kelas/kelas-1.png'
                                            style={{
                                                marginRight: '10px',
                                                height: '100px',
                                                width: '70px',
                                                objectFit: 'cover',
                                            }}
                                        />
                                        <div>
                                            <Card.Title
                                                className='fw-bold'
                                                style={{ marginLeft: '30px' }}
                                            >
                                                Singa (Lion)
                                            </Card.Title>
                                            <Card.Text
                                                style={{ marginLeft: '30px' }}
                                            >
                                                Seri Hewan
                                            </Card.Text>
                                        </div>
                                    </div>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <Card.Text
                                        style={{
                                            textAlign: 'justify',
                                            lineHeight: '1.5',
                                        }}
                                    >
                                        Singa adalah spesies hewan dari keluarga
                                        felidae atau keluarga kucing. Singa
                                        berada di benua Afrika dan sebagian di
                                        wilayah India. Singa merupakan hewan
                                        yang hidup berkelompok. Biasanya terdiri
                                        dari seekor jantan & banyak betina.
                                        Kelompok ini menjaga daerah
                                        kekuasaannya.
                                    </Card.Text>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Card>

                    <Card className='shadow' style={{ marginTop: '10px' }}>
                        <Accordion defaultActiveKey={null}>
                            <Accordion.Item eventKey='0'>
                                <Accordion.Header>
                                    <div
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                        }}
                                    >
                                        <Card.Img
                                            variant='top'
                                            src='assets/img/kelas/kelas-1.png'
                                            style={{
                                                marginRight: '10px',
                                                height: '100px',
                                                width: '70px',
                                                objectFit: 'cover',
                                            }}
                                        />
                                        <div>
                                            <Card.Title
                                                className='fw-bold'
                                                style={{ marginLeft: '30px' }}
                                            >
                                                Singa (Lion)
                                            </Card.Title>
                                            <Card.Text
                                                style={{ marginLeft: '30px' }}
                                            >
                                                Seri Hewan
                                            </Card.Text>
                                        </div>
                                    </div>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <Card.Text
                                        style={{
                                            textAlign: 'justify',
                                            lineHeight: '1.5',
                                        }}
                                    >
                                        Singa adalah spesies hewan dari keluarga
                                        felidae atau keluarga kucing. Singa
                                        berada di benua Afrika dan sebagian di
                                        wilayah India. Singa merupakan hewan
                                        yang hidup berkelompok. Biasanya terdiri
                                        dari seekor jantan & banyak betina.
                                        Kelompok ini menjaga daerah
                                        kekuasaannya.
                                    </Card.Text>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Card>
                </Col>
                <Col md={6} className='mb-4'>
                    <Card className='shadow' style={{ padding: '20px' }}>
                        <Card.Body>
                            <Card.Title
                                className='text-center fw-bold'
                                style={{ fontSize: '24px' }}
                            >
                                Frequently Asked Questions
                            </Card.Title>
                            <Card.Text
                                className='text-center'
                                style={{ fontSize: '13px' }}
                            >
                                Pertanyaan yang mungkin Anda tanyakan tentang
                                produk dan layanan kami
                            </Card.Text>

                            {/* Tambahkan elemen Accordion di sini */}
                            <Accordion
                                defaultActiveKey={null}
                                style={{ marginTop: '50px' }}
                            >
                                <Accordion.Item eventKey='0'>
                                    <Accordion.Header>
                                        <Card.Title
                                            className='fw-bold'
                                            style={{ fontSize: '15px' }}
                                        >
                                            Bagaimana Cara Memunculkan augmented
                                            reality?
                                        </Card.Title>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <Card.Text
                                            style={{
                                                textAlign: 'justify',
                                                lineHeight: '1.5',
                                            }}
                                        >
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit, sed do
                                            eiusmod tempor incididunt ut labore
                                            Ut enim ad minim veniam, quis
                                            nostrud exercitation ullamco laboris
                                            nisi ut aliquip ex ea commodo con.
                                            Duis aute irure dolor in .
                                        </Card.Text>
                                    </Accordion.Body>
                                </Accordion.Item>
                                {/* Tambahkan pertanyaan dan jawaban lainnya sesuai kebutuhan */}
                            </Accordion>
                            <Accordion defaultActiveKey={null}>
                                <Accordion.Item eventKey='0'>
                                    <Accordion.Header>
                                        <Card.Title
                                            className='fw-bold'
                                            style={{ fontSize: '15px' }}
                                        >
                                            Bagaimana Jika Salah Satu Kartu
                                            Hilang ?
                                        </Card.Title>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <Card.Text
                                            style={{
                                                textAlign: 'justify',
                                                lineHeight: '1.5',
                                            }}
                                        >
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit, sed do
                                            eiusmod tempor incididunt ut labore
                                            Ut enim ad minim veniam, quis
                                            nostrud exercitation ullamco laboris
                                            nisi ut aliquip ex ea commodo con.
                                            Duis aute irure dolor in .
                                        </Card.Text>
                                    </Accordion.Body>
                                </Accordion.Item>
                                {/* Tambahkan pertanyaan dan jawaban lainnya sesuai kebutuhan */}
                            </Accordion>
                            <Accordion defaultActiveKey={null}>
                                <Accordion.Item eventKey='0'>
                                    <Accordion.Header>
                                        <Card.Title
                                            className='fw-bold'
                                            style={{ fontSize: '15px' }}
                                        >
                                            lorem ipsum dolor sit amet ?
                                        </Card.Title>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <Card.Text
                                            style={{
                                                textAlign: 'justify',
                                                lineHeight: '1.5',
                                            }}
                                        >
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit, sed do
                                            eiusmod tempor incididunt ut labore
                                            Ut enim ad minim veniam, quis
                                            nostrud exercitation ullamco laboris
                                            nisi ut aliquip ex ea commodo con.
                                            Duis aute irure dolor in .
                                        </Card.Text>
                                    </Accordion.Body>
                                </Accordion.Item>
                                {/* Tambahkan pertanyaan dan jawaban lainnya sesuai kebutuhan */}
                            </Accordion>
                            <Accordion defaultActiveKey={null}>
                                <Accordion.Item eventKey='0'>
                                    <Accordion.Header>
                                        <Card.Title
                                            className='fw-bold'
                                            style={{ fontSize: '15px' }}
                                        >
                                            lorem ipsum dolor sit amet ?
                                        </Card.Title>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <Card.Text
                                            style={{
                                                textAlign: 'justify',
                                                lineHeight: '1.5',
                                            }}
                                        >
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit, sed do
                                            eiusmod tempor incididunt ut labore
                                            Ut enim ad minim veniam, quis
                                            nostrud exercitation ullamco laboris
                                            nisi ut aliquip ex ea commodo con.
                                            Duis aute irure dolor in .
                                        </Card.Text>
                                    </Accordion.Body>
                                </Accordion.Item>
                                {/* Tambahkan pertanyaan dan jawaban lainnya sesuai kebutuhan */}
                            </Accordion>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default KoleksiSaya;
