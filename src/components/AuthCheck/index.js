import { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

class AuthCheck extends Component {
  componentWillMount() {
    const data = localStorage.getItem('token');
    if (!data && this.props.history.location.pathname !== '/auth/login') {
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
    push: () => { },
  },
};

AuthCheck.propTypes = {
  children: PropTypes.node,
  history: PropTypes.shape({
    push: PropTypes.func,
    location: PropTypes.shape({
      pathname: PropTypes.string.isRequired,
    }),
  }),
};
export default withRouter(connect(state => state.login.data)(AuthCheck));
