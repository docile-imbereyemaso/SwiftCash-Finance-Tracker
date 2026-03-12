import React from "react";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
const RootLayout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <div className="flex flex-1">
        <main className="flex-1 p-6 md:p-10">
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default RootLayout;
