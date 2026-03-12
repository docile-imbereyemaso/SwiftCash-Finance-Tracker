import React from "react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-6 mt-auto border-t border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center space-x-2">
            <span className="text-lg font-bold text-indigo-600 tracking-tight">
              SwiftCash
            </span>
            <span className="text-slate-400 hidden sm:inline">|</span>
            <span className="text-sm font-medium text-slate-500">
              Finance Tracker
            </span>
            <span className="text-slate-400 hidden sm:inline">|</span>
            <span className="text-sm font-medium text-slate-500">
              Proudly developed by Docile Imbereyemaso
            </span>
          </div>
          <div className="text-sm text-slate-400">
            &copy; {currentYear} All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
