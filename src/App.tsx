import { useEffect, useState } from "react";
import InputForm from "./components/InputForm";
import List from "./components/List";
import UrlPlaceholder from "../src/Urls/UrlPlaceholder";
import { ShoppingItem } from "./types/ShoppingItem";
import { v4 as uuidv4 } from "uuid";

const generateId = () => uuidv4();

function App() {
  const [items, setItems] = useState<ShoppingItem[]>([]);

  useEffect(() => {
    setItems([
      { id: uuidv4(), product: "Apple", isChecked: false, source: "local" },
      { id: uuidv4(), product: "Banana", isChecked: false, source: "local" },
      { id: uuidv4(), product: "Orange", isChecked: false, source: "local" },
    ]);
  }, []);

  const addItem = (item: ShoppingItem) => {
    setItems((prevItems) => [...prevItems, { ...item, id: uuidv4() }]);
  };

  const removeItem = (id: string) => {
    setItems((prevItems) => prevItems.filter(item => item.id !== id));
  };

  const checkItem = (id: string) => {
    setItems((prevItems) =>
      prevItems.map(item =>
        item.id === id ? { ...item, isChecked: true } : item
      )
    );
  };

  const uncheckItem = (id: string) => {
    setItems((prevItems) =>
      prevItems.map(item =>
        item.id === id ? { ...item, isChecked: false } : item
      )
    );
  };

  return (
    <div>
      <InputForm addItem={addItem} generateId={generateId} existingItems={items} />
      <List items={items} functions={{ removeItem, checkItem, uncheckItem }} />
      <UrlPlaceholder addItem={addItem} generateId={generateId} />
    </div>
  );
}

export default App;
