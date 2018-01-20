import React from 'react'
import { Field, reduxForm } from 'redux-form';
import './RegisterForm.css';

let RegisterForm = props => {
  return (

    <form className="form-register" onSubmit={props.handleSubmit}>
      <h1>
        Registeration Page
      </h1>
      <div className="form-label-group">
        <label htmlFor="matricNo">Matric No.</label>
        <Field className="form-control" name="matricNo" id="matricNo" component="input" type="text" />
      </div>
      <div className="form-label-group">
        <label htmlFor="password">Password</label>
        <Field className="form-control" name="password" id="password" component="input" type="password" />
      </div>
      <div className="form-label-group">
        <label htmlFor="confirmPassword">Confirm Password</label>
        <Field className="form-control" name="confirmPassword" id="confirmPassword" component="input" type="password" />
      </div>
      <div className="form-label-group">
        <label htmlFor="surname">Surname</label>
        <Field className="form-control" name="surname" id="surname" component="input" type="text" />
      </div>
      <div className="form-label-group">
        <label htmlFor="otherNames">Other Names</label>
        <Field className="form-control" name="otherNames" id="otherNames" component="input" type="text" />
      </div>
      <div className="form-label-group">
        <label htmlFor="sex">Sex</label>
        <Field className="form-control" name="sex" id="sex" component="select">
          <option></option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </Field>
      </div>
      <div className="form-label-group">
        <label htmlFor="age">Age</label>
        <Field className="form-control" name="age" id="age" component="input" type="number" />
      </div>
      <div className="form-label-group">
        <label htmlFor="address">Address</label>
        <Field className="form-control" name="address" id="address" component="textarea" />
      </div>
      <div className="form-label-group">
        <label htmlFor="gsm">Telephone(GSM)</label>
        <Field className="form-control" name="gsm" id="gsm" component="input" type="tel" />
      </div>
      <div className="form-label-group">
        <label htmlFor="telephoneOffice">Telephone(Office)</label>
        <Field className="form-control" name="telephoneOffice" id="telephoneOffice" component="input" type="tel" />
      </div>
      <div className="form-label-group">
        <label htmlFor="email">Email Address</label>
        <Field className="form-control" name="email" id="email" component="input" type="text" />
      </div>
      <div className="form-label-group">
        <label htmlFor="staffOrStudent">Staff/Student</label>
        <Field className="form-control" name="staffOrStudent" id="staffOrStudent" component="select">
          <option></option>
          <option value="staff">Staff</option>
          <option value="student">Student</option>
        </Field>
      </div>
      <div className="form-label-group">
        <label htmlFor="ethnicGroup">Ethnic Group</label>
        <Field className="form-control" name="ethnicGroup" id="ethnicGroup" component="input" type="text" />
      </div>
      <div className="form-label-group">
        <label htmlFor="surnameKin">Surname(Next of Kin)</label>
        <Field className="form-control" name="surnameKin" id="surnameKin" component="input" type="text" />
      </div>
      <div className="form-label-group">
        <label htmlFor="otherNameKin">Other Name(Next of Kin)</label>
        <Field className="form-control" name="otherNameKin" id="otherNameKin" component="input" type="text" />
      </div>
      <button className="btn btn-primary btn-block" type="submit">Submit</button>
    </form>
  )
}
RegisterForm = reduxForm({
  // a unique name for the form
  form: 'register'
})(RegisterForm)

export default RegisterForm;
