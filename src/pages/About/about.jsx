import React from 'react';

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#003366] text-white text-center py-20 px-4">
        <h1 className="text-5xl font-bold mb-4">About Us</h1>
        <p className="text-lg leading-relaxed max-w-4xl mx-auto">
          At HitoAI, our team consists of industry-leading AI scientists, engineers, and business strategists 
          who bring a wealth of knowledge and experience to the table.
        </p>
      </section>

      {/* Our Mission, Vision, Values */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 p-10 text-center bg-white text-[#003366]">
        <div>
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p>
            Revolutionize energy management with AI-driven solutions that optimize usage, reduce costs, and promote sustainability.
          </p>
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
          <p>
            Lead in sustainable energy management, empowering businesses and households with smart solutions.
          </p>
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-4">Our Values</h2>
          <p>
            Innovation, sustainability, efficiency, reliability, and customer focus.
          </p>
        </div>
      </section>

      {/* Why Choose HitoAI - With First Image */}
      <section className="flex flex-col md:flex-row items-center py-20 px-4 md:px-20 bg-white text-[#003366]">
        <div className="md:w-1/2 p-4 order-2 md:order-1 text-left">
          <h2 className="text-4xl font-bold mb-6">Why Choose HitoAI?</h2>
          <p className="leading-relaxed mb-4">
            At HitoAI, we believe in innovation that works for the betterment of the environment and society. Our AI-driven solutions 
            are designed to optimize energy usage, reduce costs, and promote sustainability. With our dedicated team of experts and cutting-edge 
            technology, we are committed to providing smart and efficient solutions that make a positive impact.
          </p>
          <p className="leading-relaxed">Choose HitoAI and join us in revolutionizing energy management for a better tomorrow.</p>
        </div>
        <div className="md:w-1/2 p-4 order-1 md:order-2 flex justify-center">
          <img
            src="https://img.freepik.com/free-vector/ai-powered-content-creation-isometric-concept-with-chatbot-laptop-screen-3d-vector-illustration_1284-82523.jpg?t=st=1727719122~exp=1727722722~hmac=e3a55a5c6a1730b04a5d86fc2bf258b82b5f43306d44c393d72b03cf24b33ada&w=740"
            alt="AI-powered content creation"
            className="rounded-lg shadow-lg mb-6 w-full max-w-md h-auto object-cover"
          />
        </div>
      </section>

      {/* Commitment to Sustainability - With Second Image */}
      <section className="bg-[#f0f8ff] py-20 text-center px-4">
        <div className="max-w-4xl mx-auto text-[#003366]">
          <h2 className="text-4xl font-bold mb-6">Our Commitment to Sustainability</h2>
          <p className="leading-relaxed mb-8">
            We are committed to promoting sustainability and reducing carbon footprint through our innovative solutions. 
            Our team of experts is dedicated to providing smart and efficient energy management solutions that make a positive impact 
            on the environment and society. Join us in our mission to create a better tomorrow with HitoAI.
          </p>
          <img
            src="https://img.freepik.com/free-photo/robot-handshake-human-background-artificial-intelligence-digital-transformation_53876-129769.jpg?t=st=1727719283~exp=1727722883~hmac=aaa032d0262f8fcb4a76233b3a1ab23f73e643e504e31b96497fa0afe4501172&w=996"
            alt="Robot handshake human"
            className="rounded-lg shadow-lg w-full max-w-lg h-auto object-cover mx-auto"
          />
        </div>
      </section>
    </div>
  );
}
