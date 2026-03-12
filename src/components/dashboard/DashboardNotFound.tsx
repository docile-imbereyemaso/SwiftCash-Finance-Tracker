import React from "react";
import { Link } from "react-router-dom";

const DashboardNotFound: React.FC = () => {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center">
      <h1 className="text-6xl font-bold text-gray-300">404</h1>
      <p className="text-2xl font-semibold text-gray-700 mt-4">
        Page Not Found
      </p>
      <p className="text-gray-500 mt-2 mb-6">
        The page you're looking for doesn't exist in your dashboard.
      </p>
      <Link
        to=".."
        className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
      >
        Go to Dashboard Home
      </Link>
    </div>
  );
};

export default DashboardNotFound;
