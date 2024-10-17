import React from "react";
import Image from "next/image";

const AttendeeLayout1 = ({ attendee }) => {
  return (
    <div key={attendee.id} className="bg-white px-4 md:px-2 p-2 rounded-md  space-y-2">
      <div className="flex  gap-4 items-center space-x-2">
        <Image
          src={attendee.imageUrl}
          alt={attendee.name}
          width={50} // Reduced image size
          height={50}
          className="rounded-lg"
        />
        <div>
          <h2 className="text-base font-medium">{attendee.name}</h2>{" "}
          <p className="text-gray-500 text-[10px]">
            {attendee.position} , {attendee.company}
          </p>{" "}
          <p className="text-gray-500 text-[10px]"></p>{" "}
        </div>
      </div>
      <div className="flex  flex-col   space-y-2">
        <button className="bg-primary-400 mt-5 w-full text-white py-1 rounded-sm text-sm">
          {" "}
          {/* Smaller padding */}
          Send Message
        </button>
        <button className="border border-primary-400 w-full text-primary-400  py-1 rounded-sm text-sm">
          {" "}
          {/* Smaller padding */}
          Bookmark
        </button>
      </div>
    </div>
  );
};

export default AttendeeLayout1;
