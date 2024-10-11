import React from 'react';
import director1 from '../../images/directors/director1.jpg';
import director2 from '../../images/directors/director2.avif';
import director3 from '../../images/directors/director3.avif';

export default function TechCompanyAbout() {
  const directors = [
    {
      name: "John Doe",
      role: "Chief Executive Officer",
      bio: "John has led multiple successful startups in Silicon Valley and brings 20 years of experience in technology innovation and leadership.",
      image: director1,
    },
    {
      name: "Jane Smith",
      role: "Chief Technology Officer",
      bio: "An AI and cloud computing expert, Jane is passionate about leveraging technology to solve complex business challenges.",
      image: director2,
    },
    {
      name: "Michael Lee",
      role: "Head of Product",
      bio: "Michael specializes in product strategy and has been instrumental in scaling SaaS platforms for large enterprise clients.",
      image: director3,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-4xl font-bold text-center text-blue-400 mb-12">Our Leadership Team</h2>

      {/* Responsive Grid for Director Cards */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {directors.map((director, index) => (
          <div
            key={index}
            className="relative bg-gray-800 text-white p-4 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            {/* Director Image */}
            <div className=" mx-auto overflow-hidden mb-2">
              <img
                src={director.image}
                alt={director.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Director Info */}
            <h3 className="text-2xl font-semibold text-blue-400 mb-1">{director.name}</h3>
            <p className="text-lg text-gray-400 mb-2">{director.role}</p>

            {/* Bio */}
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-sm text-gray-200">{director.bio}</p>
            </div>

            {/* Overlay Effect */}
            <div className="absolute top-0 left-0 w-full h-full bg-gray-900 bg-opacity-70 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
              <p className="px-4 text-center text-gray-200">{director.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
