import React, { useState } from 'react';


function Secuall() {
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
                    <h1 className="text-5xl font-bold mb-8">SECUALL</h1>

                    <p className="text-xl leading-relaxed mb-4">
                    SECUALL is an advanced AI-powered system featuring dashcams and home security cameras, designed to detect and predict suspicious activities, thereby enhancing the security of vehicles and homes.
                    </p>
                    <p className="text-xl leading-relaxed mb-4">
                        As part of our proof of concept (POC), we successfully validated an impressive recall rate of 98%.
                    </p>
                    <p className="text-xl leading-relaxed mb-4">
                        Leveraging cutting-edge advancements in video processing and computer vision, Secuall strengthens the detection of suspicious activities and enhances the accuracy of its predictive models.
                    </p>
                    <p className="text-xl leading-relaxed mb-4">
                        Additionally, it integrates the latest in ChatGPT technology, enabling seamless communication between administrators and users through phone or AI-based voice services.
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

export default Secuall