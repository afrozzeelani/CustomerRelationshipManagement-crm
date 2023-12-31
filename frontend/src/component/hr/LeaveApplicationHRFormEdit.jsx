import React, { Component } from "react";
// import "./LeaveApplicationHRFormEdit.css";
// import { Form,Button } from "react-bootstrap";
import { Form, Button, Col, Row } from "react-bootstrap";
import axios from "axios";

class LeaveApplicationHRForm extends Component {
  state = {
    // LeaveApplicationHRData: this.props.editData["LeaveApplicationHRName"],

    // LeavetypeData: this.props.editData["Leavetype"],
    FromDateData: this.props.editData["FromDate"].slice(0, 10),
    ToDateData: this.props.editData["ToDate"].slice(0, 10),
    ReasonforleaveData: this.props.editData["Reasonforleave"],
    nameData:
      this.props.editData["employee"][0]["FirstName"] +
      " " +
      this.props.editData["employee"][0]["LastName"]
    // StatusData: this.props.editData["Status"],

    // value={this.state.CompanyNameData}
    // onChange={value => this.onCompanyNameDataChange(value)}
  };
  //   onLeavetypeDataChange(e) {
  //     this.setState({ CLeavetypeData: e.target.value });
  //   }

  //   onStatusDataChange(e) {
  //     this.setState({StatusData: e.target.value });
  //   }

  componentWillMount() { }

  render() {
    return (
      <div  className="registration-page py-4">
        <h2 id="role-form-title" className="text-center text-black text-uppercase fw-bold my-4">
          Edit Leave Application Of {this.state.nameData}
        </h2>

        <div id="role-form-outer-div">
          <Form
            id="form"
            onSubmit={e =>
              this.props.onLeaveApplicationHREditUpdate(this.props.editData, e)
            }
          >
            <div className="d-flex  flex-column gap-2 rounded ">
              <div style={{ padding: '70px', }} className="row ">

                <div className="form-group col-12 col-md-6">
                  <Form.Group as={Row}>
                    <Form.Label column sm={6}>
                      Leave Type
                    </Form.Label>
                    <Col sm={10} className="form-input">
                      <Form.Control as="select" required>
                        <option value="" disabled selected>
                          Select your option
                        </option>
                        <option
                          value="Sick Leave"
                          selected={this.props.editData["Leavetype"] == "Sick Leave"}
                          disabled
                        >
                          Sick Leave
                        </option>
                        <option
                          value="Casual Leave"
                          selected={
                            this.props.editData["Leavetype"] == "Casual Leave"
                          }
                          disabled
                        >
                          Casual Leave
                        </option>
                        <option
                          value="Privilege Leave"
                          selected={
                            this.props.editData["Leavetype"] == "Privilege Leave"
                          }
                          disabled
                        >
                          Privilege Leave
                        </option>
                      </Form.Control>
                    </Col>
                  </Form.Group>
                </div>
                <div className="form-group col-12 col-md-6">
                  <Form.Group as={Row}>
                    <Form.Label column sm={6}>
                      FromDate
                    </Form.Label>
                    <Col sm={10} className="form-input">
                      <Form.Control
                        type="date"
                        required
                        disabled
                        value={this.state.FromDateData}
                      />
                    </Col>
                  </Form.Group>
                </div>
                <div className="form-group col-12 col-md-6">
                  <Form.Group as={Row}>
                    <Form.Label column sm={6}>
                      ToDate
                    </Form.Label>
                    <Col sm={10} className="form-input">
                      <Form.Control
                        type="date"
                        required
                        disabled
                        value={this.state.ToDateData}
                      />
                    </Col>
                  </Form.Group>
                </div>
                <div className="form-group col-12 col-md-6">
                  <Form.Group as={Row}>
                    <Form.Label column sm={6}>
                      Leave Status
                    </Form.Label>
                    <Col sm={10} className="form-input">
                      <Form.Control as="select" required>
                        <option value="Pending" selected disabled>
                          Pending
                        </option>
                        <option
                          value="2"
                          selected={this.props.editData["Status"] == 2}
                        >
                          Approve
                        </option>
                        <option
                          value="3"
                          selected={this.props.editData["Status"] == 3}
                        >
                          Reject
                        </option>
                      </Form.Control>
                    </Col>
                  </Form.Group>
                </div>
                <div className="form-group col-12">
                  <Form.Group as={Row}>
                    <Form.Label column sm={6}>
                      Reason for leave
                    </Form.Label>
                    <Col sm={11} className="form-input">
                      <Form.Control
                        as="textarea" rows={3}
                        placeholder="Reason for leave"
                        required
                        disabled
                        value={this.state.ReasonforleaveData}
                      />
                    </Col>
                  </Form.Group>
                </div>
                <div className="form-group col-12 d-flex  gap-5" id="form-submit-button" >

                  <Button className="mx-3" type="submit">Submit</Button>
                  <Button className="mx-3" type="reset" onClick={this.props.onFormClose}>cancel</Button>

                </div>
                {/*                 
                <Form.Group as={Row} id="form-submit-button">
                  <Col sm={{ span: 10, offset: 2 }}>
                    <Button type="submit">Update</Button>
                  </Col>
                </Form.Group>
                <Form.Group as={Row} id="form-cancel-button">
                  <Col sm={{ span: 10, offset: 2 }} id="form-cancel-button-inner">
                    <Button type="reset" onClick={this.props.onFormEditClose}>
                      cancel
                    </Button>
                  </Col>
                </Form.Group> */}
              </div>
            </div>
          </Form>
        </div>
      </div>
    );
  }
}

export default LeaveApplicationHRForm;
