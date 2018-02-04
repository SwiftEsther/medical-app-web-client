import types from './constants';
import request from '../../../helpers/request';

const studentBioActions = {
  add: data => (dispatch) => {
    dispatch({ type: types.STUDENT_BIO_REQUEST });
    request.post({
      path: 'student',
      body: data,
      success: types.STUDENT_BIO_SUCCESS,
      failure: types.STUDENT_BIO_FAILURE,
      dispatch,
    });
  },
};

export default studentBioActions;
