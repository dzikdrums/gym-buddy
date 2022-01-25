import React, { useContext, useState } from 'react';
import FormField from '../components/atoms/FormField/FormField';
import Segment from '../components/atoms/Segment/Segment';
import Button from '../components/atoms/Buttons/Button/Button';
import styled from 'styled-components';
import { UserContext } from '../contexts/UsersContext';

const StyledAddUserForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
`;

const initialValues = {
  name: '',
  attendance: '',
  average: '',
};

const AddUser = () => {
  const { addUser } = useContext(UserContext);

  const [formValues, setFormValues] = useState(initialValues);

  const handleInputChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addUser(formValues);
    setFormValues(initialValues);
  };

  return (
    <Segment>
      <StyledAddUserForm as={'form'} onSubmit={handleSubmit}>
        <FormField label={'name'} name={'name'} value={formValues.name} setValue={handleInputChange} />
        <FormField label={'attendance'} name={'attendance'} value={formValues.attendance} setValue={handleInputChange} />
        <FormField label={'average'} name={'average'} value={formValues.average} setValue={handleInputChange} />
        <Button type={'submit'}>Add user</Button>
      </StyledAddUserForm>
    </Segment>
  );
};

export default AddUser;
