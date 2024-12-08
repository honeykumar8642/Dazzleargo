import React from "react";
import{motion} from "framer-motion";

const Trading = () => {
  return (
    <>
      <h1 className="flex justify-center text-7xl font-semibold text-[#6fbce6]">
        Trading
      </h1>
      <div className="flex flex-wrap bg-[#F9F8F8] gap-11 justify-center   mt-10 pb-10 ">
        <motion.div
        initial={{ x:40, opacity: 0 }}
        whileInView={{ x:0,  opacity: 1 }}
        viewport={{ once: false }}
        transition={{
          delay: 0.1,
          x: { type: "spring", stiffness: 50 },
          ease: "easeIn",
          duration: 0.5,
        }}
        className="h-[27rem] w-72 bg-[#CAE8F8] rounded-lg hover:shadow-xl">
          <div className="h-[20rem] w-full rounded-lg bg-white overflow-hidden">
            <img
              className="h-full w-full hover:scale-110 transition-all "
              src="https://i.imgur.com/34Qzha1.jpg"
              alt="rohu"
            />
          </div>
          <div className=" pl-4 mt-2">
            <h2 className=" text-2xl font-semibold ">Rohu</h2>
          </div>
        </motion.div>

        <motion.div
        initial={{ x:-40, opacity: 0 }}
        whileInView={{ x:0,  opacity: 1 }}
        viewport={{ once: false }}
        transition={{
          delay: 0.1,
          x: { type: "spring", stiffness: 50 },
          ease: "easeIn",
          duration: 0.5,
        }}
        className="h-[27rem] w-72 bg-[#CAE8F8] rounded-lg hover:shadow-xl">
          <div className="h-[20rem] w-full rounded-lg bg-white  overflow-hidden">
            <img
              className="h-full w-full hover:scale-110 transition-all"
              src="https://i.imgur.com/F2Ale2L.jpg"
              alt="common carp"
            />
          </div>
          <div className=" flex justify-center ">
            <h2 className="text-2xl font-semibold ">Common Carp</h2>
          </div>
        </motion.div>

        <motion.div
        initial={{ x:40, opacity: 0 }}
        whileInView={{ x:0,  opacity: 1 }}
        viewport={{ once: false }}
        transition={{
          delay: 0.1,
          x: { type: "spring", stiffness: 50 },
          ease: "easeIn",
          duration: 0.5,
        }}
        className="h-[27rem] w-72 bg-[#CAE8F8] rounded-lg hover:shadow-xl">
          <div className="h-[20rem] w-full rounded-lg bg-white overflow-hidden">
            <img
              className="h-full w-full hover:scale-110 transition-all"
              src="https://i.imgur.com/legdsJb.png"
              alt="Singhi"
            />
          </div>
          <div className=" flex justify-center">
            <h2 className="text-2xl font-semibold ">Singhi</h2>
          </div>
        </motion.div>

        <motion.div
        initial={{ x:-40, opacity: 0 }}
        whileInView={{ x:0,  opacity: 1 }}
        viewport={{ once: false }}
        transition={{
          delay: 0.1,
          x: { type: "spring", stiffness: 50 },
          ease: "easeIn",
          duration: 0.5,
        }}
        className="h-[27rem] w-72 bg-[#CAE8F8] rounded-lg hover:shadow-xl">
          <div className="h-[20rem] w-full bg-white rounded-lg overflow-hidden">
            <img
              className="h-full w-full hover:scale-110 transition-all"
              src="https://i.imgur.com/ie9bkil.png"
              alt="Gulshan Tangra"
            />
          </div>
          <div className=" flex justify-center">
            <h2 className="text-2xl font-semibold ">Gulshan Tangra</h2>
          </div>
        </motion.div>

        <motion.div 
        initial={{ x:40, opacity: 0 }}
        whileInView={{ x:0,  opacity: 1 }}
        viewport={{ once: false }}
        transition={{
          delay: 0.1,
          x: { type: "spring", stiffness: 50 },
          ease: "easeIn",
          duration: 0.5,
        }}
        className="h-[27rem] w-72 bg-[#CAE8F8] rounded-lg hover:shadow-xl">
          <div className="h-[20rem] w-full bg-white rounded-lg overflow-hidden">
            <img
              className="h-full w-full hover:scale-110 transition-all"
              src="https://i.imgur.com/zeOxQgF.jpg"
              alt="Catla"
            />
          </div>
          <div className=" flex justify-center">
            <h2 className="text-2xl font-semibold ">Catla</h2>
          </div>
        </motion.div>

        <motion.div 
        initial={{ x:-40, opacity: 0 }}
        whileInView={{ x:0,  opacity: 1 }}
        viewport={{ once: false }}
        transition={{
          delay: 0.1,
          x: { type: "spring", stiffness: 50 },
          ease: "easeIn",
          duration: 0.5,
        }}
        className="h-[27rem] w-72 bg-[#CAE8F8] rounded-lg hover:shadow-xl">
          <div className="h-[20rem] w-full rounded-lg bg-white overflow-hidden">
            <img
              className="h-full w-full hover:scale-110 transition-all"
              src="https://i.imgur.com/LfAqveX.jpg"
              alt="Silver Carp"
            />
          </div>

          <div className=" flex justify-center">
            <h2 className="text-2xl font-semibold ">Silver Carp</h2>
          </div>
        </motion.div>

        <motion.div 
        initial={{ x:40, opacity: 0 }}
        whileInView={{ x:0,  opacity: 1 }}
        viewport={{ once: false }}
        transition={{
          delay: 0.1,
          x: { type: "spring", stiffness: 50 },
          ease: "easeIn",
          duration: 0.5,
        }}
        className="h-[27rem] w-72 bg-[#CAE8F8] rounded-lg hover:shadow-xl">
          <div className="h-[20rem] w-full bg-white rounded-lg overflow-hidden">
            <img
              className="h-full w-full hover:scale-110 transition-all"
              src="https://i.imgur.com/ZX3JJht.jpg"
              alt="Amur Common Carp"
            />
          </div>
          <div className=" flex justify-center">
            <h2 className="text-2xl font-semibold ">Amur Common Carp</h2>
          </div>
        </motion.div>

        <motion.div
        initial={{ x:-40, opacity: 0 }}
        whileInView={{ x:0,  opacity: 1 }}
        viewport={{ once: false }}
        transition={{
          delay: 0.1,
          x: { type: "spring", stiffness: 50 },
          ease: "easeIn",
          duration: 0.5,
        }}
        className="h-[27rem] w-72 bg-[#CAE8F8] rounded-lg  hover:shadow-xl">
          <div className="h-[20rem] w-full bg-white rounded-lg overflow-hidden">
            <img
              className="h-full w-full hover:scale-110 transition-all"
              src="https://i.imgur.com/HLLAj0b.jpg"
              alt="Grass Carp"
            />
          </div>
          <div className=" flex justify-center">
            <h2 className="text-2xl font-semibold ">Grass Carp</h2>
          </div>
        </motion.div>

        <motion.div 
        initial={{ x:40, opacity: 0 }}
        whileInView={{ x:0,  opacity: 1 }}
        viewport={{ once: false }}
        transition={{
          delay: 0.1,
          x: { type: "spring", stiffness: 50 },
          ease: "easeIn",
          duration: 0.5,
        }}
        className="h-[27rem] w-72 bg-[#CAE8F8] rounded-lg hover:shadow-xl">
          <div className="h-[20rem] w-full rounded-lg bg-white overflow-hidden">
            <img
              className="h-full w-full hover:scale-110 transition-all"
              src="https://i.imgur.com/08BWWtz.jpg"
              alt="Black Carp"
            />
          </div>
          <div className=" flex justify-center">
            <h2 className="text-2xl font-semibold ">Black Carp</h2>
          </div>
        </motion.div>

        <motion.div
        initial={{ x:-40, opacity: 0 }}
        whileInView={{ x:0,  opacity: 1 }}
        viewport={{ once: false }}
        transition={{
          delay: 0.1,
          x: { type: "spring", stiffness: 50 },
          ease: "easeIn",
          duration: 0.5,
        }}
        className="h-[27rem] w-72 bg-[#CAE8F8] rounded-lg hover:shadow-xl">
          <div className="h-[20rem] w-full rounded-lg bg-white overflow-hidden">
            <img
              className="h-full w-full hover:scale-110 transition-all"
              src="https://i.imgur.com/9Pbi3nI.jpg"
              alt="Puti"
            />
          </div>
          <div className=" flex justify-center">
            <h2 className="text-2xl font-semibold ">Puti</h2>
          </div>
        </motion.div>

        <motion.div 
        initial={{ x:40, opacity: 0 }}
        whileInView={{ x:0,  opacity: 1 }}
        viewport={{ once: false }}
        transition={{
          delay: 0.1,
          x: { type: "spring", stiffness: 50 },
          ease: "easeIn",
          duration: 0.5,
        }}
        className="h-[27rem] w-72 bg-[#CAE8F8] rounded-lg hover:shadow-xl">
          <div className="h-[20rem] w-full rounded-lg bg-white overflow-hidden">
            <img
              className="h-full w-full hover:scale-110 transition-all"
              src="https://i.imgur.com/k2m6ILK.jpg"
              alt="Scampi Prawn"
            />
          </div>
          <div className=" flex justify-center">
            <h2 className="text-2xl font-semibold ">Scampi Prawn</h2>
          </div>
        </motion.div>
      </div>
      
    </>
  );
};

export default Trading;
