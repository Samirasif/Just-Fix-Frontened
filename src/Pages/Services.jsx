import React from 'react';

const Services = () => {
    return (
        <div>
             <div className="mx-auto w-full px-3 py-10 md:px-8 md:py-12">
		    {/* Header */}
		    <div className="mb-2 ml-8">
		      <h3 className="text-2xl md:text-4xl mb-3">Find Your Services</h3>
		      
		    </div>
		
		    {/* Result Count */}
		    <div className="ml-10 py-4">
		      <h2 className="text-xl font-semibold">Result </h2>
		    </div>
		
		    {/* Main Content */}
		    <div className="flex border border-gray-400 rounded-md">
		      {/* Filters */}
		      <div className="w-1/3 md:w-1/4 p-3 md:p-10 border-r border-gray-400">
		        <p className="font-bold mb-8">Filter</p>
		        <div className="mb-4">
		          <label className="flex items-center mb-4">
		            <input type="checkbox" className="form-checkbox mr-3 h-5 w-5" />
		            <span className="text-sm">AC-Servicing</span>
		          </label>
		          <label className="flex items-center mb-4">
		            <input type="checkbox" className="form-checkbox mr-3 h-5 w-5" />
		            <span className="text-sm">Home-Cleaning</span>
		          </label>
		          <label className="flex items-center">
		            <input type="checkbox" className="form-checkbox mr-3 h-5 w-5" />
		            <span className="text-sm">Shifting</span>
		          </label>
		        </div>
		
		        <p className="font-bold my-8">Category</p>
		        <ul>
		          <li className="flex justify-between mb-4">
		            <span className="text-sm">Electrician</span>
		            <span className="text-gray-500 text-sm"></span>
		          </li>
		          <li className="flex justify-between mb-4">
		            <span className="text-sm">Plumber</span>
		            <span className="text-gray-500 text-sm"></span>
		          </li>
		          <li className="flex justify-between mb-4">
		            <span className="text-sm">Painter</span>
		            <span className="text-gray-500 text-sm"></span>
		          </li>
		          <li className="flex justify-between mb-4">
		            <span className="text-sm">Cleaner</span>
		            <span className="text-gray-500 text-sm"></span>
		          </li>
		          <li className="flex justify-between mb-4">
		            <span className="text-sm">House-Shifting service</span>
		            <span className="text-gray-500 text-sm"></span>
		          </li>
		        </ul>
		      </div>
		
		      {/* Product List */}
		      <div className="w-fit md:w-3/4 p-3 md:p-6  flex items-center justify-center">
		       
		      </div>
		    </div>
		  </div>
            
        </div>
    );
};

export default Services;