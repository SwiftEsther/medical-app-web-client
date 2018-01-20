import { combineReducers } from 'redux';
import types from './constants';

const defaultState = {
  add: {
    status: {
      loading: false,
      success: false,
      failure: false,
    },
    data: {},
  },
};
const add = (state = defaultState.add, action) => {
  switch (action.type) {
    case types.REGISTER_REQUEST:
      return {
        ...state,
        status: {
          loading: true,
          success: false,
          failure: false,
        },
      };
    case types.REGISTER_SUCCESS:
      return {
        ...state,
        status: {
          loading: false,
          success: true,
          failure: false,
        },
        data: action.data,
      };
    case types.REGISTER_FAILURE:
      return {
        ...state,
        status: {
          loading: true,
          success: false,
          failure: false,
        },
      };
    default:
      return state;
  }
};

const registerReducer = combineReducers({
  add,
});

export default registerReducer;
