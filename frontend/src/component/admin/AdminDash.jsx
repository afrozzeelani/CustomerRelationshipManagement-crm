

// Dashboard.js

import React, { Component } from "react";
import { Link } from "react-router-dom";
import AdminEmployeeTable from "../EmployeeTable";
import PositionTable from "../PositionTable";
import RoleTable from "../RoleTable";
import LeaveApplicationHRTable from "../hr/LeaveApplicationHRTable";






class HRDash extends Component {
    state = {
        totalEmployees: 0,
        totalLeaves: 0,
    };

    updateTotalEmployees = (totalEmployees) => {
        this.setState({ totalEmployees });
    };
    updateTotalLeaves = (totalLeaves) => {
    this.setState({ totalLeaves });
  };
    updateTotalPositions = (totalPositions) => {
    this.setState({ totalPositions });
  };
  
  updateTotalRole = (totalRole) => {
    this.setState({ totalRole });
  };

    // render() {
    //     return (
    //         <div>

    //             <div className="mainDash">
    //                 <h1 className="heading">Dashboard</h1>

    //                 <Link to="/hr/employee">
    //                     <div className="totalEmp col-2 col-md-2">
    //                         <p className="">Total Employees: <br /> <span style={{ fontSize: '25px' }}>{this.state.totalEmployees}</span></p>
    //                     </div>
    //                 </Link>
    //                 <br /> <br />


    //                 <Link to="/hr/leave-application-hr">
    //                     <div className="totalLeaves col-2 col-md-2">
    //                         <p>Total Leave Applications: <br /> <span style={{ fontSize: '25px' }}>{this.state.totalLeaves}</span></p>
    //                     </div>
    //                 </Link>

    //             </div>
    //             <div style={{ display: 'none' }}>
    //                 <AdminEmployeeTable onAddEmployee={this.handleAddEmployee} onEmpInfo={this.handleEmpInfo} onEditEmployee={this.handleEditEmployee} updateTotalEmployees={this.updateTotalEmployees} />
    //                 <LeaveApplicationHRTable updateTotalLeaves={this.updateTotalLeaves} />

    //             </div>
    //         </div>

    //     );
    // }

 

    render() {
        return (
            <div>
                {/* <div className="mainDash">
                    <h1 className="heading">Dashboard</h1>

                    <Link to="/hr/employee">
                        <div className="totalEmp col-2 col-md-2">
                            <p className="">Total Employees: <br /> <span style={{ fontSize: '25px' }}>{this.state.totalEmployees}</span></p>
                        </div>
                    </Link>
                    <br /> <br />

                    <Link to="/hr/leave-application-hr">
                        <div className="totalLeaves col-2 col-md-2">
                            <p>Total Leave Applications: <br /> <span style={{ fontSize: '25px' }}>{this.state.totalLeaves}</span></p>
                        </div>
                    </Link>
                </div> */}

                {/* Bootstrap Admin Dashboard */}
                <div className="container mt-4">
                    <div className="row">
                    <div className="col-md-3">
                            <div className="card">
                                <div className="card-body">
                                <p className="">Total Employees: <br /> <span style={{ fontSize: '25px' }}>{this.state.totalEmployees}</span></p>
                                    <hr />
                                    <Link to='/admin/user'>More Info</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card">
                                <div className="card-body">
                                <p>Total Leave Applications: <br /> <span style={{ fontSize: '25px' }}>{this.state.totalLeaves}</span></p>
                                <hr />
                                <Link to='/admin/leave'>More Info</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card">
                                <div className="card-body">
                                <p>Total Position : <br /> <span style={{ fontSize: '25px' }}>{this.state.totalPositions}</span></p>
                                <hr />
                                <Link to='/admin/position'>More Info</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card">
                                <div className="card-body">
                                <p>Total Role : <br /> <span style={{ fontSize: '25px' }}>{this.state.totalRole}</span></p>
                                <hr />
                                <Link to='/admin/role'>More Info</Link>
                                </div>
                            </div>
                        </div>
                        

                        <div className="col-md-9">
                            {/* Your existing code for tables */}
                            <div style={{ display: 'none' }}>
                                <AdminEmployeeTable onAddEmployee={this.handleAddEmployee} onEmpInfo={this.handleEmpInfo} onEditEmployee={this.handleEditEmployee} updateTotalEmployees={this.updateTotalEmployees} />
                            </div>

                            <div style={{ display: 'none' }}>
                                <LeaveApplicationHRTable updateTotalLeaves={this.updateTotalLeaves} />
                            </div>
                            <div style={{ display: 'none' }}>
                                <PositionTable updateTotalPositions={this.updateTotalPositions} />
                            </div>
                            <div style={{ display: 'none' }}>
                                <RoleTable updateTotalRole={this.updateTotalRole} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default HRDash;
