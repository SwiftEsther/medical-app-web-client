import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form'
import studentBioActions from '../../../../services/data/studentBio/actions';
import StudentBioForm from './components/StudentBioForm';
class StudentBio extends Component {
  
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit (values) {
    this.props.add(values)
  }
  render() {
    

    return (
      <StudentBioForm onSubmit={this.handleSubmit} />
    );
  }
}

StudentBio.propTypes = {
  studentBio: PropTypes.object.isRequired,
  add: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({ studentBio: state.studentBio });
export default connect(mapStateToProps, { add: studentBioActions.add })(StudentBio);
