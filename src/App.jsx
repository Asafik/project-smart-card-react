import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Sidebar from './Components/Sidebar/Sidebar';

import Home from './Pages/Home/Home';
import Product from './Pages/Product/Product';
import About from './Pages/About/About';
import DetailProduct from './Pages/Product/DetailProduct';
import Status from './Pages/Status/Status';
import Cart from './Pages/Cart/Cart';

//Auth
import Login from './Pages/Auth/Login/Login';
import Register from './Pages/Auth/Register/Register';
import ForgetPassword from './Pages/Auth/ForgoutPassword/ForgoutPassword';
import Email from './Pages/Auth/Email/Email';
import ChangePassword from './Pages/Auth/ChangePassword/ChangePassword';

import Pemesanan from './Pages/Pesan/Pemesanan';
import Pembayaran from './Pages/Pesan/Pembayaran';
import Petunjuk from './Pages/Pesan/Petunjuk';
import Selesai from './Pages/Pesan/Selesai';

import SidebarProfile from './Pages/Profil/Components/Sidebar/SidebarProfile';

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path='/' Component={Home} />
                    <Route path='/produk' Component={Product} />
                    <Route path='/about' Component={About} />
                    <Route path='/detail-produk' Component={DetailProduct} />
                    <Route path='/status' Component={Status} />
                    <Route path='/cart' Component={Cart} />
                    <Route path='/lupa-password' Component={ForgetPassword} />
                    <Route path='/cek-email' Component={Email} />
                    <Route path='/ganti-password' Component={ChangePassword} />
                    <Route path='/pemesanan' Component={Pemesanan} />
                    <Route path='/pembayaran' Component={Pembayaran} />
                    <Route path='/petunjuk' Component={Petunjuk} />
                    <Route path='/selesai' Component={Selesai} />
                    <Route path='/login' Component={Login} />
                    <Route path='/register' Component={Register} />
                    <Route path='/informasi' Component={SidebarProfile} />
                    <Route path='/dashboard' Component={Sidebar} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
