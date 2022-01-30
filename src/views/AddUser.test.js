import '@testing-library/jest-dom/extend-expect';
import AddUser from './AddUser';
import { fireEvent, screen } from '@testing-library/react';
import { renderWithProviders } from '../helpers/renderWithProviders';
import Dashboard from './Dashboard';

describe('AddUser', () => {
  renderWithProviders(
    <>
      <AddUser />
      <Dashboard />
    </>
  );

  it('should add user properly', () => {
    const nameInput = screen.getByTestId('name');
    const attendanceInput = screen.getByTestId('attendance');
    const averageInput = screen.getByTestId('average');
    const consentCheckbox = screen.getByTestId('consent');
    const submitButton = screen.getByText('Add user');

    fireEvent.change(nameInput, { target: { value: 'marek' } });
    fireEvent.change(attendanceInput, { target: { value: '98' } });
    fireEvent.change(averageInput, { target: { value: '5' } });
    fireEvent.click(consentCheckbox);
    fireEvent.click(submitButton);

    expect(screen.getByText('marek')).toBeTruthy();
  });
});
