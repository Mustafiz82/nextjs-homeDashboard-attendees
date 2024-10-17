import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="h-60 w-full md:h-[470px] lg:h-[540px] relative ">
      <div className="ease-linear duration-500 flex ">
        <Image
          src="/images/APAN53_Banner-1130x650 1.png" width={1000} height={1000}
          className="min-w-full h-60 bg-black/80 sm:h-96 md:h-[540px] object-cover"
        />
      </div>
      <div className="h-60 absolute top-0 flex flex-col justify-center items-center left-0 w-full md:h-[470px]  lg:h-[540px] text-white bg-black/40">
            <h1 className="text-[27px] 2xl:text-4xl px-20 mx-auto text-center">On behalf of the Local Organizing Committee , we would like to extend our warmest welcome to all delegates and guests to the 53rd Asia Pacific Advanced Network (APAN53) Meeting to be held virtually on 7th  - 11th March 2022</h1>

            <div className="flex justify-center">
                <button className="px-6 m-5 bg-primary-400 rounded-md py-2">Orbit Mobile App</button>
            </div>
      </div>
    </div>
  );
};

export default Banner;
