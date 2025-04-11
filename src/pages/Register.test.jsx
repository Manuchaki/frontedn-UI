import { render, screen, fireEvent } from '@testing-library/react';
import Register from './Register';
import { BrowserRouter as Router } from 'react-router-dom';

test('renders registration form and submits data', () => {
  render(
    <Router>
      <Register />
    </Router>
  );

  const usernameInput = screen.getByPlaceholderText(/username/i);
  const passwordInput = screen.getByPlaceholderText(/password/i);
  const submitButton = screen.getByText(/register/i);

  fireEvent.change(usernameInput, { target: { value: 'newuser' } });
  fireEvent.change(passwordInput, { target: { value: 'newpassword' } });
  fireEvent.click(submitButton);

  expect(screen.getByText(/login here/i)).toBeInTheDocument();
});
