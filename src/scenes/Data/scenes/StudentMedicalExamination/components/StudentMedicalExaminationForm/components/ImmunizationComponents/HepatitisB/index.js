import React, { Component } from 'react';
import { Field } from 'redux-form';

class HepatitisB extends Component {
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
            <label htmlFor="disorderDate">Date: </label>
            <Field
              disabled={this.props.disabled}
              name="disorderDate"
              id="disorderDate"
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
          <label htmlFor="hbImmunizationStatus">
            Hepatitis B
          </label>
          <Field
            disabled={this.props.disabled}
            className="form-control"
            name="hbImmunizationStatus"
            id="hbImmunizationStatus"
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
export default HepatitisB;
