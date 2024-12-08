import React from "react";
import InfiniteScroll from "./InfiniteScroll";

const Services = () => {
  return (
    <div className="services">
      <h1
        className="flex justify-center text-4xl md:text-5xl lg:text-7xl font-semibold text-white"
        id="heading"
      >
        Our Services
      </h1>

      <InfiniteScroll />

      <div className="flex flex-col lg:flex-row justify-between pt-10 items-center">
        <div
          className="h-80 p-2 w-full lg:w-1/4 bg-white lg:ml-20 mb-4 lg:mb-0"
          id="services-content-animate-left"
        >
          <img
            src="https://i.imgur.com/4x0wrAd.jpg"
            alt="tank"
            className=" h-full w-full object-cover"
          />
        </div>

        <div className="flex w-full lg:w-1/4 lg:mr-20 items-center justify-center px-4 lg:px-0">
          <p className="text-base md:text-lg lg:text-xl font-semibold text-center lg:text-left">
            We prioritize the health and growth of your fish by providing fresh
            and clear water tanks. Our state-of-the-art filtration systems
            ensure that water quality is consistently optimal, promoting a
            healthy environment for fish to thrive. Clean water reduces stress
            and disease, enhancing growth rates and overall fish vitality. Trust
            us to deliver the best water conditions, helping you achieve high
            yields and healthy, vibrant fish.
          </p>
        </div>
      </div>

      <div id="cont-2" className="flex flex-col lg:flex-row justify-between pt-10 border-t-2 border-white mt-4 items-center">
        <div className="flex h-80 w-full lg:w-1/4 lg:ml-20 mb-4 lg:mb-0 items-center justify-center px-4 lg:px-0">
          <p className="text-base md:text-lg lg:text-xl font-semibold text-center lg:text-left">
            Discover our top-quality fish for both culinary delights and fish
            farming success. We provide premium fish varieties for consumption
            and superior breeding stock for optimal growth and health. Explore
            our selection today and experience the best in fish quality and
            nutrition.
          </p>
        </div>
        <div
          className="h-80 p-2 w-full lg:w-1/4 bg-white lg:mr-20"
          id="services-content-animate-right"
        >
          <img
            
            src="https://i.imgur.com/z8YYJqU.jpg"
            alt="fishes"
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-between pt-10 border-t-2 border-white mt-4 items-center">
        <div
          className="h-80 p-2  w-full lg:w-1/4 bg-white lg:ml-20 mb-4 lg:mb-0"
          id="services-content-animate-left"
        >
          <img
            
            src="https://i.imgur.com/ama9Zwn.jpg"
            alt="tank"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex h-80 w-full lg:w-1/4 lg:mr-20 items-center justify-center px-4 lg:px-0">
          <p className="text-base md:text-lg lg:text-xl font-semibold text-center lg:text-left">
            A fish is only as good as the water it lives in. At the core of
            MainStream’s business is one of the most extraordinary and pristine
            water sources anywhere in the world. We utilize state-of-the-art
            purification processes to remove contaminants and ensure the highest
            water quality.Our water sourcing methods are environmentally
            friendly, ensuring the preservation of natural water resources.
          </p>
        </div>
      </div>

      <div id="cont-2" className="flex flex-col lg:flex-row justify-between pt-10 border-t-2 border-white mt-4 items-center">
        <div className="flex w-full lg:w-1/4 lg:ml-20 mb-4 lg:mb-0 items-center justify-center px-4 lg:px-0">
          <p className="text-base md:text-lg lg:text-xl font-semibold text-center lg:text-left">
            Proper fish nutrition is essential for growth, health, and
            productivity. Our fish feeding foods include high-quality pellets,
            nutrient-rich flakes, and premium live or frozen options like brine
            shrimp and bloodworms. We offer species-specific and life-stage
            appropriate feeds, fortified with essential proteins, fats,
            vitamins, and minerals to boost immunity and enhance coloration.
            Explore our range today and see the difference quality nutrition can
            make.{" "}
          </p>
        </div>
        <div
          className="h-80 p-2  w-full lg:w-1/4 bg-white lg:mr-20"
          id="services-content-animate-right"
        >
          <img
            src="https://i.imgur.com/2bSgv5e.jpg"
            alt="fishes"
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-between pt-10 border-t-2 border-white mt-4 items-center pb-4">
        <div
          className="h-80 p-2 w-full lg:w-1/4 bg-white lg:ml-20 mb-4 lg:mb-0"
          id="services-content-animate-left"
        >
          <img
            src="https://i.imgur.com/JkwBVSg.jpg"
            alt="tank"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex h-80 w-full lg:w-1/4 lg:mr-20 items-center justify-center px-4 lg:px-0">
          <p className="text-base md:text-lg lg:text-xl font-semibold text-center lg:text-left">
            In indoor aquaculture, fish are raised in water units constructed
            using simple plastic containers, aquariums, fish tanks, or tubs
            filled with tap water. This method is an excellent way to create an
            indoor fish farm. The best part of indoor farming is its
            scalability; it can be done on any scale, large or small, depending
            on the size of your available space.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;