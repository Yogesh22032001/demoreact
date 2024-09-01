import React, { useState } from 'react';

const Counter = () => {
  // useState hook to manage the counter value
  const [count, setCount] = useState(0);

  // Function to handle increment
  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  // Function to handle decrement
  const decrement = () => {
    setCount(prevCount => prevCount - 1);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Simple Counter</h1>
      <div style={styles.counterContainer}>
        <button onClick={decrement} style={styles.button}>-</button>
        <span style={styles.count}>{count}</span>
        <button onClick={increment} style={styles.button}>+</button>
      </div>
    </div>
  );
};

// Basic styles for the component
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    fontFamily: 'Arial, sans-serif',
  },
  title: {
    fontSize: '2rem',
    marginBottom: '20px',
  },
  counterContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  button: {
    fontSize: '1.5rem',
    padding: '10px 20px',
    margin: '0 10px',
    cursor: 'pointer',
  },
  count: {
    fontSize: '2rem',
    width: '50px',
    textAlign: 'center',
  },
};

export default Counter;
