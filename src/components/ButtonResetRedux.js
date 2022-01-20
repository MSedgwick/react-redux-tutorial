import React from 'react';
import { connect } from 'react-redux';
import { resetCounter } from '../redux/actions';

const ButtonResetRedux = ({ dispatch }) => {
  return (
    <div>
      <button type="button" className="button" onClick={() => dispatch(resetCounter())}>
        Reset Count
      </button>
    </div>
  );
};

export default connect(null)(ButtonResetRedux);
