import { ShoppingItem } from "../types/ShoppingItem";

function InputForm({ addItem }: { addItem: (item: ShoppingItem) => void }) {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    const product = formData.get("product") as string;

    if (product) {
      const newItem: ShoppingItem = {
        id: Date.now(),
        product,
        isChecked: false,
        source: "local",
      };
      while (Date.now() === newItem.id);
      addItem(newItem);
      form.reset();
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="product" placeholder="Enter a new item" />
        <button type="submit">Add item</button>
      </form>
    </>
  );
}

export default InputForm;
