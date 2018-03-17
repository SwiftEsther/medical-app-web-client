import React, { Component } from 'react';
import { Field } from 'redux-form';
import DatePicker from 'react-date-picker';

class SmokingStatus extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      value: 'no',
      date: new Date()
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
                <label htmlFor="smokingDate">Since when? </label>
                <p><DatePicker
                    onChange={this.handleChange}
                    value={this.state.date}
                /></p>
            </div>
            <div>
            <label htmlFor="smokeQuantity">
            What quantity per day? 
            </label>
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
