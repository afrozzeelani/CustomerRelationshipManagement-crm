// Sidebar.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { faUsers, faChair, faBuilding, faUser, faRupeeSign, faFileAlt, faCity, faGlobeAmericas, faPlaceOfWorship, faUserTie, faArchway, faTasks } from "@fortawesome/free-solid-svg-icons";




const Sidebar = () => {

  const [isTaskSubMenuOpen, setTaskSubMenuOpen] = useState(false);


  const toggleTaskSubMenu = () => {
    setTaskSubMenuOpen(!isTaskSubMenuOpen);
  };
  return (
    <div id="sidebar">
      <div id="sidebar-top-content" />
      <div id="main-title">
        <FontAwesomeIcon icon={faUserTie} className="sidebar-icon" />
        HR
      </div>
      <ul className="navbar-ul">
        <li>
          <Link to="/hr/dashboard">
            <FontAwesomeIcon icon={faUser} className="sidebar-icon" />
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/hr/employee">
            <FontAwesomeIcon icon={faUser} className="sidebar-icon" />
            Employee
          </Link>
        </li>
        <li>
          <Link to="/hr/salary">
            <FontAwesomeIcon icon={faRupeeSign} className="sidebar-icon" />
            Salary
          </Link>
        </li>
        <li>
          <Link to="/hr/leave-application-hr">
            <FontAwesomeIcon icon={faFileAlt} className="sidebar-icon" />
            Leave Application
          </Link>
        </li>
        <li>
          <Link to="/hr/company">
            <FontAwesomeIcon icon={faCity} className="sidebar-icon" />
            company
          </Link>
        </li>
        <li>
          <Link to="/hr/role">
            <FontAwesomeIcon icon={faUsers} className="sidebar-icon" />
            Role
          </Link>
        </li>
        <li>
          <Link to="/hr/position">
            <FontAwesomeIcon icon={faChair} className="sidebar-icon" />
            Position
          </Link>
        </li>
        <li>
          <Link to="/hr/department">
            <FontAwesomeIcon icon={faBuilding} className="sidebar-icon" />
            Department
          </Link>
        </li>
        <li>
          <Link to="/hr/country">
            <FontAwesomeIcon icon={faGlobeAmericas} className="sidebar-icon" />
            Country
          </Link>
        </li>
        <li>
          <Link to="/hr/state">
            <FontAwesomeIcon icon={faPlaceOfWorship} className="sidebar-icon" />
            State
          </Link>
        </li>
        <li>
          <Link to="/hr/city">
            <FontAwesomeIcon icon={faArchway} className="sidebar-icon" />
            City
          </Link>
        </li>
        <li>
          <Link to="/hr/mark-attendance">
            <FontAwesomeIcon icon={faArchway} className="sidebar-icon" />
            Attendance
          </Link>
        </li>
        {/* <li>
          <Link to="/hr/empcard">
            <FontAwesomeIcon icon={faArchway} className="sidebar-icon" />
            empcard
          </Link>
        </li> */}
        <li >
          <div onClick={toggleTaskSubMenu} style={{ color: 'white' }}>
            <FontAwesomeIcon icon={faTasks} className="sidebar-icon" />
            Task Management
          </div>
          {isTaskSubMenuOpen && (
            <ul className="sub-menu" style={{ paddingLeft: '9px' }}>
              {/* Add your sub-menu items here */}
              <li>
                <Link to="/hr/newTask">Assign New</Link>
              </li>
              <li>
                <Link to="/hr/ActiveTask">Active</Link>
              </li>
              <li>
                <Link to="/hr/taskcancle">Cancelled</Link>
              </li>
              <li>
                <Link to="/hr/taskcomplete">Completed</Link>
              </li>
              <li>
                <Link to="/hr/rejectTask">Rejected</Link>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
