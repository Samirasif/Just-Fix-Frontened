import React from "react";

const PopularServices = () => {
  return (
    <div className="my-4">
      <h2 className="text-2xl text-center font-bold text-emerald-700">Our Popular Services</h2>
      <p className="text-xl text-center text-red-400 my-1">See Our Best Home service & Repair Near You</p>
 
     

      <div className="mx-auto w-full max-w-7xl px-5 py-6 md:px-10 md:py-6">
		    {/* Component */}
		    <div className="flex flex-col items-center">
		     
		      <div className="mb-8 grid gap-5 sm:grid-cols-2 sm:justify-items-stretch md:mb-12 md:grid-cols-3 lg:mb-16 lg:gap-6">
		        {/* Item */}
		        <a href="#" className="flex flex-col gap-4 rounded-md px-4 py-8 md:p-0">
		          <img src="/src/assets/Electrician.jpeg" alt="" className="h-60 object-cover" />
		          <div className="flex flex-col items-start py-4">
		            <div className="mb-4 rounded-md bg-gray-100 px-2 py-1.5">
		              <p className="text-sm font-semibold text-blue-600">
		                Electrician
		              </p>
		            </div>
		            <p className="mb-4 text-xl font-bold md:text-2xl">
		              Most Experienced in Electric Service
		            </p>
		            <div className="flex flex-col items-start text-sm text-gray-500 lg:flex-row lg:items-center">
		              <p>Abdul Hamid</p>
		              <p className="mx-2 hidden lg:block">-</p>
		              <p className="text-blue-800">See Profile</p>
		            </div>
		          </div>
		        </a>
		        {/* Item */}
		        <a href="#" className="flex flex-col gap-4 rounded-md px-4 py-8 md:p-0">
		          <img src="/src/assets/painter.jpg" alt="" className="h-60 object-cover" />
		          <div className="flex flex-col items-start py-4">
		            <div className="mb-4 rounded-md bg-gray-100 px-2 py-1.5">
		              <p className="text-sm font-semibold text-blue-600">
		                Painter
		              </p>
		            </div>
		            <p className="mb-4 text-xl font-bold md:text-2xl">
		              Most Rated Painter in Dhaka City
		            </p>
		            <div className="flex flex-col items-start text-sm text-gray-500 lg:flex-row lg:items-center">
		              <p>Saddam Hossain</p>
		              <p className="mx-2 hidden lg:block">-</p>
		              <p className="text-blue-800">See Profile</p>
		            </div>
		          </div>
		        </a>
		        {/* Item */}
		        <a href="#" className="flex flex-col gap-4 rounded-md px-4 py-8 md:p-0">
		          <img src="/src/assets/plumber.jpg" alt="" className="h-60 object-cover" />
		          <div className="flex flex-col items-start py-4">
		            <div className="mb-4 rounded-md bg-gray-100 px-2 py-1.5">
		              <p className="text-sm font-semibold text-blue-600">
		                Plumber
		              </p>
		            </div>
		            <p className="mb-4 text-xl font-bold md:text-2xl">
		              Most Experienced in Plumbing Service
		            </p>
		            <div className="flex flex-col items-start text-sm text-gray-500 lg:flex-row lg:items-center">
		              <p>Naimur Rahman</p>
		              <p className="mx-2 hidden lg:block">-</p>
		              <p className="text-blue-800">See Profile</p>
		            </div>
		          </div>
		        </a>
		      </div>
		      {/* Button */}
		      <a href="#" className="rounded-md bg-black px-6 py-3 text-center font-semibold text-white">
		        View More
		      </a>
		    </div>
		  </div>
      
 
    </div>
  );
};

export default PopularServices;


		  
	
			