import React, { forwardRef } from 'react';
import styled from 'styled-components';
import Label from '../Label/Label';
import Input from '../Input/Input';

const StyledFormField = styled.div`
  display: flex;
  flex-direction: column;
`;

const FormField = ({ label, name, type = 'text', id, value, setValue, inputReference, ...props }) => {
  console.log(inputReference);
  return (
    <StyledFormField>
      <Label htmlFor={name}>{label}</Label>
      <Input id={name} name={name} data-testid={label} defaultValue={value} onChange={setValue} ref={inputReference} {...props} />
    </StyledFormField>
  );
};

export default FormField;
