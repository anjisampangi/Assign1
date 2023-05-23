import React, { useState } from 'react';
import TypingBox from './components/TypingBox';
import PerformanceMetrics from './components/PerformanceMetrics';

const App = () => {
  const [totalKeysPressed, setTotalKeysPressed] = useState(0);
  const [correctKeysPressed, setCorrectKeysPressed] = useState(0);

  return (
    <div>
      <TypingBox
        totalKeysPressed={totalKeysPressed}
        correctKeysPressed={correctKeysPressed}
        setTotalKeysPressed={setTotalKeysPressed}
        setCorrectKeysPressed={setCorrectKeysPressed}
      />
      <PerformanceMetrics
        totalKeysPressed={totalKeysPressed}
        correctKeysPressed={correctKeysPressed}
      />
    </div>
  );
};

export default App;
