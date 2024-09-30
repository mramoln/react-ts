import React, { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  const handleCounterClick = () => {
    setCount(prevCount => prevCount + 1);
  };
  
  return <div>Basic React App {count} <button onClick={handleCounterClick}>INC</button></div>;
};

export default App;
