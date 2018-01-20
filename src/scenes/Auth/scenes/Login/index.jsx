import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form'
import loginActions from '../../../../services/auth/login/actions';
import LoginForm from './components/LoginForm';
class Login extends Component {
  
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit (values) {
    this.props.go(values);
  }
  render() {
    

    return (
      <LoginForm onSubmit={this.handleSubmit} />
    );
  }
}

Login.propTypes = {
  login: PropTypes.object.isRequired,
  go: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({ login: state.login });
export default connect(mapStateToProps, { go: loginActions.go })(Login);
