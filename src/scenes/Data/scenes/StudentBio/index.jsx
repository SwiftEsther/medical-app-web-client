import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import studentBioActions from '../../../../services/data/studentBio/actions';
import StudentBioForm from './components/StudentBioForm';

class StudentBio extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    // this.handleDelete = this.handleDelete.bind(this);
    this.state = {
      disabled: true,
    };
  }

  handleSubmit(values) {
    this.props.save(values);
  }

  handleEdit() {
    this.setState({
      disabled: false,
    });
  }

  // handleDelete() {
  // }

  render() {
    const { flash, status } = this.props.studentBio;
    return (
      <StudentBioForm
        flash={flash}
        status={status}
        disabled={this.state.disabled}
        onSubmit={this.handleSubmit}
        onEdit={this.handleEdit}
      />
    );
  }
}

StudentBio.propTypes = {
  studentBio: PropTypes.shape({
    flash: PropTypes.string,
    status: PropTypes.shape({
      success: PropTypes.bool,
      failure: PropTypes.bool,
    }),
  }).isRequired,
  save: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({ studentBio: state.studentBio });
const mapActionToProps = { save: studentBioActions.save };
export default connect(mapStateToProps, mapActionToProps)(StudentBio);
