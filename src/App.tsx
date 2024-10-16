import React, { useEffect, useState } from 'react';
import { combiner } from './utils/combiner';

const App = () => {
  const [count, setCount] = useState(0);
  const [count2] = useState(0)

  const handleCounterClick = () => {
    setCount((prevCount) => prevCount + 1);
  };

  useEffect(() => {
    const combinedText = combiner('Hello', 'World');
    console.log('combinedText', combinedText);
    const combinedNumber = combiner(2, 3);
    console.log('combinedNumber', combinedNumber);
  }, []);

  return (
    <div>
      Basic React App {count} <button onClick={handleCounterClick}>INC</button>
    </div>
  );
};

export default App;
