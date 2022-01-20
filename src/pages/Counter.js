import React, { useState } from 'react';

import ButtonWithState from '../components/ButtonWithState';

const Counter = () => {
  const [counter, updateCounter] = useState(0);

  return (
    <>
      <ButtonWithState text="Add one" counter={counter} updateCounter={updateCounter} />
      Current count: {counter}
    </>
  );
};

export default Counter;
