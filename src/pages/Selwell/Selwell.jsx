import React, { useState } from 'react';

function Selwell() {
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
      <div className="w-full md:w-1/2 flex flex-col justify-center text-center p-8 bg-[#081944] text-white" style={{ fontFamily: 'Playfair Display, serif' }}>
    <h1 className="text-5xl font-bold mb-8">SELWEL</h1>
    <p className="text-xl leading-relaxed mb-4">
    SELWEL is an advanced AI-powered trading platform designed specifically for financial institutions. It optimizes profits while minimizing risks associated with trading shares of globally recognized companies.
    </p>
    <p className="text-xl leading-relaxed mb-4">
        Fully automated, SELWEL leverages cutting-edge hybrid models of Statistical Learning and Deep Learning to deliver intelligent trading strategies and insights.
    </p>
    <p className="text-xl leading-relaxed mb-4">
        With robust security features, SELWEL ensures end-to-end encryption powered by Google infrastructure, safeguarding sensitive data and transactions.
    </p>
    <p className="text-xl leading-relaxed mb-4">
        Excitingly, a personal version of SELWEL is coming soon, making its powerful capabilities accessible to individual traders.
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
  )
}

export default Selwell