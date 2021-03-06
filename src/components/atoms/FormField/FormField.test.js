import FormField from './FormField';
import { fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { renderWithProviders } from '../../../helpers/renderWithProviders';

describe('FormField', () => {
  renderWithProviders(<FormField placeholder={'name'} />);

  it('should change value', () => {
    const input = screen.getByPlaceholderText('name');
    fireEvent.change(input, { target: { value: 'hehe' } });
    expect(input).toHaveValue('hehe');
  });
});
