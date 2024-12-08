import React from "react";

const MainContent = () => {
  return (
    <div id="main-content" className="mx-10 relative flex">
      <div id="main-title-content">
        <h3
          className="text-[orangered] text-3xl font-bold  border-l-4 px-2"
          id="title-content"
        >
          Fish <span className="text-white">Farming</span>
        </h3>
        <h2 className="text-black text-5xl font-semibold " id="title-content">
          Sustainable Fisheries Managment
        </h2>
        <br />
        <p className="text-white w-auto text-xl font-bold ">
          Dynamic and results-driven professional with extensive expertise{" "}
          <br />
          in fish farming and aqua services.
          <br />
          Optimizing fish breeding techniques, and enhancing  water
          quality management. <br /> Committed to advancing the industry through
          innovative solutions <br /> and sustainable practices.
        </p>
        <br />
        <button className="text-white bg-[#F83130] py-2 px-3 font-semibold">
          Know More !
        </button>
      </div>
     
    </div>
  );
};

export default MainContent;
