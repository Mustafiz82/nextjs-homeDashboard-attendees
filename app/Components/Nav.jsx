"use client"
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const Nav = () => {
    const pathname = usePathname();

  return (
    <div className="bg-primary-200">
      <ul className="flex text-lg md:text-xl 2xl:text-2xl  justify-center items-center gap-5 p-5">  
        <li>
          <Link
            href="/"
            className={` ${pathname == "/" ? "text-primary" : ""} `}
          >
            {" "}
            Home Dashboard
          </Link>
        </li>
        <li>
          <Link
            href="/Attendees"
            className={` ${pathname == "/Attendees" ? "text-primary" : ""} `}
          >
            {" "}
            All Attendees
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
