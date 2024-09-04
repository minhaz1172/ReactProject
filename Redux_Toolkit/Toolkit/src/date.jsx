import React, { useState, useEffect } from 'react';

function getDateTime() {
  const today = new Date();
  const month = today.getMonth() + 1; // Months are zero-indexed, so we add 1
  const date = today.getDate();
  const year = today.getFullYear();
  const hours = today.getHours().toString().padStart(2, '0');
  const minutes = today.getMinutes().toString().padStart(2, '0');
  const seconds = today.getSeconds().toString().padStart(2, '0');

  return `${month}/${date}/${year}`;
}

function CurrentDate() {
  const [currentDateTime, setCurrentDateTime] = useState(getDateTime());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(getDateTime());
    }, 1000); // Update every second to include the time

    return () => clearInterval(timer); // Clean up on unmount
  }, []);

  return (
    <div>
      <p>{currentDateTime}</p>
    </div>
  );
}

export default CurrentDate;
