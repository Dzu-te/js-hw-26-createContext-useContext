import UserList from './components/UserList';
import { UserProvider } from './context/UserContext';

const App = () => {
  return (
    <UserProvider>
      <div>
        <h1>React Context Demo</h1>
        <UserList />
      </div>
    </UserProvider>
  );
};

export default App;
