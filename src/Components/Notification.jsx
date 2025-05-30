import React, { useEffect } from 'react';

function Notification({ message, type = 'success', onClose }) {
  // Automatically close after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose(); // Call the parent function to hide the notification
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  // Set background color based on type
  const backgroundColor =
    type === 'success' ? 'bg-green-100 text-green-800' :
    type === 'error' ? 'bg-red-100 text-red-800' :
    'bg-blue-100 text-blue-800';

  return (
    <div className={`fixed top-4 right-4 px-4 py-2 rounded-lg shadow-lg z-50 ${backgroundColor}`}>
      {message}
    </div>
  );
}

export default Notification;
