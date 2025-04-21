import ListItem from "./ListItem";
import { ShoppingItem, ShoppingItemFunctions } from "../types/ShoppingItem";

function List({ items, functions }: {
  items: ShoppingItem[];
  functions: ShoppingItemFunctions;
}) {
  return (
    <ul>
      {items.map((item) => (
        <ListItem
          key={`${item.source ? item.source + "-" : ""}${item.id}`}
          {...item}
          {...functions}
        />
      ))}
    </ul>
  );
}
export default List;
