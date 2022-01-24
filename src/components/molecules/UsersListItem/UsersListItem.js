import React from 'react';
import AverageNumber from '../../atoms/AverageNumber/AverageNumber';
import IconButton from '../../atoms/Buttons/IconButton/IconButton';
import { ReactComponent as DeleteIcon } from 'assets/delete-icon.svg';
import { StyledUsersListItem } from './UsersListItem.styles';

const UsersListItem = ({ userData: { id, name, average, attendance }, deleteUser }) => {
  return (
    <StyledUsersListItem key={name}>
      <div className={'user-details-wrapper'}>
        <AverageNumber average={average} />
        <div className={'user-details'}>
          <p className={'name'}>{name}</p>
          <p className={'attendance'}>attendance: {attendance}%</p>
        </div>
      </div>
      <IconButton isSecondary onClick={() => deleteUser(id)}>
        <DeleteIcon />
      </IconButton>
    </StyledUsersListItem>
  );
};

export default UsersListItem;
