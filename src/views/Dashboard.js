import React from 'react';
import UsersList from '../components/organisms/UsersList/UsersList';
import Segment from '../components/atoms/Segment/Segment';

const Dashboard = () => {
  return (
    <Segment>
      <UsersList />
    </Segment>
  );
};

export default Dashboard;
