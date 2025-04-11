import { render, screen, fireEvent } from '@testing-library/react';
import Home from './Home';
import { AuthProvider } from '../context/AuthContext';

test('displays an alert for unsupported file types', () => {
  window.alert = jest.fn(); // Mock alert
  render(
    <AuthProvider>
      <Home />
    </AuthProvider>
  );

  const fileInput = screen.getByLabelText(/upload/i);
  const unsupportedFile = new File(['dummy content'], 'example.txt', { type: 'text/plain' });

  fireEvent.change(fileInput, { target: { files: [unsupportedFile] } });
  expect(window.alert).toHaveBeenCalledWith('Unsupported file type. Please upload a PDF, Word, or image file.');
});

test('displays an alert for file size exceeding the limit', () => {
  window.alert = jest.fn(); // Mock alert
  render(
    <AuthProvider>
      <Home />
    </AuthProvider>
  );

  const fileInput = screen.getByLabelText(/upload/i);
  const largeFile = new File(['dummy content'], 'large-file.pdf', { type: 'application/pdf', size: 6 * 1024 * 1024 });

  fireEvent.change(fileInput, { target: { files: [largeFile] } });
  expect(window.alert).toHaveBeenCalledWith('File size exceeds the 5MB limit. Please upload a smaller file.');
});

test('displays loading spinner while processing', async () => {
  render(
    <AuthProvider>
      <Home />
    </AuthProvider>
  );

  const fileInput = screen.getByLabelText(/upload/i);
  const validFile = new File(['dummy content'], 'example.pdf', { type: 'application/pdf' });

  fireEvent.change(fileInput, { target: { files: [validFile] } });
  const simplifyButton = screen.getByText(/simplify document/i);
  fireEvent.click(simplifyButton);

  expect(simplifyButton).toHaveTextContent(/processing.../i);
});
