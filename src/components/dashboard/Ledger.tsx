import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import CurrentConverter from "./CurrentConverter";

// Sample transaction data with IDs
const transactions = [
  {
    id: "txn_001",
    description: "Salary Payment",
    amount: 5000,
    type: "income",
    category: "Salary",
    date: "2024-03-15",
    currency: "USD",
  },
  {
    id: "txn_002",
    description: "Grocery Shopping",
    amount: 150,
    type: "expense",
    category: "Food",
    date: "2024-03-14",
    currency: "USD",
  },
  {
    id: "txn_003",
    description: "Rent Payment",
    amount: 1200,
    type: "expense",
    category: "Rent",
    date: "2024-03-01",
    currency: "USD",
  },
  {
    id: "txn_004",
    description: "Freelance Work",
    amount: 800,
    type: "income",
    category: "Salary",
    date: "2024-03-10",
    currency: "EUR",
  },
  // Add more sample data to test overflow
  {
    id: "txn_005",
    description: "Movie Night",
    amount: 45,
    type: "expense",
    category: "Leisure",
    date: "2024-03-12",
    currency: "USD",
  },
  {
    id: "txn_006",
    description: "Gym Membership",
    amount: 60,
    type: "expense",
    category: "Leisure",
    date: "2024-03-05",
    currency: "USD",
  },
];

const Ledger: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTransactionId, setSelectedTransactionId] = useState<
    string | null
  >(null);

  const openConverterForTransaction = (id: string) => {
    setSelectedTransactionId(id);
    setIsModalOpen(true);
  };

  const closeConverter = () => {
    setIsModalOpen(false);
    setSelectedTransactionId(null);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-slate-800">Transactions</h2>

        <div className="flex items-center gap-2">
          <div className="space-x-2">
            <NavLink
              to="/transactions"
              end
              className={({ isActive }) =>
                `px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
                  isActive
                    ? "bg-slate-800 text-white"
                    : "bg-slate-200 text-slate-700 hover:bg-slate-300"
                }`
              }
            >
              All
            </NavLink>

            <NavLink
              to="/transactions?type=income"
              className={({ isActive }) =>
                `px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
                  isActive
                    ? "bg-emerald-600 text-white"
                    : "bg-emerald-100 text-emerald-700 hover:bg-emerald-200"
                }`
              }
            >
              Income
            </NavLink>

            <NavLink
              to="/transactions?type=expense"
              className={({ isActive }) =>
                `px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
                  isActive
                    ? "bg-rose-600 text-white"
                    : "bg-rose-100 text-rose-700 hover:bg-rose-200"
                }`
              }
            >
              Expense
            </NavLink>
          </div>
          <div className="flex items-center gap-2 ml-4">
            <NavLink
              to="/dashboard/transaction"
              className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-semibold hover:bg-indigo-700"
            >
              + Create Transaction
            </NavLink>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <div className=" overflow-y-auto">
          {" "}
          <table className="w-full text-left relative">
            <thead className="bg-slate-50 border-b border-slate-100 sticky top-0 z-10">
              <tr>
                <th className="p-4 font-semibold text-slate-600">
                  Description
                </th>
                <th className="p-4 font-semibold text-slate-600">Category</th>
                <th className="p-4 font-semibold text-slate-600">Amount</th>
                <th className="p-4 font-semibold text-slate-600">Type</th>
                <th className="p-4 font-semibold text-slate-600">Date</th>
                <th className="p-4 font-semibold text-slate-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction) => (
                <tr
                  key={transaction.id}
                  className="border-b border-slate-100 hover:bg-slate-50"
                >
                  <td className="p-4 font-medium">{transaction.description}</td>
                  <td className="p-4 text-slate-600">{transaction.category}</td>
                  <td
                    className={`p-4 font-bold ${
                      transaction.type === "income"
                        ? "text-emerald-600"
                        : "text-rose-600"
                    }`}
                  >
                    ${transaction.amount.toLocaleString()}
                  </td>
                  <td className="p-4">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        transaction.type === "income"
                          ? "bg-emerald-100 text-emerald-700"
                          : "bg-rose-100 text-rose-700"
                      }`}
                    >
                      {transaction.type}
                    </span>
                  </td>
                  <td className="p-4 text-slate-600">{transaction.date}</td>
                  <td className="p-4">
                    <div className="flex items-center space-x-3">
                      {/* Currency Converter Button with ID */}
                      <button
                        onClick={() =>
                          openConverterForTransaction(transaction.id)
                        }
                        className="text-slate-600 hover:text-slate-800 font-medium text-sm hover:underline flex items-center gap-1"
                        title={`Convert ${transaction.amount} ${transaction.currency}`}
                      >
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                          />
                        </svg>
                        Convert
                      </button>

                      <Link
                        to={`/dashboard/edit-transaction/${transaction.id}`}
                        className="text-blue-600 hover:text-blue-800 font-medium text-sm hover:underline flex items-center gap-1"
                      >
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                          />
                        </svg>
                        Edit
                      </Link>
                      <Link
                        to={`/dashboard/view-transaction/${transaction.id}`}
                        className="text-indigo-600 hover:text-indigo-800 font-medium text-sm hover:underline flex items-center gap-1"
                      >
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          />
                        </svg>
                        View
                      </Link>

                      <button className="text-rose-600 hover:text-rose-800 font-medium text-sm hover:underline flex items-center gap-1">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {transactions.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-500">No transactions found</p>
          </div>
        )}
      </div>

      {isModalOpen && (
        <CurrentConverter
          setIsModalOpen={closeConverter}
          transactionId={selectedTransactionId}
        />
      )}
    </div>
  );
};

export default Ledger;
