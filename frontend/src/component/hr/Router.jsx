// MainContent.jsx
import React from "react";
import { Route, Switch } from "react-router-dom";
import Role from "../Role.jsx";
import Position from "../Position.jsx";
import Department from "../Department.jsx";
import Country from "../Country.jsx";
import State from "../State.jsx";
import City from "../City.jsx";
import Company from "../Company.jsx";
import Employee from "../Employee.jsx";
import Salary from "../Salary.jsx";
import LeaveApplicationHR from "./LeaveApplicationHR.jsx";
import NotFound404 from "../NotFound404.jsx";
import Dashboard from "../hr/HRDash.jsx"
// task management
import ManagerNewTask from "../hr/ManagerTaskManagement/ManagerNewTask.jsx";
import ManagerCencelledTask from "../hr/ManagerTaskManagement/ManagerCencelledTask.jsx";
import ManagerCompletedTask from "../hr/ManagerTaskManagement/ManagerCompletedTask.jsx";
import ManagerRejectedTask from "../hr/ManagerTaskManagement/ManagerRejectedTask.jsx";
import Attendance from "./attendance/Attendance.jsx";
import ManagerActiveTask from "./ManagerTaskManagement/ManagerActiveTask.jsx";


const MainContent = () => {
  return (
    <div id="main-area">
      <div id="sidebar-top-content" />
      <Switch>
        <Route path="/hr/employee" component={Employee} />
        <Route path="/hr/salary" exact component={Salary} />
        <Route path="/hr/company" exact component={Company} />
        <Route path="/hr/role" component={Role} />
        <Route path="/hr/position" exact component={Position} />
        <Route path="/hr/department" exact component={Department} />
        <Route path="/hr/country" exact component={Country} />
        <Route path="/hr/state" exact component={State} />
        <Route path="/hr/city" exact component={City} />
        <Route path="/hr/leave-application-hr" exact component={LeaveApplicationHR} />
        <Route path="/hr/city" exact component={City} />
        <Route path="/hr/dashboard" exact component={Dashboard} />
        {/* <Route path="/hr/task" exact component={TaskAssign} /> */}
        <Route path="/hr/newTask" exact component={ManagerNewTask} />
        <Route path="/hr/ActiveTask" exact component={ManagerActiveTask} />
        <Route path="/hr/taskcancle" exact component={ManagerCencelledTask} />
        <Route path="/hr/taskcomplete" exact component={ManagerCompletedTask} />
        <Route path="/hr/rejectTask" exact component={ManagerRejectedTask} />
        {/* attendance */}
        <Route path="/hr/mark-attendance" exact component={Attendance} />
        

        
        
        <Route render={() => <NotFound404 />} />
      </Switch>
    </div>
  );
};

export default MainContent;
