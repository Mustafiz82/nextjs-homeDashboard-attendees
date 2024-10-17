import React from "react";
import { IoBookmarkOutline } from "react-icons/io5";
import { AiOutlineAim } from "react-icons/ai";
import { AiOutlineMessage } from "react-icons/ai";

import Image from "next/image";
const AttendeeLayout2 = ({ attendee }) => {
  return (
    <div key={attendee.id} className="bg-white p-2 rounded-md  space-y-2">
      <div className="flex flex-col   gap-4 items-center space-x-2">
        <div className="border-8 rounded-full border-[#f4f5fe]">
          <Image
            src={attendee.imageUrl}
            alt={attendee.name}
            width={50} // Reduced image size
            height={50}
            className="rounded-full "
          />
        </div>
        <div>
          <h2 className="text-base font-medium">{attendee.name}</h2>{" "}
          {/* Smaller font size */}
          <p className="text-gray-500 text-[10px]">
            {attendee.position} , {attendee.company}
          </p>{" "}
          {/* Smaller font size */}
          <p className="text-gray-500 text-[10px]"></p>{" "}
          {/* Smaller font size */}
        </div>
      </div>
      <div className="flex justify-center space-x-2">
        <button className="  border-primary-400 border-2 text-primary-400  flex flex-col justify-center items-center  px-2 py-1 rounded-md text-sm">
        <IoBookmarkOutline className="text-xl font-bold" />

          <span className="text-[10px]">Bookmark</span>
        </button>
        <button className=" border-primary-400 border-2 px-1 text-primary-400  flex flex-col justify-center items-center   py-1 rounded-md   text-sm">
          <AiOutlineAim className="text-xl font-bold" />

          <span className="text-[10px]">view Profile</span>
        </button>
        <button className=" border-primary-400 border-2 text-primary-400  flex flex-col justify-center items-center  px-2 py-1 rounded-md   text-sm">
        <AiOutlineMessage className="text-xl font-bold" />{" "}

        <span className="text-[10px]">message</span>
        </button>
        
      </div>
    </div>
  );
};

export default AttendeeLayout2;
