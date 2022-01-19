import React from 'react';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { usersList } from 'data/users';
import { UsersListStyles } from './UsersList.styles';

const UsersList = () => (
  <UsersListStyles>
    {usersList.map((user) => (
      <UsersListItem userData={user} />
    ))}
  </UsersListStyles>
);

export default UsersList;
