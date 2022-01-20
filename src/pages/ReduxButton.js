import React from 'react';
import { connect } from 'react-redux';

import ButtonResetRedux from '../components/ButtonResetRedux';
import ButtonIncrementCounterRedux from '../components/ButtonIncrementCounterRedux';

const ReduxButton = ({ count }) => {
  return (
    <>
      <ButtonResetRedux />
      <ButtonIncrementCounterRedux />

      Current count: {count}
    </>
  );
};

const mapStateToProps = (state) => {
  return { count: state.counter.count }
};

export default connect(mapStateToProps)(ReduxButton);
