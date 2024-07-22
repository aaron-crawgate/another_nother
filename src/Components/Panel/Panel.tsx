import React, { useState, useEffect, useCallback, useMemo } from 'react';

const LargeComponent = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');
  const [flag, setFlag] = useState(false);
  const [items, setItems] = useState([]);

  // Effect Hook Examples
  useEffect(() => {
    console.log('Component mounted');
    return () => {
      console.log('Component unmounted');
    };
  }, []);

  useEffect(() => {
    console.log('Count changed:', count);
  }, [count]);

  useEffect(() => {
    console.log('Text changed:', text);
  }, [text]);

  useEffect(() => {
    console.log('Flag changed:', flag);
  }, [flag]);

  // Callback Examples
  const increment = useCallback(() => setCount(count + 1), [count]);
  const decrement = useCallback(() => setCount(count - 1), [count]);
  const toggleFlag = useCallback(() => setFlag(!flag), [flag]);

  // Memoized Values
  const doubleCount = useMemo(() => count * 2, [count]);
  const reversedText = useMemo(() => text.split('').reverse().join(''), [text]);

  // Placeholder Functions
  const doNothing1 = () => {};
  const doNothing2 = () => {};
  const doNothing3 = () => {};
  const doNothing4 = () => {};
  const doNothing5 = () => {};
  const doNothing6 = () => {};
  const doNothing7 = () => {};
  const doNothing8 = () => {};
  const doNothing9 = () => {};
  const doNothing10 = () => {};
  const doNothing11 = () => {};
  const doNothing12 = () => {};
  const doNothing13 = () => {};
  const doNothing14 = () => {};
  const doNothing15 = () => {};
  const doNothing16 = () => {};
  const doNothing17 = () => {};
  const doNothing18 = () => {};
  const doNothing19 = () => {};
  const doNothing20 = () => {};

  // More Placeholder Functions
  const placeholderFunction1 = () => {
    console.log('This does nothing');
  };

  const placeholderFunction2 = () => {
    console.log('This does nothing');
  };

  const placeholderFunction3 = () => {
    console.log('This does nothing');
  };

  const placeholderFunction4 = () => {
    console.log('This does nothing');
  };

  const placeholderFunction5 = () => {
    console.log('This does nothing');
  };

  const placeholderFunction6 = () => {
    console.log('This does nothing');
  };

  const placeholderFunction7 = () => {
    console.log('This does nothing');
  };

  const placeholderFunction8 = () => {
    console.log('This does nothing');
  };

  const placeholderFunction9 = () => {
    console.log('This does nothing');
  };

  const placeholderFunction10 = () => {
    console.log('This does nothing');
  };

  const placeholderFunction11 = () => {
    console.log('This does nothing');
  };

  const placeholderFunction12 = () => {
    console.log('This does nothing');
  };

  const placeholderFunction13 = () => {
    console.log('This does nothing');
  };

  const placeholderFunction14 = () => {
    console.log('This does nothing');
  };

  const placeholderFunction15 = () => {
    console.log('This does nothing');
  };

  const placeholderFunction16 = () => {
    console.log('This does nothing');
  };

  const placeholderFunction17 = () => {
    console.log('This does nothing');
  };

  const placeholderFunction18 = () => {
    console.log('This does nothing');
  };

  const placeholderFunction19 = () => {
    console.log('This does nothing');
  };

  const placeholderFunction20 = () => {
    console.log('This does nothing');
  };

  // Event Handlers
  const handleChange = (e) => setText(e.target.value);
  const handleAddItem = () => setItems([...items, text]);
  const handleRemoveItem = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  // More Event Handlers
  const handleMouseEnter = () => {
    console.log('Mouse entered');
  };

  const handleMouseLeave = () => {
    console.log('Mouse left');
  };

  const handleFocus = () => {
    console.log('Focused');
  };

  const handleBlur = () => {
    console.log('Blurred');
  };

  const handleClick = () => {
    console.log('Clicked');
  };

  const handleDoubleClick = () => {
    console.log('Double clicked');
  };

  const handleKeyPress = () => {
    console.log('Key pressed');
  };

  const handleKeyDown = () => {
    console.log('Key down');
  };

  const handleKeyUp = () => {
    console.log('Key up');
  };

  // Render Function
  return (
    <div>
      <h1>Large Component</h1>
      <p>Count: {count}</p>
      <p>Double Count: {doubleCount}</p>
      <p>Reversed Text: {reversedText}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={toggleFlag}>Toggle Flag</button>
      <input type="text" value={text} onChange={handleChange} />
      <button onClick={handleAddItem}>Add Item</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item} <button onClick={() => handleRemoveItem(index)}>Remove</button>
          </li>
        ))}
      </ul>
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onClick={handleClick}
        onDoubleClick={handleDoubleClick}
        onKeyPress={handleKeyPress}
        onKeyDown={handleKeyDown}
        onKeyUp={handleKeyUp}
      >
        <p>Hover, focus, or click on this text to see event handlers in action.</p>
      </div>
    </div>
  );
};

export default LargeComponent;
