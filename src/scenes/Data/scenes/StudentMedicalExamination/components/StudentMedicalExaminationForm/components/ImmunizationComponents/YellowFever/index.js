import React, { Component } from 'react';
import { Field } from 'redux-form';
import DatePicker from 'react-date-picker';

class YellowFever extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      value: 'no',
      date: new Date(),
    };
  }
  handleDateChange=date=>this.setState({date})
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
                <DatePicker
                    onChange={this.handleDateChange}
                    selected={this.state.date}
                />
            </div>
        </div>
      );
    }


    return (
      <div>
        <div className="form-label-group">
          <label htmlFor="yfImmunizationStatus">
            BCG
          </label>
          <Field
            disabled={this.props.disabled}
            className="form-control"
            name="yfImmunizationStatus"
            id="yfImmunizationStatus"
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
export default YellowFever;
