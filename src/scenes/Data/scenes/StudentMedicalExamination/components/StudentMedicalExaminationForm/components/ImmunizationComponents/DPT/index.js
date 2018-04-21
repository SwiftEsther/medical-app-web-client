import React, { Component } from 'react';
import { Field } from 'redux-form';

class DPT extends Component {
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
          <div>
            <label htmlFor="dptDate">Date: </label>
            <Field
              disabled={this.props.disabled}
              name="dptDate"
              id="dptDate"
              component={({ input, meta, ...rest }) => (<input
                type="date"
                {...input}
                {...rest}
              />)
              }
            />
          </div>
        </div>
      );
    }


    return (
      <div>
        <div className="form-label-group">
          <label htmlFor="dptImmunizationStatus">
            DPT
          </label>
          <Field
            disabled={this.props.disabled}
            className="form-control"
            name="dptImmunizationStatus"
            id="dptImmunizationStatus"
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
export default DPT;
