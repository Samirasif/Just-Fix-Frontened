import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        
             <section className="bg-green-200"> {/* Container */} <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20"> {/* Title */} <div className="mb-12 flex flex-col md:flex-row">
      <h2 className="mb-8 text-3xl max-w-lg font-bold md:mb-12 md:text-5xl lg:mb-16"> Find The Right <span className="">Professionals</span> </h2>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"> {/* FactsCard */} <div className="bg-gray-100 rounded-lg py-10 px-5 flex flex-col justify-between h-80">
        <div className="text-xl font-semibold">
          <img className="w-64 h-44"  src="/src/assets/plumber.jpg" alt="" />
        </div>
        <p className="mt-2 text-sm"> 
        With a perfect blend of experience and passion,Event Connect emerged as a company with </p>
      </div> {/* FactsCard */} <div className="bg-gray-100 rounded-lg py-8 px-5 flex flex-col justify-between h-80">
        <div className="text-xl font-semibold">
          
          <img className="w-64 h-44"  src="/src/assets/Repair Service .jpeg" alt="" />
        </div>
        <p className="mt-2 text-sm"> Empower your decisions with our AI-driven predictive analytics, foreseeing market </p>
      </div> {/* FactsCard */} <div className="bg-gray-100 rounded-lg py-8 px-5 flex flex-col justify-between h-80">
        <div className="text-xl font-semibold">
          <img className="w-64 h-44" src="/src/assets/Electrician.jpeg" alt="" />
        </div>
        <p className="mt-4 text-sm"> An event itself is an opportunity to display your creation positively.</p>
      </div> {/* FactsCard */} <div className="bg-gray-100 rounded-lg py-4 px-5 flex flex-col justify-between h-80">
        <div className="text-xl font-semibold">
          <img className="w-64  h-44" src="/src/assets/painter.jpg" alt="" />
        </div>
        <p className="mt-2 text-sm"> Empower your decisions with our AI-driven predictive analytics, foreseeing market</p>
      </div>
    </div>
  </div>
</section>
        
    );
};

export default Banner;