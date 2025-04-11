import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FaSignOutAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Sidebar({ history = [], onSelect, onLogout, isAuthenticated }) {
  const { isGuest, guestAttempts, user } = useAuth();
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const paginatedHistory = history.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalPages = Math.ceil(history.length / itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleLogout = () => {
    onLogout();
    navigate('/login');
  };

  if (!isAuthenticated && !isGuest()) {
    return null; // Do not render the Sidebar if the user is not authenticated or a guest
  }

  return (
    <aside className="sidebar" aria-label="Chat History Sidebar">
      <div className="sidebar-content">
        <h2 className="text-lg font-bold text-primary mb-4">Your Chat History</h2>
        {isGuest() && (
          <p className="text-sm text-gray-500 mb-4">
            Guest Access: {guestAttempts} free attempts remaining.
          </p>
        )}
        {isGuest() && guestAttempts === 0 && (
          <p className="text-sm text-red-500 mb-4">
            You have used all your free attempts. Please{' '}
            <a href="/register" className="text-primary underline">
              register
            </a>{' '}
            or log in to continue.
          </p>
        )}
        {isAuthenticated && (
          <p className="text-sm text-gray-500 mb-4">
            Remaining Simplifications: {user?.remainingSimplifications || 'Unlimited'}
          </p>
        )}
        {isAuthenticated && user?.subscriptionPlan && (
          <p className="text-sm text-gray-500 mb-4">
            Subscription Plan: {user.subscriptionPlan}
          </p>
        )}
        {history && history.length > 0 ? (
          <>
            <ul className="history-list">
              {paginatedHistory.map((entry, index) => (
                <li
                  key={index}
                  className="history-item p-2 border rounded cursor-pointer hover:bg-light-gray"
                  onClick={() => onSelect(entry)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && onSelect(entry)}
                  aria-label={`Chat history entry ${entry.title || `Entry ${index + 1}`}`}
                >
                  {entry.title || `Entry ${index + 1}`}
                </li>
              ))}
            </ul>
            <div className="pagination-controls mt-4">
              <button
                onClick={handlePreviousPage}
                disabled={currentPage === 1}
                className="btn btn-secondary mr-2"
              >
                Previous
              </button>
              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className="btn btn-secondary"
              >
                Next
              </button>
            </div>
          </>
        ) : (
          <p className="text-sm text-gray-500">No history available.</p>
        )}
        {isAuthenticated && (
          <button
            onClick={handleLogout}
            className="btn btn-danger flex items-center mt-6 w-full"
            aria-label="Logout"
          >
            <FaSignOutAlt className="mr-2" /> Logout
          </button>
        )}
      </div>
    </aside>
  );
}

Sidebar.propTypes = {
  history: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
    })
  ),
  onSelect: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

export default Sidebar;
