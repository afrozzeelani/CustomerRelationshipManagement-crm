import React, { Component } from "react";
import axios from "axios";
import "./Employee.css";

import { Form, Button, Col, Row } from "react-bootstrap";

class EmployeeForm extends Component {
  state = {
    roleData: [],
    positionData: [],
    departmentData: [],

  }

  loadRoleInfo = () => {
    axios
      .get("http://localhost:4000/api/role", {
        headers: {
          authorization: localStorage.getItem("token") || ""
        }
      })
      .then(response => {
        this.setState({ roleData: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  };
  loadPositionInfo = () => {
    axios
      .get("http://localhost:4000/api/position", {
        headers: {
          authorization: localStorage.getItem("token") || ""
        }
      })
      .then(response => {
        this.setState({ positionData: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  };
  loadDepartmentInfo = () => {
    axios
      .get("http://localhost:4000/api/department", {
        headers: {
          authorization: localStorage.getItem("token") || ""
        }
      })
      .then(response => {
        this.setState({ departmentData: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  };
  componentWillMount() {
    this.loadRoleInfo();
    this.loadPositionInfo();
    this.loadDepartmentInfo();
  }

  render() {
    return (


      <div className="registration-page py-4 ">
        <h2 className="text-center text-black text-uppercase fw-bold my-4">
          Add New Employee
        </h2>
        <Form id="form" onSubmit={this.props.onEmployeeSubmit}

          className="container d-flex flex-column m-10 empForm"
        >

          <div className="d-flex w-100 flex-column gap-6 rounded ">
            <div style={{ padding: '80px', }} className="row row-gap-3 ">
              <div className="form-group col-12 col-md-6">
                <Form.Label column sm={6}>
                  Email
                </Form.Label>
                <Col sm={10} className="form-input">
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    required
                  />
                </Col>
              </div>

              <div className="form-group col-12 col-md-6">
                <Form.Label column sm={6} >
                  Password
                </Form.Label>
                <Col sm={10} className="form-input">
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    required
                  />
                </Col>
              </div>

              <div className="form-group col-12 col-md-6" >
                <Form.Label column sm={6}>
                  Account access
                </Form.Label>
                <Col sm={10} className="form-input">
                  <Form.Control as="select" required>
                    <option value="1">Admin</option>
                    <option value="2">HR</option>
                    <option value="3">Employee</option>
                  </Form.Control>
                </Col>
              </div>

              <div className="form-group col-12 col-md-6">
                <Form.Label column sm={6}>
                  Role
                </Form.Label>
                <Col sm={10} className="form-input">
                  <Form.Control
                    as="select"
                    name="role"
                  >
                    <option disabled selected>
                      Select your option
                    </option>
                    {this.state.roleData.map((data, index) => (
                      <option key={index} value={data["_id"]}>{data["RoleName"]}</option>
                    ))}
                  </Form.Control>
                </Col>
              </div>
              <div className="form-group col-12 col-md-6">
                <Form.Label as="legend" column sm={6}>
                  Gender
                </Form.Label>
                <Col sm={10}>
                  <Form.Check
                    inline
                    type="radio"
                    label="Male"
                    value="male"
                    name="gender"
                    onChange={this.props.onGenderChange}
                    required
                  />
                  <Form.Check
                    inline
                    type="radio"
                    label="Female"
                    value="female"
                    name="gender"
                    onChange={this.props.onGenderChange}
                    required
                  />
                </Col>
              </div>
              <div className="form-group col-12 col-md-6">
                <Form.Label column sm={6}>
                  First Name
                </Form.Label>
                <Col sm={10} className="form-input">
                  <Form.Control
                    type="text"
                    placeholder="First Name"
                    required
                  />
                </Col>
              </div>
              <div className="form-group col-12 col-md-6">
                <Form.Label column sm={6}>
                  Middle Name
                </Form.Label>
                <Col sm={10} className="form-input">
                  <Form.Control
                    type="text"
                    placeholder="Middle Name"
                    required
                  />
                </Col>
              </div>
              <div className="form-group col-12 col-md-6">
                <Form.Label column sm={6}>
                  Last Name
                </Form.Label>
                <Col sm={10} className="form-input">
                  <Form.Control
                    type="text"
                    placeholder="Last Name"

                    required
                  />
                </Col>
              </div>
              <div className="form-group col-12 col-md-6">
                <Form.Label column sm={6}>
                  DOB
                </Form.Label>
                <Col sm={10} className="form-input">
                  <Form.Control
                    type="date"
                    placeholder="DOB"
                    required
                  />
                </Col>
              </div>
              <div className="form-group col-12 col-md-6">
                <Form.Label column sm={6}>
                  Contact No
                </Form.Label>
                <Col sm={10} className="form-input">
                  <Form.Control
                    type="text"
                    placeholder="Contact No "

                    required
                  />
                </Col>
              </div>
              <div className="form-group col-12 col-md-6">
                <Form.Label column sm={6}>
                  Employee Code
                </Form.Label>
                <Col sm={10} className="form-input">
                  <Form.Control
                    type="text"
                    placeholder="Employee Code"

                    required
                  />
                </Col>
              </div>

              <div className="form-group col-12 col-md-6">
                <Form.Label column sm={6}>
                  Department
                </Form.Label>
                <Col sm={10} className="form-input">
                  <Form.Control
                    as="select"
                    name="department"
                    required
                  >
                    <option value="" disabled selected>
                      Select your option
                    </option>
                    {this.state.departmentData.map((data, index) => (
                      <option key={index} value={data["_id"]}>{data["DepartmentName"]}</option>
                    ))}
                  </Form.Control>
                </Col>
              </div>

              <div className="form-group col-12 col-md-6">
                <Form.Label column sm={6}>
                  Position
                </Form.Label>
                <Col sm={10} className="form-input">
                  <Form.Control as="select" name="position" required>
                    <option value="" disabled selected>
                      Select your option
                    </option>
                    {this.state.positionData.map((data, index) => (
                      <option key={index} value={data["_id"]}>{data["PositionName"]}</option>
                    ))}
                  </Form.Control>
                </Col>
              </div>
              <div className="form-group col-12 col-md-6">
                <Form.Label column sm={6}>
                  Date Of Joining
                </Form.Label>
                <Col sm={10} className="form-input">
                  <Form.Control
                    type="date"
                    placeholder="Date Of Joining"
                    required
                  />
                </Col>
              </div>

             
              {/* <div className="form-group col-12 col-md-6">
                <label>
                  Terminate Date
                </label>
                <Col sm={10} className="form-input">
                  <Form.Control
                    type="date"
                    placeholder="Terminate Date"
                  />
                </Col>
              </div> */}

              <div className="form-group col-12 d-flex  gap-5" id="form-submit-button" >

                <Button className="mx-3" type="submit">Submit</Button>
                <Button className="mx-3" type="reset" onClick={this.props.onFormClose}>cancel</Button>

              </div>
              <div className="form-group col-12 col-md-6" id="form-cancel-button">

              </div>


            </div>
          </div>
        </Form>
      </div>



    );
  }
}

export default EmployeeForm;



// import React, { useState } from 'react';
// import axios from 'axios';

// function App() {
//   const [file, setFile] = useState(null);

//   const onFileChange = (event) => {
//     setFile(event.target.files[0]);
//   };

//   const onFileUpload = () => {
//     const formData = new FormData();
//     formData.append('file', file);

//     axios.post('http://localhost:4000/api/files/upload', formData)
//       .then(res => {
//         console.log(res.data);
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   };

//   return (
//     <div className="App">
//       <h1>MERN File Upload</h1>
//       <input type="file" onChange={onFileChange} />
//       <button onClick={onFileUpload}>Upload</button>
//     </div>
//   );
// }

// export default App;

