import React, { useContext, useEffect, useReducer, useRef, useState } from 'react';
import FormField from '../components/atoms/FormField/FormField';
import Segment from '../components/atoms/Segment/Segment';
import Button from '../components/atoms/Buttons/Button/Button';
import styled from 'styled-components';
import { UserContext } from '../contexts/UsersContext';
import useWindowSize from '../hooks/useWindowSize';

const StyledAddUserForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
`;

const initialState = {
  name: '',
  attendance: '',
  average: '',
  consent: false,
  error: '',
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case 'CHANGE INPUT':
      return {
        ...state,
        [action.name]: action.value,
      };
    case 'CLEAR_FORM':
      return {
        ...initialState,
      };
    case 'TOGGLE_CHECKBOX':
      return {
        ...initialState,
        consent: !state.consent,
      };
    case 'THROW ERROR':
      return {
        ...initialState,
        error: action.error,
      };
    default:
      return state;
  }
};

const AddUser = () => {
  const { addUser } = useContext(UserContext);
  const [state, dispatch] = useReducer(reducer, initialState);
  const nameRef = useRef(null);
  const windowSize = useWindowSize();

  useEffect(() => {
    if (nameRef.current) {
      nameRef.current.focus();
    }
  });

  console.log(windowSize);

  const handleInputChange = (e) => {
    dispatch({ type: 'CHANGE_INPUT', value: e.target.value });
  };

  const handleCheckboxChange = () => {
    dispatch({ type: 'TOGGLE_CHECKBOX' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (state.consent) {
      addUser(state);
      dispatch({ type: 'CLEAR_FORM' });
    } else {
      dispatch({ type: 'THROW ERROR', error: 'Consent must be given to proceed' });
    }
  };

  return (
    <Segment>
      <StyledAddUserForm as={'form'} onSubmit={handleSubmit}>
        <FormField inputReference={nameRef} label={'name'} name={'name'} value={state.name} setValue={handleInputChange} />
        <FormField label={'attendance'} name={'attendance'} value={state.attendance} setValue={handleInputChange} />
        <FormField label={'average'} name={'average'} value={state.average} setValue={handleInputChange} />
        <input type={'checkbox'} name={'consent'} value={state.consent} onClick={handleCheckboxChange} />
        {state.error && <p>{state.error}</p>}
        <Button type={'submit'}>Add user</Button>
      </StyledAddUserForm>
    </Segment>
  );
};

export default AddUser;
