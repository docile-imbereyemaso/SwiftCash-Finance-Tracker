import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import TransactionForm from "../ui/TransactionForm";

const EditTransaction: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleUpdate = async (formData: FormData) => {
    console.log("Updating record", id, "with", Object.fromEntries(formData));
    navigate("/transactions");
  };

  return (
    <div className="max-w-7xl mx-auto p-8">
      <Link
        to="/dashboard/ledger"
        className="bg-indigo-500 px-4 py-3 rounded-md"
      >
        &larr; Back to ledger
      </Link>
      <TransactionForm isEditMode={true} onAction={handleUpdate} />
    </div>
  );
};

export default EditTransaction;
