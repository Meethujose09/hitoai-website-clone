import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './product.css'; // Ensure your CSS handles modal and slider styles
import { useNavigate } from 'react-router-dom';
export default function Product() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');
  const [formData, setFormData] = useState({
    eircode: '',
    date: '',
    time: '',
    temperature: '',
  });
  const navigate = useNavigate();
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
      <div className="slider-container w-full max-w-[90%] justify-center items-center">
        <Slider {...settings}>
          {/* SusNet Slide */}
          <div className="!flex bg-[#081944] rounded-lg shadow-lg p-16 text-white h-[700px] flex-col justify-center items-center text-center w-3/4 mx-auto"> {/* Adjusted Flex Direction */}
            <h2 className="text-6xl font-semibold mb-4">SUSNET™</h2>
            <p className="text-gray-200 text-3xl leading-relaxed mb-4 text-center w-full">
              SUSNET™ is HitoAI’s flagship AI-powered<br />
              sustainable energy management system designed<br />
              to optimize energy usage, ensuring efficiency<br />
              and sustainability in the growing market.<br />
              SUSNET™ is a registered trademark with the<br />
              IP Office of Ireland.<br />
              SUSNET™ is a fully automated energy management<br />
              network led by AI techniques.
            </p>
            <div className="flex-grow" /> {/* This div allows spacing to push the button to the bottom */}
            <button
              className="bg-blue-500 text-white px-10 py-5 rounded-lg hover:bg-blue-600 text-lg mt-4"
              onClick={() => navigate('/sunnet')}
            >
              Learn More
            </button>
          </div>

          {/* Selwell Slide */}
          <div className="!flex bg-[#081944] rounded-lg shadow-lg p-16 text-white h-[700px] flex-col justify-center items-center text-center w-3/4 mx-auto">
            <h2 className="text-6xl font-semibold mb-4">SELWEL</h2>
            <p className="text-gray-200 text-3xl leading-relaxed mb-4 text-center w-full">
              SELWEL is an advanced trading platform designed specifically for financial institutions to optimize profits while reducing risks associated with trading shares of globally recognized companies.
              SELWEL is fully automated and AI-powered trading platform
              SELWEL is built on the top hybrid models of Statistical Learning/ML and Deep Learning
              SELWEL is secured with end-to-end encryption powered by Google infrastructure  </p>
            <div className="flex-grow" /> {/* Add this div for consistent spacing */}
            <button
              className="bg-blue-500 text-white px-10 py-5 rounded-lg hover:bg-blue-600 text-lg mt-4"
              onClick={() => navigate('/selwell')}
            >
              Learn More
            </button>
          </div>

          {/* Secuall Slide */}
          <div className="!flex bg-[#081944] rounded-lg shadow-lg p-16 text-white h-[700px] flex-col justify-center items-center text-center w-3/4 mx-auto">
            <h2 className="text-6xl font-semibold mb-4">SECUALL</h2>
            <p className="text-gray-200 text-3xl leading-relaxed mb-4 text-center w-full">
              SECUALL is an advanced AI-powered system comprising dashcams and home security cameras, designed with a strong emphasis on detecting and predicting suspicious activities to enhance the security of vehicles and homes using AI and computer vision. During testing, it achieved and validated a Proof of Concept (POC) with a recall of 0.98. Additionally, it incorporates the latest advancements in ChatGPT technology, enabling seamless communication between administrators and users via phone or AI-based voice services.
            </p>
            <div className="flex-grow" /> {/* Add this div for consistent spacing */}
            <button
              className="bg-blue-500 text-white px-10 py-5 rounded-lg hover:bg-blue-600 text-lg mt-4"
              onClick={() => navigate('/secuall')}
            >
              Learn More
            </button>
          </div>

          {/* AIMARCOM Slide */}
          <div className="!flex bg-[#081944] rounded-lg shadow-lg p-16 text-white h-[700px] flex-col justify-center items-center text-center w-3/4 mx-auto">
            <h2 className="text-6xl font-semibold mb-4">AIMARCOM</h2>
            <p className="text-gray-200 text-3xl leading-relaxed mb-4 text-center w-full">
              AIMARCOM offers AI-driven personalization and recommendations
              to boost engagement and sales, along with predictive analytics
              to help businesses make data-driven decisions. Its solutions include
              AI-powered chatbots for customer service, automated content creation,
              dynamic pricing, and customer segmentation for effective marketing.
              The platform also provides tools for enhanced ad targeting, fraud detection,
              and image and voice recognition to improve user experience. Additionally,
              it offers improved insights into customer behavior, supporting more informed marketing strategies.

            </p>
            <div className="flex-grow" /> {/* Add this div for consistent spacing */}
            <button
              className="bg-blue-500 text-white px-10 py-5 rounded-lg hover:bg-blue-600 text-lg mt-4"
              onClick={() => navigate('/aimarcom')}
            >
              Learn More
            </button>
          </div>

          {/* 223D Slide */}
          <div className="!flex bg-[#081944] rounded-lg shadow-lg p-16 text-white h-[700px] flex-col justify-center items-center text-center w-3/4 mx-auto">
            <h2 className="text-6xl font-semibold mb-4">223D</h2>
            <p className="text-gray-200 text-3xl leading-relaxed mb-4 text-center w-full">
              223D Generating 3D assets using AI with a focus on depth modeling involves leveraging advanced machine learning techniques to create realistic and detailed three-dimensional objects. By utilizing AI algorithms, the depth of each asset is meticulously analyzed and modeled to ensure a high level of detail, resulting in more lifelike and immersive virtual objects. This approach helps simulate accurate perspectives, shadows, and contours, which are essential in creating assets that feel tangible and rich in visual texture. AI-driven depth modeling significantly enhances efficiency, enabling the rapid creation of intricate 3D models while maintaining a focus on spatial accuracy and depth perception.

            </p>
            <div className="flex-grow" /> {/* Add this div for consistent spacing */}
            <button
              className="bg-blue-500 text-white px-10 py-5 rounded-lg hover:bg-blue-600 text-lg mt-4"
              onClick={() => navigate('/Depth')}
            >
              Learn More
            </button>
          </div>

          {/* KNOMED Slide */}
          <div className="!flex bg-[#081944] rounded-lg shadow-lg p-16 text-white h-[700px] flex-col justify-center items-center text-center w-3/4 mx-auto">
            <h2 className="text-6xl font-semibold mb-4">KNOMED</h2>
            <p className="text-gray-200 text-3xl leading-relaxed mb-4 text-center w-full">
              KNOMED is an AI-powered, touchless robotic device designed to aid in the rehabilitation of children with certain disabilities.
              It is equipped with remote sensors that monitor weak muscle activity, transmitting data to an AI system that determines the appropriate actions and guidance.
              While it has undergone substantial statistical and clinical testing, the primary clinical trials are still required before it moves into the production phase.
              Despite this, early experimental results indicate a notable improvement in balance for children with cerebral palsy, showing up to a 70% enhancement.
              Further updates will be provided soon.
            </p>
            <div className="flex-grow" /> {/* Add this div for consistent spacing */}
            <button
              className="bg-blue-500 text-white px-10 py-5 rounded-lg hover:bg-blue-600 text-lg mt-4"
              onClick={() => navigate('/knomed')}
            >
              Learn More
            </button>
          </div>
          {/* AI4Physio */}
          <div className="!flex bg-[#081944] rounded-lg shadow-lg p-16 text-white h-[700px] flex-col justify-center items-center text-center w-3/4 mx-auto">
            <h2 className="text-6xl font-semibold mb-4">AI4Physio</h2>
            <p className="text-gray-200 text-3xl leading-relaxed mb-4 text-center w-full">
              AI4Physio is at the forefront of transforming physiotherapy through the integration of advanced AI technologies.
              Our brand is dedicated to providing innovative solutions that cater to the personalized needs of patients, ensuring better outcomes and enhanced rehabilitation experiences.
              With a focus on delivering precise, data-driven insights and accessible care, AI4Physio empowers both physiotherapists and patients through a range of AI-driven tools and services.
            </p>
            <div className="flex-grow" /> {/* Add this div for consistent spacing */}
            <button
              className="bg-blue-500 text-white px-10 py-5 rounded-lg hover:bg-blue-600 text-lg mt-4"
              onClick={() => navigate('/ai4physio')}
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
