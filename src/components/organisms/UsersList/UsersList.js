import React, { useEffect, useState } from 'react';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { users } from 'data/users';
import FormField from '../../atoms/FormField/FormField';
import Segment from '../../atoms/Segment/Segment';

const UsersList = () => {
  const [usersList, setUsersList] = useState([]);

  const mockApiCall = () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(users), 1000);
    });
  };

  useEffect(() => {
    mockApiCall().then((res) => {
      setUsersList(res);
    });
  }, []);

  return (
    <Segment>
      <FormField label={'login'} />
      {usersList.map((user, index) => (
        <UsersListItem key={index} userData={user} />
      ))}
    </Segment>
  );
};

export default UsersList;
