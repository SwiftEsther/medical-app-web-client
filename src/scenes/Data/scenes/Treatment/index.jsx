import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form'
import treatmentActions from '../../../../services/data/treatment/actions';
import TreatmentForm from './components/TreatmentForm/';
class Treatment extends Component {
  
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit (values) {
    this.props.add(values);
    console.log(values);

  }
  render() {
    

    return (
      <TreatmentForm onSubmit={this.handleSubmit} />
    );
  }
}

Treatment.propTypes = {
  treatment: PropTypes.object.isRequired,
  add: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({ treatment: state.treatment });
export default connect(mapStateToProps, { add: treatmentActions.add })(Treatment);
