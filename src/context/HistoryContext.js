import React, { createContext, useContext, useState, useCallback } from 'react';

const HistoryContext = createContext();

export const HistoryProvider = ({ children }) => {
  const [history, setHistory] = useState([]);
  const [error, setError] = useState(null);

  const fetchHistory = useCallback(async (token) => {
    try {
      // Replace this with your actual API call
      const response = await Promise.resolve([{ id: 1, name: 'Mock History Entry' }]);
      setHistory(response);
    } catch (err) {
      console.error('Failed to fetch history:', err);
      setError(err.message);
    }
  }, []);

  return (
    <HistoryContext.Provider value={{ history, fetchHistory, error }}>
      {children}
    </HistoryContext.Provider>
  );
};

export const useHistory = () => {
  const context = useContext(HistoryContext);
  if (!context) {
    throw new Error('useHistory must be used within a HistoryProvider');
  }
  return context;
};
