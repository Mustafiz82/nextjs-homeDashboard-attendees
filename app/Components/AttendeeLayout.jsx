import React from 'react';
import Image from "next/image";
const AttendeeLayout = ({attendee}) => {
    return (
        <div
        key={attendee.id}
        className="bg-white p-2 px-4 md:px-2 rounded-lg shadow-md space-y-2 w-full lg:max-w-xs mx-auto"
      >
        <div className="flex items-center space-x-2">
          <Image
            src={attendee.imageUrl}
            alt={attendee.name}
            width={40} // Adjusted size for better visibility
            height={40}
            className="rounded-full"
          />
          <div>
            <h2 className="text-sm font-medium">{attendee.name}</h2> {/* Adjusted font size */}
            <p className="text-gray-500 text-xs">{attendee.position}</p>
            <p className="text-gray-500 text-xs">{attendee.company}</p>
          </div>
        </div>
        <div className="flex justify-between space-x-2">
          <button className="bg-indigo-500 text-white px-2 py-1 rounded-sm text-xs w-full">
            Send Message
          </button>
          <button className="border border-indigo-500 text-indigo-500 px-2 py-1 rounded-sm text-xs w-full">
            Bookmark
          </button>
        </div>
      </div>
      
    );
};

export default AttendeeLayout;