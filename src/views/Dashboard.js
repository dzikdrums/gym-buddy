import React, { useEffect, useState } from 'react';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { users } from 'data/users';
import FormField from '../components/atoms/FormField/FormField';
import Segment from '../components/atoms/Segment/Segment';

const Dashboard = () => {
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
      <div>
        <FormField label={'login'} />
        {usersList.map((user, index) => (
          <UsersListItem key={index} userData={user} />
        ))}
      </div>
    </Segment>
  );
};

export default Dashboard;
