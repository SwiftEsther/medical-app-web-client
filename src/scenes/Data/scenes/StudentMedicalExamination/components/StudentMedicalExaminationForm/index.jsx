import React from 'react';
import { Field, reduxForm } from 'redux-form';
import './StudentMedicalExaminationForm.css';
import HealthStatus from './components/HealthStatus'; 

const StudentBioForm = (props) => {
  let flash = null;
  if (props.flash && props.status.success === true) {
    flash = (
      <div className="alert alert-success" role="alert">
        {props.flash}
      </div>
    );
  } else if (props.flash && props.status.failure === true) {
    flash = (
      <div className="alert alert-danger" role="alert">
        {props.flash}
      </div>
    );
  }
  return (
    <div>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
        <h1 className="h2">Student Biodata Page</h1>
        <div className="btn-toolbar mb-2 mb-md-0">
          <button
            className="btn btn-primary"
            type="submit"
            onClick={props.onEdit}
          >
            Edit
          </button>

          <button
            className="btn btn-danger"
            type="submit"
            onClick={props.onDelete}
          >
            Delete
          </button>
        </div>
      </div>
      {flash}
      <form className="form-register" onSubmit={props.handleSubmit}>
        <div className="form-label-group">
          <label htmlFor="healthStatus">Would you say your health is </label>
          <Field
            disabled={props.disabled}
            className="form-control"
            name="healthStatus"
            id="healthStatus"
            component="select"
          >
            <option />
            <option value="good">Good</option>
            <option value="fair">Fair</option>
            <option value="poor">Poor</option>
          </Field>
        </div>
        <HealthStatus disabled={props.disabled} />
        <div className="form-label-group">
          <label htmlFor="surname">Surname</label>
          <Field
            disabled={props.disabled}
            className="form-control"
            name="surname"
            id="surname"
            component="textarea"
          />
        </div>
        <button className="btn btn-primary btn-block" type="submit">Submit</button>
      </form>
    </div>
  );
};

export default reduxForm({
  form: 'studentBioForm',
})(StudentBioForm);
