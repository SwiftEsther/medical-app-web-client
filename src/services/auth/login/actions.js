import types from './constants';
import request from '../../../helpers/request';

const loginActions = {
  go: data => (dispatch) => {
    dispatch({ type: types.LOGIN_REQUEST });
    request.post({
      path: 'user/login',
      body: data,
      success: types.LOGIN_SUCCESS,
      failure: types.LOGIN_FAILURE,
      dispatch,
    });
  },
};

export default loginActions;
