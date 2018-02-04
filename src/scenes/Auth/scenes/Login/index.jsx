import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form'
import loginActions from '../../../../services/auth/login/actions';
import LoginForm from './components/LoginForm';
import isEmpty from 'lodash/isEmpty';
class Login extends Component {
  
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentWillMount() {
    console.log('Segun',this.props);
    if (!isEmpty(this.props.login.go.data.token)) {
      this.props.history.push('/');
    }

    if (isEmpty(this.props.login.go.data.token)) {
      this.props.history.push('/auth/login');
    }
  }

  componentWillReceiveProps(nextProps) {
    if (!isEmpty(nextProps.login.go.data.token)) {
      this.props.history.push('/');
    }
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
