import React, { useState } from 'react';


export default function Sunnet() {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleDemoRequest = (e) => {
    e.preventDefault();
    console.log('Requesting demo for:', email);
    // Handle demo request logic here
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#081944] text-white">
      {/* Page split into two columns */}
      <div className="flex flex-col md:flex-row flex-grow">
        {/* Left Section - SusNet Details */}
        <div className="w-full md:w-1/2 flex flex-col justify-center text-center p-8 bg-[#081944] text-white" style={{ fontFamily: 'Playfair Display, serif' }}>
          <h1 className="text-5xl font-bold mb-8">SUSNET™</h1>
          <p className="text-xl leading-relaxed mb-4">
          SUSNET™ is HitoAI’s flagship AI-powered sustainable energy management system designed to optimize energy usage, ensuring efficiency and sustainability in the growing market. SusNet™ is a registered trademark with the IP Office of Ireland.
          </p>
          <p className="text-xl leading-relaxed mb-4">
            SusNet™ is a fully automated energy management network led by AI techniques. The POC of 50-65% bill cutting is validated.
          </p>
          <p className="text-xl leading-relaxed mb-4">
            SusNet™ is enabled with global and local optimisation for energy consumption via specific and highly correlational features (90%) with various IoT components.
          </p>
          <p className="text-xl leading-relaxed mb-4">
            Easy and simple to install without any technical knowledge, featuring a simple UI to sign up—and that’s really it!
          </p>
        </div>

        {/* Right Section - Demo Request Form */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center bg-[#081944] p-8">
          <div className="bg-white text-black p-8 rounded-lg shadow-lg max-w-lg w-full">
            <h2 className="text-3xl font-semibold mb-4 text-center">Request a Demo</h2>
            <form onSubmit={handleDemoRequest} className="flex flex-col space-y-4">
              <div>
                <label htmlFor="email" className="block text-lg font-medium text-gray-700">Your Email Address</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={handleEmailChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
              >
                Request Demo
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
