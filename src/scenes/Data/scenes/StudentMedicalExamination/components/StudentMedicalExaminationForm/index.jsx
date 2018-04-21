import React from 'react';
import { Field, reduxForm } from 'redux-form';
import './StudentMedicalExaminationForm.css';
import HealthStatus from './components/HealthStatus';
import FemaleStudents from './components/FemaleStudents';
import SmokingStatus from './components/SmokingStatus';
import Activities from './components/Activities';
import FamilyStatus from './components/FamilyStatus';
import BCG from './components/ImmunizationComponents/BCG';
import TetanusToxoid from './components/ImmunizationComponents/TetanusToxoid';
import OralPolio from './components/ImmunizationComponents/OralPolio';
import HepatitisB from './components/ImmunizationComponents/HepatitisB';
import YellowFever from './components/ImmunizationComponents/YellowFever';
import DPT from './components/ImmunizationComponents/DPT';
import MMR from './components/ImmunizationComponents/MMR';
import CSM from './components/ImmunizationComponents/CSM';

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
          <label htmlFor="details">Give details of any serious illness, injuries, accidents, fractures or operations you have had</label>
          <Field
            disabled={props.disabled}
            className="form-control"
            name="details"
            id="details"
            component="textarea"
          />
        </div>
        <div className="form-label-group">
          <label htmlFor="healthConditions">Do you suffer from or have suffered from any of the following conditions? </label>
          <label htmlFor="respiratoryDisease"> Respiratory disease </label>
          <ul>
            <li>Asthma</li>
            <Field
              disabled={props.disabled}
              className="form-control"
              name="asthma"
              id="asthma"
              component="select"
            >
              <option />
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </Field>
            <li>Bronchitis/Sinusitis</li>
            <Field
              disabled={props.disabled}
              className="form-control"
              name="B/S"
              id="B/S"
              component="select"
            >
              <option />
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </Field>
            <li>Tuberculosis</li>
            <Field
              disabled={props.disabled}
              className="form-control"
              name="Tuberculosis"
              id="Tuberculosis"
              component="select"
            >
              <option />
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </Field>
          </ul>
          <label htmlFor="digestiveSystem">Disease of the digetsive system</label>
          <Field
            disabled={props.disabled}
            className="form-control"
            name="digestiveSystem"
            id="digestiveSystem"
            component="select"
          >
            <option />
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </Field>
          <label htmlFor="heartDisease">Disease of the heart</label>
          <Field
            disabled={props.disabled}
            className="form-control"
            name="heartDisease"
            id="heartDisease"
            component="select"
          >
            <option />
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </Field>
          <label htmlFor="BP">High Blood Pressure</label>
          <Field
            disabled={props.disabled}
            className="form-control"
            name="BP"
            id="BP"
            component="select"
          >
            <option />
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </Field>
          <label htmlFor="bones">Bone, Joint disease or other Deformity</label>
          <Field
            disabled={props.disabled}
            className="form-control"
            name="bones"
            id="bones"
            component="select"
          >
            <option />
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </Field>
          <label htmlFor="eyes">Eye disease/blindness</label>
          <Field
            disabled={props.disabled}
            className="form-control"
            name="eyes"
            id="eyes"
            component="select"
          >
            <option />
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </Field>
          <label htmlFor="ulcer">Peptic Ulcer</label>
          <Field
            disabled={props.disabled}
            className="form-control"
            name="ulcer"
            id="ulcer"
            component="select"
          >
            <option />
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </Field>
          <label htmlFor="nervousDisease">Nervous disease</label>
          <ul>
            <li>Epilepsy/Fits</li>
            <Field
              disabled={props.disabled}
              className="form-control"
              name="E/F"
              id="E/F"
              component="select"
            >
              <option />
              <option value="good">Yes</option>
              <option value="fair">No</option>
            </Field>
            <li>Dizziness/Fainting</li>
            <Field
              disabled={props.disabled}
              className="form-control"
              name="D/F"
              id="D/F"
              component="select"
            >
              <option />
              <option value="good">Yes</option>
              <option value="fair">No</option>
            </Field>
            <li>Mental Illness</li>
            <Field
              disabled={props.disabled}
              className="form-control"
              name="mentalIllness"
              id="mentalIllness"
              component="select"
            >
              <option />
              <option value="good">Yes</option>
              <option value="fair">No</option>
            </Field>
          </ul>
          <label htmlFor="drugSensitivity">Drug Sensitivity</label>
          <Field
            disabled={props.disabled}
            className="form-control"
            name="drugSensitivity"
            id="drugSensitivity"
            component="select"
          >
            <option />
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </Field>
          <label htmlFor="M/H">Migraine/Headache</label>
          <Field
            disabled={props.disabled}
            className="form-control"
            name="M/H"
            id="M/H"
            component="select"
          >
            <option />
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </Field>
          <label htmlFor="scDisease">Sickle Cell Disease</label>
          <Field
            disabled={props.disabled}
            className="form-control"
            name="scDisease"
            id="scDisease"
            component="select"
          >
            <option />
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </Field>
          <label htmlFor="STD">Sexually Transmitted Illness</label>
          <Field
            disabled={props.disabled}
            className="form-control"
            name="STD"
            id="STD"
            component="select"
          >
            <option />
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </Field>
          <label htmlFor="senses">Ear, Nose and Throat disease</label>
          <Field
            disabled={props.disabled}
            className="form-control"
            name="senses"
            id="senses"
            component="select"
          >
            <option />
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </Field>
          <label htmlFor="DM">Diabetes Mellitus</label>
          <Field
            disabled={props.disabled}
            className="form-control"
            name="DM"
            id="DM"
            component="select"
          >
            <option />
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </Field>
        </div>
        <FemaleStudents disabled={props.disabled} />
        <SmokingStatus disabled={props.disabled} />
        <Activities disabled={props.disabled} />
        <div className="form-label-group">
          <label htmlFor="anxiety">Do you get very anxious at the time of class tests or exams? </label>
          <Field
            disabled={props.disabled}
            className="form-control"
            name="anxiety"
            id="anxiety"
            component="select"
          >
            <option />
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </Field>
        </div>
        <div className="form-label-group">
          <label htmlFor="otherRelevantDetails">If there are any other relevant details of your medical history not covered by the above questions, please give particulars </label>
          <Field
            disabled={props.disabled}
            className="form-control"
            name="otherRelevantDetails"
            id="otherRelevantDetails"
            component="textarea"
          />
        </div>
        <div className="form-label-group">
          <label htmlFor="hivStatus">Would you like to know your HIV status? </label>
          <Field
            disabled={props.disabled}
            className="form-control"
            name="hivStatus"
            id="hivStatus"
            component="select"
          >
            <option />
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </Field>
        </div>
        <FamilyStatus disabled={props.disabled} />
        <div className="form-label-group">
          <label htmlFor="immunizations">Have you taken any of these immunizations? </label>
          <BCG disabled={props.disabled} />
          <TetanusToxoid disabled={props.disabled} />
          <OralPolio disabled={props.disabled} />
          <HepatitisB disabled={props.disabled} />
          <YellowFever disabled={props.disabled} />
          <DPT disabled={props.disabled} />
          <MMR disabled={props.disabled} />
          <CSM disabled={props.disabled} />
        </div>

        <button className="btn btn-primary btn-block" type="submit">Submit</button>
      </form>
    </div>
  );
};

export default reduxForm({
  form: 'studentMedicalForm',
})(StudentBioForm);
