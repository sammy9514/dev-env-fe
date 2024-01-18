import React from "react";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <div className="w-full h-[70px] flex justify-center gap-4 items-center ">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "border-b-2 border-b-orange-400" : ""
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          isActive ? "border-b-2 border-b-orange-400" : ""
        }
      >
        Contact
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive ? "border-b-2 border-b-orange-400" : ""
        }
      >
        About
      </NavLink>
    </div>
  );
};
