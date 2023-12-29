// Import library dan komponen React
import { useState } from 'react';
import { FaStar, FaPlus, FaMinus } from 'react-icons/fa';
import { IoCartOutline } from 'react-icons/io5';
import { CiHeart } from 'react-icons/ci';
import './detailproduk.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Container, Row, Col, Button } from 'react-bootstrap';


//
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'

// Komponen DetailProduct
const DetailProduct = () => {
  // State untuk mengatur jumlah produk
  const [count, setCount] = useState(1);

  // Fungsi untuk mengurangi jumlah produk
  const handleMinusClick = () => {
    setCount((prevCount) => Math.max(prevCount - 1, 1));
  };

  // Fungsi untuk menambah jumlah produk
  const handlePlusClick = () => {
    setCount((prevCount) => prevCount + 1);
  };

  // Render komponen
  return (
    <>
   <Navbar/>
      <Container className='w-100 min-vh-100 d-flex align-items-center justify-content-center'>
      <Row className='no-gutters'>
           <Col md={6} style={{ marginRight: '10px' }}>
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              pagination={{ clickable: true }}
              breakpoints={{
                640: { slidesPerView: 1, spaceBetween: 20 },
                768: { slidesPerView: 1, spaceBetween: 40 },
                1024: { slidesPerView: 1, spaceBetween: 50 },
              }}
              modules={[Pagination]}
              className='product-detail-mySwiper'
            >
              <SwiperSlide>
                <img src='assets/img/Card/cat.png' alt='NamaFoto' className='custom-image' />
              </SwiperSlide>
              <SwiperSlide>
                <img src='assets/img/Card/cat.png' alt='NamaFoto' className='custom-image' />
              </SwiperSlide>
              <SwiperSlide>
                <img src='assets/img/Card/cat.png' alt='NamaFoto' className='custom-image' />
              </SwiperSlide>
            </Swiper>
          </Col>
          <Col>
            <h2 className='fw-bold'>Seri Hewan</h2>
            <div className='d-flex align-items-center mb-2'>
              {Array(5)
                .fill()
                .map((_, index) => (
                  <FaStar
                    key={index}
                    color={index === 4 ? '#D9D9D9' : '#ffc107'}
                    size={20}
                  />
                ))}{' '}
              <span style={{ marginLeft: 10 }}>(100 ulasan)</span>
            </div>
            <p>
              Terdiri dari 24 kartu hewan unik dimana setiap kartu dapat di scan menggunakan
              aplikasi untuk memunculkan fitur Augmented Reality.
            </p>
            <div className='d-flex align-items-center'>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Button
                  style={{
                    backgroundColor: 'white',
                    color: '#fff',
                    border: '1px solid #ffa506',
                  }}
                  onClick={handleMinusClick}
                >
                  <FaMinus className='text-warning' style={{ marginTop: '-5px' }} />
                </Button>
                <span
                  className='text-warning fw-bold'
                  style={{ fontSize: '18px', margin: '0 10px' }}
                >
                  {count}
                </span>
                <Button
                  style={{
                    backgroundColor: 'white',
                    color: '#fff',
                    border: '1px solid #ffa506',
                    margin: '0 5px',
                  }}
                  onClick={handlePlusClick}
                >
                  <FaPlus className='text-warning' style={{ marginTop: '-5px' }} />
                </Button>
              </div>
              <div>
                <Button variant='warning text-white fw-bold'>Beli Sekarang</Button>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', marginLeft: '10px' }}>
                <IoCartOutline
                  style={{
                    marginRight: '10px',
                    border: '1px solid #ffa506',
                    borderRadius: '8px',
                    padding: '5px',
                    cursor: 'pointer',
                    fontSize: '35px',
                    color: '#ffa506',
                  }}
                />
                <CiHeart
                  style={{
                    border: '1px solid #ffa506',
                    borderRadius: '8px',
                    padding: '5px',
                    cursor: 'pointer',
                    fontSize: '35px',
                    color: '#ffa506',
                  }}
                />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer/>
    </>
  );
};

// Export komponen
export default DetailProduct;
