import React from "react";
import { NavLink } from "react-router-dom";
import { navLinks } from "../../constant";
import type { SideBarProps } from "../../types";

const Sidebar: React.FC<SideBarProps> = ({ setIsSidebarOpen }) => {
  return (
    <aside className="w-64 bg-white border-r border-slate-200 min-h-screen p-6 flex flex-col">
      <div className="flex items-center gap-3 mb-10">
        <div className="w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold text-xl shadow-md">
          JD
        </div>
        <div>
          <h3 className="font-bold text-slate-800">John Doe</h3>
          <p className="text-xs text-slate-400">Pro Account</p>
        </div>
      </div>
      <nav className="flex flex-col gap-2 ">
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
    </aside>
  );
};

export default Sidebar;
