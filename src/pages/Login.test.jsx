import { render, screen, fireEvent } from '@testing-library/react';
import Login from './Login';
import { BrowserRouter as Router } from 'react-router-dom';

test('renders login form and submits credentials', () => {
  const mockOnLogin = jest.fn();
  render(
    <Router>
      <Login onLogin={mockOnLogin} />
    </Router>
  );

  const usernameInput = screen.getByPlaceholderText(/username/i);
  const passwordInput = screen.getByPlaceholderText(/password/i);
  const submitButton = screen.getByText(/login/i);

  fireEvent.change(usernameInput, { target: { value: 'testuser' } });
  fireEvent.change(passwordInput, { target: { value: 'password123' } });
  fireEvent.click(submitButton);

  expect(mockOnLogin).toHaveBeenCalledWith({ username: 'testuser', token: 'fake-jwt-token' });
});
