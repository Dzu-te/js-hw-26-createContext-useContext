export interface ShoppingItem {
  id: string;
  product: string;
  isChecked: boolean;
  source?: string; 
}

export type ShoppingItemFunctions = {
  removeItem: (id: string) => void;
  checkItem: (id: string) => void;
  uncheckItem: (id: string) => void;
};