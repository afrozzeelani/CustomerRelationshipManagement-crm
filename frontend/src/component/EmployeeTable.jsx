



import React, { Component,useState } from "react";
import "./EmployeeTable.css";

import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faTrash,
  faEdit,
  faInfoCircle
} from "@fortawesome/free-solid-svg-icons";
import { RingLoader } from "react-spinners";
import { css } from "@emotion/core";
import { Button, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import { Dropdown, DropdownButton } from 'react-bootstrap';



// *************csv & pdf **************//
import jsPDF from 'jspdf';
import 'jspdf-autotable';
// *************csv & pdf **************//

import { IoIosArrowDown } from "react-icons/io";
import { BsThreeDotsVertical } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import { PiPhone } from "react-icons/pi";
import { LiaInfoCircleSolid } from "react-icons/lia";
import { BiSolidEdit } from "react-icons/bi";
import { MdOutlineDelete } from "react-icons/md";

const override = css`
  display: block;
  margin: 0 auto;
  margin-top: 45px;
  border-color: red;
`;

class AdminEmployeeTable extends Component {
 
  
  state = {
    employeeData: [],
    loading: true,
    searchData: "",
    rowData: [],
    rowIndex:null,
    moreInfo:false
  };

  employeeObj = [];
  rowDataT = [];

  // *************csv & pdf **************//
  // exportToCSV = () => {
  //   const csvData = this.employeeObj.map((data) => ({
  //     EmployeeCode: data.EmployeeCode,
  //     Email: data.Email,
  //     Account: data.Account,
  //     FirstName: data.FirstName,
  //     MiddleName: data.MiddleName,
  //     LastName: data.LastName,
  //     DOB: data.DOB,
  //     ContactNo: data.ContactNo,
  //     RoleName: data.role[0].RoleName,
  //     PositionName: data.position[0].PositionName,
  //     DepartmentName: data.department[0].DepartmentName,
  //     DateOfJoining: data.DateOfJoining,
  //   }));

  //   const headers = [
  //     { label: "Emp Id", key: "EmployeeCode" },
  //     { label: "Email", key: "Email" },
  //     { label: "Account Access", key: "Account" },
  //     { label: "First Name", key: "FirstName" },
  //     { label: "Middle Name", key: "MiddleName" },
  //     { label: "Last Name", key: "LastName" },
  //     { label: "DOB", key: "DOB" },
  //     { label: "ContactNo", key: "ContactNo" },
  //     { label: "Role", key: "RoleName" },
  //     { label: "Position", key: "PositionName" },
  //     { label: "Department", key: "DepartmentName" },
  //     { label: "D.O.J", key: "DateOfJoining" },
  //   ];

  //   return (
  //     <CSVLink data={csvData} headers={headers} filename={"employee_data.csv"}>
  //       Export to CSV
  //     </CSVLink>
  //   );
  // };

  // exportToPDF = () => {
  //   const pdfData = this.employeeObj.map((data) => [
  //     data.EmployeeCode,
  //     data.Email,
  //     data.Account,
  //     data.FirstName,
  //     data.MiddleName,
  //     data.LastName,
  //     data.DOB,
  //     data.ContactNo,
  //     data.role[0].RoleName,
  //     data.position[0].PositionName,
  //     data.department[0].DepartmentName,
  //     data.DateOfJoining,
  //   ]);

  //   const columns = [
  //     "Emp Id",
  //     "Email",
  //     "Account Access",
  //     "First Name",
  //     "Middle Name",
  //     "Last Name",
  //     "DOB",
  //     "ContactNo",
  //     "Role",
  //     "Position",
  //     "Department",
  //     "D.O.J",
  //   ];

  //   const doc = new jsPDF();
  //   doc.autoTable({
  //     head: [columns],
  //     body: pdfData,
  //   });
  //   doc.save("employee_data.pdf");
  // };
  // *************csv & pdf **************//

  loadEmployeeData = () => {
    axios
      .get("http://localhost:4000/api/employee", {
        headers: {
          authorization: localStorage.getItem("token") || ""
        }
      })
      .then(response => {
        this.employeeObj = response.data;
        console.log("response", response.data);
        this.setState({ employeeData: response.data });
        this.setState({ loading: false });
        this.rowDataT = [];
        this.employeeObj.map(data => {
          let temp = {
            data,
            Email: data["Email"],
            Password: data["Password"],
            Account: data["Account"] == 1 ? "Admin" : (data["Account"] == 2 ? "HR" : (data["Account"] == 3 ? "Employee" : "")),
            RoleName: data["role"][0]["RoleName"],
            FirstName: data["FirstName"],
            // MiddleName: data["MiddleName"],
            LastName: data["LastName"],
            DOB: data["DOB"].slice(0, 10),
            ContactNo: data["ContactNo"],
            EmployeeCode: data["EmployeeCode"],
            DepartmentName: data["department"][0]["DepartmentName"],
            PositionName: data["position"][0]["PositionName"],
            DateOfJoining: data["DateOfJoining"].slice(0, 10)
          };

          this.rowDataT.push(temp);
        });
        this.setState({ rowData: this.rowDataT });
        this.props.updateTotalEmployees(this.employeeObj.length);

      })
      .catch(error => {
        console.log(error);
      });
  };

  onEmployeeDelete = e => {
    console.log(e);
    if (window.confirm("Are you sure to delete this record? ") == true) {
      // window.alert("You are not allowed to perform this operation");
      axios
        .delete("http://localhost:4000/api/employee/" + e, {
          headers: {
            authorization: localStorage.getItem("token") || ""
          }
        })
        .then(res => {
          this.componentDidMount();
        })
        .catch(err => {
          console.log(err);
        });
    }
  };
// *************pdf****************//
  exportToPDF = () => {
    const { rowData } = this.state;
  // Set A4 landscape dimensions
  const pdfWidth = 297; // A4 width in mm
  const pdfHeight = 210; // A4 height in mm
  const doc = new jsPDF({
    orientation: 'landscape',
    unit: 'mm',
    format: [pdfWidth, pdfHeight],
  });

  doc.setFontSize(18);
  doc.text('Employee Details', pdfWidth / 2, 15, 'center');
    const headers = [
      'Emp Id',
      'Email',
      'Account Access',
      'First Name',
      'Last Name',
      'DOB',
      'ContactNo',
      'Role',
      'Position',
      'Department',
      'D.O.J',
      
    ];
    const data = rowData.map(row => [
      row.EmployeeCode,
      row.Email,
      row.Account,
      row.FirstName,
      row.LastName,
      row.DOB,
      row.ContactNo,
      row.RoleName,
      row.PositionName,
      row.DepartmentName,
      row.DateOfJoining,
      '', // Action column - you can customize this based on your requirements
    ]);
    doc.setFontSize(12);
    doc.autoTable({
      head: [headers],
      body: data,
      startY: 25,
    });

    doc.save('employee_data.pdf');
  };
// *************pdf****************//
  componentDidMount() {
    this.loadEmployeeData();
  }
  handleClick = (e) => {
    console.log(e);
  }
  renderInfoButton(params) {
    console.log(params);
    return <div>
      <FontAwesomeIcon
        icon={faInfoCircle}
        onClick={() => this.props.onEmpInfo(params.data.data)}
      /></div>;
  }
  renderButton(params) {
    console.log(params);
    return <FontAwesomeIcon
      icon={faTrash}
      onClick={() => this.onEmployeeDelete(params.data.data["_id"])}
    />;
  }
  renderEditButton(params) {
    console.log(params);
    return <FontAwesomeIcon
      icon={faEdit}
      onClick={() => this.props.onEditEmployee(params.data.data)}
    />;
  }

  searchChange = e => {
    console.log(e.target.value);
    this.setState({ searchData: e.target.value });
  };
 

  render() {
    return (
      <div className="container pt-4">
        <h2 id="role-title">Employee Details</h2>
        <Button
          variant="primary"
          id="add-button"
          onClick={this.props.onAddEmployee}
        >
          <FontAwesomeIcon icon={faPlus} id="plus-icon" />
          Add
        </Button>

         {/* <Button variant="success" onClick={this.exportToCSV}>
          Export to CSV
        </Button> */}
        
        <Button variant="success" onClick={this.exportToPDF}>
          Export to PDF
        </Button>

        <div id="clear-both" />
        {!this.state.loading ? (
          <div>
            <Table className="table table-bordered">

              <thead>
                <tr>
                  <th className='bg-success text-white' >Emp Id</th>
                  <th className='bg-success text-white'>Email</th>
                  <th className='bg-success text-white'>Account Access</th>
                  <th className='bg-success text-white'>First Name</th>
                  {/* <th className='bg-success text-white'>Middle Name</th> */}
                  <th className='bg-success text-white'>Last Name</th>
                  <th className='bg-success text-white'>DOB</th>
                  <th className='bg-success text-white'>ContactNo</th>
                  <th className='bg-success text-white'>Role</th>
                  <th className='bg-success text-white'>Position</th>
                  <th className='bg-success text-white'>Department</th>
                  <th className='bg-success text-white'>D.O.J</th>
                  <th className='bg-success text-white'>Action</th>
                </tr>
              </thead>

              <tbody>
                {this.state.rowData.map((data, index) => (
                  <tr key={index}>
                    <td>{data.EmployeeCode}</td>
                    <td>{data.Email}</td>
                    <td>{data.Account}</td>
                    <td>{data.FirstName}</td>
                    {/* <td>{data.MiddleName}</td> */}
                    <td>{data.LastName}</td>
                    <td>{data.DOB}</td>
                    <td>{data.ContactNo}</td>
                    <td>{data.RoleName}</td>
                    <td>{data.PositionName}</td>
                    <td>{data.DepartmentName}</td>
                    <td>{data.DateOfJoining}</td>
                    <td>
                      <DropdownButton title="Actions" variant="secondary">
                        <Dropdown.Item onClick={() => this.props.onEmpInfo(data.data)}>
                          Info
                        </Dropdown.Item>
                        <Dropdown.Item onClick={() => this.props.onEditEmployee(data.data)}>
                          Edit
                        </Dropdown.Item>
                        <Dropdown.Item onClick={() => this.onEmployeeDelete(data.data["_id"])}>
                          Delete
                        </Dropdown.Item>
                      </DropdownButton>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>

      //     <div className='employee-list'>
      //     {/* <div className='employee-list-drop-down'>
      //         <div className='employee-list-drop-down-left'>
      //             <ul>
      //               <li><a href='developer'>Developer</a></li>
      //               <li><a href='designer'>Designer</a></li>
      //               <li><a href='customer'>Customer Support</a></li>
      //               <li><a href='sales'>Sales</a></li>
      //               <li><a href='hr'>HR</a></li>
      //               <li><a href='dro'  id='drop'><IoIosArrowDown/></a></li>
      //             </ul>
      //         </div>
      //         <div className='employee-list-drop-down-right'>
      //         <ul>
      //               <li><a href='developer'>  +Add Employee</a></li>
      //               <li><a href='see'>See All</a></li>
      //             </ul>
      //         </div>
      //     </div> */}
      //     <div className='employee-list-card-container'>
      //      {this.state.rowData.map((data, index)=>{
      //       return( 
      //       <div key={index} className='employee-list-card'>
      //       <BsThreeDotsVertical className='more-info' onClick={()=>{this.setState({moreInfo: !this.state.moreInfo}); this.setState({rowIndex: index})}}/>
      //       <ul className={(this.state.moreInfo && this.state.rowIndex===index)? 'more-Info-option more-Info-option-hidden' : "more-Info-option "}><li onClick={() => this.props.onEmpInfo(data.data)}><a ><LiaInfoCircleSolid className='info'/></a></li>
      //       <li onClick={() => this.props.onEditEmployee(data.data)}><a ><BiSolidEdit className='edit'/></a></li>
      //       <li onClick={() => this.onEmployeeDelete(data.data["_id"])}><a ><MdOutlineDelete className='delete'/></a></li></ul>


      //       <div className='employee-image'>
      //         <img src={data.image} alt='employee'/>
      //       </div>
      //       <h6>{data.FirstName}  {data.LastName}</h6>
      //       <p>{data.RoleName}</p>
      //       <h4>{data.EmployeeCode}</h4>
      //       {/* <h4>{data.Account}</h4> */}
      //       <div className='employee-list-card-contact'>
      //         <div className='employee-list-card-contact-mail'>
      //           <CiMail/> <p>{data.Email}</p>
      //         </div>
      //         <div className='employee-list-card-contact-mail'>
      //           <PiPhone/> <p>{data.ContactNo}</p>
      //         </div>
      //       </div>
      //       <div className='employee-list-card-role'>
      //         <div className='employee-list-card-role-department'>
      //           <p>Department</p> <h3>{data.DepartmentName}</h3>
      //         </div>
      //         <div className='employee-list-card-role-department'>
      //           <p>Date of Joining</p> <h3>{data.DateOfJoining}</h3>
      //         </div>
      //       </div>
      //   </div>)
      //      })}
      //     </div>
      //    </div>
        ) : (
          <div id="loading-bar">
            <RingLoader
              css={override}
              sizeUnit={"px"}
              size={50}
              color={"#0000ff"}
              loading={true}
            />
          </div>
        )}
      </div>

    );
  }
}

export default AdminEmployeeTable;
