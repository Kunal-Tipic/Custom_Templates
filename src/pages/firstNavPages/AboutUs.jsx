import React from 'react';
import director1 from '../../images/directors/director1.jpg'; // Replace with the actual image path
import director2 from '../../images/directors/director2.avif'; // Replace with the actual image path
import director3 from '../../images/directors/director3.avif'; // Replace with the actual image path

const AboutUs = () => {
  return (
    <div className="bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-center mb-8">Meet Our Directors</h1>

      {/* First Director */}
      <div className="flex flex-col md:flex-row items-center mb-8">
        <img src={director1} alt="Director 1" className="w-full md:w-1/2 h-auto object-cover rounded-lg shadow-lg" />
        <div className="mt-4 md:mt-0 md:ml-8 md:w-1/2">
          <h2 className="text-2xl font-bold">Dr. John Doe</h2>
          <p className="text-xl text-gray-600 mt-2">Ph.D. in Computer Science, Harvard University</p>
          <p className="mt-4">
            Dr. John Doe is a visionary leader with over 20 years of experience in technology and education. He believes in the power of technology to transform education and is committed to bridging the gap between innovation and accessibility.
          </p>
          <blockquote className="mt-6 italic border-l-4 border-green-700 pl-4">
            "Education is the most powerful tool to change the world."
          </blockquote>
        </div>
      </div>

      {/* Second Director */}
      <div className="flex flex-col md:flex-row-reverse items-center mb-8">
        <img src={director2} alt="Director 2" className="w-full md:w-1/2 h-auto object-cover rounded-lg shadow-lg" />
        <div className="mt-4 md:mt-0 md:mr-8 md:w-1/2">
          <h2 className="text-2xl font-bold">Ms. Jane Smith</h2>
          <p className="text-xl text-gray-600 mt-2">M.Sc. in Business Administration, Stanford University</p>
          <p className="mt-4">
            Ms. Jane Smith is a seasoned business strategist who has spearheaded numerous successful ventures. Her focus is on creating sustainable business models that align with our mission and vision.
          </p>
          <blockquote className="mt-6 italic border-l-4 border-green-700 pl-4">
            "Innovation is not just about technology, but also about how we apply it."
          </blockquote>
        </div>
      </div>

      {/* Third Director */}
      <div className="flex flex-col md:flex-row items-center mb-8">
        <img src={director3} alt="Director 3" className="w-full md:w-1/2 h-auto object-cover rounded-lg shadow-lg" />
        <div className="mt-4 md:mt-0 md:ml-8 md:w-1/2">
          <h2 className="text-2xl font-bold">Mr. Richard Roe</h2>
          <p className="text-xl text-gray-600 mt-2">MBA, Wharton School of Business</p>
          <p className="mt-4">
            Mr. Richard Roe brings a wealth of experience in financial management and entrepreneurship. His insights into global market trends are invaluable in driving the company’s growth and outreach.
          </p>
          <blockquote className="mt-6 italic border-l-4 border-green-700 pl-4">
            "Sustainability and growth are not mutually exclusive; they go hand in hand."
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
