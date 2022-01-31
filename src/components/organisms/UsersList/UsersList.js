import React from 'react';
import { Heading } from '../../atoms/Heading/Heading';
import UsersListItem from '../../molecules/UsersListItem/UsersListItem';
import { StyledUsersList } from './UsersList.styles';

const UsersList = ({ users = [] }) => {
  return (
    <StyledUsersList>
      <Heading>Students list</Heading>
      {users.map((user) => (
        <UsersListItem key={user.id} userData={user} />
      ))}
    </StyledUsersList>
  );
};

export default UsersList;
