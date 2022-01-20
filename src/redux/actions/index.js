export const resetCounter = () => {
  return {
    type: 'RESET_COUNTER'
  };
};

export const setCounter = (newCount) => {
  return {
    type: 'SET_COUNTER',
    payload: newCount
  };
};
