import React from "react";
import TransactionCard from "../ui/TransactionCard";

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-2 overflow-hidden">
      <section className="bg-white p-6 rounded-2xl shadow-sm border border-slate-300/50 flex items-center gap-6">
        <img
          src="avatar.jpg"
          alt="Profile"
          className="w-20 h-20 rounded-full object-cover border-2 border-indigo-100 shadow-md"
        />
        <div className="flex flex-col gap-y-4">
          <small className="text-slate-700 font-semibold">
            Hey 👋 John Doe
          </small>
          <small className="text-gray-500">johnDoe@gmail.com</small>
        </div>
      </section>
      <section className="bg-white p-6 rounded-2xl shadow-sm border border-indigo-500">
        <h3 className="text-lg font-bold text-slate-800 mb-2">
          SwiftCash Finance Tracker overview
        </h3>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <TransactionCard title="Total Income" value={50000} type="income" />
        <TransactionCard title="Total Expenses" value={4320} type="expense" />
      </section>
    </div>
  );
};

export default Dashboard;
