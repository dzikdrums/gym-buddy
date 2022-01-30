import React, { useContext } from 'react';
import { Heading } from '../../atoms/Heading/Heading';
import UsersListItem from '../../molecules/UsersListItem/UsersListItem';
import { UserContext } from '../../../contexts/UsersContext';
import { StyledUsersList } from './UsersList.styles';

const UsersList = () => {
  const { users, deleteUser } = useContext(UserContext);

  return (
    <StyledUsersList>
      <Heading>Students list</Heading>
      {users.map((user) => (
        <UsersListItem key={user.id} userData={user} deleteUser={deleteUser} />
      ))}
    </StyledUsersList>
  );
};

export default UsersList;
