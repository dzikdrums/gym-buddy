import React from 'react';
import styled from 'styled-components';
import AverageMarks from '../../atoms/AverageMarks/AverageMarks';
import RoundButton from '../../atoms/Buttons/RoundButton/RoundButton';
import { ReactComponent as DeleteIcon } from 'assets/delete-icon.svg';

const data = [
  { name: 'Maciej Dzik', attendance: '98', average: '2.5' },
  { name: 'Maciej Dzik', attendance: '98', average: '2.5' },
  { name: 'Maciej Dzik', attendance: '98', average: '2.5' },
  { name: 'Maciej Dzik', attendance: '98', average: '2.5' },
  { name: 'Maciej Dzik', attendance: '98', average: '2.5' },
];

const UsersListItem = ({ userData: { name, average, attendance } }) => {
  const Wrapper = styled.div`
    display: flex;
    padding: 24px 0;
    border-bottom: 1px solid #dfe2e8;

    &:last-child {
      border-bottom: none;
    }

    .user-details {
      margin-left: 24px;
      color: #737c8e;
    }

    .name {
      font-size: 17px;
      font-weight: 700;
    }

    .attendance {
      font-size: 11px;
      font-weight: 400;
    }
  `;

  return (
    <>
      {data.map(({ name, attendance, average }) => (
        <Wrapper key={name}>
          <AverageMarks average={average} />
          <div className={'user-details'}>
            <p className={'name'}>{name}</p>
            <p classN ame={'attendance'}>
              attendance: {attendance}%
            </p>
          </div>
          <RoundButton isSecondary>
            <DeleteIcon />
          </RoundButton>
        </Wrapper>
      ))}
    </>
  );
};

export default UsersListItem;
