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
    case types.CREATE_STUDENT_BIO_REQUEST:
      return {
        ...state,
        status: {
          loading: true,
          success: false,
          failure: false,
        },
      };
    case types.CREATE_STUDENT_BIO_SUCCESS:
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
    case types.CREATE_STUDENT_BIO_FAILURE:
      return {
        ...state,
        status: {
          loading: false,
          success: false,
          failure: true,
        },
        flash: 'Error saving data.',
      };
    case types.READ_STUDENT_BIO_REQUEST:
      return {
        ...state,
        status: {
          loading: true,
          success: false,
          failure: false,
        },
      };
    case types.READ_STUDENT_BIO_SUCCESS:
      return {
        ...state,
        status: {
          loading: false,
          success: true,
          failure: false,
        },
        data: action.data,
        flash: 'Data read.',
      };
    case types.READ_STUDENT_BIO_FAILURE:
      return {
        ...state,
        status: {
          loading: false,
          success: false,
          failure: true,
        },
        flash: 'No records found.',
      };
    case types.UPDATE_STUDENT_BIO_REQUEST:
      return {
        ...state,
        status: {
          loading: true,
          success: false,
          failure: false,
        },
      };
    case types.UPDATE_STUDENT_BIO_SUCCESS:
      return {
        ...state,
        status: {
          loading: false,
          success: true,
          failure: false,
        },
        data: action.data,
        flash: 'Data updated.',
      };
    case types.UPDATE_STUDENT_BIO_FAILURE:
      return {
        ...state,
        status: {
          loading: false,
          success: false,
          failure: true,
        },
        flash: 'Error updating data.',
      };
    case types.DELETE_STUDENT_BIO_REQUEST:
      return {
        ...state,
        status: {
          loading: true,
          success: false,
          failure: false,
        },
      };
    case types.DELETE_STUDENT_BIO_SUCCESS:
      return {
        ...state,
        status: {
          loading: false,
          success: true,
          failure: false,
        },
        data: {},
        flash: 'Data deleted.',
      };
    case types.DELETE_STUDENT_BIO_FAILURE:
      return {
        ...state,
        status: {
          loading: false,
          success: false,
          failure: true,
        },
        flash: 'Error deleting data.',
      };
    default:
      return state;
  }
};

export default studentBio;
