import React from "react";
// import ServiceCategory from "../Components/ServiceCategory";




import { Droplet, Zap, PaintBucket, Flower2, Sparkles, Truck, Home, Camera, GraduationCap, Laptop, Flower2Icon } from "lucide-react"
import ServiceCategoryCard from "../Components/ServiceCategoryCard";

 const Categories = [
  {
    id: 1,
    title: "Plumbing",
    description: "Repair leaks, install fixtures, and solve plumbing issues",
    proCount: 244,
    icon: Droplet,
    iconBgColor: "bg-blue-500",
  },
  {
    id: 2,
    title: "Electrical",
    description: "Installation, repairs, and electrical problem solving",
    proCount: 317,
    icon: Zap,
    iconBgColor: "bg-amber-500",
  },
  {
    id: 3,
    title: "Painting",
    description: "Interior and exterior painting services",
    proCount: 162,
    icon: PaintBucket,
    iconBgColor: "bg-green-500",
  },
  {
    id: 4,
    title: "Landscaping",
    description: "Garden maintenance, design, and landscape services",
    proCount: 528,
    icon: Flower2,
    iconBgColor: "bg-purple-500",
  },
  {
    id: 5,
    title: "Cleaning",
    description: "Home cleaning, deep cleaning, and specialized cleaning",
    proCount: 214,
    icon: Sparkles,
    iconBgColor: "bg-teal-500",
  },
  {
    id: 6,
    title: "Moving",
    description: "Residential and commercial moving services",
    proCount: 96,
    icon: Truck,
    iconBgColor: "bg-red-500",
  },
  {
    id: 7,
    title: "Home Renovation",
    description: "Kitchen, bathroom, and whole home renovations",
    proCount: 78,
    icon: Home,
    iconBgColor: "bg-pink-500",
  },
  {
    id: 8,
    title: "Photography",
    description: "Professional photography services for all occasions",
    proCount: 64,
    icon: Camera,
    iconBgColor: "bg-indigo-500",
  },
  {
    id: 9,
    title: "Tutoring",
    description: "Academic tutoring and educational support",
    proCount: 31,
    icon: GraduationCap,
    iconBgColor: "bg-yellow-500",
  },
  {
    id: 10,
    title: "Tech Support",
    description: "Computer repairs and technical support services",
    proCount: 83,
    icon: Laptop,
    iconBgColor: "bg-cyan-500",
  },
]
const Services = () => {

  
  return (
    <div>
      {/* <ServiceCategory /> */}

      <div className="mx-auto w-full px-3 py-10 md:px-8 md:py-12">
        {/* Header */}
        <div className="mb-2 ml-8">
          <h3 className="text-2xl md:text-4xl mb-3">Find Your Services</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
           {Categories.map((category) => (
          <ServiceCategoryCard
            key={category.id}
            icon={category.icon}
            title={category.title}
            description={category.description}
            proCount={category.proCount}
            iconBgColor={category.iconBgColor}
          />
        ))}
        </div>

        <div className="ml-10 py-4">
          <h2 className="text-xl font-semibold">Result </h2>
        </div>

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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
       
      </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
