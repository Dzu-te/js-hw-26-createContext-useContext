import React, { useEffect, useState } from "react";
import axios from "axios";
import { ShoppingItem } from "../types/ShoppingItem";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

interface UrlPlaceholderProps {
  addItem: (item: ShoppingItem) => void;
  generateId: () => string;
}

const UrlPlaceholder: React.FC<UrlPlaceholderProps> = ({ addItem, generateId }) => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/todos");
        const fetchedTodos: Todo[] = response.data.slice(0, 10);
        setTodos(fetchedTodos);
      } catch (err) {
        setError("Failed to fetch todos");
        console.error(err);
      }
    };

    fetchTodos();
  }, []);

  const handleAdd = (todo: Todo) => {
    const newItem: ShoppingItem = {
      id: generateId(),
      product: todo.title,
      isChecked: todo.completed,
      source: "server",
    };
    addItem(newItem);
  };

  return (
    <div>
      <h1>Todos from API</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.title} {todo.completed ? "(Completed)" : "(Pending)"}
            <button onClick={() => handleAdd(todo)}>Add to List</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UrlPlaceholder;
