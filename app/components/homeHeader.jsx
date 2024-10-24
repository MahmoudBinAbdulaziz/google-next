import NavLink from "./navLink";
import React from "react";
import { TbGridDots } from "react-icons/tb";
function HomeHeader() {
  return (
    <header className="flex justify-end text-sm p-5">
      <div className=" flex space-x-4 items-center">
        <NavLink href={"https://mail.google.com/mail/"}>Gmail</NavLink>
        <NavLink href={"https://images.google.com/"}>Images</NavLink>
        <TbGridDots className="bg-transparent hover:bg-gray-200 rounded-full text-4xl p-2" />
        <button className=" text-white bg-blue-500 px-6 py-2 rounded-md font-medium hover:shadow-md hover:brightness-105 transition-shadow">
          Sign in{" "}
        </button>
      </div>
    </header>
  );
}

export default HomeHeader;
