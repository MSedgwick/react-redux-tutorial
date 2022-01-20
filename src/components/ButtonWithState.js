import React from 'react';

const ButtonWithState = ({ text, updateCounter, counter }) => {
  return (
    <div>
      <button type="button" className="button" onClick={() => updateCounter(counter + 1)}>
        {text}
      </button>
    </div>
  );
};

export default ButtonWithState;
