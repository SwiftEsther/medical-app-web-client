import React, { Component } from 'react';
import { Field } from 'redux-form';

class DischargeDetails extends Component {
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
          <label htmlFor="lumpsDetails">
          Please give details and date:
          </label>
          <Field
            disabled={this.props.disabled}
            className="form-control"
            name="lumpsDetails"
            id="lumpsDetails"
            component="textarea"
          />
        </div>
      );
    }


    return (
      <div>
        <div className="form-label-group">
          <label htmlFor="lumps">
            Have you ever had breast lump or nipple discharge?
          </label>
          <Field
            disabled={this.props.disabled}
            className="form-control"
            name="lumps"
            id="lumps"
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
export default DischargeDetails;
