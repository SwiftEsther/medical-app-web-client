import { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import isEmpty from 'lodash/isEmpty';

class AuthCheck extends Component {
  componentWillMount() {
    if (isEmpty(this.props.token)) {
      this.props.history.push('/auth/login');
    }
  }

  render() {
    return this.props.children;
  }
}

AuthCheck.defaultProps = {
  children: '',
  history: {
    push: () => {},
  },
  token: null,
};

AuthCheck.propTypes = {
  token: PropTypes.string,
  children: PropTypes.node,
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
};
export default withRouter(connect(state => state.login.go.data)(AuthCheck));
