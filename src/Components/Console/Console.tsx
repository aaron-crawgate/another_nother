import React, { useState, useEffect, useCallback, useMemo, useRef, ChangeEvent, MouseEvent } from 'react';
import { v4 as uuidv4 } from 'uuid';

interface ExampleComponentProps {
  initialCount?: number;
  onButtonClick?: (count: number) => void;
}

const ExampleComponent: React.FC<ExampleComponentProps> = ({ initialCount = 0, onButtonClick }) => {
  const [count, setCount] = useState<number>(initialCount);
  const [inputValue, setInputValue] = useState<string>('');
  const countRef = useRef<number>(count);
  const inputRef = useRef<HTMLInputElement>(null);

  // Effect to update countRef whenever count changes
  useEffect(() => {
    countRef.current = count;
  }, [count]);

  // Effect to log when component mounts and unmounts
  useEffect(() => {
    console.log('ExampleComponent mounted');
    return () => {
      console.log('ExampleComponent unmounted');
    };
  }, []);

  // Memoized function to handle input changes
  const handleInputChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  }, []);

  // Memoized function to handle button clicks
  const handleButtonClick = useCallback(
    (e: MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      setCount(prevCount => prevCount + 1);
      if (onButtonClick) {
        onButtonClick(countRef.current + 1);
      }
    },
    [onButtonClick]
  );

  // Memoized value for an excessive example
  const randomUUID = useMemo(() => {
    return uuidv4();
  }, []);

  // Function to focus input
  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  // Overly verbose JSX
  return (
    <div className="example-component-container" style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
      <h1>Example Component</h1>
      <p>Current Count: {count}</p>
      <p>Generated UUID: {randomUUID}</p>
      <div style={{ margin: '10px 0' }}>
        <label htmlFor="example-input" style={{ display: 'block', marginBottom: '5px' }}>
          Enter something:
        </label>
        <input
          id="example-input"
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          ref={inputRef}
          style={{ padding: '5px', border: '1px solid #ccc', borderRadius: '3px' }}
        />
      </div>
      <button
        onClick={handleButtonClick}
        style={{
          padding: '10px 20px',
          backgroundColor: '#007BFF',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        Increment Count
      </button>
      <button
        onClick={focusInput}
        style={{
          padding: '10px 20px',
          backgroundColor: '#28A745',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          marginLeft: '10px'
        }}
      >
        Focus Input
      </button>
    </div>
  );
};

export default ExampleComponent;
