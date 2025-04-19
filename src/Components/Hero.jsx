import React from "react";
import { Link } from "react-router-dom";
import Container from "./Container";

const Hero = () => {
  return (
    <div className="bg-blue-100 p-2">
      <Container className="flex flex-wrap pt-20 ">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h2 className="text-2xl font-bold leading-snug tracking-tight mt-5 text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight ">
              Hire Your Services
            </h2>
            <h2 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight ">
              Or Get Your Free Advice from professionals
            </h2>

            <p className="text-lg leading-relaxed tracking-tight text-gray-800 lg:text-xl xl:text-2xl ">
              Get Your Desirable best Servicer from here
            </p>
            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row mt-10">
              <Link
                to="/"
                className="px-8 py-4 bg-[#96BB7C]  text-lg font-medium text-center text-black border rounded-md "
              >
                Book now
              </Link>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">
            <img
              src="/src/assets/Repair Service .jpeg"
              alt=""
              className="my-5"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
{
  /* <img src="/public/hero.svg" alt="" /> */
}
