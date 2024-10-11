import React from 'react'

export default function TechCompanyContactUs() {
    return (
        <div className="container mx-auto px-4 py-12">
          {/* Page Header */}
          <h2 className="text-4xl font-bold text-center text-blue-400 mb-8">
            Contact Us
          </h2>
          
          {/* Contact Form and Map Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form Section */}
            <div className="bg-gray-800 p-8 rounded-lg shadow-md">
              <h3 className="text-2xl text-blue-300 mb-4">Get In Touch</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-white">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 bg-gray-200 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Your Name"
                  />
                </div>
    
                <div>
                  <label className="block text-white">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 bg-gray-200 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Your Email"
                  />
                </div>
    
                <div>
                  <label className="block text-white">Mobile Number</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-2 bg-gray-200 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Your Mobile Number"
                  />
                </div>
    
                <div>
                  <label className="block text-white">Message</label>
                  <textarea
                    className="w-full h-28 px-4 py-2 bg-gray-200 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Your Message"
                  ></textarea>
                </div>
    
                <button
                  type="submit"
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md transition duration-200"
                >
                  Submit
                </button>
              </form>
            </div>
    
            {/* Google Map Section */}
            <div className="overflow-hidden rounded-lg shadow-md">
              <iframe
                title="Company Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.407370617605!2d144.95565121533163!3d-37.81731467975161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f50ec7c5%3A0xfb2e9bf59a7d24d8!2sVictoria%20State%20Library!5e0!3m2!1sen!2sau!4v1620048376288!5m2!1sen!2sau"
                width="100%"
                height="100%"
                className="rounded-lg"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
    
          {/* Additional Contact Information Section */}
          <div className="mt-12 text-center">
            <h3 className="text-3xl text-blue-300">Reach Us At</h3>
            <p className="text-lg text-gray-400 mt-4">Email: contact@company.com</p>
            <p className="text-lg text-gray-400">Phone: +123 456 7890</p>
            <a href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.407370617605!2d144.95565121533163!3d-37.81731467975161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f50ec7c5%3A0xfb2e9bf59a7d24d8!2sVictoria%20State%20Library!5e0!3m2!1sen!2sau!4v1620048376288!5m2!1sen!2sau" 
            className="text-lg text-gray-400">Address: 123 Tech Street, Silicon Valley, CA</a>
          </div>
        </div>
      );
    }
