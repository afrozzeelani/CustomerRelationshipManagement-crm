import React, { Component } from "react";
import "./LeaveApplicationHRTable.css";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import { RingLoader } from "react-spinners";
import { css } from "@emotion/core";
import { Form, Button, Col, Row, Table, Dropdown, DropdownButton } from "react-bootstrap";



// *************csv & pdf **************//
import jsPDF from 'jspdf';
import 'jspdf-autotable';
// *************csv & pdf **************//

const override = css`
  display: block;
  margin: 0 auto;
  margin-top: 45px;
  border-color: red;
`;

class LeaveApplicationHRTable extends Component {
  state = {
    leaveApplicationHRData: [],
    loading: true,
    searchData: "",
    totalLeaves: 0,

    rowData: [],
   
    getRowHeight: function (params) {
      return 35;
    },
  };
  leaveApplicationHRObj = [];
  rowDataT = [];

  // ****************************

  // ****************************
  loadLeaveApplicationHRData = () => {
    axios
      .get("http://localhost:4000/api/leave-application-hr/", {
        headers: {
          authorization: localStorage.getItem("token") || ""
        }
      })
      .then(response => {
        this.leaveApplicationHRObj = response.data;
        console.log("response", response.data);
        this.setState({ leaveApplicationHRData: response.data });
        this.setState({ loading: false });
       
        this.rowDataT = [];
       

        
        this.leaveApplicationHRObj.map(data => {
          let temp = {
            data,
            EmployeeCode: data["employee"][0]["EmployeeCode"],
            Name:
              data["employee"][0]["FirstName"] +
              " " +
              data["employee"][0]["LastName"],
            Leavetype: data["Leavetype"],
            FromDate: data["FromDate"].slice(0, 10),
            ToDate: data["ToDate"].slice(0, 10),
            Reasonforleave: data["Reasonforleave"],
            Status: this.status(data["Status"])
          };

          this.rowDataT.push(temp);
        });

      

        this.setState({ rowData: this.rowDataT });

        this.setState({ totalLeaves: response.data.length });
        this.props.updateTotalLeaves(response.data.length);
      })
      .catch(error => {
        console.log(error);
      });
  };

  onLeaveApplicationHRDelete = (e1, e2) => {
    console.log(e1, e2);
    if (window.confirm("Are you sure to delete this record? ") == true) {
      axios
        .delete(
          "http://localhost:4000/api/leave-application-hr/" + e1 + "/" + e2, {
          headers: {
            authorization: localStorage.getItem("token") || ""
          }
        }
        )
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
  doc.text('Employee Leave Details', pdfWidth / 2, 15, 'center');
    const headers = [
      'Emp Id',
      'Leave Type',
      'Start Date',
      'End Date',
      'Remarks',
      'Status',
      
      
    ];
    const data = rowData.map(row => [
      row.EmployeeCode,
      row.Leavetype,
      row.FromDate,
      row.ToDate,
      row.Reasonforleave,
      row.Status,
     
      '', // Action column - you can customize this based on your requirements
    ]);
    doc.setFontSize(12);
    doc.autoTable({
      head: [headers],
      body: data,
      startY: 25,
    });

    doc.save('leaveApplication_data.pdf');
  };
// *************pdf****************//
  componentDidMount() {
    this.loadLeaveApplicationHRData();
  }
  renderButton(params) {
    console.log(params);
    return (
      <FontAwesomeIcon
        icon={faTrash}
        onClick={() =>
          this.onLeaveApplicationHRDelete(
            params.data.data["employee"][0]["_id"],
            params.data.data["_id"]
          )
        }
      />
    );
  }
  renderEditButton(params) {
    console.log(params);
    return (
      <FontAwesomeIcon
        icon={faEdit}
        onClick={() => this.props.onEditLeaveApplicationHR(params.data.data)}
      />
    );
  }

  status = s => {
    if (s == 1) {
      return "Pending";
    }
    if (s == 2) {
      return "Approved";
    }
    if (s == 3) {
      return "Rejected";
    }
  };

  render() {
    return (
      <div style={{ overflow: 'scroll', height: '100vh', width: '100%', scrollbarWidth: 'thin' }} className="container pt-4">
        <h2 id="role-title">Employee Leave Application Details</h2>
        
        <Button variant="success" onClick={this.exportToPDF}>
          Export to PDF
        </Button>
    
        <div id="clear-both" />
        {!this.state.loading ? (
          <div>
            <Table className="table table-bordered">

              <thead>
                <tr>
                  <th className='bg-success text-white'>Employee ID</th>
                  <th className='bg-success text-white'>Emp Name</th>
                  <th className='bg-success text-white'>Leave Type</th>
                  <th className='bg-success text-white'>Start Date</th>
                  <th className='bg-success text-white'>End Date</th>
                  <th className='bg-success text-white'>Status</th>
                  <th className='bg-success text-white'>Remarks</th>
                  <th className='bg-success text-white'>Actions</th>
                </tr>
              </thead>
              <tbody>
                {this.state.rowData.map((data, index) => (
                  <tr key={index}>
                    <td>{data.EmployeeCode}</td>
                    <td>{data.Name}</td>
                    <td>{data.Leavetype}</td>
                    <td>{data.FromDate}</td>
                    <td>{data.ToDate}</td>
                    <td>{data.Status}</td>
                    <td>{data.Reasonforleave}</td>
                    <td>
                      <DropdownButton title="Actions" variant="secondary">
                        <Dropdown.Item onClick={() => this.props.onEditLeaveApplicationHR(data.data)}>
                          Edit
                        </Dropdown.Item>
                        <Dropdown.Item onClick={() =>
                          this.onLeaveApplicationHRDelete(
                            data.data["employee"][0]["_id"],
                            data.data["_id"]
                          )
                        }>
                          Delete
                        </Dropdown.Item>
                      </DropdownButton>
                    </td>
                  </tr>
                ))}
              </tbody>

            </Table>
          </div>
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

export default LeaveApplicationHRTable;
