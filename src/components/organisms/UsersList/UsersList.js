import React from 'react';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import styled from 'styled-components';

const users = [{ name: 'hehe', attendance: 70, average: 2.3 }];

const UsersList = () => {
  const Wrapper = styled.div`
    background: white;
    box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
    border-radius: 10px;
    padding: 24px 24px 30px 49px;
    width: 50%;
  `;

  return (
    <Wrapper>
      {users.map((user) => (
        <UsersListItem userData={user} />
      ))}
    </Wrapper>
  );
};

export default UsersList;
