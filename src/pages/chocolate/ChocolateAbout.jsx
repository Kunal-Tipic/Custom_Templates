import React from 'react';
import director1 from '../../images/directors/director1.jpg';
import director2 from '../../images/directors/director2.avif';
import director3 from '../../images/directors/director3.avif';

export default function ChocolateAboutUs() {
  const directors = [
    {
      name: "Alexandra Brown",
      role: "Chief Chocolate Officer",
      bio: "With over 15 years of experience in crafting artisanal chocolates, Alexandra is dedicated to innovating new recipes.",
      image: director1
    },
    {
      name: "Benjamin Baker",
      role: "Director of Sweet Operations",
      bio: "Benjamin brings 12 years of expertise in chocolate production and a passion for sustainable cocoa sourcing.",
      image: director2
    },
    {
      name: "Catherine Cole",
      role: "Creative Director",
      bio: "An award-winning chocolatier, Catherine’s focus is on combining traditional techniques with contemporary flavors.",
      image: director3
    }
  ];

  return (
    <div className="container mx-auto px-6 py-12">
      <h2 className="text-4xl font-bold text-center text-[#5a3d1e] mb-10">Meet Our Directors</h2>
      
      {/* Directors Info - Responsive Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {directors.map((director, index) => (
          <div key={index} className="text-center">
            {/* Director Image */}
            <div className=" mx-auto mb-4 w-52 h-52 rounded-full border-8 border-[#5a3d1e] overflow-hidden">
              <img
                src={director.image}
                alt={director.name}
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            {/* Director Info */}
            <h3 className="text-2xl font-semibold text-[#5a3d1e] mb-1">{director.name}</h3>
            <p className="text-lg text-[#9a6c41] mb-2">{director.role}</p>
            <p className="text-[#5a3d1e]">{director.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
