import { render, screen } from '@testing-library/react';
import Sidebar from './Sidebar';
import { AuthProvider } from '../context/AuthContext';

test('renders guest attempts for unauthenticated users', () => {
  render(
    <AuthProvider>
      <Sidebar history={[]} onSelect={() => {}} onLogout={() => {}} isAuthenticated={false} />
    </AuthProvider>
  );
  expect(screen.getByText(/Guest Access:/)).toBeInTheDocument();
});
