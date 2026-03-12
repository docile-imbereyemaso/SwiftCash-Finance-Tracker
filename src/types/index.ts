export interface Links {
  name: string;
  path: string;
}

export interface TransactionCardProps {
  title: string;
  value: number;
  type: string;
}

export interface SideBarProps {
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface CurrentConverterProps {
  setIsModalOpen: (isOpen: boolean) => void;
  transactionId?: string | null;
  transactionAmount?: number;
  transactionCurrency?: string;
}

export interface TransactionFormData {
  amount: number;
  type: "income" | "expense";
  category: string;
  description: string | null;
  date: string;
  currency: string;
}

// src/types/index.ts
export interface TransactionFormProps {
  initialData?: TransactionFormData;
  isEditMode?: boolean;
  onAction: (formData: FormData) => Promise<void>;
}
