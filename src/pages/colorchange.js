import React, { useState } from 'react';

const ColorChanger = () => {
  // State to manage the input value and color
  const [inputValue, setInputValue] = useState('');
  const [color, setColor] = useState('black');

  // Function to handle the change in input
  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    // Change color based on the input value if it's a valid color name
    setColor(value);
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Type a color name"
      />
      <p style={{ color: color }}>{inputValue}</p>
    </div>
  );
};

export default ColorChanger;
