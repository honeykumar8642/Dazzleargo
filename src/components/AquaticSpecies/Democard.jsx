import React from "react";

const Democard = ({ img, name, rate }) => {
  return (
    <div className="h-[25rem] w-72 bg-[#CAE8F8] rounded-lg hover:shadow-xl ">
      <div className="h-[18rem] w-full rounded-t-lg bg-white overflow-hidden">
        <img
          className="p-1  h-full w-full hover:scale-110 transition-all "
          src={img}
          alt=""
        />
      </div>
      <div className=" pl-4 pt-4">
        <h2 className=" text-lg font-semibold ">{name}</h2>
        <h2>Fish seeds</h2>
        <h2 className=" ">{rate}</h2>
      </div>
    </div>
  );
};

export default Democard;
