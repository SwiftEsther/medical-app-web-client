import types from './constants';

const defaultState = {
  status: {
    loading: false,
    success: false,
    failure: false,
  },
  data: {},
};
const loginReducer = (state = defaultState, action) => {
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
      localStorage.setItem('token', JSON.stringify(action.data));
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

export default loginReducer;
