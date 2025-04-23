// src/components/Nested/DeepNestedComponent.tsx
import { useUserContext } from '../../context/UserContext';

const DeepNestedComponent = () => {
  const { addUser } = useUserContext();

  const handleAdd = () => {
    const newUser = {
      id: Math.floor(Math.random() * 1000),
      name: `Користувач ${Math.floor(Math.random() * 100)}`
    };
    addUser(newUser);
  };

  return (
    <div style={{ marginTop: '20px' }}>
      <button onClick={handleAdd}>Додати нового користувача</button>
    </div>
  );
};

export default DeepNestedComponent;
