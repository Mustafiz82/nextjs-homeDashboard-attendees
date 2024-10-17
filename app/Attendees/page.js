import { attendees } from "@/Public/Data/AttendeesData";

import React from "react";
import AttendeeLayout from "../Components/AttendeeLayout";
import AttendeeLayout1 from "../Components/AttendeeLayout1";
import AttendeeLayout2 from "../Components/AttendeeLayout2";

const page = () => {
  return (
    <div className="min-h-screen px-5 mx-auto my-5 max-w-[1000px]">
      <div className="space-y-8">
        <h1 className="text-xl p-5 bg-white rounded-lg font-medium ">All Attendees</h1>
        <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {attendees.map((attendee) => (
           <AttendeeLayout attendee={attendee}></AttendeeLayout>
         
          ))}
        </div>
        <div className="grid grid-cols-1 mt-10 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {attendees.map((attendee) => (
           <AttendeeLayout1 attendee={attendee}></AttendeeLayout1>
         
          ))}   
        </div>
        <div className="grid grid-cols-1 mt-10 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {attendees.map((attendee) => (
           <AttendeeLayout2 attendee={attendee}></AttendeeLayout2>
         
          ))}   
        </div>
      </div>
    </div>
  );
};

export default page;
