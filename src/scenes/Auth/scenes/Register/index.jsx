import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form'
import registerActions from '../../../../services/auth/register/actions';
import RegisterForm from './components/RegisterForm';
class Register extends Component {
  
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit (values) {
    this.props.add(values)
  }
  render() {
    

    return (
      <RegisterForm onSubmit={this.handleSubmit} />
    );
  }
}

Register.propTypes = {
  register: PropTypes.object.isRequired,
  add: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({ register: state.register });
export default connect(mapStateToProps, { add: registerActions.add })(Register);
