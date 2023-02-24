import React, { useState } from 'react';

function AddCardNotification() {
  const [showNotification, setShowNotification] = useState(false);

  function handleAddCardClick() {
    setShowNotification(true);
    
  }

  function handleNotificationClose() {
    setShowNotification(false);
  }

  return (
    <div>
      <button onClick={handleAddCardClick}>
        Add Card
      </button>
      {showNotification && (
        <div>
          <p>A new card was added!</p>
          <button onClick={handleNotificationClose}>
            Close
          </button>
        </div>
      )}
    </div>
  );
}

export default AddCardNotification;
