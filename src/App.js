import React, { useState } from 'react';
import { add } from './calculator';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleCalculate = () => {
    try {
      const output = add(input);
      setResult(output);
      setError(null);
    } catch (e) {
      setError(e.message);
      setResult(null);
    }
  };

  return (
    <div className="App">
      <h1>String Calculator</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter numbers..."
      />
      <button onClick={handleCalculate}>Calculate</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {result !== null && <p>Result: {result}</p>}
    </div>
  );
}

export default App;
