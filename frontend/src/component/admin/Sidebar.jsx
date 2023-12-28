// Sidebar.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import {
    faUsersCog,
    faUsers,
    faChair,
    faBuilding,
    faDollarSign,
    faTasks,
    faUser
} from "@fortawesome/free-solid-svg-icons";


const Sidebar = () => {
    const [isTaskSubMenuOpen, setTaskSubMenuOpen] = useState(false);


    const toggleTaskSubMenu = () => {
        setTaskSubMenuOpen(!isTaskSubMenuOpen);
    };
    return (
        <div id="sidebar">
            <div id="sidebar-top-content" />
            <div id="main-title">
                <FontAwesomeIcon icon={faUsersCog} className="sidebar-icon" />
                Admin
            </div>
            <ul className="navbar-ul">
                <li>
                    <Link to="/admin/dashboard">
                        <FontAwesomeIcon icon={faUsers} className="sidebar-icon" />
                        Dashboard
                    </Link>
                </li>
                <li>
                    <Link to="/admin/user">
                        <FontAwesomeIcon icon={faUsers} className="sidebar-icon" />
                        Employee
                    </Link>
                </li>
                <li>
                    <Link to="/admin/leave">
                        <FontAwesomeIcon icon={faUsers} className="sidebar-icon" />
                        Leave
                    </Link>
                </li>

                <li>
                    <Link to="/admin/role">
                        <FontAwesomeIcon icon={faUsers} className="sidebar-icon" />
                        Role
                    </Link>
                </li>
                <li>
                    <Link to="/admin/position">
                        <FontAwesomeIcon icon={faChair} className="sidebar-icon" />
                        Position
                    </Link>
                </li>
                <li>
                    <Link to="/admin/department">
                        <FontAwesomeIcon
                            icon={faBuilding}
                            className="sidebar-icon"
                        />
                        Department
                    </Link>
                </li>
                <li>
                    <Link to="/admin/salary">
                        <FontAwesomeIcon
                            icon={faBuilding}
                            className="sidebar-icon"
                        />
                        Salary
                    </Link>
                </li>
                <li>
                    <Link to="/admin/project-bid">
                        <FontAwesomeIcon
                            icon={faDollarSign}
                            className="sidebar-icon"
                        />
                        Project Bidding
                    </Link>
                </li>
                <li>
                    <Link to="/admin/portal-master">
                        <FontAwesomeIcon icon={faTasks} className="sidebar-icon" />
                        Portal Master
                    </Link>
                </li>
                <li>
                    <Link to="/admin/invoice">
                        <FontAwesomeIcon icon={faTasks} className="sidebar-icon" />
                        Invoice
                    </Link>
                </li>
                <li>
                    <Link to="">
                        <FontAwesomeIcon icon={faTasks} className="sidebar-icon" />
                        Task afroz
                    </Link>
                </li>
                <li>
                    <div onClick={toggleTaskSubMenu}>
                        <FontAwesomeIcon icon={faTasks} className="sidebar-icon" />
                        Task123
                    </div>
                    {isTaskSubMenuOpen && (
                        <ul className="sub-menu">
                            {/* Add your sub-menu items here */}
                            <li>
                                <Link to="/admin/task/subitem1">Sub Item 1</Link>
                            </li>
                            <li>
                                <Link to="/admin/task/subitem2">Sub Item 2</Link>
                            </li>
                        </ul>
                    )}
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;



