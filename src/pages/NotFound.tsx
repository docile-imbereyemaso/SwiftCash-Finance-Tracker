import React from "react";
import { Link } from "react-router-dom";

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 p-6 text-center">
      <div className="max-w-md w-full bg-white p-10 rounded-2xl shadow-xl border border-slate-100">
        <h1 className="text-8xl font-black text-indigo-600 mb-4">404</h1>
        <h2 className="text-2xl font-bold text-slate-800 mb-2">
          Page Not Found
        </h2>
        <p className="text-slate-500 mb-8">
          The page you're trying to reach doesn't exist.
        </p>

        <Link
          to="/"
          className="inline-block w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-all active:scale-[0.98]"
        >
          Return to SwiftCash Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
