import React from "react";

const About = () => {
  return (
    <div>
      <div className="bg-purple-200 mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
        {/* Title */}
        <h2 className="mb-8 text-3xl font-bold md:text-5xl md:mb-10">
          About Us
        </h2>
        <p className="mb-8 max-w-lg text-sm text-gray-500 sm:text-base md:mb-16">
          Welcome to Just-Fix, your one-stop solution for finding trusted
          local professionals. Whether you need an electrician, plumber,
          painter, AC repair expert, or mechanic — we connect you with reliable
          service providers near you in just a few clicks. We created
          ServiceFinder to solve a common problem: the hassle of searching for
          skilled workers you can trust. Our platform makes it easy to browse,
          compare, and book services with verified professionals, all from the
          comfort of your home.
        </p>
        <div className="grid gap-8 md:grid-cols-2 md:gap-10">
          <img src="/src/assets/about.jpg" />
          <div className="flex flex-col gap-5 rounded-2xl border border-solid border-black p-10 sm:p-12">
            <h2 className="text-3xl font-bold md:text-5xl">Our Mission</h2>
            <p className="text-sm text-gray-500 sm:text-base">
            To empower every household and business with easy access to trustworthy and skilled service professionals. We aim to simplify the process of finding, comparing, and booking services, ensuring that our users can make informed decisions with confidence. By fostering a community of reliable service providers, we strive to enhance the quality of home and business maintenance, making it easier for everyone to keep their spaces in top condition.
            </p>
            <p>
           <span className="text-bold"> Why Choose Us?</span>
           <br/>
✅ Verified & Reviewed Service Providers<br/>

⚡ Fast Booking & Real-time Availability<br/>

🛡️ Transparent Pricing & Quality Service<br/>

💬 24/7 Support for All Your Needs<br/>

We’re committed to making home services hassle-free, safe, and affordable for everyone.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
