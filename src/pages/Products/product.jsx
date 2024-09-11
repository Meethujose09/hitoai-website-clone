import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './product.css'; // Ensure your CSS handles modal and slider styles

export default function Product() {
    const [isModalOpen, setModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState('');
    const [formData, setFormData] = useState({
        eircode: '',
        date: '',
        time: '',
        temperature: '',
      });
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);
        // Handle form submission logic here
      };

    // Slider settings for the carousel
    const settings = {
        className: "",
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        arrows: true,
        autoplay: true, // Enables auto-slide
        autoplaySpeed: 4000, // Slide changes every 5 seconds
        pauseOnHover: true, // Pauses autoplay when hovered
        speed: 1000,
        fade: true,

    };

    // Function to open modal with content
    const openModal = (content) => {
        setModalContent(content);
        setModalOpen(true);
    };

    // Function to close modal
    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <div className="bg-white min-h-screen flex flex-col justify-center items-center py-20 px-12">
            <h2 className="text-6xl font-bold text-center mb-16">Our Products</h2>
            <div className="slider-container w-full max-w-7xl justify-center items-center"> {/* Increase width to max-w-7xl */}
                <Slider {...settings}>
                    {/* SusNet Slide */}
                   <div className="!flex bg-[#081944] rounded-lg shadow-lg p-12 text-white h-[600px] flex flex-col justify-center items-center text-center" style={{ display: 'flex' }}>
                        <h3 className="text-5xl font-semibold mb-4">SusNet</h3>
                        <p className="text-gray-200 text-lg mb-6 max-w-md text-center">
                            SusNet is HitoAI’s AI-powered system for optimizing energy use, ensuring efficiency and sustainability.
                        </p>
                        <button
                            className="bg-blue-500 text-white px-8 py-4 rounded-lg hover:bg-blue-600 text-lg"
                            onClick={() => openModal('SusNet')}
                        >
                            Learn More
                        </button>
                    </div>






                    {/* Selwell Slide */}
                    <div className="!flex bg-[#081944] rounded-lg shadow-lg p-12 text-white h-[600px] flex flex-col justify-center items-center text-center"style={{ display: 'flex' }}>
                        <h3 className="text-5xl font-semibold mb-4 ">Selwell</h3>
                        <p className="text-gray-200 text-lg mb-6 max-w-md">
                            Selwell is an advanced trading platform designed specifically for financial institutions to optimize profits while reducing risks associated with trading shares of globally recognized companies.
                        </p>
                        <button
                            className="bg-blue-500 text-white px-8 py-4 rounded-lg hover:bg-blue-600 text-lg"
                            onClick={() => openModal('Selwell')}
                        >
                            Learn More
                        </button>
                    </div>
                </Slider>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-10 rounded-lg shadow-lg max-w-3xl w-full">
                        <h2 className="text-4xl font-bold mb-8">Details about {modalContent}</h2>
                        {modalContent === 'SusNet' ? (
                            <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md mt-10">
                            <h2 className="text-2xl font-bold text-center mb-4">AI Activation Calculator</h2>
                            <form onSubmit={handleSubmit} className="space-y-4">
                              <div>
                                <label htmlFor="eircode" className="block text-sm font-medium text-gray-700">Your Eircode</label>
                                <input
                                  type="text"
                                  name="eircode"
                                  id="eircode"
                                  value={formData.eircode}
                                  onChange={handleChange}
                                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                  placeholder="Enter your Eircode"
                                  required
                                />
                              </div>
                      
                              <div>
                                <label htmlFor="date" className="block text-sm font-medium text-gray-700">Date</label>
                                <input
                                  type="date"
                                  name="date"
                                  id="date"
                                  value={formData.date}
                                  onChange={handleChange}
                                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                  required
                                />
                              </div>
                      
                              <div>
                                <label htmlFor="time" className="block text-sm font-medium text-gray-700">Time</label>
                                <input
                                  type="time"
                                  name="time"
                                  id="time"
                                  value={formData.time}
                                  onChange={handleChange}
                                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                  required
                                />
                              </div>
                      
                              <div>
                                <label htmlFor="temperature" className="block text-sm font-medium text-gray-700">Ideal Temperature (°C)</label>
                                <input
                                  type="number"
                                  name="temperature"
                                  id="temperature"
                                  value={formData.temperature}
                                  onChange={handleChange}
                                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                  placeholder="Enter temperature"
                                  required
                                />
                              </div>
                      
                              <button
                                type="submit"
                                className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                              >
                                Submit
                              </button>
                            </form>
                          </div>
                        ) : (
                            <div>
                                <p className="text-gray-700 text-lg">
                                    Selwell is fully automated and AI-powered, designed for financial institutions to optimize profits while reducing trading risks.
                                    It utilizes complex hybrid statistical models, deep reinforcement learning algorithms, and sophisticated integration with IoT Information Theory.
                                </p>
                                <p className="text-gray-700 text-lg mt-6">
                                    The platform is secured by Google with end-to-end encryption and processes data on the client server, ensuring privacy and security.
                                </p>
                                <p className="text-gray-700 text-lg mt-6">
                                    A personal version for individual traders will be available soon. Check the updates section regularly.
                                </p>
                            </div>
                        )}
                        <button
                            className="mt-8 bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600"
                            onClick={closeModal}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
