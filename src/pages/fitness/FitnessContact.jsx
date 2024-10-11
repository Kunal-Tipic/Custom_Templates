import React from 'react';

export default function FitnessContact() {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Page Header */}
      <h2 className="text-5xl font-bold text-center text-green-600 mb-16 tracking-widest">
        Contact Us
      </h2>

      {/* Contact Form and Map Container */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Contact Form Section */}
        <div className="bg-green-700 p-10 rounded-xl shadow-lg transition-all hover:shadow-2xl">
          <h3 className="text-3xl text-white mb-6 text-center">Get in Touch</h3>
          <form className="space-y-6">
            <div>
              <label className="block text-white mb-1">Full Name</label>
              <input
                type="text"
                className="w-full px-4 py-3  text-black rounded-lg focus:outline-none focus:ring-4 focus:ring-green-500"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label className="block text-white mb-1">Email</label>
              <input
                type="email"
                className="w-full px-4 py-3  text-blscke rounded-lg focus:outline-none focus:ring-4 focus:ring-green-500"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label className="block text-white mb-1">Phone Number</label>
              <input
                type="tel"
                className="w-full px-4 py-3  text-blscke rounded-lg focus:outline-none focus:ring-4 focus:ring-green-500"
                placeholder="+123 456 7890"
              />
            </div>

            <div>
              <label className="block text-white mb-1">Message</label>
              <textarea
                className="w-full px-4 py-3  text-blscke rounded-lg focus:outline-none focus:ring-4 focus:ring-green-500"
                placeholder="Your message..."
                rows="4"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-white text-green-700 hover:bg-green-500 hover:text-white py-3 rounded-lg transition duration-200 ease-in-out transform hover:scale-105"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Google Map Section */}
        <div className="overflow-hidden rounded-xl shadow-lg transition-all hover:shadow-2xl">
          <iframe
            title="Fitness Center Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.407370617605!2d144.95565121533163!3d-37.81731467975161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f50ec7c5%3A0xfb2e9bf59a7d24d8!2sVictoria%20State%20Library!5e0!3m2!1sen!2sau!4v1620048376288!5m2!1sen!2sau"
            width="100%"
            height="400"
            className="rounded-xl border-4 border-green-600"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* Additional Contact Information Section */}
      <div className="mt-20 text-center">
        <h3 className="text-3xl text-green-700 mb-4">Additional Contact Info</h3>
        <p className="text-xl text-gray-600 mb-2">
          <strong>Email:</strong> <a href="mailto:support@fitlife.com" className="text-green-500 hover:text-green-700">support@fitlife.com</a>
        </p>
        <p className="text-xl text-gray-600 mb-2">
          <strong>Phone:</strong> <a href="tel:+1234567890" className="text-green-500 hover:text-green-700">+123 456 7890</a>
        </p>
        <p className="text-xl text-gray-600">
          <strong>Address:</strong> 123 Fit Street, Workout City, USA
        </p>
      </div>
    </div>
  );
}
