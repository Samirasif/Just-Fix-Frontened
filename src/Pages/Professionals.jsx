"use client";

import { useState } from "react";

const Professionals = () => {
  const [activeTab, setActiveTab] = useState("popular");

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-center">
        Find Local Professionals
      </h1>
      <p className="text-center text-gray-500 mb-6">
        Connect with verified service providers in your area
      </p>

      <div className="flex flex-col sm:flex-row gap-2 mb-6">
        <div className="relative flex-grow">
          <input
            type="text"
            placeholder="Search professionals..."
            className="w-full h-10 pl-3 pr-10 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="relative flex-grow sm:flex-grow-0 sm:w-48">
          <select className="w-full h-10 px-3 rounded-md border border-gray-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>All Categories</option>
            <option>Plumber</option>
            <option>Electrician</option>
            <option>Cleaner</option>
            <option>Landscaper</option>
            <option>Interior Designer</option>
            <option>Heating Specialist</option>
          </select>
        </div>
        <button className="h-10 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-md flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 mr-2"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          Search
        </button>
      </div>

      <div className="inline-flex h-10 items-center justify-center rounded-md bg-gray-100 p-1 text-gray-500 mb-6">
        {["popular", "plumbers", "electricians", "cleaners"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium transition-all focus:outline-none ${
              activeTab === tab
                ? "bg-white text-gray-900 shadow-sm"
                : "hover:bg-gray-50"
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {professionals.map((professional) => (
          <ProfessionalCard key={professional.id} professional={professional} />
        ))}
      </div>

      <div className="text-center mt-8">
        <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
          Load More Professionals
        </button>
      </div>
    </div>
  );
};

const ProfessionalCard = ({ professional }) => {
  const {
    name,
    profession,
    image,
    location,
    distance,
    rating,
    featured,
    description,
  } = professional;
  
  return (
    <div className="border rounded-lg overflow-hidden">
      <div className="relative h-48">
        <img src={image} alt={name} className="w-96  h-64 ml-1 object-cover" />
        <div className="absolute top-2 left-2 bg-gray-800 text-white px-2 py-1 rounded text-xs">
          {profession}
        </div>
        <div className="absolute top-2 right-2 bg-white text-black px-2 py-1 rounded text-xs font-medium">
          {featured ? "FEATURED" : "NEW"}
        </div>
      </div>

      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-bold">{name}</h3>
          <div className="flex items-center">
            <span className="text-yellow-500 mr-1">★</span>
            <span className="font-medium">{rating}</span>
          </div>
        </div>

        <div className="flex items-center text-sm text-gray-500 mb-3">
          <span>{location}</span>
          <span className="mx-1">•</span>
          <span>{distance} miles away</span>
        </div>

        <p className="text-sm mb-4 line-clamp-2">{description}</p>

        <div className="flex gap-2">
          <button className="flex-1 px-3 py-1 border border-gray-300 rounded-md text-sm hover:bg-gray-50">
            Contact
          </button>
          <button className="flex-1 px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white rounded-md text-sm">
            View Profile
          </button>
        </div>
      </div>
    </div>
  );
};

// Sample data
const professionals = [
  {
    id: 1,
    name: "Michael Johnson",
    profession: "Master Plumber",
    image: "https://i.ibb.co.com/mW2nbMb/sanitary-technician-lying-sink.jpg",
    location: "Chicago, IL",
    distance: 2.3,
    rating: 4.8,
    featured: true,
    description:
      "Licensed master plumber with 15+ years experience in residential and commercial plumbing services.",
  },
  {
    id: 2,
    name: "Sarah Williams",
    profession: "Electrician",
    image: "https://i.ibb.co.com/bRGR4nVd/male-electrician-works-switchboard-with-electrical-connecting-cable.jpg",
    location: "Chicago, IL",
    distance: 3.7,
    rating: 4.6,
    featured: false,
    description:
      "Certified electrician specializing in residential wiring, lighting installations, and troubleshooting.",
  },
  {
    id: 3,
    name: "David Martinez",
    profession: "Professional Cleaner",
    image: "https://i.ibb.co.com/Qv2dmJcm/portrait-young-asian-woman-apron-rubber-gloves-smile-holding-cleaning-equipment-her-hand-copy-space.jpg",
    location: "Chicago, IL",
    distance: 1.2,
    rating: 4.7,
    featured: true,
    description:
      "Detail-oriented cleaner with expertise in interior and exterior cleaning for both homes and businesses.",
  },
  {
    id: 4,
    name: "Emily Peterson",
    profession: "Landscaper",
    image: "https://i.ibb.co.com/mW2nbMb/sanitary-technician-lying-sink.jpg",
    location: "Chicago, IL",
    distance: 2.7,
    rating: 4.9,
    featured: true,
    description:
      "Professional landscaper offering design, maintenance, and renovation services for residential and commercial properties.",
  },
  {
    id: 5,
    name: "Robert Smith",
    profession: "Interior Designer",
    image: "https://i.ibb.co.com/bRGR4nVd/male-electrician-works-switchboard-with-electrical-connecting-cable.jpg",
    location: "Chicago, IL",
    distance: 4.1,
    rating: 4.5,
    featured: false,
    description:
      "Innovative interior designer known for blending function and aesthetics to create beautiful living spaces.",
  },
  {
    id: 6,
    name: "Jessica Taylor",
    profession: "Heating Specialist",
    image: "https://i.ibb.co.com/Qv2dmJcm/portrait-young-asian-woman-apron-rubber-gloves-smile-holding-cleaning-equipment-her-hand-copy-space.jpg",
    location: "Chicago, IL",
    distance: 3.5,
    rating: 4.8,
    featured: true,
    description:
      "Experienced heating specialist offering installation, maintenance, and repair services for all heating systems.",
  },
];

export default Professionals;
