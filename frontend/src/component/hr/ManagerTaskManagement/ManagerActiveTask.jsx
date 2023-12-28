import React, { useState, useEffect } from "react";
import axios from "axios";
import { PiInfoFill } from "react-icons/pi";
import { FaCheck } from "react-icons/fa6";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { MdDeleteForever } from "react-icons/md";
// import { toast } from "react-toastify";
import Modal from "react-bootstrap/Modal";
import Table from "react-bootstrap/esm/Table";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

const ManagerActiveTask = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [, setIsCompleting] = useState(false);
  const [getEmployee, setGetEmployee] = useState([]);
  const [selectedEmployees, setSelectedEmployees] = useState([]);
  const [inputEmail, setInputEmail] = useState("");
  const [originalEmployeeData, setOriginalEmployeeData] = useState([]);
  const [selectedTaskId, setSelectedTaskId] = useState(null);
  const [selectAll, setSelectAll] = useState(false);
  const [isForwardButtonDisabled, setIsForwardButtonDisabled] = useState(true);

  const calculateRemainingTime = (endDate) => {
    const now = new Date();
    const endDateTime = new Date(endDate);
    let remainingTime = endDateTime - now;

    if (remainingTime < 0) {
      // If remaining time is negative, consider it as delay
      remainingTime = Math.abs(remainingTime);
      return { delay: true, days: 0, hours: 0, minutes: 0 };
    } else {
      // Calculate remaining days, hours, minutes, and seconds
      const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (remainingTime % (1000 * 60 * 60)) / (1000 * 60)
      );
      return { delay: false, days, hours, minutes };
    }
  };

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/tasks");
      setTasks(response.data);
      setError(null);
    } catch (error) {
      console.error("Error fetching tasks:", error.message);
      setError("Error fetching tasks. Please try again later.");
    } finally {
      setLoading(false);
    }
  };
  const fetchEmployeeData = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/users");
      setGetEmployee(response.data);
      setOriginalEmployeeData(response.data);
    } catch (error) {
      console.error("Error fetching tasks:", error.message);
      setError("Error fetching tasks. Please try again later.");
    } finally {
      setLoading(false);
      setTimeout(fetchData, 1000);
    }
  };

  useEffect(() => {
    fetchData();
    fetchEmployeeData();
    return () => clearTimeout();
  }, []);

  useEffect(() => {
    console.log("getEmployee:", getEmployee);
  }, [getEmployee]);

  const forwordTaskToEmployee = async (taskId) => {
    setSelectedTaskId(taskId);
    setModalShow(true);
  };

  const forwardTaskToEmployees = async (selectedTaskId, selectedEmployees) => {
    try {
      const successResponses = [];
      const errorResponses = [];

      // Iterate over each selected employee and make a separate API call for each
      for (const employee of selectedEmployees) {
        try {
          // Extract relevant data for the current employee
          const employeeData = {
            empname: employee.name,
            empemail: employee.email,
            empdesignation: employee.designation,
            emptaskStatus: "Task Assigned",
          };

          // Make API call to update the task with the current employee
          await axios.post(
            `http://localhost:4000/api/tasks/${selectedTaskId}/employees`,
            {
              employees: [employeeData],
            }
          );

          successResponses.push(
            `Task forwarded successfully to ${employee.name}`
          );
        } catch (error) {
          console.error(
            `Error forwarding task to ${employee.name}:`,
            error.message
          );
          console.error("Error response from server:", error.response.data);
          errorResponses.push(`Failed to forward task to ${employee.name}`);
        }
      }

      // Display success and error messages
      if (successResponses.length > 0) {
        alert(successResponses.join("\n"));
      }
      if (errorResponses.length > 0) {
        alert(errorResponses.join("\n"));
      }

      // Update the UI by fetching the latest tasks
      fetchData();
    } catch (error) {
      console.error("Error forwarding task:", error.message);
      alert("Failed to forward task. Please try again.");
    } finally {
      setModalShow(false);
    }
  };

  const askStatus = async (taskId) => {};
  const completeTask = async (taskId) => {
    try {
      setIsCompleting(true);

      const CompleteRemarks = prompt("Enter remarks to Complete Task:");

      if (CompleteRemarks === null) {
        setIsCompleting(false);
        return;
      }

      await axios.put(`http://localhost:4000/api/tasks/${taskId}`, {
        status: "Completed",
        comment: CompleteRemarks,
      });

      alert("Task completed successfully!");

      fetchData();
    } catch (error) {
      console.error("Error completing task:", error.message);
      alert("Failed to complete task. Please try again.");
    } finally {
      setIsCompleting(false);
    }
  };

  const handleSearch = (e) => {
    const searchValue = e.target.value.toLowerCase();

    if (searchValue === "") {
      setGetEmployee(originalEmployeeData);
    } else {
      const filteredEmployees = originalEmployeeData.filter(
        (employee) =>
          employee.name.toLowerCase().includes(searchValue) ||
          employee.email.toLowerCase().includes(searchValue) ||
          employee.designation.toLowerCase().includes(searchValue)
      );

      setGetEmployee(filteredEmployees);
    }
  };

  const handleInputChange = (e) => {
    setInputEmail(e.target.value);
  };

  const removeSelectedEmployee = (email) => {
    setSelectedEmployees(
      selectedEmployees.filter((employee) => employee.email !== email)
    );
  };

  const addSelectedEmployee = (employee) => {
    const isChecked = selectedEmployees.some(
      (emp) => emp.email === employee.email
    );

    if (isChecked) {
      setSelectedEmployees((prevEmployees) =>
        prevEmployees.filter((emp) => emp.email !== employee.email)
      );
    } else {
      setSelectedEmployees([...selectedEmployees, employee]);
    }
    if (selectedEmployees.length < 0) {
      setIsForwardButtonDisabled(true);
    } else {
      setIsForwardButtonDisabled(false); // Disable the button when there is at least one selected employee
    }

    setInputEmail("");
  };

  const toggleSelectAll = () => {
    setSelectAll(!selectAll);
    setSelectedEmployees(selectAll ? [] : [...getEmployee]);
  };

  const calculateProgress = (task) => {
    const totalEmployees =
      task.employees.length -
      task.employees.filter((emp) => emp.emptaskStatus === "Rejected").length;
    const completedTasks = task.employees.filter(
      (emp) => emp.emptaskStatus === "Completed"
    ).length;
    return (completedTasks / totalEmployees) * 100;
  };
  return (
    <div className="py-2">
      <h1 className="fs-3 fw-bolder text-uppercase mb-4">All Active Tasks</h1>

      {loading && (
        <div className="d-flex align-items-center gap-2">
          <div className="spinner-grow text-primary" role="status"></div>
          <span className="text-primary fw-bold">Loading...</span>
        </div>
      )}

      {error && <p className="text-danger">{error}</p>}

      <div className="overflow-auto" style={{ maxHeight: "80vh" }}>
        {tasks
          .filter((task) => task.status === "Pending")
          .map((task, index) => (
            <details
              style={{
                boxShadow: "-1px 1px 10px gray",
              }}
              className="p-1 position-relative mt-3 fs-4 rounded mx-3"
              key={task.id}
            >
              <summary style={{height:'fit-content'}} className="d-flex justify-content-between aline-center form-control bg-dark  text-white">
                <div className="fw-bold fs-5 d-flex justify-content-center flex-column">
                  # Task {index + 1} : {task.Taskname}
                </div>
                <div
                  style={{ position: "absolute", top: "-10px", left: "20px" }}
                  className="fw-bold bg-white rounded-5 px-3 text-primary fs-6 d-flex justify-content-center aline-center flex-column"
                >
                  {task.department}
                </div>
                <div className="d-flex gap-2 RemainingTimeHandel justify-content-between ">
                  {calculateRemainingTime(task.endDate).delay ? (
                    <div>
                      <div className="text-center d-none">
                        <div className="form-control  fw-bold p-0">
                          {calculateRemainingTime(task.endDate).days}{" "}
                        </div>{" "}
                        <div>Day</div>
                      </div>
                      <h5 className="btn btn-danger p-1 px-3 fw-bold">Late</h5>
                    </div>
                  ) : (
                    <div className="text-center">
                      <div
                        style={{ boxShadow: "0 0 5px 2px gray inset" }}
                        className="form-control fw-bold px-1 py-0"
                      >
                        {calculateRemainingTime(task.endDate).days}{" "}
                      </div>{" "}
                      <div>Day</div>
                    </div>
                  )}
                  {calculateRemainingTime(task.endDate).delay ? (
                    <div className="text-center d-none">
                      <div className="form-control  fw-bold p-0">
                        {calculateRemainingTime(task.endDate).hours}{" "}
                      </div>{" "}
                      <div>Min</div>
                    </div>
                  ) : (
                    <div className="text-center">
                      <div
                        style={{ boxShadow: "0 0 5px 2px gray inset" }}
                        className="form-control fw-bold px-1 py-0"
                      >
                        {calculateRemainingTime(task.endDate).hours}{" "}
                      </div>{" "}
                      <div>Hrs</div>
                    </div>
                  )}
                  {calculateRemainingTime(task.endDate).delay ? (
                    <div className="text-center d-none">
                      <div className="form-control fw-bold p-0">
                        {calculateRemainingTime(task.endDate).minutes}{" "}
                      </div>{" "}
                      <div>Min</div>
                    </div>
                  ) : (
                    <div className="text-center">
                      <div
                        style={{ boxShadow: "0 0 5px 2px gray inset" }}
                        className="form-control fw-bold px-1 py-0"
                      >
                        {calculateRemainingTime(task.endDate).minutes}{" "}
                      </div>{" "}
                      <div>Min</div>
                    </div>
                  )}
                </div>
              </summary>
              <div
                style={{ position: "relative" }}
                className="row p-1 my-2 mx-0 bg-light text-dark rounded"
              >
                <div style={{height:'fit-content'}} className="form-control">
                  <div style={{height:'fit-content'}} className="text-start fs-6 form-control">
                    <h6 className="fw-bold">Task Discription</h6>
                    <div className="row justify-between">
                      <div className="col-10">{task.description}</div>
                      <div
                        className="col-2 d-flex"
                        style={{ width: "6rem", borderRadius: "50%" }}
                      >
                        <CircularProgressbar
                          className="fw-bold"
                          value={calculateProgress(task)}
                          text={`${calculateProgress(task).toFixed(2)}%`}
                          styles={buildStyles({
                            pathColor: "#28a745",
                            textColor: "#28a745",
                          })}
                        />
                      </div>
                    </div>
                  </div>

                  <div style={{height:'fit-content'}} className="row form-control d-flex pt-3 rounded mx-1 justify-content-between">
                    <p
                      style={{ fontSize: "1rem" }}
                      className="col-6 col-sm-6 col-md-2"
                    >
                      Task Durations <br /> <span>{task.duration} days</span>{" "}
                    </p>
                    <p
                      style={{ fontSize: "1rem" }}
                      className="col-6 col-sm-6 col-md-2"
                    >
                      Created By <br /> <span> Creator Email</span>
                    </p>
                    <p
                      style={{ fontSize: "1rem" }}
                      className="col-6 col-sm-6 col-md-2"
                    >
                      Start Date <br />{" "}
                      <span>
                        {new Date(task.startDate).toLocaleDateString()}
                      </span>
                    </p>
                    <p
                      style={{ fontSize: "1rem" }}
                      className="col-6 col-sm-6 col-md-2"
                    >
                      End Date <br />{" "}
                      <span>{new Date(task.endDate).toLocaleDateString()}</span>
                    </p>
                    <p
                      style={{ fontSize: "1rem" }}
                      className="col-6 col-sm-6 col-md-2"
                    >
                      <span>
                        Task Status <br /> {task.status}
                      </span>
                    </p>
                  </div>
                  <div style={{height:'fit-content'}} className="row form-control d-flex pt-3 rounded mx-1 justify-content-between">
                    <p>
                      <span className="fw-bold">Remarks : </span> {task.comment}
                    </p>
                  </div>
                  <div style={{height:'fit-content'}} className="row form-control d-flex pt-3 rounded mx-1 justify-content-between">
                    <h6 className="fw-bold">Forwarded Members Status</h6>
                    <Table striped bordered hover>
                      <thead>
                        <tr>
                          <th>S. No</th>
                          <th>Name</th>
                          <th>Email</th>
                          <th>Designation</th>
                          <th>Task Status</th>
                          <th>Remarks</th>
                        </tr>
                      </thead>
                      <tbody>
                        {task.employees.map((taskemp, i) => (
                          <tr key={i}>
                            <td
                              style={{
                                backgroundColor:
                                  taskemp.emptaskStatus === "Completed"
                                    ? "rgba(25, 201, 84, 0.436)"
                                    : taskemp.emptaskStatus === "Rejected"
                                    ? "rgba(214, 92, 44, 0.636)"
                                    : "inherit",
                              }}
                            >
                              {i + 1}
                            </td>
                            <td
                              style={{
                                backgroundColor:
                                  taskemp.emptaskStatus === "Completed"
                                    ? "rgba(25, 201, 84, 0.436)"
                                    : taskemp.emptaskStatus === "Rejected"
                                    ? "rgba(214, 92, 44, 0.636)"
                                    : "inherit",
                              }}
                            >
                              {taskemp.empname}
                            </td>
                            <td
                              style={{
                                backgroundColor:
                                  taskemp.emptaskStatus === "Completed"
                                    ? "rgba(25, 201, 84, 0.436)"
                                    : taskemp.emptaskStatus === "Rejected"
                                    ? "rgba(214, 92, 44, 0.636)"
                                    : "inherit",
                              }}
                            >
                              {taskemp.empemail}
                            </td>
                            <td
                              style={{
                                backgroundColor:
                                  taskemp.emptaskStatus === "Completed"
                                    ? "rgba(25, 201, 84, 0.436)"
                                    : taskemp.emptaskStatus === "Rejected"
                                    ? "rgba(214, 92, 44, 0.636)"
                                    : "inherit",
                              }}
                            >
                              {taskemp.empdesignation}
                            </td>
                            <td
                              style={{
                                backgroundColor:
                                  taskemp.emptaskStatus === "Completed"
                                    ? "rgba(25, 201, 84, 0.436)"
                                    : taskemp.emptaskStatus === "Rejected"
                                    ? "rgba(214, 92, 44, 0.636)"
                                    : "inherit",
                              }}
                            >
                              {taskemp.emptaskStatus}
                            </td>
                            <td
                              style={{
                                backgroundColor:
                                  taskemp.emptaskStatus === "Completed"
                                    ? "rgba(25, 201, 84, 0.436)"
                                    : taskemp.emptaskStatus === "Rejected"
                                    ? "rgba(214, 92, 44, 0.636)"
                                    : "inherit",
                              }}
                            >
                              {taskemp.empTaskComment}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  </div>
                  <div style={{height:'fit-content'}} className="row form-control d-flex pt-3 rounded mx-1 justify-content-between">
                    <button
                      className="btn btn-primary col-2 d-flex justify-center aline-center gap-2"
                      onClick={() => forwordTaskToEmployee(task._id)}
                    >
                      <IoCheckmarkDoneSharp /> Forward Task
                    </button>
                    <button
                      className="btn btn-warning col-2 d-flex justify-center aline-center gap-2"
                      onClick={() => askStatus(task._id)}
                    >
                      <PiInfoFill /> Ask Status
                    </button>
                    <button
                      className="btn btn-success col-2 d-flex justify-center aline-center gap-2"
                      onClick={() => completeTask(task._id)}
                      disabled={calculateProgress(task) !== 100}
                    >
                      <FaCheck />
                      Complete Task
                    </button>
                  </div>
                </div>
              </div>
            </details>
          ))}
      </div>

      <Modal
        fullscreen={true}
        show={modalShow}
        onHide={() => setModalShow(false)}
      >
        <Modal.Header closeButton>
          <Modal.Title>Forward Task to Employees</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <form className="d-flex col-8 flex-column gap-3">
              <input
                className="w-100 py-1 px-2 rounded-5 border"
                type="search"
                name=""
                placeholder="Search..."
                id=""
                value={inputEmail}
                onChange={(e) => {
                  handleInputChange(e);
                  handleSearch(e);
                }}
              />
              <div>
                <div className=" p-2">
                  {" "}
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    onChange={toggleSelectAll}
                    checked={selectAll}
                  />{" "}
                  <span>Select All</span>
                </div>
                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col">Select</th>
                      <th scope="col">Name</th>
                      <th scope="col">Email</th>
                      <th scope="col">Contact</th>
                      <th scope="col">Designation</th>
                    </tr>
                  </thead>

                  <tbody>
                    {getEmployee.map((employee, index) => (
                      <tr key={index}>
                        <th scope="row">
                          <input
                            type="checkbox"
                            name=""
                            id=""
                            onChange={() => addSelectedEmployee(employee)}
                            checked={selectedEmployees.some(
                              (emp) => emp.email === employee.email
                            )}
                          />
                        </th>
                        <td>{employee.name}</td>
                        <td>{employee.email}</td>
                        <td>{employee.phone}</td>
                        <td>{employee.designation}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </form>
            <div className="d-flex flex-column col-4 gap-2">
              <div className="row form-control d-flex pt-3 rounded mx-1 justify-content-between">
                <div>
                  <span className="fw-bold">Selected Employees:</span>
                  {selectedEmployees.map((employee, index) => (
                    <div key={index} className="d-flex">
                      <span
                        style={{
                          boxShadow: "-3px 3px 5px rgba(204, 201, 201, 0.767)",
                          width: "fit-content",
                        }}
                        className="selected-employee-email d-flex btn gap-2 aline-center  btn-light py-1 px-2 m-1"
                        onClick={() => removeSelectedEmployee(employee.email)}
                      >
                        {employee.name} - {employee.designation}
                        <span className="text-danger d-none">
                          <MdDeleteForever />
                        </span>
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <button
                className="btn  btn-primary"
                onClick={() =>
                  forwardTaskToEmployees(selectedTaskId, selectedEmployees)
                }
                disabled={isForwardButtonDisabled}
              >
                Forward Task to Employees
              </button>
              <button
                className="btn btn-secondary"
                onClick={() => setModalShow(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ManagerActiveTask;
