import React from "react";
import { type TransactionCardProps } from "../../types";
const TransactionCard: React.FC<TransactionCardProps> = ({
  title,
  value,
  type,
}) => {
  return (
    <div
      className={`bg-emerald-50 p-8 rounded-2xl border  ${type === "income" ? "border-green-600" : "border-red-500"}`}
    >
      <h4 className="text-slate-600 font-semibold mb-1">{title} Rwf</h4>
      <p className="text-4xl font-black text-black-900">
        {typeof value === "number" ? value.toLocaleString() : value} Rwf
      </p>
    </div>
  );
};

export default TransactionCard;
