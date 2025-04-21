import { useEffect, useState } from "react";
import InputForm from "./components/InputForm";
import List from "./components/List";
import UrlPlaceholder from "../src/Urls/UrlPlaceholder";
import { ShoppingItem } from "./types/ShoppingItem";

function App() {
  const [items, setItems] = useState<ShoppingItem[]>([]);

  useEffect(() => {
    setItems([
      { id: 1, product: "Apple", isChecked: false, source: "local" },
      { id: 2, product: "Banana", isChecked: false, source: "local" },
      { id: 3, product: "Orange", isChecked: false, source: "local" },
    ]);
  }, []);

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
    <div>
      <InputForm addItem={addItem} />
      <List items={items} functions={{ removeItem, checkItem, uncheckItem }} />
      <UrlPlaceholder addItem={addItem} />
    </div>
  );
}

export default App;
