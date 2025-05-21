import React from "react";
import { Search, Users, Package } from "lucide-react";

export default function HowItWorksSection() {
  return (
    <div className="w-full py-16 px-4 bg-violet-300 md:px-6 lg:px-8 ">
      {/* How it works header */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-2">
          How Our Just-Fix Works
        </h2>
        <p className="text-lg text-gray-600">
          Find the perfect service professional in just a few simple steps
        </p>
      </div>

      {/* Steps */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {/* Step 1 */}
        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 flex items-center justify-center bg-blue-100 rounded-full mb-4">
            <Search className="w-8 h-8 text-blue-600" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Search for a service</h3>
          <p className="text-gray-600">
            Browse through our categories or search for the specific service you
            need.
          </p>
        </div>

        {/* Step 2 */}
        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 flex items-center justify-center bg-blue-100 rounded-full mb-4">
            <Users className="w-8 h-8 text-blue-600" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Connect with pros</h3>
          <p className="text-gray-600">
            View profiles, compare quotes, and chat with professionals in your
            area.
          </p>
        </div>

        {/* Step 3 */}
        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 flex items-center justify-center bg-blue-100 rounded-full mb-4">
            <Package className="w-8 h-8 text-blue-600" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Get the job done</h3>
          <p className="text-gray-600">
            Hire the right professional and get your project completed to
            satisfaction.
          </p>
        </div>
      </div>

      {/* CTA Button */}
      <div className="text-center mb-16">
        <button className=" bg-[#96BB7C]   hover:bg-green-700 text-white font-medium py-3 px-6 rounded-md transition-colors">
          Find a Professional Now
        </button>
        
      </div>

      {/* Testimonials section */}
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-2">
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-600">
            Real experiences from people who found the perfect professional
            through our platform
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 mr-4">
                <img
                  src="/placeholder.svg"
                  alt="Jennifer lawrence"
                  width={48}
                  height={48}
                  className="rounded-full"
                />
              </div>
              <div>
                <h4 className="font-semibold">Jennifer lawrence</h4>
                <p className="text-sm text-gray-600">UK</p>
              </div>
            </div>
            <div className="flex mb-3">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-5 h-5 text-yellow-400 fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              ))}
            </div>
            <p className="text-gray-700 text-sm italic">
              "I needed a plumber urgently and ProConnect connected me with
              Michael within an hour. He was professional, fixed the issue
              quickly, and charged a fair price. Highly recommend!"
            </p>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 mr-4">
                <img
                  src="/placeholder.svg"
                  alt="Robert J."
                  width={48}
                  height={48}
                  className="rounded-full"
                />
              </div>
              <div>
                <h4 className="font-semibold">Elizabeth Olsen</h4>
                <p className="text-sm text-gray-600">Austin, TX</p>
              </div>
            </div>
            <div className="flex mb-3">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-5 h-5 text-yellow-400 fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              ))}
            </div>
            <p className="text-gray-700 text-sm italic">
              "Sarah did an amazing job reviving my kitchen. She was punctual,
              knowledgeable, and cleaned up perfectly afterward. I'll definitely
              use ProConnect again for future projects."
            </p>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 mr-4">
                <img
                  src="/placeholder.svg"
                  alt="Maria G."
                  width={48}
                  height={48}
                  className="rounded-full"
                />
              </div>
              <div>
                <h4 className="font-semibold">Dure Fishan.</h4>
                <p className="text-sm text-gray-600">Pakistan</p>
              </div>
            </div>
            <div className="flex mb-3">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-5 h-5 text-yellow-400 fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              ))}
            </div>
            <p className="text-gray-700 text-sm italic">
              "Great experience with David painting our living room. He was
              meticulous with details and helped us choose the perfect color.
              The room looks brand new!"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
