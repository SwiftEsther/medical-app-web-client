import React, { Component } from 'react';
import PropTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty';
import { connect } from 'react-redux';
import loginActions from '../../../../services/auth/login/actions';
import LoginForm from './components/LoginForm';

class Login extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentWillMount() {
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


  handleSubmit(values) {
    this.props.go(values);
  }
  render() {
    return (
      <LoginForm onSubmit={this.handleSubmit} />
    );
  }
}

Login.defaultProps = {
  login: {
    go: {
      data: {
        token: null,
      },
    },
  },
  history: {
    push: () => {},
  },
};

Login.propTypes = {
  login: PropTypes.shape({
    go: {
      data: {
        token: PropTypes.string,
      },
    },
  }),
  go: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
};


const mapStateToProps = state => ({ login: state.login });
export default connect(mapStateToProps, { go: loginActions.go })(Login);
