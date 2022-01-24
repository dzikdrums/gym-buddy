import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Heading } from '../../atoms/Heading/Heading';
import UsersListItem from '../../molecules/UsersListItem/UsersListItem';
import { users } from '../../../data/users';

const StyledUsersList = styled.div`
  display: flex;
  flex-direction: column;
`;

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
    <StyledUsersList>
      <Heading>Students list</Heading>
      {usersList.map((user, index) => (
        <UsersListItem key={index} userData={user} />
      ))}
    </StyledUsersList>
  );
};

export default UsersList;
