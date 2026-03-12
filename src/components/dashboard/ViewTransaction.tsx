import React from "react";
import { useParams, Link } from "react-router-dom";

const ViewTransaction: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  // In a real app, use a loader to fetch this data
  const transaction = {
    id: id,
    description: "Freelance Work",
    amount: 800,
    type: "income",
    category: "Salary",
    date: "2024-03-10",
    currency: "EUR",
  };

  return (
    <div className="max-w-3xl mx-auto p-8">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold text-slate-800">
          Transaction Details
        </h2>
        <Link
          to="/dashboard/ledger"
          className="text-indigo-600 hover:underline"
        >
          &larr; Back to Ledger
        </Link>
      </div>

      <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 space-y-6">
        <div className="grid grid-cols-2 gap-8">
          <div>
            <p className="text-sm text-slate-500">Description</p>
            <p className="text-lg font-medium text-slate-900">
              {transaction.description}
            </p>
          </div>
          <div>
            <p className="text-sm text-slate-500">Category</p>
            <p className="text-lg font-medium text-slate-900">
              {transaction.category}
            </p>
          </div>
          <div>
            <p className="text-sm text-slate-500">Amount</p>
            <p
              className={`text-2xl font-bold ${transaction.type === "income" ? "text-emerald-600" : "text-rose-600"}`}
            >
              {transaction.currency} {transaction.amount.toLocaleString()}
            </p>
          </div>
          <div>
            <p className="text-sm text-slate-500">Date</p>
            <p className="text-lg font-medium text-slate-900">
              {transaction.date}
            </p>
          </div>
        </div>

        <div className="pt-6 border-t border-slate-100 flex gap-4">
          <Link
            to={`/dashboard/edit-transaction/${transaction.id}`}
            className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
          >
            Edit Transaction
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ViewTransaction;
