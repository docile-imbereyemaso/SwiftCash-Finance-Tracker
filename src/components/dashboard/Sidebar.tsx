import React from "react";
import { Link, NavLink } from "react-router-dom";
import { navLinks } from "../../constant";
import type { SideBarProps } from "../../types";

const Sidebar: React.FC<SideBarProps> = ({ setIsSidebarOpen }) => {
  return (
    <aside className="w-64 px-8 bg-white border-r border-slate-200 min-h-screen p-6 flex flex-col">
      <div className="flex items-center gap-3 mb-10">
        <div className="w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold text-xl shadow-md">
          JD
        </div>
        <div>
          <h3 className="font-bold text-slate-800">John Doe</h3>
        </div>
      </div>
      <nav className="flex flex-col gap-2">
        {navLinks.map((link, index) => (
          <NavLink
            onClick={() => setIsSidebarOpen((prevState) => !prevState)}
            key={link.name}
            to={link.path}
            end
            className={({ isActive }) =>
              `px-4 py-3 rounded-lg font-medium transition-all ${
                index === navLinks.length - 1 ? "mt-auto " : ""
              } ${
                isActive
                  ? "bg-indigo-500 text-indigo-50"
                  : "text-slate-600 hover:bg-slate-50"
              }`
            }
          >
            {link.name}
          </NavLink>
        ))}
      </nav>
      <div className="flex items-center min-h-screen">
        <Link
          to="logout"
          className="inline-block bg-red-800 text-gray-50 font-semibold p-3 w-full rounded-md hover:bg-red-500/50 transition hover:text-gray-700"
        >
          Logout
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;
