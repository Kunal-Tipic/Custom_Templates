import React from 'react';
import director1 from '../../images/directors/director1.jpg'; // Replace with your image paths
import director2 from '../../images/directors/director2.avif';
import director3 from '../../images/directors/director3.avif';

export default function FitnessAbout() {
  const directors = [
    {
      name: 'Sarah Williams',
      role: 'Head Fitness Coach',
      bio: 'Sarah has over 15 years of experience in fitness training and has helped thousands transform their lives through a balanced approach to exercise and nutrition.',
      image: director1,
    },
    {
      name: 'Mike Johnson',
      role: 'Nutrition Expert',
      bio: 'Mike is a certified nutritionist specializing in creating personalized meal plans that enhance performance and promote healthy lifestyles.',
      image: director2,
    },
    {
      name: 'Linda Robinson',
      role: 'Yoga Instructor',
      bio: 'Linda is a world-renowned yoga instructor focusing on mind-body connection and holistic wellness practices.',
      image: director3,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <h2 className="text-4xl font-bold text-center text-green-700 mb-12">Meet Our Team</h2>

      <div className="container mx-auto flex flex-col md:flex-row justify-center items-center bg-white rounded-lg shadow-lg p-8 space-y-8 md:space-y-0 md:space-x-8">

        {/* Left Section: Director Images */}
        <div className="grid space-y-8">
          {directors.map((director, index) => (
          <div className='md:flex'>
            <div>
              <div key={index} className="w-48 h-48 rounded-full ms-8 mt-2 overflow-hidden shadow-lg">
                <img src={director.image} alt={director.name} className="object-cover w-full h-full" />
              </div>
            </div>
           
              <div className="p-4 text-center md:ms-3 bg-green-50 border-l-4 border-green-700 rounded-lg shadow-sm">
                <h3 className="text-2xl font-bold text-green-700">{director.name}</h3>
                <p className="text-xl text-green-600">{director.role}</p>
                <p className="mt-2 text-gray-600">{director.bio}</p>
                <p className="mt-2 text-gray-600">{director.bio}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Section: Director Info */}
        {/* <div className="md:w-1/2 space-y-8 text-center md:text-left">
          {directors.map((director, index) => (
            <div key={index} >
              
              
            </div>
          ))}
        </div> */}

      </div>

    </div>
  );
}
