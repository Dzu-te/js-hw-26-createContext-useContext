import { useUserContext } from '../context/UserContext';
import DeepNestedComponent from './Nested/DeepNestedComponent';


const UserList = () => {
  const { users } = useUserContext();

  return (
    <div>
      <h2>Користувачі:</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
      <DeepNestedComponent />
    </div>
  );
};

export default UserList;
