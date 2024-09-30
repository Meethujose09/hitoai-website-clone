import React, { useRef } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Header from './components/Header';
import Contact from './pages/Contact/contact';
import Products from './pages/Products/product';
import Partners from './pages/Partners/Partners';
import Team from './pages/Team/team';
import About from './pages/About/about';
import Contactmail from './pages/Contact/contactmail';
import Sunnet from './pages/Sunnet/Sunnet';
import Selwell from './pages/Selwell/Selwell';
import Secuall from './pages/Secuall/Secuall';
import Knomed from './pages/Knomed/Knomed';
import Depth from './pages/Depth/Depth';
import Aimarcom from './pages/Aimarcom/Aimarcom';
import AI4Physio from './pages/AI4Physio/AI4Physio';
import data from "./data.json";
function App() {
    const homeRef = useRef(null);
    const productsRef = useRef(null);
    const servicesRef = useRef(null);
    const updatesRef = useRef(null);
    const partnersRef = useRef(null);
    const teamRef = useRef(null);
    const contactRef = useRef(null);

    return (
        <div className="App">
            <Header
                homeRef={homeRef}
                productsRef={productsRef}
                servicesRef={servicesRef}
                updatesRef={updatesRef}
                partnersRef={partnersRef}
                teamRef={teamRef}
                contactRef={contactRef}
            />
            {/* Define Routes */}
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <div ref={homeRef}><Home /></div>
                            <div ref={productsRef}><Products /></div>
                            <div ref={partnersRef}><Partners /></div>
                            <div ref={teamRef}><Team sliderData={data} /></div>
                            <div ref={contactRef}><Contact /></div>
                        </>
                    }
                />
                <Route path='/sunnet' element={<Sunnet />} />
                <Route path='/selwell' element={<Selwell />} />
                <Route path='/secuall' element={<Secuall />} />
                <Route path='/knomed' element={<Knomed />} />
                <Route path='/depth' element={<Depth />} />
                <Route path='/aimarcom' element={<Aimarcom />} />
                <Route path='/ai4physio' element={<AI4Physio />} />
                <Route path='/contactmail' element={<Contactmail />} />
                <Route path='/about' element={<About />} />
            </Routes>
        </div>
    );
}

export default App;
