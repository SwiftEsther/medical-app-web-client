import React, { Component } from 'react';
import { Field } from 'redux-form';

class SchoolRep extends Component {
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
          <label htmlFor="whichSport">
          Which? 
          </label>
          <Field
            disabled={this.props.disabled}
            className="form-control"
            name="whichSport"
            id="whichSport"
            component="textarea"
          />
        </div>
      );
    }

    return (
      <div>
        <div className="form-label-group">
          <label htmlFor="schoolRep">
            Did you represent your school at any sport? 
          </label>
          <Field
            disabled={this.props.disabled}
            className="form-control"
            name="schoolRep"
            id="schoolRep"
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
export default SchoolRep;
