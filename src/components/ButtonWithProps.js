import React from 'react';

const ButtonWithProps = ({ text }) => {
  return (
    <div>
      <button type="button" className="button">
        {text}
      </button>
    </div>
  );
};

export default ButtonWithProps;
