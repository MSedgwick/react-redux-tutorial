import React from 'react';
import { connect } from 'react-redux';
import { setCounter } from '../redux/actions';

const ButtonIncrementCounterRedux = ({ count, dispatch }) => {
  return (
    <div>
      <button type="button" className="button" onClick={() => dispatch(setCounter(count + 1))}>
        Increment counter
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { count: state.counter.count }
};

export default connect(mapStateToProps)(ButtonIncrementCounterRedux);
