import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import DischargeDetails from './DischargeDetails';
import MenstrualDisorders from './MenstrualDisorders';

class FemaleStudents extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      value: 'no',
    };
  }
  handleChange(result) {
    const { currentTarget: { value } } = result;
    this.setState({ value });
  }
  render() {
    let ifYes = null;
    if (this.state.value === 'yes') {
      ifYes = (
        <div className="form-label-group">
          <DischargeDetails disabled={this.props.disabled} />
          <MenstrualDisorders disabled={this.props.disabled} />
          <label htmlFor="periodDate">On what date did your last menstrual period start? </label>
          <Field
            disabled={this.props.disabled}
            name="lumpsDetails11"
            id="lumpsDetails11"
            component={({ input, meta, ...rest }) => (<input
              type="date"
              {...input}
              {...rest}
            />)
            }
          />
        </div>
      );
    }


    return (
      <div>
        <div className="form-label-group">
          <label htmlFor="femaleStudents">
            Are you a female student?
          </label>
          <Field
            disabled={this.props.disabled}
            className="form-control"
            name="femaleStudents"
            id="femaleStudents"
            component="select"
            onChange={this.handleChange}
          >
            <option />
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </Field>
        </div>
        {ifYes}
      </div>
    );
  }
}
// export default FemaleStudents;
export default reduxForm({
  form: 'studentMedicalForm',
})(FemaleStudents);
