import { combineReducers } from 'redux';
import types from './constants';

const defaultState = {
  go: {
    status: {
      loading: false,
      success: false,
      failure: false,
    },
    data: {},
  },
};
const go = (state = defaultState.go, action) => {
  switch (action.type) {
    case types.LOGIN_REQUEST:
      return {
        ...state,
        status: {
          loading: true,
          success: false,
          failure: false,
        },
      };
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        status: {
          loading: false,
          success: true,
          failure: false,
        },
        data: action.data,
      };
    case types.LOGIN_FAILURE:
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

const loginReducer = combineReducers({
  go,
});

export default loginReducer;
