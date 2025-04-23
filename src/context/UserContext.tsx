import { createContext, useContext, useState, ReactNode } from 'react';
import { User } from '../types';


type UserContextType = {
  users: User[];
  addUser: (user: User) => void;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [users, setUsers] = useState<User[]>([
    { id: 1, name: 'Anna' },
    { id: 2, name: 'Oleh' }
  ]);

  const addUser = (user: User) => {
    setUsers(prev => [...prev, user]);
  };

  return (
    <UserContext.Provider value={{ users, addUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) throw new Error('useUserContext must be used within a UserProvider');
  return context;
};
