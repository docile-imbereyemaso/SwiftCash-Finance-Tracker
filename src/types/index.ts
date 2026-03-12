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
