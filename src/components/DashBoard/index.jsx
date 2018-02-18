import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './DashBoard.css';

const logout = () => localStorage.removeItem('token');

const Dashboard = (props) => {
  const navItems = [];
  let search = <input className="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search" />;
  const data = localStorage.getItem('token');
  if (data) {
    if (props.roles === 'Student') {
      search = null;
      navItems.push(['/data/student-bio', 'Student Biodata']);
      navItems.push(['/data/student-medical', 'Student Medical Examination']);
    } else if (props.roles === 'Staff') {
      search = null;
    }
    // else if (props.roles === 'Doctor') {

    // } else if (props.roles === 'Nurse') {

    // } else if (props.roles === 'Lab attendant') {

    // }
  }

  const navListComponent = navItems.map(item => (
    <li key={item[0]} className="nav-item">
      <NavLink className="nav-link" to={item[0]}>
        {item[1]}
      </NavLink>
    </li>
  ));

  return (
    <div>
      <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0">
        <NavLink className="navbar-brand col-sm-3 col-md-3 mr-0" to="/">
          Unilag Medical App
        </NavLink>
        {search}
        <ul className="navbar-nav px-3">
          <li className="nav-item text-nowrap">
            <NavLink className="nav-link" to="/auth/login" onClick={logout}>Sign out</NavLink>
          </li>
        </ul>
      </nav>
      <div className="container-fluid">
        <div className="row">
          <nav className="col-md-3 d-none d-md-block bg-light sidebar">
            <div className="sidebar-sticky">
              <ul className="nav flex-column">
                <li className="nav-item">
                  <a className="nav-link active" href="/">
                    <span data-feather="home" />
                    Dashboard <span className="sr-only">(current)</span>
                  </a>
                </li>
                {navListComponent}
              </ul>
            </div>
          </nav>

          <main role="main" className="col-md-8 ml-sm-auto col-lg-9 pt-3 px-4">
            {props.children}
          </main>
        </div>
      </div>
    </div>

  );
};

Dashboard.defaultProps = {
  children: '',
};

Dashboard.propTypes = {
  roles: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default Dashboard;
