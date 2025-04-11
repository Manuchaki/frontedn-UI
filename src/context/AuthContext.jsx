import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [guestAttempts, setGuestAttempts] = useState(2); // Allow 2 free attempts for guests

  const login = (userData) => {
    setUser(userData);

    // Automatically log out when the token expires
    const tokenExpiration = new Date(userData.tokenExpiration);
    const timeout = tokenExpiration.getTime() - Date.now();
    setTimeout(() => {
      logout();
      alert('Your session has expired. Please log in again.');
    }, timeout);
  };

  const logout = () => {
    setUser(null);
    setGuestAttempts(2); // Reset guest attempts on logout
  };

  const isGuest = () => !user && guestAttempts > 0;

  const useGuestAttempt = () => {
    if (guestAttempts > 0) {
      setGuestAttempts(guestAttempts - 1);
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isGuest, guestAttempts, useGuestAttempt }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
