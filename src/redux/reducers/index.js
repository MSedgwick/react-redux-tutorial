import { combineReducers } from 'redux';

const initialState = { count: 0 };

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'RESET_COUNTER': {
      return {
        ...state,
        count: 0,
      };
    }

    case 'SET_COUNTER': {
      return {
        ...state,
        count: action.payload,
      };
    }

    default:
      return state;
  }
};

export default combineReducers({
  counter: counterReducer
});
