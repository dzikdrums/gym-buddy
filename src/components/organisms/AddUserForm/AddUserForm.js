import React, { useState } from 'react';
import FormField from '../../atoms/FormField/FormField';
import Segment from '../../atoms/Segment/Segment';
import Button from '../../atoms/Buttons/Button/Button';
import styled from 'styled-components';

const StyledAddUserForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
`;

const AddUserForm = () => {
  const [formValues, setFormValues] = useState({
    name: '',
    attendance: '',
    average: '',
  });

  const handleInputChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });

    console.log(formValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('heheszki');
  };

  return (
    <Segment>
      <StyledAddUserForm as={'form'} onSubmit={handleSubmit}>
        <FormField label={'name'} name={'name'} value={formValues.name} setValue={handleInputChange} />
        <FormField label={'attendance'} name={'attendance'} value={formValues.attendance} setValue={handleInputChange} />
        <FormField label={'average'} name={'average'} value={formValues.average} setValue={handleInputChange} />
        <Button type={'submit'}>Sign in</Button>
      </StyledAddUserForm>
    </Segment>
  );
};

export default AddUserForm;
