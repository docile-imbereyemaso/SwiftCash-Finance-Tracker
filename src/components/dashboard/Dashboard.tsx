import React from "react";
import TransactionCard from "../ui/TransactionCard";

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-8">
      <section className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-6">
        <img
          src="avatar.jpg"
          alt="Profile"
          className="w-20 h-20 rounded-full object-cover border-2 border-indigo-100 shadow-md"
        />
      </section>
      <section className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
        <h3 className="text-lg font-bold text-slate-800 mb-2">
          SwiftCash Finance Tracker
        </h3>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <TransactionCard title="Total Income" value={50000} />
        <TransactionCard title="Total Expenses" value={4320} />

        <div className="bg-emerald-50 p-8 rounded-2xl border border-emerald-100">
          <h4 className="text-emerald-800 font-semibold mb-1">Total Income</h4>
          <p className="text-4xl font-black text-emerald-900">$12,450.00</p>
        </div>
        <div className="bg-rose-50 p-8 rounded-2xl border border-rose-100">
          <h4 className="text-rose-800 font-semibold mb-1">Total Expenses</h4>
          <p className="text-4xl font-black text-rose-900">$4,320.00</p>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
