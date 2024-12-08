import React, { useEffect, useState } from "react";
import MainContent from "./MainContent";
import { motion } from "framer-motion";

function BackgroundChanger() {
  return (
    <div
      className=" flex relative w-full h-auto   bg-cover bg-center transition-all duration-1000 "
      id="main"
    >
      <motion.div 
      initial={{x:-150, opacity:0}}
      whileInView={{x:0,opacity:1}}
      viewport={{once:true}}
      transition={{
        delay:.2,
        x:{type:"spring",stiffness:50},
        ease:"easeIn",
        duration:1,
      }}
      id="main-heading"
      className="  h-full ">
        <h1 className="flex flex-wrap pt-36 text-white text-8xl ml-10 font-bold">
          Dazzle<span className="text-[orangered] ">Agro</span>
        </h1>
        <br />
        <MainContent />
      </motion.div>

      <motion.div 
      initial={{x:150, opacity:0}}
      whileInView={{x:0, opacity:1}}
      viewport={{once:true}}
      transition={{
        delay:.2,
        x:{type:"spring", stiffness:50},
        ease:"easeIn",
        duration:1,
      }}
      className="flex flex-wrap relative mt-20 gap-11  ">
        <div 
        id="main-img1"
        className="h-96 w-80  mt-24 overflow-hidden rounded-xl">
          <img
            id="clip-path"
            className="w-full h-full mt-8 hover:scale-110 o transition-all duration-700 "
            src="https://as1.ftcdn.net/v2/jpg/08/23/42/76/1000_F_823427625_kJbtaS8F0jSFYVmrxmpYBdyWz3lF68HH.jpg"
            alt=""
          />
        </div>
        <div 
        id="main-img1"
        className=" mt-0 ">
          <div className="h-72 w-52 rounded-xl ">
            <img
              id="clip-path"
              className="h-full w-full  rounded-xl  hover:scale-110 o transition-all duration-700"
              src="https://as1.ftcdn.net/v2/jpg/06/56/89/00/1000_F_656890004_2S4sFq4mllfMxjEfUpvy69S6qp4uFK8y.jpg"
              alt=""
            />
          </div>
          <div className="h-60 w-52 mt-10 rounded-xl ">
            <img
              id="clip-path"
              className="h-full w-full  rounded-xl  hover:scale-110 o transition-all duration-700"
              src="https://as2.ftcdn.net/v2/jpg/07/42/65/93/1000_F_742659395_CUGnvNbgk3UcBpBdUYqD6pkI66tejFQd.jpg"
              alt=""
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default BackgroundChanger;
