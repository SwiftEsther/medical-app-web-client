import types from './constants';
import request from '../../../helpers/request';

const studentBioActions = {
  save: data => (dispatch) => {
    dispatch({ type: types.SAVE_STUDENT_BIO_REQUEST });
    request.post({
      path: 'student',
      body: data,
      success: types.SAVE_STUDENT_BIO_SUCCESS,
      failure: types.SAVE_STUDENT_BIO_FAILURE,
      dispatch,
    });
  },
};

export default studentBioActions;
