import React, { useState } from "react";
import { data, foodData, medname } from "../../api";
import Democard from "./Democard";
import { motion } from "framer-motion";

const Fishes = () => {
  const [search, setsearch] = useState("");

  const democard = data
    .filter((cards) => {
      return search.toLowerCase() === ""
        ? cards
        : cards.name.toLowerCase().includes(search.toLowerCase());
    })
    .map((cards) => {
      return <Democard key={cards.id} img={cards.images} name={cards.name} />;
    });

  return (
    <>
      <h1 id="Aqua-species" className="flex justify-center text-7xl font-semibold text-[#6fbce6]">
        Aquatic Species
      </h1>
      <br />
      <div className="mb-3 md:w-1/2 mx-auto">
        <div className="relative mb-4 flex w-full flex-wrap items-stretch">
          <input
            type="search"
            className="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-4 text-lg font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
            placeholder="Search here"
            value={search}
            onChange={(e) => setsearch(e.target.value)}
          />
          <button
            className="relative z-[2] rounded-r border-2 border-primary px-8 py-2 text-lg font-semibold uppercase text-primary transition duration-150 ease-in-out"
            type="button"
            id="button-addon3"
          >
            Search
          </button>
        </div>
      </div>

      <motion.div
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: false }}
        transition={{
          delay: 0.1,
          x: { type: "spring", stiffness: 50 },
          ease: "easeIn",
          duration: 0.5,
        }}
        className="flex flex-wrap bg-[#F9F8F8] gap-11 justify-center mt-10 pb-10"
      >
        {democard.length > 0 ? (
          democard
        ) : (
          <>
            <div className="h-[18rem] w-1/2">
              <h1 className="text-6xl text-[#6fbce6] font-semibold">
                😔 Oops! No Match Found
              </h1>
            </div>
          </>
        )}
      </motion.div>

      <div>
        <div
          // src="./src/assests/backgroundvideo.mp4"
          
          // src="https://scontent.fdbd1-1.fna.fbcdn.net/v/t39.30808-6/451436294_122095359410394042_581827035417927654_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=QJ8dkhhK_bkQ7kNvgH5gdgH&_nc_ht=scontent.fdbd1-1.fna&oh=00_AYDZx02YlMaa0BwF2NnE4smhIYbTVgmIusSdHMPAhjl-yQ&oe=669A0C9F"
          id="fish-bg1"
          className=" flex relative h-72  mb-4 bg-[#6fbce6] text-white text-5xl font-semibold justify-center i"
        >
          <h1 id="Aqua-treat" className="flex relative items-center justify-center text-9xl ">
            Aqua Treats
          </h1>
        </div>
        <motion.div
          initial={{ y: 30, scale: 0.7, opacity: 0 }}
          whileInView={{ y: 0, scale: 1, opacity: 1 }}
          viewport={{ once: false }}
          transition={{
            delay: 0.1,
            x: { type: "spring", stiffness: 50 },
            ease: "easeIn",
            duration: 0.5,
          }}
          className="flex flex-wrap bg-[#F9F8F8] gap-11 justify-center mt-10 pb-10"
        >
          {foodData.map((items) => {
            return (
              <Democard key={items.id} img={items.images} name={items.name} />
            );
          })}
        </motion.div>
      </div>

      <div>
        <div
          id="fish-bg"
          className=" flex h-72 mb-4 relative bg-[#6fbce6] text-white text-5xl font-semibold justify-center "
        >
          <h1 id="Aqua-medi" className=" flex relative items-center justify-center text-9xl ">
            Aqua Medicare
          </h1>
        </div>
        <motion.div
          initial={{ y: 30, scale: 0.7, opacity: 0 }}
          whileInView={{ y: 0, scale: 1, opacity: 1 }}
          viewport={{ once: false }}
          transition={{
            delay: 0.1,
            x: { type: "spring", stiffness: 50 },
            ease: "easeIn",
            duration: 0.5,
          }}
          className="flex flex-wrap bg-[#F9F8F8] gap-11 justify-center mt-10 pb-10"
        >
          {medname.map((items) => {
            return (
              <Democard key={items.id} img={items.images} name={items.name} />
            );
          })}
        </motion.div>
      </div>
    </>
  );
};

export default Fishes;
