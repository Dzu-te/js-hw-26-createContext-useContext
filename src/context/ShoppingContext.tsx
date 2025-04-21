import { createContext, useState, useContext, ReactNode } from "react";
import { ShoppingItem } from "../types/ShoppingItem";

interface ShoppingContextType {
  items: ShoppingItem[];
  addItem: (item: ShoppingItem) => void;
  removeItem: (id: number) => void;
  checkItem: (id: number) => void;
  uncheckItem: (id: number) => void;
}

interface ShoppingProviderProps {
  children: ReactNode;
}

const ShoppingContext = createContext<ShoppingContextType | undefined>(undefined);

export const ShoppingProvider = ({ children }: ShoppingProviderProps) => {
  const [items, setItems] = useState<ShoppingItem[]>([]);

  const addItem = (item: ShoppingItem) => {
    setItems((prevItems) => [...prevItems, item]);
  };

  const removeItem = (id: number) => {
    setItems((prevItems) => prevItems.filter(item => item.id !== id));
  };

  const checkItem = (id: number) => {
    setItems((prevItems) =>
      prevItems.map(item =>
        item.id === id ? { ...item, isChecked: true } : item
      )
    );
  };

  const uncheckItem = (id: number) => {
    setItems((prevItems) =>
      prevItems.map(item =>
        item.id === id ? { ...item, isChecked: false } : item
      )
    );
  };

  return (
    <ShoppingContext.Provider value={{ items, addItem, removeItem, checkItem, uncheckItem }}>
      {children}
    </ShoppingContext.Provider>
  );
};

export const useShoppingContext = (): ShoppingContextType => {
  const context = useContext(ShoppingContext);
  if (!context) {
    throw new Error("useShoppingContext must be used within a ShoppingProvider");
  }
  return context;
};
