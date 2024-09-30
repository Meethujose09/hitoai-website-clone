import React, { useState } from 'react';

export default function AI4Physio() {
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
    <div className="min-h-screen bg-[#081944] text-white flex flex-col">
      
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row justify-between p-10 bg-gradient-to-r from-blue-800 to-indigo-900 text-center md:text-left">
        <div className="md:w-1/2 flex flex-col justify-center">
          <h1 className="text-5xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
            AI4Physio: Revolutionizing Physiotherapy with AI
          </h1>
          <p className="text-xl leading-relaxed">
            AI4Physio is at the forefront of transforming physiotherapy through the integration of advanced AI technologies. 
            Our brand is dedicated to providing innovative solutions that cater to the personalized needs of patients, 
            ensuring better outcomes and enhanced rehabilitation experiences.
          </p>
        </div>

        {/* Request Demo Form */}
        <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center items-center">
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

      {/* Features Section */}
      <div className="p-10 text-center">
        <h2 className="text-4xl font-bold mb-8" style={{ fontFamily: 'Playfair Display, serif' }}>Our Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Each feature in a card format */}
          <FeatureCard
            title="Personalized Treatment Plans"
            description="Tailored care programs that adapt to the specific needs and progress of each patient."
          />
          <FeatureCard
            title="Real-Time Monitoring"
            description="Continuous assessment and monitoring of patient activities, ensuring accurate data collection and timely interventions."
          />
          <FeatureCard
            title="Predictive Analytics"
            description="Leveraging AI to predict patient outcomes and optimize rehabilitation processes."
          />
          <FeatureCard
            title="Automated Progress Tracking"
            description="Simplified tracking of patient progress over time, making it easier for therapists to adjust treatment plans as needed."
          />
          <FeatureCard
            title="Virtual Assistants and Chatbots"
            description="Providing 24/7 support for patient queries and guiding them through exercises."
          />
          <FeatureCard
            title="Remote Rehabilitation"
            description="Enabling patients to undergo effective treatment from the comfort of their homes."
          />
          <FeatureCard
            title="Motion Analysis"
            description="Using AI to analyze movement patterns, identifying areas of concern and aiding in precise recovery strategies."
          />
          <FeatureCard
            title="Pain Management"
            description="Innovative approaches to alleviate pain and promote healing through targeted interventions."
          />
          <FeatureCard
            title="Adaptive Learning"
            description="AI algorithms that adapt to each patient’s progress, ensuring optimal and personalized care."
          />
          <FeatureCard
            title="Enhanced Diagnostics"
            description="Improved diagnostic capabilities using machine learning to analyze symptoms and recommend the best course of action."
          />
          <FeatureCard
            title="Integration with Wearables"
            description="Seamless connectivity with wearable devices for comprehensive monitoring and data collection."
          />
        </div>
      </div>
    </div>
  );
}

// FeatureCard Component to display individual features
function FeatureCard({ title, description }) {
  return (
    <div className="bg-white text-black p-6 rounded-lg shadow-lg">
      <h3 className="text-2xl font-semibold mb-2">{title}</h3>
      <p className="text-lg">{description}</p>
    </div>
  );
}
