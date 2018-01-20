import types from './constants';
import request from '../../../helpers/request';

const treatmentActions = {
  add: data => (dispatch) => {
    dispatch({ type: types.TREATMENT_ADD_REQUEST });
    request.post({
      path: 'treatment',
      body: data,
      success: types.TREATMENT_ADD_SUCCESS,
      failure: types.TREATMENT_ADD_FAILURE,
      dispatch,
    });
  },
};

export default treatmentActions;
