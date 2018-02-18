import types from './constants';
import request from '../../../../helpers/request';

const studentBioActions = {
  create: data => (dispatch) => {
    dispatch({ type: types.CREATE_STUDENT_BIO_REQUEST });
    request.post({
      path: 'student',
      body: data,
      success: types.CREATE_STUDENT_BIO_SUCCESS,
      failure: types.CREATE_STUDENT_BIO_FAILURE,
      dispatch,
    });
  },
  read: () => (dispatch) => {
    dispatch({ type: types.READ_STUDENT_BIO_REQUEST });
    request.get({
      path: 'student/byid',
      success: types.READ_STUDENT_BIO_SUCCESS,
      failure: types.READ_STUDENT_BIO_FAILURE,
      dispatch,
    });
  },
  update: (data, id) => (dispatch) => {
    dispatch({ type: types.UPDATE_STUDENT_BIO_REQUEST });
    request.put({
      path: `student/${id}`,
      body: data,
      success: types.UPDATE_STUDENT_BIO_SUCCESS,
      failure: types.UPDATE_STUDENT_BIO_FAILURE,
      dispatch,
    });
  },
  delete: id => (dispatch) => {
    dispatch({ type: types.DELETE_STUDENT_BIO_REQUEST });
    request.delete({
      path: `student/${id}`,
      success: types.DELETE_STUDENT_BIO_SUCCESS,
      failure: types.DELETE_STUDENT_BIO_FAILURE,
      dispatch,
    });
  },
};

export default studentBioActions;
