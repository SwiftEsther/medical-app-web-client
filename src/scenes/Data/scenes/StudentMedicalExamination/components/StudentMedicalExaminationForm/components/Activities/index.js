import React, { Component } from 'react';
import { Field } from 'redux-form';
import SchoolRep from './SchoolRep';

class Activities extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      value: ''
    };
  }
  /* handleChange(event) {
    const value = event.target.value;this.setState({ value }); */
    handleChange=(event)=>{
        const value=event.target.value
        if(value){
          this.setState({value});
        }
        else{
        this.setState({value:''})
        }
    }
  render() {
    let ifNotEmpty = null;
    if (this.state.value !== '') {
      ifNotEmpty = (
        <div className="form-label-group">
          <label htmlFor="athleticPursuit">
          Do you take part in any athletic pursuit? 
          </label>
          <Field
            disabled={this.props.disabled}
            className="form-control"
            name="athleticPursuit"
            id="athleticPursuit"
            component="select"
          >
          <option/>
          <option value="regularly">Regularly</option>
          <option value="occationally">Occasionally</option>
          <option value="rarely">Rarerly</option>
          <option value="notAtAll">Not al all</option>
          </Field>
          <SchoolRep disabled={this.props.disabled} />
        </div>
      );
    }


    return (
      <div>
        <div className="form-label-group">
          <label htmlFor="activityType">
            What activities do you enjoy in your spare time?
          </label>
          <Field
            disabled={this.props.disabled}
            className="form-control"
            name="activityType"
            id="activitieType"
            component="textarea"
            onChange={this.handleChange}
          />
        </div>
        {ifNotEmpty}
      </div>
    );
  }
}
export default Activities;
