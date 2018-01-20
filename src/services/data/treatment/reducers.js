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
    case types.TREATMENT_ADD_REQUEST:
      return {
        ...state,
        status: {
          loading: true,
          success: false,
          failure: false,
        },
      };
    case types.TREATMENT_ADD_SUCCESS:
      return {
        ...state,
        status: {
          loading: false,
          success: true,
          failure: false,
        },
        data: action.data,
      };
    case types.TREATMENT_ADD_FAILURE:
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

const treatmentReducer = combineReducers({
  add,
});

export default treatmentReducer;
