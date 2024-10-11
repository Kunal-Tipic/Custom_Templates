import React from 'react';

// Dummy tutor images (replace with actual tutor images)
import tutor1 from '../../images/directors/director1.jpg';
import tutor2 from '../../images/directors/director2.avif';
import tutor3 from '../../images/directors/director3.avif';

export default function EducationAboutUs() {
  const tutors = [
    {
      name: "John Doe",
      image: tutor1,
      qualification: "Ph.D. in Computer Science",
      experience: "10 years of teaching experience",
      bio: "Passionate about helping students master complex algorithms and data structures."
    },
    {
      name: "Jane Smith",
      image: tutor2,
      qualification: "M.Sc. in Mathematics",
      experience: "7 years of experience as a tutor",
      bio: "Specializes in making mathematics easy and fun for all levels of students."
    },
    {
      name: "Michael Brown",
      image: tutor3,
      qualification: "M.A. in English Literature",
      experience: "5 years of teaching literature",
      bio: "Dedicated to inspiring a love for reading and creative writing in students."
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-4xl text-center font-bold mb-8">Our Directors</h2>
      
      {/* Responsive Cards Container */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {tutors.map((tutor, index) => (
          <div key={index} className="border rounded-lg overflow-hidden shadow-md bg-white">
            {/* Tutor Image */}
            <img src={tutor.image} alt={tutor.name} className="w-full h-64 object-cover" />

            {/* Tutor Info */}
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">{tutor.name}</h3>
              <p className="text-gray-700 mb-1"><strong>Qualification:</strong> {tutor.qualification}</p>
              <p className="text-gray-700 mb-1"><strong>Experience:</strong> {tutor.experience}</p>
              <p className="text-gray-700"><strong>Bio:</strong> {tutor.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
