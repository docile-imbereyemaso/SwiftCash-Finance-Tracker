import React, { useEffect, useRef, useState } from "react";
import type { TransactionFormProps } from "../../types";

const TransactionForm: React.FC<TransactionFormProps> = ({
  initialData,
  onAction,
  isEditMode = false,
}) => {
  const descriptionRef = useRef<HTMLInputElement>(null);
  // State to track which fields are empty
  const [errors, setErrors] = useState<Record<string, boolean>>({});

  useEffect(() => {
    descriptionRef.current?.focus();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    // Validation logic
    const newErrors: Record<string, boolean> = {
      description: !formData.get("description")?.toString().trim(),
      category: !formData.get("category")?.toString().trim(),
      amount: !formData.get("amount"),
      type: !formData.get("type"),
    };

    setErrors(newErrors);

    // If any error exists, stop submission
    if (Object.values(newErrors).some(Boolean)) return;

    await onAction(formData);
  };

  // Helper to get conditional border classes
  const getBorderClass = (fieldName: string) =>
    errors[fieldName]
      ? "border-rose-500 focus:ring-rose-500"
      : "border-slate-200 focus:ring-indigo-500";

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 space-y-6 w-full"
      noValidate // Disable browser's default validation UI
    >
      <h2 className="text-xl font-bold">
        {isEditMode ? "Edit Transaction" : "Create New Transaction"}
      </h2>

      <div>
        <label className="block text-sm font-medium text-slate-700">
          Description <span className="text-rose-500">*</span>
        </label>
        <input
          ref={descriptionRef}
          name="description"
          defaultValue={initialData?.description || ""}
          placeholder="eg: Salary payment"
          className={`w-full p-3 border rounded-lg mt-1 outline-none focus:ring-2 ${getBorderClass("description")}`}
        />
        {errors.description && (
          <p className="text-rose-500 text-xs mt-1">Description is required</p>
        )}
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-700">
          Category <span className="text-rose-500">*</span>
        </label>
        <input
          name="category"
          defaultValue={initialData?.category || ""}
          placeholder="eg: Salary, Food, Rent,..."
          className={`w-full p-3 border rounded-lg mt-1 outline-none focus:ring-2 ${getBorderClass("description")}`}
        />
        {errors.description && (
          <p className="text-rose-500 text-xs mt-1">Category s required</p>
        )}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-700">
            Amount <span className="text-rose-500">*</span>
          </label>
          <input
            type="number"
            name="amount"
            min={0}
            defaultValue={initialData?.amount || ""}
            className={`w-full p-3 border rounded-lg mt-1 outline-none focus:ring-2 ${getBorderClass("amount")}`}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700">
            Type <span className="text-rose-500">*</span>
          </label>
          <select
            name="type"
            className={`w-full p-3 border rounded-lg mt-1 outline-none focus:ring-2 ${getBorderClass("type")}`}
          >
            <option value="" disabled selected>
              Transaction type
            </option>
            <option value="income">income</option>
            <option value="expense">Expense</option>
          </select>
          {errors.description && (
            <p className="text-rose-500 text-xs mt-1">Category s required</p>
          )}
        </div>
      </div>

      <button
        type="submit"
        className="w-full py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
      >
        {isEditMode ? "Update Transaction" : "Save Transaction"}
      </button>
    </form>
  );
};

export default TransactionForm;
