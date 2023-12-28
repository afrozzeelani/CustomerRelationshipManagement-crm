// import React, { Component } from "react";
// import "./NavBar.css";
// import { Navbar, Nav } from "react-bootstrap";
// import Logo from "../img/logo.png";
// import Switch from "react-switch";

// class NavBar extends Component {
//   render() {
//     // let value=(this.props.pass) ? undefined : "";
//     return (
//       <div>
//         {/* <nav id="main-nav">
//           <img src={Logo} alt="" />
//           <h3 className="navBar-username">Logout</h3>
//           <h3 className="navBar-username">{this.props.loginInfo["Role"]}</h3>
//         </nav> */}


//             <Navbar bg="light" expand="lg" className="nav-bar" fixed="top"  id="main-nav">
//         {/* <div className="container"> */}
//           <Navbar.Brand id="logo-anchor">
//             <img id ="nav-bar-logo"src={Logo} alt="" />

//             <span id="toggle-switch"><Switch 
//     checked={this.props.checked}
//     onChange={this.props.handleChange}
//     onColor="#404e67"
//     onHandleColor="#ffffff"
//     handleDiameter={10}
//     uncheckedIcon={false}
//     checkedIcon={false}
//     boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
//     activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
//     height={17}
//     width={35}
//     className="react-switch"
//     id="material-switch"
//   /></span>
//   </Navbar.Brand>





//           <Navbar.Toggle aria-controls="basic-navbar-nav" />

//           {/* <Navbar.Collapse className="justify-content-end">
//           <Navbar.Text>
//             <a>
//             admin
//             </a>

//           </Navbar.Text>
//         </Navbar.Collapse> */}

//           <Navbar.Collapse id="logout-navbar-nav">
//             <Nav className="ml-auto">             
//               <a  onClick={this.props.onClick} className="navbar-right-content">
//                 {/* Admin */}
//             {this.props.loginInfo["Name"]}
//             {this.props.loginInfo["Email"]}

//                 </a>
//               <a onClick={this.props.onLogout} style={{"cursor":"pointer"}}className="navbar-right-content">Log Out</a>
//             </Nav>
//           </Navbar.Collapse>
//         {/* </div> */}
//       </Navbar>

// {/* <Navbar id="main-nav">
//   <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
//   <Navbar.Toggle />
//   <Navbar.Collapse className="justify-content-end">
//     <Navbar.Text>
//       Signed in as: <a href="#login">Mark Otto</a>
//     </Navbar.Text>
//     <Navbar.Text>
//       Signed in as: <a href="#login">Mark Otto</a>
//     </Navbar.Text>
//   </Navbar.Collapse>

// </Navbar> */}
//       </div>
//     );
//   }
// }

// export default NavBar;



import React, { Component } from "react";
import "./NavBar.css";
import { Navbar, Nav } from "react-bootstrap";
import Logo from "../img/logo.png";
import Switch from "react-switch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

class NavBar extends Component {
  render() {
    return (
      <div>
        <Navbar bg="light" expand="lg" className="nav-bar" fixed="top" id="main-nav">
          <Navbar.Brand id="logo-anchor">
            <img id="nav-bar-logo" src={Logo} alt="" />
            <span id="toggle-switch">
              <Switch
                checked={this.props.checked}
                onChange={this.props.handleChange}
                onColor="#404e67"
                onHandleColor="#ffffff"
                handleDiameter={10}
                uncheckedIcon={false}
                checkedIcon={false}
                boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                height={17}
                width={35}
                className="react-switch"
                id="material-switch"
              />
            </span>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="logout-navbar-nav">
            <Nav className="ml-auto">
              <span className="navbar-right-content">
                {/* Display user information */}
                {this.props.loginInfo["Name"]} | {this.props.loginInfo["Email"]}
              </span>
              <span onClick={this.props.onLogout} style={{ "cursor": "pointer" }} className="navbar-right-content">
                <FontAwesomeIcon icon={faSignOutAlt} /> Log Out
              </span>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;




// import React from 'react';
// import {
//   Box, Grid, AppBar, Container, Typography, Paper, IconButton, Avatar, Badge,
//   MenuItem, Divider, Menu, ListItemIcon, Tooltip,
// } from "@mui/material";

// import { useState } from "react";

// import {
//   NotificationsOutlined, Settings,
//   Logout, AccountCircleOutlined,
// } from "@mui/icons-material";

// export default function NavBar(props) {
//   const [notificationAnchorEl, setNotificationAnchorEl] = useState(null);
//   const [anchorEl, setAnchorEl] = useState(null);

//   const open = Boolean(anchorEl);
//   const notificationOpen = Boolean(notificationAnchorEl);

//   const handleAvatarClicked = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleNotificationClicked = (event) => {
//     setNotificationAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   const notificationHandleClose = () => {
//     setNotificationAnchorEl(null);
//   };

//   return (
//     <Grid container>
//       <Grid item md={12}>
//         <Paper elevation={4}>
//           <AppBar sx={{ padding: 2 }} position="static">
//             <Container maxWidth="xxl">
//               <Box
//                 sx={{
//                   display: "flex",
//                   justifyContent: "space-between",
//                   alignItems: "center",
//                 }}
//               >
//                 <Typography
//                   variant="h6"
//                   component="a"
//                   href="/"
//                   sx={{
//                     mx: 2,
//                     display: { xs: "none", md: "flex" },
//                     fontWeight: 700,
//                     letterSpacing: ".2rem",
//                     color: "inherit",
//                     textDecoration: "none",
//                   }}
//                 >
//                   Az
//                 </Typography>

//                 <Box
//                   sx={{
//                     display: "flex",
//                     justifyContent: "right",
//                     alignItems: "center",
//                   }}
//                 >
//                   <IconButton color="inherit">
//                     <Badge variant="dot" color="error" invisible={false}>
//                       <NotificationsOutlined
//                         sx={{ width: 32, height: 32 }}
//                         onClick={handleNotificationClicked}
//                       />
//                     </Badge>
//                   </IconButton>
//                   <Menu
//                     open={notificationOpen}
//                     anchorEl={notificationAnchorEl}
//                     onClick={notificationHandleClose}
//                     onClose={notificationHandleClose}
//                   >
//                     <MenuItem>Notification number 1 </MenuItem>
//                     <Divider />
//                     <MenuItem>Notification number 2</MenuItem>
//                     <MenuItem>Notification number 3</MenuItem>
//                   </Menu>
//                   <IconButton
//                     onClick={handleAvatarClicked}
//                     size="small"
//                     sx={{ mx: 2 }}
//                     aria-haspopup="true"
//                   >
//                     <Tooltip title="account settings">
//                       <Avatar sx={{ width: 32, height: 32 }}>Z</Avatar>
//                     </Tooltip>
//                   </IconButton>
//                   <Typography fontFamily={"Inter"}>{props.loginInfo["Name"]}</Typography>
//                 </Box>

//                 <Menu
//                   open={open}
//                   anchorEl={anchorEl}
//                   onClick={handleClose}
//                   onClose={handleClose}
//                 >
//                   <MenuItem>
//                     <ListItemIcon>
//                       <AccountCircleOutlined fontSize="small" />
//                     </ListItemIcon>
//                     {props.loginInfo["Name"]}
//                   </MenuItem>
//                   <Divider />

//                   <MenuItem>
//                     <ListItemIcon>
//                       <Settings fontSize="small" />
//                     </ListItemIcon>
//                     Settings
//                   </MenuItem>
//                   <MenuItem>
//                     <ListItemIcon onClick={props.onLogout}>
//                       <Logout fontSize="small" />
//                     </ListItemIcon>
//                     Logout
//                   </MenuItem>
//                 </Menu>
//               </Box>
//             </Container>
//           </AppBar>
//         </Paper>
//       </Grid>
//     </Grid>
//   );
// }
