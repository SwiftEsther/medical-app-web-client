import React from 'react'
import { Field, reduxForm } from 'redux-form';
import './StudentBioForm.css';

let StudentBioForm = props => {
  let flash = null;
  if (props.flash && props.status.success===true) {
    flash = (
      <div class="alert alert-success" role="alert">
        {props.flash}
      </div>
    );
  }
  else if (props.flash && props.status.failure===true) {
    flash = (
      <div class="alert alert-danger" role="alert">
        {props.flash}
      </div>
    );
  }
  return (
    <div>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
        <h1 className="h2">Student Biodata Page</h1>
        <div className="btn-toolbar mb-2 mb-md-0">
          <button className="btn btn-primary" type="submit" onClick={props.onEdit}>Edit</button>

          <button className="btn btn-danger" type="submit" onClick={props.onDelete}>Delete</button>
        </div>
      </div>
      {flash}
      <form className="form-register" onSubmit={props.handleSubmit}>

        <div className="form-label-group">
          <label htmlFor="surname">Surname</label>
          <Field disabled={props.disabled} className="form-control" name="surname" id="surname" component="input" type="text" />
        </div>
        <div className="form-label-group">
          <label htmlFor="otherNames">Other Names</label>
          <Field disabled={props.disabled} className="form-control" name="otherNames" id="otherNames" component="input" type="text" />
        </div>
        <div className="form-label-group">
          <label htmlFor="sex">Sex</label>
          <Field disabled={props.disabled} className="form-control" name="sex" id="sex" component="select">
            <option></option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </Field>
        </div>
        <div className="form-label-group">
          <label htmlFor="age">Age</label>
          <Field disabled={props.disabled} className="form-control" name="age" id="age" component="input" type="number" />
        </div>
        <div className="form-label-group">
          <label htmlFor="address">Address</label>
          <Field disabled={props.disabled} className="form-control" name="address" id="address" component="textarea" />
        </div>
        <div className="form-label-group">
          <label htmlFor="gsm">Telephone(GSM)</label>
          <Field disabled={props.disabled} className="form-control" name="gsm" id="gsm" component="input" type="tel" />
        </div>
        <div className="form-label-group">
          <label htmlFor="telephoneOffice">Telephone(Office)</label>
          <Field disabled={props.disabled} className="form-control" name="telephoneOffice" id="telephoneOffice" component="input" type="tel" />
        </div>
        <div className="form-label-group">
          <label htmlFor="email">Email Address</label>
          <Field disabled={props.disabled} className="form-control" name="email" id="email" component="input" type="text" />
        </div>
        <div className="form-label-group">
          <label htmlFor="staffOrStudent">Staff/Student</label>
          <Field disabled={props.disabled} className="form-control" name="staffOrStudent" id="staffOrStudent" component="select">
            <option></option>
            <option value="staff">Staff</option>
            <option value="student">Student</option>
          </Field>
        </div>
        <div className="form-label-group">
          <label htmlFor="ethnicGroup">Ethnic Group</label>
          <Field disabled={props.disabled} className="form-control" name="ethnicGroup" id="ethnicGroup" component="input" type="text" />
        </div>
        <div className="form-label-group">
          <label htmlFor="surnameKin">Surname(Next of Kin)</label>
          <Field disabled={props.disabled} className="form-control" name="surnameKin" id="surnameKin" component="input" type="text" />
        </div>
        <div className="form-label-group">
          <label htmlFor="otherNameKin">Other Name(Next of Kin)</label>
          <Field disabled={props.disabled} className="form-control" name="otherNameKin" id="otherNameKin" component="input" type="text" />
        </div>
        <button className="btn btn-primary btn-block" type="submit">Submit</button>
      </form>
    </div>
  )
}
StudentBioForm = reduxForm({
  // a unique name for the form
  form: 'studentBioForm'
})(StudentBioForm)

export default StudentBioForm;
