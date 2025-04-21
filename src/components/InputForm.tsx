import { ShoppingItem } from "../types/ShoppingItem";

type Props = {
  addItem: (item: ShoppingItem) => void;
  generateId: () => string;
  existingItems: ShoppingItem[];
};

function InputForm({ addItem, generateId, existingItems }: Props) {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    const product = formData.get("product") as string;

    if (product) {
      let newId = generateId();
      while (isIdNotUnique(newId)) {
        newId = generateId();
      }

      const newItem: ShoppingItem = {
        id: newId,
        product,
        isChecked: false,
        source: "local",
      };

      addItem(newItem);
      form.reset();
    }
  };

  const isIdNotUnique = (id: string): boolean => {
    return existingItems.some(item => item.id === id);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="product" placeholder="Enter a new item" />
      <button type="submit">Add item</button>
    </form>
  );
}

export default InputForm;
