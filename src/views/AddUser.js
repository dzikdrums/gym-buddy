import React, { useContext, useEffect, useRef } from 'react';
import FormField from '../components/atoms/FormField/FormField';
import Segment from '../components/atoms/Segment/Segment';
import Button from '../components/atoms/Buttons/Button/Button';
import { UserContext } from '../contexts/UsersContext';
import useForm from '../hooks/useForm';
import { StyledAddUserForm } from './AddUser.styles';

const initialState = {
  name: '',
  attendance: '',
  average: '',
  consent: false,
  error: '',
};

const AddUser = () => {
  const { addUser } = useContext(UserContext);
  const { state, handleCheckboxChange, handleInputChange, handleClearForm, handleThrowError } = useForm(initialState);
  const nameRef = useRef(null);

  useEffect(() => {
    if (nameRef.current) {
      nameRef.current.focus();
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (state.consent) {
      addUser(state);
      handleClearForm(initialState);
    } else {
      handleThrowError('Consent is needed to submit!');
    }
  };

  return (
    <Segment>
      <StyledAddUserForm as={'form'} onSubmit={handleSubmit}>
        <FormField inputReference={nameRef} label={'name'} name={'name'} value={state.name} setValue={handleInputChange} />
        <FormField label={'attendance'} name={'attendance'} value={state.attendance} setValue={handleInputChange} />
        <FormField label={'average'} name={'average'} value={state.average} setValue={handleInputChange} />
        <input type={'checkbox'} name={'consent'} data-testid={'consent'} value={state.consent} onClick={handleCheckboxChange} />
        {state.error && <p>{state.error}</p>}
        <Button type={'submit'}>Add user</Button>
      </StyledAddUserForm>
    </Segment>
  );
};

export default AddUser;
