import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import Logo from '../assets/logo.jpeg';
import { useNavigate } from 'react-router-dom';
export default function Header({
    homeRef,
    productsRef,
    servicesRef,
    updatesRef,
    partnersRef,
    teamRef,
    contactRef
}) {
    const [nav, setNav] = useState(false);
    const [dropdown, setDropdown] = useState(false);
    const navigate = useNavigate();
    const handleNav = () => {
        setNav(!nav);
    };

    const handleDropdown = () => {
        setDropdown(!dropdown);
    };

    return (
        <div className="w-full h-24 flex justify-between items-center px-4 text-white" style={{ backgroundColor: '#081944' }}>
            <img src={Logo} width='70px' height='70px' style={{ borderRadius: '50%' }} alt="Logo" />
            <h1 className="text-3xl font-bold text-white">HitoAI</h1>
            <ul className="hidden md:flex relative">
                <li className="p-4 cursor-pointer" onClick={() => navigate('/')}>Home</li>
                <li className="p-4 relative cursor-pointer" onMouseEnter={handleDropdown} onMouseLeave={handleDropdown}>
                    Products
                    {dropdown && (
                        <ul className="absolute left-0 top-full w-40 bg-white text-black shadow-lg z-10">
                            <li className="p-2 cursor-pointer" onClick={() => navigate('/sunnet')}>SUSNET™</li>
                            <li className="p-2 cursor-pointer" onClick={() => navigate('/selwell')}>SELWEL</li>
                            <li className="p-2 cursor-pointer" onClick={() => navigate('/secuall')}>SECUALL</li>
                            <li className="p-2 cursor-pointer" onClick={() => navigate('/knomed')}>KNOMED</li>
                            <li className="p-2 cursor-pointer" onClick={() => navigate('/aimarcom')}>Aimarcom</li>
                            <li className="p-2 cursor-pointer" onClick={() => navigate('/ai4physio')}>Ai4Physio</li>
                        </ul>
                    )}
                </li>

                <li className="p-4 cursor-pointer" onClick={() =>navigate('/about')}>About</li>
                <li className="p-4 cursor-pointer" onClick={() => navigate('/contactmail')}>Contact</li>
            </ul>
            <div onClick={handleNav} className="block md:hidden cursor-pointer">
                {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            </div>
            {/* Mobile Navigation */}
            <ul className={`${nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] transition-all duration-300' : 'fixed left-[-100%] transition-all duration-300'
                } md:hidden`}>
                <h1 className="w-full text-3xl font-bold text-black m-4">HitoAI</h1>
                <li className="p-4 border-b border-gray-700 cursor-pointer" onClick={() => homeRef.current.scrollIntoView({ behavior: 'smooth' })}>Home</li>
                <li className="p-4 border-b border-gray-700 cursor-pointer" onClick={handleDropdown}>
                    Products
                    {dropdown && (
                        <ul className="absolute left-0 top-full w-40 bg-white text-black shadow-lg z-10">
                            <li className="p-2 cursor-pointer" onClick={() => productsRef.current.scrollIntoView({ behavior: 'smooth' })}>SunNet</li>
                            <li className="p-2 cursor-pointer" onClick={() => productsRef.current.scrollIntoView({ behavior: 'smooth' })}>SelWell</li>
                            <li className="p-2 cursor-pointer" onClick={() => productsRef.current.scrollIntoView({ behavior: 'smooth' })}>SeCuall</li>
                            <li className="p-2 cursor-pointer" onClick={() => productsRef.current.scrollIntoView({ behavior: 'smooth' })}>KNOMED</li>
                            <li className="p-2 cursor-pointer" onClick={() => productsRef.current.scrollIntoView({ behavior: 'smooth' })}>Aimarcom</li>
                            
                        </ul>
                    )}
                </li>

                <li className="p-4 border-b border-gray-700 cursor-pointer" onClick={() => partnersRef.current.scrollIntoView({ behavior: 'smooth' })}>About</li>
                <li className="p-4 cursor-pointer" onClick={() => contactRef.current.scrollIntoView({ behavior: 'smooth' })}>Contact</li>
            </ul>
        </div>
    );
}
