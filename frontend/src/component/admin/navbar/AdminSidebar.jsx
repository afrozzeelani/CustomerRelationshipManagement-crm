// src/components/Navigation.js
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function AdminSidebar() {
  return (
    <nav>
      <ul className='container list-none d-flex flex-column  d-flex row-gap-3 mt-4'>
        {/* <li className='btn btn-dark'>
          <Link className='fw-bold text-white text-decoration-none' to="AddNewEmployee">Add Employee</Link>
        </li>
        <li className='btn btn-dark'>
          <Link className='fw-bold text-white text-decoration-none' to="EmployeeList">Employee List</Link>
        </li>
        <details className='form-control bg-dark text-white fw-bold'>
          <summary>Attendence</summary>
          <li className='btn btn-dark mt-2'>
          <Link className='fw-bold text-white text-decoration-none' to="EmployeeMonthlyAttendance">Attendence</Link>
        </li>
        <li className='btn btn-dark mt-2'>
          <Link className='fw-bold text-white text-decoration-none' to="LeaveManagementPage">Leave Management</Link>
        </li>
        <li className='btn btn-dark mt-2'>
          <Link className='fw-bold text-white text-decoration-none' to="LeaveCalendar">Holiday Calender</Link>
        </li>
        </details> */}
       <details className='form-control bg-dark text-white fw-bold'>
        <summary>A-Task Management</summary>
        <li className='btn btn-dark px-0 py-2'>
          <NavLink className='fw-bold btn btn-warning py-1 px-2 w-100 text-start text-decoration-none' to="AsignTask">Asign New</NavLink>
        </li>
        <li className='btn btn-dark px-0 py-2'>
          <NavLink className='fw-bold btn btn-warning py-1 px-2 w-100 text-start text-decoration-none' to="TaskStatus">Active</NavLink>
        </li>
        <li className='btn btn-dark px-0 py-2'>
          <NavLink className='fw-bold btn btn-warning py-1 px-2 w-100 text-start text-decoration-none' to="CancelledTask">Cancelled</NavLink>
        </li>
        <li className='btn btn-dark px-0 py-2'>
          <NavLink className='fw-bold btn btn-warning py-1 px-2 w-100 text-start text-decoration-none' to="CompletedTask">Completed</NavLink>
        </li>
       </details>
       <details className='form-control bg-dark text-white fw-bold'>
        <summary>M-Task Management</summary>
        <li className='btn btn-dark'>
          <NavLink className='fw-bold btn btn-warning py-1 px-2 w-100 text-start text-decoration-none' to="ManagerTaskList">New Task</NavLink>
        </li>
        <li className='btn btn-dark'>
          <NavLink className='fw-bold btn btn-warning py-1 px-2 w-100 text-start text-decoration-none' to="ManagerActiveTask">Active Task</NavLink>
        </li>
        <li className='btn btn-dark'>
          <NavLink className='fw-bold btn btn-warning py-1 px-2 w-100 text-start text-decoration-none' to="ManagerRejectedTask">Rejected Task</NavLink>
        </li>
        <li className='btn btn-dark'>
          <NavLink className='fw-bold btn btn-warning py-1 px-2 w-100 text-start text-decoration-none' to="ManagerCompletedTask">Completed Task</NavLink>
        </li>
        <li className='btn btn-dark'>
          <NavLink className='fw-bold btn btn-warning py-1 px-2 w-100 text-start text-decoration-none' to="ManagerCencelledTask">Cancelled Task</NavLink>
        </li>
       </details>
       <details className='form-control bg-dark text-white fw-bold'>
        <summary>E-Task Management</summary>
        <li className='btn btn-dark'>
          <Link className='fw-bold text-white text-decoration-none' to="AsignTask">E-Task List</Link>
        </li>
        <li className='btn btn-dark'>
          <Link className='fw-bold text-white text-decoration-none' to="TaskStatus">E-Task Status</Link>
        </li>
       </details>
        <li className='btn btn-dark'>
          <Link className='fw-bold text-white text-decoration-none' to="AttendanceList">Codetest</Link>
        </li>
      </ul>
    </nav>
  );
}

export default AdminSidebar;
