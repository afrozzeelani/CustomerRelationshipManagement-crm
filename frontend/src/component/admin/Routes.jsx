// AdminRoutes.jsx
import React from "react";
import { Switch, Route } from "react-router-dom";
import AdminDasd from "../admin/AdminDash.jsx";
import Role from "../Role.jsx";
import Position from "../Position.jsx";
import Department from "../Department.jsx";
import AdminPortal from "./AdminPortal.jsx";
import AdminProjectBid from "./AdminProjectBid.jsx";
import Salary from "../Salary.jsx";
import LeaveApplicationHR from "../hr/LeaveApplicationHR.jsx";
import AdminEmployeeTable from "../EmployeeTable.jsx";
import NotFound404 from "../NotFound404.jsx";
// ********************task management***************//


import AdminAsignTask from "./TaskManagement/AdminAsignTask.jsx";
import AdminTaskStatus from "./TaskManagement/AdminTaskStatus.jsx"
import AdminCancleTask from "./TaskManagement/AdminCancleTask.jsx"
import AdminCompleteTask from "./TaskManagement/AdminCompleteTask.jsx";
import RejectedTask from "./TaskManagement/RejectedTask.jsx";
import AdminAssignedTask from "./TaskManagement/AdminAssignedTask.jsx";
const AdminRoutes = () => {
  return (
    <div id="main-area">
      <div id="sidebar-top-content" />
    <Switch>
      <Route path="/admin/dashboard" exact component={AdminDasd} />
      <Route path="/admin/role" exact component={Role} />
      <Route path="/admin/position" exact component={Position} />
      <Route path="/admin/department" exact component={Department} />
      <Route path="/admin/portal-master" exact component={AdminPortal} />
      <Route path="/admin/project-bid" exact component={AdminProjectBid} />
      <Route path="/admin/salary" exact component={Salary} />
      <Route path="/admin/leave" exact component={LeaveApplicationHR} />
      <Route path="/admin/user" exact component={AdminEmployeeTable} />

      {/* admin task route */}
      {/* <Route path="/admin/AsignTask" element={<AsignTask />} /> */}
          {/* <Route path="/admin/AssignedTask" element={<AssignedTask />} />
          <Route path="/admin/CancelledTask" element={<CancelledTask />} />
          <Route path="/admin/CompletedTask" element={<CompletedTask />} />
          <Route path="/admin/RejectedTask" element={<RejectedTask />} />
          <Route path="/admin/ActiveTask" element={<ActiveTask />} /> */}

      <Route path="/admin/task" exact component={AdminAsignTask} />
      <Route path="/admin/taskassign" exact component={AdminAssignedTask} />
      <Route path="/admin/taskstatus" exact component={AdminTaskStatus} />
      <Route path="/admin/taskcancle" exact component={AdminCancleTask} />
      <Route path="/admin/taskcomplete" exact component={AdminCompleteTask} />
      <Route path="/admin/taskreject" exact component={RejectedTask} />
      <Route component={NotFound404} />
      {/* ********task******* */}
      
    </Switch>
    </div>
  );
};

export default AdminRoutes;
