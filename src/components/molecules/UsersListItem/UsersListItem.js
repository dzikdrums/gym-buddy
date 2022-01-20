import React from 'react';
import AverageNumber from '../../atoms/AverageNumber/AverageNumber';
import Button from '../../atoms/Button/Button';
import { ReactComponent as DeleteIcon } from 'assets/delete-icon.svg';
import { StyledUsersListItem } from './UsersListItem.styles';

const UsersListItem = ({ userData: { name, average, attendance } }) => (
  <>
    <StyledUsersListItem key={name}>
      <AverageNumber average={average} />
      <div className={'user-details'}>
        <p className={'name'}>{name}</p>
        <p className={'attendance'}>attendance: {attendance}%</p>
      </div>
      <Button isSecondary>
        <DeleteIcon />
      </Button>
    </StyledUsersListItem>
  </>
);

export default UsersListItem;
