// import React, { Component } from "react";
// import "./DashboardAdmin.css";
// import { HashRouter as Router, Route, Link } from "react-router-dom";
// import { Switch } from "react-router";
// import { Redirect } from "react-router-dom";


// import Role from "../Role.jsx";
// import NavBar from "../NavBar.jsx";
// import RoleForm from "../RoleForm.jsx";
// import Position from "../Position.jsx";
// import Department from "../Department.jsx";
// import AdminPortal from "./AdminPortal.jsx";
// import AdminProjectBid from "./AdminProjectBid.jsx";
// import NotFound404 from "../NotFound404.jsx";

// import Employee from "../Employee.jsx";
//  import LeaveApplicationHR from "../hr/LeaveApplicationHR.jsx";
// import Salary from "../Salary.jsx";
// import AdminDasd from "../admin/AdminDash.jsx"
//  import AdminEmployeeTable from "../EmployeeTable.jsx";


// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faUsersCog,
//   faUsers,
//   faChair,
//   faBuilding,
//   faDollarSign,
//   faTasks,
//   faUser
// } from "@fortawesome/free-solid-svg-icons";



// function Dashboard() {
//   return <AdminDasd />;
// }

// function SalaryF() {
//   return <Salary />;
// }
// function LeaveApplication() {
//   return <LeaveApplicationHR />;
// }
// function AdminEmployee() {
//   return <AdminEmployeeTable />;
// }
// function EmployeeF() {
//   return <Employee />;
// }


// // *******************
// function RoleAdminF() {
//   return <Role />;
// }
// function RoleFormF() {
//   return <RoleForm />;
// }

// function PositionF() {
//   return <Position />;
// }
// function DepartmentF() {
//   return <Department />;
// }
// function AdminPortalF() {
//   return <AdminPortal />;
// }
// function AdminProjectBidF() {
//   return <AdminProjectBid />;
// }


// class DashboardAdmin extends Component {
//   state = {
//     redirect: true,
//     checked: true
//   };
//   handleChange = (checked) => {
//     console.log("switch");
//     // var sidebarV = this.refs.sidebar;
//     // var sidebarV = React.findDOMNode( this.refs.sidebar);
//     // sidebarV.style.disply="none";

//     if (this.state.checked == true) {
//       // document.getElementById("sidebar").setAttribute("style", "display:none")
//       document.getElementById("sidebar").setAttribute("class", "display-none");
//     }
//     // document.getElementById("sidebar").setAttribute("style", "display:block");
//     else { document.getElementById("sidebar").setAttribute("class", "display-block"); }
//     this.setState({ checked });
//   }

//   render() {
//     return (
//       <Router>
//         {/* <Redirect to='/login'  /> */}

//         <div id="outer-main-div">
//           <div id="outer-nav">
//             <NavBar loginInfo={this.props.data} checked={this.state.checked} handleChange={this.handleChange} onLogout={this.props.onLogout} />
//           </div>

//           <div id="main-non-nav">
//             <div id="sidebar">
//               <div id="sidebar-top-content" />
//               <div id="main-title">
//                 <FontAwesomeIcon icon={faUsersCog} className="sidebar-icon" />
//                 Admin
//               </div>
//               <ul className="navbar-ul">
//                 <li>
//                   <Link to="/admin/dashboard">
//                     <FontAwesomeIcon icon={faUsers} className="sidebar-icon" />
//                     Dashboard
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="/admin/user">
//                     <FontAwesomeIcon icon={faUsers} className="sidebar-icon" />
//                     Employee
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="/admin/leave">
//                     <FontAwesomeIcon icon={faUsers} className="sidebar-icon" />
//                     Leave
//                   </Link>
//                 </li>
                
//                 <li>
//                   <Link to="/admin/role">
//                     <FontAwesomeIcon icon={faUsers} className="sidebar-icon" />
//                     Role
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="/admin/position">
//                     <FontAwesomeIcon icon={faChair} className="sidebar-icon" />
//                     Position
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="/admin/department">
//                     <FontAwesomeIcon
//                       icon={faBuilding}
//                       className="sidebar-icon"
//                     />
//                     Department
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="/admin/salary">
//                     <FontAwesomeIcon
//                       icon={faBuilding}
//                       className="sidebar-icon"
//                     />
//                     Salary
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="/admin/project-bid">
//                     <FontAwesomeIcon
//                       icon={faDollarSign}
//                       className="sidebar-icon"
//                     />
//                     Project Bidding
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="/admin/portal-master">
//                     <FontAwesomeIcon icon={faTasks} className="sidebar-icon" />
//                     Portal Master
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="/admin/invoice">
//                     <FontAwesomeIcon icon={faTasks} className="sidebar-icon" />
//                     Invoice
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="">
//                     <FontAwesomeIcon icon={faTasks} className="sidebar-icon" />
//                     Task
//                   </Link>
//                 </li>

//               </ul>
//             </div>
//             {/* <div id="sidebar-top-content" /> */}
//             <div id="main-area">
//               <div id="sidebar-top-content" />
//               {/* //table */}
//               {/* <RoleAdmin/> */}
//               <Switch>
//                 <Route exact path="/admin/role" component={RoleAdminF} />
//                 {/* <Route path="/admin/role/form" exact component={RoleFormF} /> */}
//                 <Route
//                   path="/admin/position"
//                   exact
//                   component={PositionF}
//                 />
//                 <Route
//                   path="/admin/department"
//                   exact
//                   component={DepartmentF}
//                 />
//                 <Route
//                   path="/admin/portal-master"
//                   exact
//                   component={AdminPortalF}
//                 />
//                 <Route
//                   path="/admin/project-bid"
//                   exact
//                   component={AdminProjectBidF}
//                 />
//                 <Route
//                   path="/admin/dashboard"
//                   exact
//                   component={Dashboard}
//                 />
              
              
//                 <Route
//                   path="/admin/salary"
//                   exact
//                   component={SalaryF}
//                 />
//                 <Route
//                   path="/admin/leave"
//                   exact
//                   component={LeaveApplication}
//                 />
//                 {/* <Route
//                   path="/admin/user"
//                   exact
//                   component={EmployeeF}
//                 /> */}
//                 <Route
//                   path="/admin/user"
//                   exact
//                   component={AdminEmployee}
//                 />
             
              
//                 {/* <Route
//                   exact
//                   path="/admin"
//                   render={() => <Redirect to="/admin/role" />}
//                 /> */}
//                 <Route render={() =>
//                   <NotFound404 />
//                   // <Redirect to="/admin/role" />
//                 } />
//               </Switch>
//             </div>
//           </div>
//         </div>
//       </Router>
//     );
//   }
// }

// export default DashboardAdmin;


import React, { Component } from "react";
import "./DashboardAdmin.css";
import { HashRouter as Router } from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar.jsx";
import AdminRoutes from "./Routes.jsx";
import NavBar from "../NavBar.jsx";

class DashboardAdmin extends Component {
  state = {
    redirect: true,
    checked: true,
  };

  handleChange = (checked) => {
    console.log("switch");
    // var sidebarV = this.refs.sidebar;
    // var sidebarV = React.findDOMNode( this.refs.sidebar);
    // sidebarV.style.disply="none";

    if (this.state.checked == true) {
      // document.getElementById("sidebar").setAttribute("style", "display:none")
      document.getElementById("sidebar").setAttribute("class", "display-none");
    }
    // document.getElementById("sidebar").setAttribute("style", "display:block");
    else { document.getElementById("sidebar").setAttribute("class", "display-block"); }
    this.setState({ checked });
  }

  render() {
    return (
      <Router>
        <div id="outer-main-div">
          <div id="outer-nav">
            <NavBar
              loginInfo={this.props.data}
              checked={this.state.checked}
              handleChange={this.handleChange}
              onLogout={this.props.onLogout}
            />
          </div>

          <div id="main-non-nav">
            <Sidebar />
            <div id="main-area">
              <AdminRoutes />
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default DashboardAdmin;
