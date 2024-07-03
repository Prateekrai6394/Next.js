import React, { useState } from 'react';

const BackgroundColorChanger = () => {
  // State to manage the input value and background color
  const [inputValue, setInputValue] = useState('');
  const [bgColor, setBgColor] = useState('white');

  // Function to handle the change in input
  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    // Change background color based on the input value if it's a valid color name
    setBgColor(value);
  };

  return (
    <>
    <div style={{ backgroundColor: bgColor, padding: '20px' }}>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Type a color name"
      />
      <p>The background color is: {inputValue}</p>
    </div>
    </>
  );
};

export default BackgroundColorChanger;


