import React, {useState} from 'react';

type CounterProps = {path: string};

const CounterField: React.FC<CounterProps> = ({path}) => {
  const [count, setCount] = useState(0);

  return (
    <div className="field-type text">
      <label htmlFor="field-counter" className="field-label">
        Counter
      </label>
      <div id="field-counter">
        <button
          className="btn btn--style-secondary btn--size-small"
          onClick={() => setCount(count + 1)}>
          +
        </button>
        <span style={{margin: '1rem'}}>{count}</span>
        <button
          className="btn btn--style-secondary btn--size-small"
          onClick={() => setCount(count - 1)}>
          -
        </button>
      </div>
    </div>
  );
};

export default CounterField;
