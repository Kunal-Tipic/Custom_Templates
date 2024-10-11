import React from 'react';

const ContactUs = () => {
  return (
    
    <div className="min-h-screen bg-gradient-to-r from-gray-100 via-white to-gray-100 md:flex  p-6 md:p-12">
      
      {/* Contact Form */}
      <div className="w-full md:w-2/3 lg:w-1/2 bg-white p-8 rounded-xl shadow-lg border border-green-200">
      <h2 className="text-4xl font-extrabold mb-8 text-green-800 tracking-wide">Contact Us</h2>
        <h3 className="text-2xl font-semibold text-green-800 mb-4">We'd Love to Hear from You!</h3>
        <form className="space-y-6">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-lg font-medium text-gray-700 mb-1">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          {/* Mobile Number Field */}
          <div>
            <label htmlFor="mobile" className="block text-lg font-medium text-gray-700 mb-1">Mobile Number:</label>
            <input
              type="tel"
              id="mobile"
              name="mobile"
              placeholder="Enter your mobile number"
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-lg font-medium text-gray-700 mb-1">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          {/* Message Field */}
          <div>
            <label htmlFor="message" className="block text-lg font-medium text-gray-700 mb-1">Message:</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Write your message here"
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full p-3 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 transition ease-in-out duration-200 shadow-lg"
          >
            Submit
          </button>
        </form>
      </div>
      
      {/* Google Map Section */}
      <div className="mt-4rem md:mt-0 md:ms-4 w-full md:w-1/2 lg:w-1/2">
        <h3 className="text-3xl font-semibold mb-4 text-green-800">Our Location</h3>
        <div className="border border-gray-200 rounded-xl shadow-lg overflow-hidden">
          {/* Embed Google Map here */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.906784417389!2d144.95592331531966!3d-37.81624197975173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218ce7e33!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sin!4v1633670870923!5m2!1sen!2sin"
            title="Google Map Location"
            width="100%"
            height="450"
            allowFullScreen=""
            loading="lazy"
            className="border-none"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
