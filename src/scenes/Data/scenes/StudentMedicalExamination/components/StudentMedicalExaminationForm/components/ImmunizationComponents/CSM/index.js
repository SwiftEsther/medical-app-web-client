import React, { Component } from 'react';
import { Field } from 'redux-form';

class CSM extends Component {
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
            <label htmlFor="csmDate">Date: </label>
            <Field
              disabled={this.props.disabled}
              name="csmDate"
              id="csmDate"
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
          <label htmlFor="csmImmunizationStatus">
            CSM
          </label>
          <Field
            disabled={this.props.disabled}
            className="form-control"
            name="csmImmunizationStatus"
            id="csmImmunizationStatus"
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
export default CSM;
