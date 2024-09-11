import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import Logo from '../assets/logo.jpeg';
export default function Header() {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <div
            className="w-full h-24 bg-[#22a7ba] flex justify-between items-center px-4 text-white"
            style={{ backgroundColor: '#081944' }}
        ><img src={Logo} width='70px'height='70px' style={{borderRadius:'50%'}}/>
            <h1 className="text-3xl font-bold text-white" >HitoAI</h1>
            <ul className="hidden md:flex">
                <li className="p-4">Home</li>
                <li className="p-4">Products</li>
                <li className="p-4">Services</li>
                <li className="p-4">Updates</li>
                <li className="p-4">About</li>
                <li className="p-4">Contact</li>
            </ul>

            {/* Responsive Menu Icon */}
            <div onClick={handleNav} className="block md:hidden cursor-pointer">
                {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            </div>

            {/* Mobile Navigation */}
            <ul
                className={`${
                    nav
                        ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] transition-all duration-300'
                        : 'fixed left-[-100%] transition-all duration-300'
                } md:hidden`}
            >
                <h1 className="w-full text-3xl font-bold text-black m-4">HitoAI</h1>
                <li className="p-4 border-b border-gray-700">Home</li>
                <li className="p-4 border-b border-gray-700">Products</li>
                <li className="p-4 border-b border-gray-700">Services</li>
                <li className="p-4 border-b border-gray-700">Updates</li>
                <li className="p-4 border-b border-gray-700">About</li>
                <li className="p-4">Contact</li>
            </ul>
        </div>
    );
}
