import React from 'react';
import styled from 'styled-components';
import Label from '../Label/Label';
import Input from '../Input/Input';

const StyledFormField = styled.div`
  display: flex;
  flex-direction: column;
`;

const FormField = ({ label, name, type = 'text', id, value, setValue, ...props }) => {
  return (
    <StyledFormField>
      <Label htmlFor={name}>{label}</Label>
      <Input id={name} name={name} value={value} onChange={setValue} {...props} />
    </StyledFormField>
  );
};

export default FormField;
