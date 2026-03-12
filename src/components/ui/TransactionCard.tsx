import React from "react";
import { type TransactionCardProps } from "../../types";
const TransactionCard: React.FC<TransactionCardProps> = ({ title, value }) => {
  return (
    <div className="bg-emerald-50 p-8 rounded-2xl border border-emerald-100">
      <h4 className="text-emerald-800 font-semibold mb-1">{title} Rwf</h4>
      <p className="text-4xl font-black text-emerald-900">
        {typeof value === "number" ? value.toLocaleString() : value} Rwf
      </p>
    </div>
  );
};

export default TransactionCard;
