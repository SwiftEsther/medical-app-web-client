import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import './LoginForm.css';

const LoginForm = props => (

  <form className="form-login" onSubmit={props.handleSubmit}>
    <h1>
        Login Page
    </h1>
    <div className="form-label-group">
      <label htmlFor="uniqueId">Unique Id</label>
      <Field className="form-control" name="uniqueId" id="uniqueId" component="input" type="text" />
    </div>
    <div className="form-label-group">
      <label htmlFor="password">Password</label>
      <Field className="form-control" name="password" id="password" component="input" type="password" />
    </div>
    <div className="form-label-group">
      <label htmlFor="role">Role</label>
      <Field className="form-control" name="role" id="role" component="select">
        <option />
        <option value="Student">Student</option>
        <option value="Staff">Staff</option>
        <option value="Doctor">Doctor</option>
        <option value="Nurse">Nurse</option>
        <option value="Lab attendant">Lab attendant</option>
      </Field>
    </div>
    <button className="btn btn-primary btn-block" type="submit">Submit</button>
  </form>
);

LoginForm.defaultProps = {
  handleSubmit: () => {},
};

LoginForm.propTypes = {
  handleSubmit: PropTypes.func,
};

export default reduxForm({
  // a unique name for the form
  form: 'login',
})(LoginForm);
