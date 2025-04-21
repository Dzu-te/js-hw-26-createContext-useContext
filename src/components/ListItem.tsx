import "../styles/ListItem.css";
import type { ShoppingItem } from "../types/ShoppingItem"; 

type ListItemProps = Pick<ShoppingItem, "id" | "product" | "isChecked"> & {
  removeItem: (id: string) => void;
  checkItem: (id: string) => void;
  uncheckItem: (id: string) => void;
};

function ListItem({ id, product, isChecked, removeItem, checkItem, uncheckItem }: ListItemProps) {
  const handleClick = () => {
    removeItem(id);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      checkItem(id);
    } else {
      uncheckItem(id);
    }
  };

  return (
    <li className="list-item" data-id={id}>
      <input type="checkbox" checked={isChecked} onChange={handleChange} />
      <span className="product-text">{product}</span>
      <button onClick={handleClick}>Remove item</button>
    </li>
  );
}

export default ListItem;
