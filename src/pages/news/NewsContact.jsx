import React from 'react';

export default function NewsContact() {
  return (
    <div className="bg-gradient-to-br from-red-500 to-yellow-400 text-white py-16">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <h2 className="text-5xl font-bold text-center mb-12 tracking-widest">
          Contact Us
        </h2>

        {/* Contact Form and Map Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contact Form Section */}
          <div className="bg-yellow-500 p-10 rounded-xl shadow-lg transition-all hover:shadow-2xl">
            <h3 className="text-3xl mb-6 text-center">Get in Touch</h3>
            <form className="space-y-6">
              <div>
                <label className="block mb-1">Full Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-white text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div>
                <label className="block mb-1">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-white text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div>
                <label className="block mb-1">Message</label>
                <textarea
                  className="w-full px-4 py-3 bg-white text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
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

          {/* Google Map Section */}
          <div className="overflow-hidden rounded-xl shadow-lg transition-all hover:shadow-2xl">
            <iframe
              title="Daily News Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.407370617605!2d144.95565121533163!3d-37.81731467975161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f50ec7c5%3A0xfb2e9bf59a7d24d8!2sVictoria%20State%20Library!5e0!3m2!1sen!2sau!4v1620048376288!5m2!1sen!2sau"
              width="100%"
              height="400"
              className="rounded-xl border-4 border-yellow-400"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* Additional Contact Information Section */}
        <div className="mt-20 text-center">
          <h3 className="text-3xl mb-4">Additional Contact Info</h3>
          <p className="text-xl mb-2">
            <strong>Email:</strong> <a href="mailto:support@dailynews.com" className="text-yellow-400 hover:text-yellow-500">support@dailynews.com</a>
          </p>
          <p className="text-xl mb-2">
            <strong>Phone:</strong> <a href="tel:+1234567890" className="text-yellow-400 hover:text-yellow-500">+123 456 7890</a>
          </p>
          <p className="text-xl">
            <strong>Address:</strong> 456 News Avenue, Media City, USA
          </p>
        </div>
      </div>
    </div>
  );
}
