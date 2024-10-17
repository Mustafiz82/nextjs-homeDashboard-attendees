import Image from "next/image";
import React from "react";

const Sponsors = () => {
  const platinumImagePath = [
    "/images/lenovo.png",
    "/images/BDIU.png",
    "/images/Pakra.png",
  ];
  const goldImagePath = [
    "/images/RBC logo.png",
    "/images/Microsoft.png",
    "/images/LG.png",
  ];

  return (
    <div className=" bg-white mt-5 ">
      <h1 className="text-xl font-semibold p-5 "> Sponsors</h1>
      <h1 className="text-lg text-center">Platinum</h1>
      <div className="grid m-8 gap-10 grid-cols-3">
        {platinumImagePath?.map((item) => (
          <div className="flex w-full border border-black/60 h-32 rounded-lg justify-between items-center">
            <Image
              height={100}
              width={1000}
              className=" p-3 py-5"
              src={item}
            ></Image>
          </div>
        ))}
      </div>
      <h1 className="text-lg text-center">Bronze</h1>
      <div className="grid m-8 gap-10 grid-cols-3">
        {goldImagePath?.map((item, index) => (
          <div className="flex justify-center w-full border border-black/60 h-32 rounded-lg items-center">
          <Image
            height={100}
            width={1000}
            className=" h-auto w-auto scale-150"
            src={item}
          ></Image>
        </div>
        ))}
      </div>
    </div>
  );
};

export default Sponsors;
