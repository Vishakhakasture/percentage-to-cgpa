// App.jsx
import React, { useState } from 'react';
import "./App.css";

function App() {
  const [cgpa, setCGPA] = useState('');
  const [percentage, setPercentage] = useState('');

  const handleCGPAChange = (e) => {
    setCGPA(e.target.value);
    // Convert CGPA to percentage
    setPercentage((parseFloat(e.target.value) * 9.5).toFixed(2));
  };

  const handlePercentageChange = (e) => {
    setPercentage(e.target.value);
    // Convert percentage to CGPA
    setCGPA((parseFloat(e.target.value) / 9.5).toFixed(2));
  };

  return (
    <div>
      <h1>CGPA to Percentage & Percentage to CGPA Converter</h1>
      <div className="calculation">
        <label>Enter CGPA:</label>
        <input type="number" value={cgpa} onChange={handleCGPAChange} />
      </div>
      <div className="calculation">
        <label>Enter Percentage:</label>
        <input type="number" value={percentage} onChange={handlePercentageChange} />
      </div>
    </div>
  );
}

export default App;
