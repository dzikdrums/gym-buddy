import React from 'react';
import styled, { css } from 'styled-components';
import Label from '../Label/Label';
import Input from '../Input/Input';

const StyledFormField = styled.div`
  display: flex;
  flex-direction: column;
`;

const FormField = ({ label, name, type = 'text', id, ...props }) => {
  return (
    <StyledFormField>
      <Label for={id}>{label}</Label>
      <Input id={id} name={name} {...props} />
    </StyledFormField>
  );
};

export default FormField;
