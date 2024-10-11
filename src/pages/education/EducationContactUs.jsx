import React from 'react';

const EducationContactUs = () => {
  return (
    <div className="bg-blue-700 text-white px-6 py-8 md:px-16 lg:px-32">
      {/* Header Section */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-yellow-300">Contact Us</h1>
        <p className="mt-4 text-lg text-yellow-200">
          Have questions or need assistance? Get in touch with us below.
        </p>
      </div>

      {/* Main Content Container */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Contact Form Section */}
        <div className="w-full md:w-1/2 bg-white text-blue-900 rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-4 text-center">Send Us a Message</h2>
          <form>
            <div className="mb-4">
              <label className="block text-sm font-medium">Name</label>
              <input
                type="text"
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium">Email</label>
              <input
                type="email"
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium">Mobile Number</label>
              <input
                type="tel"
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
                placeholder="Enter your mobile number"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium">Message</label>
              <textarea
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
                placeholder="Your message"
              ></textarea>
            </div>
            <button className="w-full bg-yellow-300 text-blue-900 hover:bg-yellow-400 px-4 py-2 rounded-md">
              Submit
            </button>
          </form>
        </div>

        {/* Contact Info Section */}
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
          <p className="text-yellow-200 mb-4">
            We are here to assist you. Reach out to us through any of the methods below.
          </p>
          <div className="mb-4">
            <h3 className="text-lg font-semibold">Address</h3>
            <p>123 Learning Street, EduCity, EL 456789</p>
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-semibold">Phone</h3>
            <p>+1 (123) 456-7890</p>
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-semibold">Email</h3>
            <p>info@edulearn.com</p>
          </div>

          {/* Google Map Section */}
          <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345086165!2d144.95373631531654!3d-37.81720997975195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218ced60!2s123+Learning+Street%2C+EduCity!5e0!3m2!1sen!2sus!4v1613002345002!5m2!1sen!2sus"
              width="100%"
              height="300"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationContactUs;
