import React, { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    organization: '',
    message: '',
    captcha: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form data:', formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#081944]">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl w-full">
        <h2 className="text-3xl font-bold mb-6 text-center text-[#081944]">Get In Touch</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="block text-lg font-medium text-gray-700">First Name *</label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="First Name"
                required
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-lg font-medium text-gray-700">Last Name *</label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="Last Name"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-lg font-medium text-gray-700">Email *</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="name@company.com"
              required
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-lg font-medium text-gray-700">Phone *</label>
            <input
              type="tel"
              name="phone"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="8859500"
              required
            />
          </div>

          <div>
            <label htmlFor="organization" className="block text-lg font-medium text-gray-700">Organization *</label>
            <input
              type="text"
              name="organization"
              id="organization"
              value={formData.organization}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Company Name"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-lg font-medium text-gray-700">Message *</label>
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="How can we help?"
              rows="5"
              required
            ></textarea>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full py-3 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
