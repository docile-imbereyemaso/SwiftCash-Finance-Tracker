import React from "react";
import TransactionForm from "../ui/TransactionForm";
import { Link, useNavigate } from "react-router-dom";

const Transaction: React.FC = () => {
  const navigate = useNavigate();

  // This handler simulates the action you'll eventually build
  const handleCreate = async (formData: FormData) => {
    // 1. Extract data from FormData
    const newTransaction = {
      description: formData.get("description"),
      amount: formData.get("amount"),
      type: formData.get("type"),
      date: new Date().toISOString().split("T")[0], // Auto-generate date
    };

    console.log("Saving to Firebase:", newTransaction);

    // 2. Redirect back to ledger after save
    navigate("/transactions");
  };

  return (
    <div className="w-full mx-auto p-8">
      <Link
        to="/dashboard/ledger"
        className="inline-block bg-indigo-400 px-3 py-4 mb-3 rounded-md hover:bg-indigo-400/50 transition duration-300"
      >
        Back to Ledger
      </Link>
      <TransactionForm isEditMode={false} onAction={handleCreate} />
    </div>
  );
};

export default Transaction;
