import React, { Component } from "react";
import "./PersonalInfoTable.css";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { RingLoader } from "react-spinners";
import { css } from "@emotion/core";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";
import employee from "../../img/employe.bmp"
import './profilePage.css'


const override = css`
  display: block;
  margin: 0 auto;
  margin-top: 45px;
  border-color: red;
`;

class PersonalInfoTable extends Component {
  state = {
    personalInfoData: [],
    loading: true,

    columnDefs: [
      {
        headerName: "First Name",
        field: "FirstName",
        sortable: true,
        // filter: true ,
        width: 110,
      },
      {
        headerName: "Middle Name",
        field: "MiddleName",
        sortable: true,
        // filter: true ,
        width: 130,
      },
      {
        headerName: "Last Name",
        field: "LastName",
        sortable: true,
        // filter: true ,
        // width: 150,
      },
      {
        headerName: "Gender",
        field: "Gender",
        sortable: true,
        width: 90,

        // filter: true ,
        // width: 150,
      },
      {
        headerName: "Contact No",
        field: "ContactNo",
        sortable: true,
        // filter: true ,
        // width: 150,
      },
      {
        headerName: "Email",
        field: "Email",
        sortable: true,
        // filter: true ,
        // width: 150,
      },
      {
        headerName: "Position",
        field: "PositionName",
        sortable: true,
        // filter: true ,
        // width: 150,
      },
      {
        headerName: "PANcard No",
        field: "PANcardNo",
        sortable: true,
        // filter: true ,
        // width: 150,
      },

      {
        headerName: "DOB",
        field: "DOB",
        sortable: true,
        filter: true,
        type: ["dateColumn"],
        filter: "agDateColumnFilter"
      },
      {
        headerName: "Hobbies",
        field: "Hobbies",
        sortable: true,
        // filter: true ,
        // width: 150,
      },
      {
        headerName: "Present Address",
        field: "PresentAddress",
        sortable: true,
        // filter: true ,
        width: 150,
      },
      {
        headerName: "",
        field: "edit",
        filter: false,
        width: 30,
        // cellRenderer:this.ageCellRendererFunc,
        // cellRendererFramework: function(params) {
        //   return <button OnClick={console.log("pa",params)}>Test</button>;
        // },
        cellRendererFramework: this.renderEditButton.bind(this),


      },


    ],
    rowData: [],
    defaultColDef: {
      resizable: true,
      width: 120,
      filter: "agTextColumnFilter"
      // filter: true ,
    },
    getRowHeight: function (params) {
      return 35;
    }
  };
  personalInfoObj = [];
  rowDataT = [];
  loadPersonalInfoData = () => {
    axios
      .get("http://localhost:4000/api/personal-info/" + this.props.data["_id"], {
        headers: {
          authorization: localStorage.getItem("token") || ""
        }
      })
      .then(response => {
        this.personalInfoObj = response.data;
        console.log("response", response.data);
        this.setState({ personalInfoData: response.data });
        this.setState({ loading: false });
        this.rowDataT = [];
        console.log("personalInfoObj", this.personalInfoObj)
        // this.personalInfoObj.map(data => {
        let data = this.personalInfoObj;
        let temp = {
          data,
          FirstName: data["FirstName"] || "Not Avaiable",
          MiddleName: data["MiddleName"] || "Not Avaiable",
          LastName: data["LastName"] || "Not Avaiable",
          Gender: data["Gender"] || "Not Avaiable",
          ContactNo: data["ContactNo"] || "Not Avaiable",
          Email: data["Email"] || "Not Avaiable",
          PositionName: data["Position"] || "Not Avaiable",
          PANcardNo: data["PANcardNo"] || "Not Avaiable",
          DOB: data["DOB"].slice(0, 10) || "Not Avaiable",
          Hobbies: data["Hobbies"] || "Not Avaiable",
          PresentAddress: data["PresentAddress"] || "Not Avaiable",

        };

        this.rowDataT.push(temp);
        // });
        this.setState({ rowData: this.rowDataT });
        // console.log("rowData",this.state.rowData)

      })
      .catch(error => {
        console.log(error);
      });
  };

  onPersonalInfoDelete = e => {
    console.log(e);
    if (window.confirm("Are you sure to delete this record? ") == true) {
      axios
        .delete("http://localhost:4000/api/personalInfo/" + e, {
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
  componentDidMount() {
    this.loadPersonalInfoData();
  }
  renderEditButton(params) {
    console.log(params);
    if (this.props.back) { return <React.Fragment /> }
    return <FontAwesomeIcon
      icon={faEdit}
      onClick={() => this.props.onEditPersonalInfo(params.data.data)}
    />;
  }

  render() {
    return (
      <div id="table-outer-div-scroll">
        <h2 id="role-title">Employee Personal Details {this.props.back ? "of " + this.props.data["FirstName"] + " " + this.props.data["LastName"] : ""}</h2>
        {/* 
        <Button
          variant="primary"
          id="add-button"
          onClick={this.props.onAddPersonalInfo}
        >
          <FontAwesomeIcon icon={faPlus} id="plus-icon" />
          Add
        </Button> */}
        {this.props.back ? (<Link to="/hr/employee">
          <Button
            variant="primary"
            id="add-button"
          >
            Back
        </Button>
        </Link>) : <React.Fragment />}


        <div id="clear-both" />

        {!this.state.loading ? (
          // <div
          //   id="table-div"
          //   className="ag-theme-balham"
          // //   style={
          // //     {
          // //     height: "500px",
          // //     width: "100%"
          // //   }
          // // }
          // >
          //   <AgGridReact
          //     columnDefs={this.state.columnDefs}
          //     defaultColDef={this.state.defaultColDef}
          //     columnTypes={this.state.columnTypes}
          //     rowData={this.state.rowData}
          //     // floatingFilter={true}
          //     // onGridReady={this.onGridReady}
          //     pagination={true}
          //     paginationPageSize={10}
          //     getRowHeight={this.state.getRowHeight}
          //   />
          // </div>
   <div className='profilePage'>
  <div className='profilePage-profile'>
    <div className='ProfilePage-image'>
        <img src={employee} alt='employee'/>
    </div>
    <div className="profilePage-details">
        <h2>{this.state.personalInfoData.FirstName} {this.state.personalInfoData.LastName}</h2>
        <p>{this.state.personalInfoData.Email}</p>
        <p>{this.state.personalInfoData.RoleName}</p>
    </div>
  </div>
  <div className='company_info'>
<div className='company_info_heading'>
<h3>Company Information</h3>
</div>
   <div className='company_info_content'>
    <div className='company_info_content_left'>
        <div className='company_info_content_left_section'>
            <p>Emp ID</p> <h4>{this.state.personalInfoData.EmployeeID}</h4>
        </div>
        <div className='company_info_content_left_section'>
            <p>Email</p> <h4>{this.state.personalInfoData.Email}</h4>
        </div>
        <div className='company_info_content_left_section'>
            <p>Account Access</p> <h4>{this.state.personalInfoData.Account}</h4>
        </div>
        <div className='company_info_content_left_section'>
            <p>First Name</p> <h4>{this.state.personalInfoData.FirstName} </h4>
        </div>
        <div className='company_info_content_left_section'>
            <p>Middle Name</p> <h4>{this.state.personalInfoData.MiddleName}</h4>
        </div>
        <div className='company_info_content_left_section'>
            <p>Last Name</p> <h4>{this.state.personalInfoData.LastName}</h4>
        </div>
        <div className='company_info_content_left_section'>
            <p>Date Of Birth</p> <h4>{this.state.personalInfoData.DOB.slice(0,10)}</h4>
        </div>
        <div className='company_info_content_left_section'>
            <p>Contact</p> <h4>{this.state.personalInfoData.ContactNo}</h4>
        </div>
        <div className='company_info_content_left_section'>
            <p>PANcardNo</p> <h4>{this.state.personalInfoData.PANcardNo}</h4>
        </div>
        <div className='company_info_content_left_section'>
            <p>Role</p> <h4>Web Developer</h4>
        </div>
        <div className='company_info_content_left_section'>
            <p>Position</p> <h4>Web Developer</h4>
        </div>
        <div className='company_info_content_left_section'>
            <p>Department</p> <h4>Web Developement</h4>
        </div>
        <div className='company_info_content_left_section'>
            <p>Date Of Joining</p> <h4>{this.state.personalInfoData.DateOfJoining.slice(0,10)}</h4>
        </div>

    </div>
    
   </div>
  </div>
  <div className='company_info'>
<div className='company_info_heading'>
<h3>Personal Information</h3>
</div>
   <div className='company_info_content'>
    <div className='company_info_content_left'>
        <div className='company_info_content_left_section'>
            <p>Name</p> <h4>{this.state.personalInfoData.FirstName} {this.state.personalInfoData.LastName}</h4>
        </div>
        <div className='company_info_content_left_section'>
            <p>Personal email</p> <h4>{this.state.personalInfoData.Email}</h4>
        </div>
        <div className='company_info_content_left_section'>
            <p>Mobile No.</p> <h4>{this.state.personalInfoData.ContactNo}</h4>
        </div>
        <div className='company_info_content_left_section'>
            <p>Blood Group</p> <h4>{this.state.personalInfoData.BloodGroup}</h4>
        </div>
        <div className='company_info_content_left_section'>
            <p>Age</p> <h4>18</h4>
        </div>
        <div className='company_info_content_left_section'>
            <p>Qualification</p> <h4>Btech</h4>
        </div>
        <div className='company_info_content_left_section'>
            <p>Address</p> <h4>{this.state.personalInfoData.PresentAddress}</h4>
        </div>
        

    </div>
    
   </div>
  </div>
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

export default PersonalInfoTable;
