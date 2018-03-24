import React, { Component } from 'react';
import { Field } from 'redux-form';

class HealthStatus extends Component {
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
<<<<<<< HEAD
          <label htmlFor="reason">
=======
          <label htmlFor="surname">
>>>>>>> ea0a49ff517583c8960813b147024eb4a90de934
          Please state the reason for the admission,
          name of the hospital and dates.
          </label>
          <Field
            disabled={this.props.disabled}
            className="form-control"
<<<<<<< HEAD
            name="reason"
            id="reason"
=======
            name="surname"
            id="surname"
>>>>>>> ea0a49ff517583c8960813b147024eb4a90de934
            component="textarea"
          />
        </div>
      );
    }


    return (
      <div>
        <div className="form-label-group">
          <label htmlFor="admittedStatus">
            Have you ever been admitted into a hospital?
          </label>
          <Field
            disabled={this.props.disabled}
            className="form-control"
            name="admittedStatus"
            id="admittedStatus"
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
export default HealthStatus;
