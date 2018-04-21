import React, { Component } from 'react';
import { Field } from 'redux-form';

class FamilyStatus extends Component {
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
          <label htmlFor="whichDisease">
          Please specify the disease:
          </label>
          <Field
            disabled={this.props.disabled}
            className="form-control"
            name="whichDisease"
            id="whichDisease"
            component="textarea"
          />
        </div>
      );
    }


    return (
      <div>
        <div className="form-label-group">
          <label htmlFor="familyStatus">Does any member of your family or has any member suffered from Tuberculosis, Hypertension, Diabetes Mellitus, Epilepsy, Mental Illness? </label>
          <Field
            disabled={this.props.disabled}
            className="form-control"
            name="familyStatus"
            id="familyStatus"
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
export default FamilyStatus;
