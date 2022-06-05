import { useState } from 'react'
import './App.css';
import './fonts/Gilroy-Extrabold.woff'
import './fonts/Gilroy-Regular.woff2'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from './pages/Home';
import Kontakt from './pages/Kontakt';
import ONama from './pages/ONama';
import Ski_Bike_rental from './pages/Ski_Bike_rental';
import QBL_sistemi from './pages/QBL_sistemi';
import Vitabri_Satori from './pages/Vitabri_Satori';
import NaseLokacije from './pages/NaseLokacije';
import ServisBicikala from './pages/ServisBicikala';
import Sidebar from './components/Sidebar';
import Register from './pages/Register';
import Login from './pages/Login';

import Topheader from './components/Topheader';
import SingleProduct from './pages/SingleProduct';

function App(props) {
  const [openSidebar, setOpenSidebar] = useState(false)

  const manageSidebar = () => {
    if (openSidebar) {
      setOpenSidebar(false)
    } else {
      setOpenSidebar(true)
    }
    // console.log("sidebarmanage", openSidebar)
  }

  return (
    <>
      <BrowserRouter>
        <Topheader manageSidebar={manageSidebar} />
        <Sidebar openSidebar={openSidebar} manageSidebar={manageSidebar} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="/onama" element={<ONama />} />
          <Route path="/ski/bike-rental" element={<Ski_Bike_rental />} />
          <Route path="/qbl/sistemi" element={<QBL_sistemi />} />
          <Route path="/vitabri" element={<Vitabri_Satori />} />
          <Route path="/lokacije" element={<NaseLokacije />} />
          <Route path="/servis/bicikala" element={<ServisBicikala />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/single/product/:productId" element={<SingleProduct />} />
        </Routes>

      </BrowserRouter>


    </>

  );
}

export default App;
