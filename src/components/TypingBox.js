import React, { useState, useEffect } from 'react';

const TypingBox = () => {
  const [input, setInput] = useState('');
  const [nextKeys, setNextKeys] = useState('asdfjkl;');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [totalKeysPressed, setTotalKeysPressed] = useState(0);
  const [correctKeysPressed, setCorrectKeysPressed] = useState(0);

  const handleKeyPress = ({ key }) => {
    setTotalKeysPressed((prevTotalKeysPressed) => prevTotalKeysPressed + 1);
    setInput((prevInput) => prevInput + key);

    if (key === nextKeys[currentIndex]) {
      setCorrectKeysPressed((prevCorrectKeysPressed) => prevCorrectKeysPressed + 1);
      setCurrentIndex((prevIndex) => prevIndex + 1);
      setNextKeys((prevNextKeys) => prevNextKeys.substring(1)); // Update nextKeys by removing the first character
    }
  };

  useEffect(() => {
    if (currentIndex >= nextKeys.length) {
      // User has completed typing all the keys
      // You can handle this event, such as displaying a success message or resetting the typing exercise
      handleTypingComplete();
    }
  }, [currentIndex, nextKeys.length]);

  const accuracy = (correctKeysPressed / totalKeysPressed) * 100 || 0;

  const handleTypingComplete = () => {
    // Handle the event when the user completes typing all the keys
    // For example, you can display a success message or reset the typing exercise
    console.log('Congratulations! You have completed typing all the keys.');
    setInput('');
    setCurrentIndex(0);
    setTotalKeysPressed(0);
    setCorrectKeysPressed(0);
    setNextKeys('asdfjkl;');
  };

  return (
    <div>
      <input type="text" value={input} onKeyPress={handleKeyPress} />
      <div>Next Key(s): {nextKeys.substring(0, 1)}</div>
      <div>Accuracy: {accuracy.toFixed(2)}%</div>
    </div>
  );
};

export default TypingBox;
