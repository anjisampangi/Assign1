import React from 'react';

const PerformanceMetrics = ({ totalKeysPressed, correctKeysPressed }) => {
  const accuracy = (correctKeysPressed / totalKeysPressed) * 100 || 0;

  return (
    <div>
      <p>Number of Keys Pressed: {totalKeysPressed}</p>
      <p>Accuracy: {accuracy.toFixed(2)}%</p>
    </div>
  );
};

export default PerformanceMetrics;
