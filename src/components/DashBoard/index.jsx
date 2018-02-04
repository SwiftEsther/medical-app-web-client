import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { NavLink } from 'react-router-dom';
import isEmpty from 'lodash/isEmpty';
import './DashBoard.css';


class Dashboard extends Component {

  render() {
    const navItems = [];
    let  search = <input class="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search" />;
    if (this.props.role === 'Student') {
      search =null;
      navItems.push(['/data/student-bio', 'Student Biodata']);
      navItems.push(['/data/student-medical', 'Student Medical Examination']);
    }
    else if (this.props.role === 'Staff') {
      search =null;
    }
    else if (this.props.role === 'Doctor') {
     
    }
    else if (this.props.role === 'Nurse') {

    }
    else if (this.props.role === 'Lab attendant') {

    }
    const navListComponent = navItems.map((item) => (
      <li key={item[0]} class="nav-item">
        <NavLink className="nav-link" to={item[0]}>
          {item[1]}
        </NavLink>
      </li>
    ));

    return (
      <div>
        <nav class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0">
          <NavLink className="navbar-brand col-sm-3 col-md-3 mr-0" to="/">
            Unilag Medical App
          </NavLink>
          {search}
          <ul class="navbar-nav px-3">
            <li class="nav-item text-nowrap">
              <a class="nav-link" href="#">Sign out</a>
            </li>
          </ul>
        </nav>
        <div class="container-fluid">
          <div class="row">
            <nav class="col-md-3 d-none d-md-block bg-light sidebar">
              <div class="sidebar-sticky">
                <ul class="nav flex-column">
                  <li class="nav-item">
                    <a class="nav-link active" href="#">
                      <span data-feather="home"></span>
                      Dashboard <span class="sr-only">(current)</span>
                    </a>
                  </li>
                  {navListComponent}
                </ul>
              </div>
            </nav>

            <main role="main" class="col-md-8 ml-sm-auto col-lg-9 pt-3 px-4">
              {this.props.children}
            </main>
          </div>
        </div>
      </div>

    );
  }
}

export default Dashboard;
