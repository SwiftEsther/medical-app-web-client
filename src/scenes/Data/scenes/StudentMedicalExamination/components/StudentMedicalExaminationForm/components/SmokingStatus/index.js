import React, { Component } from 'react';
import { Field } from 'redux-form';

class SmokingStatus extends Component {
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
            <label htmlFor="smokingDatePicker">Since when? </label>
            <Field
              disabled={this.props.disabled}
              name="smokingDatePicker"
              id="smokingDatePicker"
              component={({ input, meta, ...rest }) => (<input
                type="date"
                {...input}
                {...rest}
              />)
              }
            />
          </div>
          <div>
            <label htmlFor="smokeQuantity">What quantity per day? </label>
            <Field
              disabled={this.props.disabled}
              className="form-control"
              name="smokeQuantity"
              id="smokeQuantity"
              component="textarea"
            />
          </div>
        </div>
      );
    }


    return (
      <div>
        <div className="form-label-group">
          <label htmlFor="smokingStatus">
            Did you or do you smoke?
          </label>
          <Field
            disabled={this.props.disabled}
            className="form-control"
            name="smokingStatus"
            id="smokingStatus"
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
export default SmokingStatus;
