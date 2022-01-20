import React from 'react';
import FormField from '../../atoms/FormField/FormField';
import Segment from '../../atoms/Segment/Segment';

const AddUserForm = () => {
  return (
    <Segment>
      <FormField label={'name'} />
      <FormField label={'attendance'} />
      <FormField label={'average'} />
    </Segment>
  );
};

export default AddUserForm;
