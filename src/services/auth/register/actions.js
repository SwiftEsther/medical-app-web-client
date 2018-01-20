import types from './constants';
import request from '../../../helpers/request';

const registerActions = {
  add: data => (dispatch) => {
    dispatch({ type: types.REGISTER_REQUEST });
    request.post({
      path: 'user',
      body: data,
      success: types.REGISTER_SUCCESS,
      failure: types.REGISTER_FAILURE,
      dispatch,
    });
  },
};

export default registerActions;
