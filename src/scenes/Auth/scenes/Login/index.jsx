import React, { Component } from 'react';
import PropTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty';
import { connect } from 'react-redux';
import loginActions from './actions';
import LoginForm from './components/LoginForm';

class Login extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  // componentWillMount() {
  //   if (!isEmpty(this.props.login.data.token)) {
  //     this.props.history.push('/');
  //   }

  //   if (isEmpty(this.props.login.data.token)) {
  //     this.props.history.push('/auth/login');
  //   }
  // }

  componentWillReceiveProps(nextProps) {
    if (!isEmpty(nextProps.login.data.token)) {
      this.props.history.push('/');
    }
  }


  handleSubmit(values) {
    this.props.loginActions(values);
  }
  render() {
    return (
      <LoginForm onSubmit={this.handleSubmit} />
    );
  }
}

Login.defaultProps = {
  login: {
    data: {
      token: null,
    },
  },
  history: {
    push: () => { },
  },
};

Login.propTypes = {
  login: PropTypes.shape({
    data: PropTypes.shape({
      token: PropTypes.string,
    }),
  }),
  loginActions: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
};


const mapStateToProps = state => ({ login: state.login });
export default connect(mapStateToProps, { loginActions })(Login);
