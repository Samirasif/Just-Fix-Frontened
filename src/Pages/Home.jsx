import React from "react";
import Hero from "../Components/Hero";
import PopularServices from "../Components/PopularServices";
import Banner from "../Components/Banner";
import CategoriesSection from "../Components/CategoriesSection";
import FindWork from "../Components/FindWork";
import HowItWorksSection from "../Components/HowItWorks";



const Home = () => {
 
  return (
    <div>
      <Hero />
      <PopularServices />
      <CategoriesSection />
      {/* <Banner/> */}
      <HowItWorksSection/>
      
      <FindWork />
    </div>
  );
};

export default Home;
