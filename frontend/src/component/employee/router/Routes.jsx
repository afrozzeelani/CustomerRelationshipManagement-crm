import React, { Component } from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { Switch } from "react-router";
import { Redirect } from "react-router-dom";
import PersonalInfo from "../PersonalInfo.jsx";
import Education from "../Education.jsx";
import FamilyInfo from "../FamilyInfo.jsx";
import WorkExperience from "../WorkExperience.jsx";
import LeaveApplicationEmp from "../LeaveApplicationEmp.jsx";
import NotFound404 from "../../NotFound404.jsx";

// import Attendance from "../employee/attendance/Attendance.jsx";
import EmployeeNewTask from "../EmployeeTaskManagement/EmployeeNewTask.jsx";

const EmpRoutes = () => {
  return (
    <div id="main-area">
              <div id="sidebar-top-content" />
              {/* //table */}
              {/* <RoleHR/> */}
             
                {/* <Route
                  path="/employee/:id/personal-info"
                  exact
                  component={PersonalInfoF}
                /> */}
                <Route
                  exact
                  path="/employee/:id/personal-info"
                  render={props => <PersonalInfo data={this.props.data} back={false}/>}
                />
                <Route
                  exact
                  path="/employee/:id/education"
                  render={props => <Education data={this.props.data} back={false}/>}
                />
                <Route
                  exact
                  path="/employee/:id/family-info"
                  render={props => <FamilyInfo data={this.props.data} back={false}/>}
                />
                <Route
                  exact
                  path="/employee/:id/work-experience"
                  render={props => <WorkExperience data={this.props.data} back={false}/>}
                />
                <Route
                  exact
                  path="/employee/:id/leave-application-emp"
                  render={props => <LeaveApplicationEmp data={this.props.data} />}
                />
                <Route path="/employee/newTask" exact component={EmployeeNewTask} />

               
                {/* <Route
                  exact
                  path="/employee"
                  render={() => (
                    <Redirect
                      to={
                        "/employee/" +
                        this.props.data["_id"] +
                        "/personal-info"
                      }
                    />
                  )}
                /> */}
                <Route
                  render={
                    () => <NotFound404/>
                    // <Redirect to={"/employee/"+ this.props.data["_id"]+"/personal-info"} />
                  }
                />
            </div>
  );
};

export default EmpRoutes;
