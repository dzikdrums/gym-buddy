import React, { useState } from 'react';

const initialValue = [
  {
    id: 0,
    name: 'user',
    attendance: '98%',
    average: '4.3',
  },
];

export const UserContext = React.createContext(initialValue);

const UserContextProvider = ({ children }) => {
  const [users, setUsers] = useState(initialValue);

  const deleteUser = (id) => {
    const filteredUsers = users.filter((user) => user.id !== id);
    setUsers({ users: filteredUsers });
  };

  const addUser = (newUser) => {
    setUsers((prevUsers) => [...prevUsers, newUser]);
  };

  const value = { users, deleteUser, addUser };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserContextProvider;
