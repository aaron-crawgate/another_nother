import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import PropTypes from 'prop-types';

// Dummy subcomponents
const Header = ({ title }) => <header><h1>{title}</h1></header>;
const Footer = ({ footerText }) => <footer><p>{footerText}</p></footer>;
const Sidebar = ({ items }) => (
  <aside>
    <ul>
      {items.map((item, index) => <li key={index}>{item}</li>)}
    </ul>
  </aside>
);

// Main component
const ComplexComponent = ({ initialData }) => {
  const [data, setData] = useState(initialData);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    // Simulate data fetching
    setIsLoading(true);
    setTimeout(() => {
      setData([...data, 'New Data Item']);
      setIsLoading(false);
    }, 2000);
  }, []);

  const handleItemClick = useCallback((item) => {
    setSelectedItem(item);
  }, []);

  const handleInputChange = useCallback((event) => {
    console.log(event.target.value);
  }, []);

  const memoizedValue = useMemo(() => {
    return data.reduce((acc, item) => acc + item.length, 0);
  }, [data]);

  return (
    <div className="complex-component">
      <Header title="Complex Component" />
      <Sidebar items={data} />
      <main>
        {isLoading ? <p>Loading...</p> : (
          <ul>
            {data.map((item, index) => (
              <li key={index} onClick={() => handleItemClick(item)}>
                {item}
              </li>
            ))}
          </ul>
        )}
        <p>Memoized value: {memoizedValue}</p>
        <input type="text" ref={inputRef} onChange={handleInputChange} />
      </main>
      <Footer footerText="This is the footer" />
    </div>
  );
};

ComplexComponent.propTypes = {
  initialData: PropTypes.arrayOf(PropTypes.string),
};

ComplexComponent.defaultProps = {
  initialData: [],
};

export default ComplexComponent;

// Additional Dummy Functions for length
const dummyFunction1 = () => {
  return 'Dummy Function 1';
};

const dummyFunction2 = () => {
  return 'Dummy Function 2';
};

const dummyFunction3 = () => {
  return 'Dummy Function 3';
};

// Dummy API Call Simulation
const fetchData = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(['Item 1', 'Item 2', 'Item 3']);
    }, 1000);
  });
};

// Hooks Example
const useCustomHook = () => {
  const [state, setState] = useState(null);

  useEffect(() => {
    fetchData().then(data => setState(data));
  }, []);

  return state;
};

const useAnotherCustomHook = () => {
  const [value, setValue] = useState(0);

  const increment = () => setValue(value + 1);

  return [value, increment];
};

const AdditionalComponent = () => {
  const data = useCustomHook();
  const [count, increment] = useAnotherCustomHook();

  return (
    <div>
      <h2>Additional Component</h2>
      <p>Data: {data ? data.join(', ') : 'Loading...'}</p>
      <button onClick={increment}>Count: {count}</button>
    </div>
  );
};

// Including the AdditionalComponent in the main component for more lines
const ComplexComponentWithAdditional = () => (
  <div>
    <ComplexComponent initialData={['Initial Item 1', 'Initial Item 2']} />
    <AdditionalComponent />
  </div>
);

export default ComplexComponentWithAdditional;
