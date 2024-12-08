import React from "react";
import { motion } from "framer-motion";

const Equipments = () => {
  return (
    <>
      <h1 className="flex justify-center text-6xl font-semibold text-[#6fbce6]">
        Equipments
      </h1>
      <div className="flex flex-wrap bg-[#F9F8F8] gap-11 justify-center   mt-10 pb-10 ">
        <motion.div
          initial={{ x:60, opacity: 0 }}
          whileInView={{ x:0,  opacity: 1 }}
          viewport={{ once: false }}
          transition={{
            delay: 0.1,
            x: { type: "spring", stiffness: 50 },
            ease: "easeIn",
            duration: 1,
          }}
          className="h-[27rem] w-72 bg-[#CAE8F8] rounded-lg hover:shadow-xl"
        >
          <div className="h-[20rem] w-full rounded-lg bg-white overflow-hidden">
            <img
              className="h-full w-full hover:scale-110 transition-all "
              src="https://i.imgur.com/QcMrkaV.jpg"
              alt=""
            />
          </div>
          <div className=" pl-4 mt-2">
            <h2 className=" text-2xl font-semibold ">Diesel Water Pump</h2>
          </div>
        </motion.div>

        <motion.div 
        initial={{ x:-60, opacity: 0 }}
        whileInView={{ x:0,  opacity: 1 }}
        viewport={{ once: false }}
        transition={{
          delay: 0.1,
          x: { type: "spring", stiffness: 50 },
          ease: "easeIn",
          duration: 1,
        }}
        className="h-[27rem] w-72 bg-[#CAE8F8] rounded-lg hover:shadow-xl">
          <div className="h-[20rem] w-full rounded-lg bg-white  overflow-hidden">
            <img
              className="h-full w-full hover:scale-110 transition-all"
              src="https://i.imgur.com/CvFiwlq.jpg"
              alt=""
            />
          </div>
          <div className=" flex justify-center ">
            <h2 className="text-2xl font-semibold ">Electric Water Pump</h2>
          </div>
        </motion.div>

        <motion.div 
        initial={{ x:60, opacity: 0 }}
        whileInView={{ x:0,  opacity: 1 }}
        viewport={{ once: false }}
        transition={{
          delay: 0.1,
          x: { type: "spring", stiffness: 50 },
          ease: "easeIn",
          duration: 1,
        }}
        className="h-[27rem] w-72 bg-[#CAE8F8] rounded-lg hover:shadow-xl">
          <div className="h-[20rem] w-full rounded-lg bg-white overflow-hidden">
            <img
              className="h-full w-full hover:scale-110 transition-all"
              src="https://i.imgur.com/EAFxKG3.jpgE"
              alt=""
            />
          </div>
          <div className=" flex justify-center">
            <h2 className="text-2xl font-semibold ">Under Water Air Blower</h2>
          </div>
        </motion.div>

        <motion.div 
        initial={{ x:-60, opacity: 0 }}
        whileInView={{ x:0,  opacity: 1 }}
        viewport={{ once: false }}
        transition={{
          delay: 0.1,
          x: { type: "spring", stiffness: 50 },
          ease: "easeIn",
          duration: 1,
        }}
        className="h-[27rem] w-72 bg-[#CAE8F8] rounded-lg hover:shadow-xl">
          <div className="h-[20rem] w-full bg-white rounded-lg overflow-hidden">
            <img
              className="h-full w-full hover:scale-110 transition-all"
              src="https://i.imgur.com/g1RVNPi.jpg"
              alt=""
            />
          </div>
          <div className=" flex justify-center">
            <h2 className="text-2xl font-semibold ">Pond Liver</h2>
          </div>
        </motion.div>

        <motion.div 
        initial={{ x:60, opacity: 0 }}
        whileInView={{ x:0,  opacity: 1 }}
        viewport={{ once: false }}
        transition={{
          delay: 0.1,
          x: { type: "spring", stiffness: 50 },
          ease: "easeIn",
          duration: 1,
        }}
        className="h-[27rem] w-72 bg-[#CAE8F8] rounded-lg hover:shadow-xl">
          <div className="h-[20rem] w-full bg-white rounded-lg overflow-hidden">
            <img
              className="h-full w-full hover:scale-110 transition-all"
              src="https://i.imgur.com/PMA0sBp.jpg"
              alt=""
            />
          </div>
          <div className=" flex justify-center">
            <h2 className="text-2xl font-semibold ">Thermometer</h2>
          </div>
        </motion.div>

        <motion.div 
        initial={{ x:-60, opacity: 0 }}
        whileInView={{ x:0,  opacity: 1 }}
        viewport={{ once: false }}
        transition={{
          delay: 0.1,
          x: { type: "spring", stiffness: 50 },
          ease: "easeIn",
          duration: 1,
        }}
        className="h-[27rem] w-72 bg-[#CAE8F8] rounded-lg hover:shadow-xl">
          <div className="h-[20rem] w-full rounded-lg bg-white overflow-hidden">
            <img
              className="h-full w-full hover:scale-110 transition-all"
              src="https://i.imgur.com/rZj1Ejk.jpg"
              alt=""
            />
          </div>

          <div className=" flex justify-center">
            <h2 className="text-2xl font-semibold ">WaterTester</h2>
          </div>
        </motion.div>

        <motion.div
        initial={{ x:60, opacity: 0 }}
        whileInView={{ x:0,  opacity: 1 }}
        viewport={{ once: false }}
        transition={{
          delay: 0.1,
          x: { type: "spring", stiffness: 50 },
          ease: "easeIn",
          duration: 1,
        }}
        className="h-[27rem] w-72 bg-[#CAE8F8] rounded-lg hover:shadow-xl">
          <div className="h-[20rem] w-full bg-white rounded-lg overflow-hidden">
            <img
              className="h-full w-full hover:scale-110 transition-all"
              src="https://i.imgur.com/T3Jzt7w.jpg"
              alt=""
            />
          </div>
          <div className=" flex justify-center">
            <h2 className="text-2xl font-semibold ">Aerators</h2>
          </div>
        </motion.div>

        <motion.div
        initial={{ x:-60, opacity: 0 }}
        whileInView={{ x:0,  opacity: 1 }}
        viewport={{ once: false }}
        transition={{
          delay: 0.1,
          x: { type: "spring", stiffness: 50 },
          ease: "easeIn",
          duration: 1,
        }}
        className="h-[27rem] w-72 bg-[#CAE8F8] rounded-lg  hover:shadow-xl">
          <div className="h-[20rem] w-full bg-white rounded-lg overflow-hidden">
            <img
              className="h-full w-full hover:scale-110 transition-all"
              src="https://i.imgur.com/hP2mthj.jpg"
              alt=""
            />
          </div>
          <div className=" flex justify-center">
            <h2 className="text-2xl font-semibold ">Hand Digger</h2>
          </div>
        </motion.div>

        <motion.div 
        initial={{ x:60, opacity: 0 }}
        whileInView={{ x:0,  opacity: 1 }}
        viewport={{ once: false }}
        transition={{
          delay: 0.1,
          x: { type: "spring", stiffness: 50 },
          ease: "easeIn",
          duration: 1,
        }}
        className="h-[27rem] w-72 bg-[#CAE8F8] rounded-lg hover:shadow-xl">
          <div className="h-[20rem] w-full rounded-lg bg-white overflow-hidden">
            <img
              className="h-full w-full hover:scale-110 transition-all"
              src="https://i.imgur.com/b7A5UXj.jpgD"
              alt=""
            />
          </div>
          <div className=" flex justify-center">
            <h2 className="text-2xl font-semibold ">Oxygen Pipe</h2>
          </div>
        </motion.div>

        <motion.div 
        initial={{ x:-60, opacity: 0 }}
        whileInView={{ x:0,  opacity: 1 }}
        viewport={{ once: false }}
        transition={{
          delay: 0.1,
          x: { type: "spring", stiffness: 50 },
          ease: "easeIn",
          duration: 1,
        }}
        className="h-[27rem] w-72 bg-[#CAE8F8] rounded-lg hover:shadow-xl">
          <div className="h-[20rem] w-full rounded-lg bg-white overflow-hidden">
            <img
              className="h-full w-full hover:scale-110 transition-all"
              src="https://i.imgur.com/LVgDDt6.jpg"
              alt=""
            />
          </div>
          <div className=" flex justify-center">
            <h2 className="text-2xl font-semibold ">Water Filter</h2>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Equipments;
