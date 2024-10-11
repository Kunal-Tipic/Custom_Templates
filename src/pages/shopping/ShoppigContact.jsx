import React from 'react';

export default function ShoppingContact() {
  return (
    <div className="bg-gradient-to-br from-gray-700 to-gray-200 text-white py-16">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <h2 className="text-5xl font-bold text-center mb-12 tracking-widest">
          Contact Us
        </h2>

        {/* Contact Form and Additional Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form Section */}
          <div className="bg-gray-500 p-10 rounded-xl shadow-lg transition-all hover:shadow-2xl">
            <h3 className="text-3xl mb-6 text-center">Get in Touch</h3>
            <form className="space-y-6">
              <div>
                <label className="block mb-1">Full Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div>
                <label className="block mb-1">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div>
                <label className="block mb-1">Message</label>
                <textarea
                  className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  placeholder="Your message..."
                  rows="4"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-yellow-500 text-black hover:bg-yellow-600 py-3 rounded-lg transition duration-200 ease-in-out transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Additional Contact Information Section */}
          <div className="mt-12 lg:mt-0">
            <h3 className="text-3xl mb-6">Contact Information</h3>
            <p className="text-lg mb-2">
              <strong>Email:</strong> <a href="mailto:support@shoplogo.com" className="text-yellow-400 hover:text-yellow-500">support@shoplogo.com</a>
            </p>
            <p className="text-lg mb-2">
              <strong>Phone:</strong> <a href="tel:+1234567890" className="text-yellow-400 hover:text-yellow-500">+123 456 7890</a>
            </p>
            <p className="text-lg mb-2">
              <strong>Address:</strong> 123 Shop Street, Market City, USA
            </p>
            <p className="text-lg">
              <strong>Business Hours:</strong> Mon-Fri, 9 AM - 5 PM
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
