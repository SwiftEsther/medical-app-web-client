import { combineReducers } from 'redux';
import types from './constants';

const defaultState = {
  studentBio: {
    status: {
      loading: false,
      success: false,
      failure: false,
    },
    data: {},
  },
};
const studentBio = (state = defaultState.studentBio, action) => {
  switch (action.type) {
    case types.STUDENT_BIO_REQUEST:
      return {
        ...state,
        status: {
          loading: true,
          success: false,
          failure: false,
        },
      };
    case types.STUDENT_BIO_SUCCESS:
      return {
        ...state,
        status: {
          loading: false,
          success: true,
          failure: false,
        },
        data: action.data,
        flash: 'Data saved.',
      };
    case types.STUDENT_BIO_FAILURE:
      return {
        ...state,
        status: {
          loading: false,
          success: false,
          failure: true,
        },
        flash: 'Error saving data.',
      };
    default:
      return state;
  }
};

export default studentBio;
