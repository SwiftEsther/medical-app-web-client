import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import DressingForm from './components/DressingForm/';

class TreatmentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfDressingForm: 1,
    };
  }

  render() {

    const dressingForms = [];
    for (let i = 0; i<this.state.numberOfDressingForm; i++){
      dressingForms.push(<DressingForm id={i} key={i} />);
    }

    return (
      <form onSubmit={this.props.handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <Field name="name" component="input" type="text" />
        </div>
        <div>
          <label htmlFor="age">Age</label>
          <Field name="age" component="input" type="number" />
        </div>
        <div>
          <label htmlFor="gender">Gender</label>
          <Field name="gender" component="select">
            <option></option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </Field>
        </div>
        {/* {dressingForms} */}
        <button type="submit">Submit</button>
      </form>
    )
  }
}
TreatmentForm = reduxForm({
  // a unique name for the form
  form: 'treatment'
})(TreatmentForm)

export default TreatmentForm;