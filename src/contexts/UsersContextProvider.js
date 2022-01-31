import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const UserContext = React.createContext([]);

const UserContextProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get('/students')
      .then(({ data: { students } }) => {
        console.log(students);
        setUsers(students);
      })
      .catch((er) => {
        console.log(er);
      });
  }, []);

  const deleteUser = (id) => {
    const filteredUsers = users.filter((user) => user.id !== id);
    setUsers({ users: filteredUsers });
  };

  const addUser = (newUser) => {
    setUsers((prevUsers) => [...prevUsers, { id: prevUsers.length + 1, ...newUser }]);
  };

  const value = { users, deleteUser, addUser };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserContextProvider;
