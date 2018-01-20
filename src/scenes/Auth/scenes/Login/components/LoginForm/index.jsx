import React from 'react'
import { Field, reduxForm } from 'redux-form';
import './LoginForm.css';

let LoginForm = props => {
  return (

    <form className="form-login" onSubmit={props.handleSubmit}>
      <h1>
        Login Page
      </h1>
      <div className="form-label-group">
        <label htmlFor="matricNo">Matric No.</label>
        <Field className="form-control" name="matricNo" id="matricNo" component="input" type="text" />
      </div>
      <div className="form-label-group">
        <label htmlFor="password">Password</label>
        <Field className="form-control" name="password" id="password" component="input" type="password" />
      </div>
      <button className="btn btn-primary btn-block" type="submit">Submit</button>
    </form>
  )
}
LoginForm = reduxForm({
  // a unique name for the form
  form: 'login'
})(LoginForm)

export default LoginForm;
