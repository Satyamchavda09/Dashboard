/** @format */

import React from "react";

function Navbar({ menu }) {
  return (
    <div className="bg-gray-900 h-fit w-full flex items-center">
      <i
        onClick={() => menu()}
        className="ri-menu-line text-xl text-white h-full py-2 px-4 flex lg:hidden "></i>
      <h1 className="lg:text-2xl text-white px-2 flex justify-center items-center">
        Pluto
      </h1>
      <div className="flex justify-end items-center w-full">
        <i className="ri-notification-line text-white text-[18px] py-2 px-2"></i>
        <i className="ri-question-fill text-white text-[18px] py-2 px-2"></i>
        <i className="ri-mail-line text-white text-[18px] py-2 px-2"></i>
        <div className="bg-amber-500 flex gap-2 items-center px-2 lg:px-4 py-2">
          <img
            className="rounded-full w-10"
            src="https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGVyc29uJTIwcHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
            alt=""
          />
          <h1 className="text-[16px] hidden lg:flex pr-2">John David </h1>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
