// // // Attendance.js
// // import React, { useEffect, useState } from 'react';
// // import axios from 'axios';
// // import { Button, Container, Row, Col, Table } from 'react-bootstrap';

// // const Attendance = () => {
// //   const [empAttendance, setEmpAttendance] = useState([]);
// //   const [error, setError] = useState(null);

// //   const fetchData = async () => {
// //     try {
// //       const response = await axios.get('http://localhost:4000/api/attendance');
// //       setEmpAttendance(response.data);
// //       setError(null); // Reset error state on successful fetch
// //     } catch (error) {
// //       console.error(error);
// //       setError('Error fetching attendance data'); // Set error state on failed fetch
// //     }
// //   };

// //   useEffect(() => {
// //     fetchData();
// //   }, []);

// //   const handleLogin = async () => {
// //     try {
// //       const now = new Date();
// //       const loginTime = now;

// //       const breakTimeMinutes = 0; // Assuming break time is 0 initially
// //       const totalBreakTime = empAttendance[0]?.totalBreakTime + breakTimeMinutes;

// //       const data = {
// //         year: now.getFullYear(),
// //         month: now.getMonth() + 1,
// //         date: now.getDate(),
// //         loginTime: [loginTime],
// //         logoutTime: [],
// //         breakTime: [breakTimeMinutes],
// //         totalBreakTime,
// //       };

// //       await axios.post('http://localhost:4000/api/attendance', data);
// //       fetchData();
// //     } catch (error) {
// //       console.error(error);
// //       setError('Error logging in'); // Set error state on failed login
// //     }
// //   };

// //   const handleLogout = async () => {
// //     try {
// //       const now = new Date();
// //       const logoutTime = now;

// //       // Assuming the latest entry is the current day's entry
// //       const currentEntry = empAttendance[0];

// //       // Assuming the user has already logged in today
// //       if (currentEntry && currentEntry.loginTime.length > 0) {
// //         currentEntry.logoutTime.push(logoutTime);

// //         // Recalculate total break time
// //         const lastLogoutTime = currentEntry.logoutTime[currentEntry.logoutTime.length - 1];
// //         const breakTimeMinutes = lastLogoutTime ? (now - new Date(lastLogoutTime)) / (1000 * 60) : 0;
// //         currentEntry.breakTime.push(breakTimeMinutes);
// //         currentEntry.totalBreakTime = currentEntry.breakTime.reduce((acc, time) => acc + time, 0);

// //         await axios.put(`http://localhost:4000/api/attendance/${currentEntry._id}`, currentEntry);
// //         fetchData();
// //       }
// //     } catch (error) {
// //       console.error(error);
// //       setError('Error logging out'); // Set error state on failed logout
// //     }
// //   };

// //   return (
// //     <Container className="mt-5">
// //       <h4 className="mb-5">Attendance Tracker</h4>
// //       {error && <div className="alert alert-danger">{error}</div>}
// //       <Row>
// //         <Col>
// //           <div className="d-flex gap-5">
// //             <Button variant="success" onClick={handleLogin}>
// //               Login
// //             </Button>
// //             <Button variant="danger" onClick={handleLogout}>
// //               Logout
// //             </Button>
// //           </div>
// //         </Col>
// //       </Row>
// //       {/* <Row className="mt-3">
// //         <Col>
// //           <Table striped bordered hover>
// //             <thead>
// //               <tr>
// //                 <th>Year</th>
// //                 <th>Month</th>
// //                 <th>Date</th>
// //                 <th>Login Times</th>
// //                 <th>Logout Times</th>
// //                 <th>Break Times</th>
// //                 <th>Total Break Time</th>
// //               </tr>
// //             </thead>
// //             <tbody>
// //               {empAttendance.map((entry) => (
// //                 <tr key={`${entry.year}-${entry.month}-${entry.date}`}>
// //                   <td>{entry.year}</td>
// //                   <td>{entry.month}</td>
// //                   <td>{entry.date}</td>
// //                   <td>{entry.loginTime.map((time) => new Date(time).toLocaleTimeString()).join(', ')}</td>
// //                   <td>{entry.logoutTime.map((time) => new Date(time).toLocaleTimeString()).join(', ')}</td>
// //                   <td>{entry.breakTime.join(', ')}</td>
// //                   <td>{entry.totalBreakTime.toFixed(2)} minutes</td>
// //                 </tr>
// //               ))}
// //             </tbody>
// //           </Table>
// //         </Col>
// //       </Row> */}
// //     </Container>
// //   );
// // };

// // export default Attendance;







// // Attendance.js
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Button, Container, Row, Col, Table } from 'react-bootstrap';

// const Attendance = () => {
//   const [empAttendance, setEmpAttendance] = useState([]);
//   const [error, setError] = useState(null);

//   const fetchData = async () => {
//     try {
//       const response = await axios.get('http://localhost:4000/api/attendance');
//       setEmpAttendance(response.data);
//       setError(null); // Reset error state on successful fetch
//     } catch (error) {
//       console.error(error);
//       setError('Error fetching attendance data'); // Set error state on failed fetch
//     }
//   };

//   useEffect(() => {
//     fetchData();

//     // Fetch data every 30 seconds
//     const intervalId = setInterval(() => {
//       fetchData();
//     }, 30000);

//     // Cleanup interval on component unmount
//     return () => clearInterval(intervalId);
//   }, []);

//   const handleLogin = async () => {
//     try {
//       const now = new Date();
//       const loginTime = now;

//       const breakTimeMinutes = 0; // Assuming break time is 0 initially
//       const totalBreakTime = empAttendance[0]?.totalBreakTime + breakTimeMinutes;

//       const data = {
//         year: now.getFullYear(),
//         month: now.getMonth() + 1,
//         date: now.getDate(),
//         loginTime: [loginTime],
//         logoutTime: [],
//         breakTime: [breakTimeMinutes],
//         totalBreakTime,
//       };

//       await axios.post('http://localhost:4000/api/attendance', data);
//       fetchData();
//     } catch (error) {
//       console.error(error);
//       setError('Error logging in'); // Set error state on failed login
//     }
//   };

//   const handleLogout = async () => {
//     try {
//       const now = new Date();
//       const logoutTime = now;

//       // Assuming the latest entry is the current day's entry
//       const currentEntry = empAttendance[0];

//       // Assuming the user has already logged in today
//       if (currentEntry && currentEntry.loginTime.length > 0) {
//         currentEntry.logoutTime.push(logoutTime);

//         // Recalculate total break time
//         const lastLogoutTime = currentEntry.logoutTime[currentEntry.logoutTime.length - 1];
//         const breakTimeMinutes = lastLogoutTime ? (now - new Date(lastLogoutTime)) / (1000 * 60) : 0;
//         currentEntry.breakTime.push(breakTimeMinutes);
//         currentEntry.totalBreakTime = currentEntry.breakTime.reduce((acc, time) => acc + time, 0);

//         await axios.put(`http://localhost:4000/api/attendance/${currentEntry._id}`, currentEntry);
//         fetchData();
//       }
//     } catch (error) {
//       console.error(error);
//       setError('Error logging out'); // Set error state on failed logout
//     }
//   };

//   const formatLoginTimes = (times) => {
//     return times.map((time) => {
//       const localTime = new Date(time).toLocaleTimeString('en-IN', {
//         hour: '2-digit',
//         minute: '2-digit',
//         hour12: false,
//         timeZone: 'Asia/Kolkata', // Set the Indian timezone
//       });
//       return localTime;
//     });
//   };

//   return (
//     <Container className="mt-5">
//       <h4 className="mb-5">Attendance Tracker</h4>
//       {error && <div className="alert alert-danger">{error}</div>}
//       <Row>
//         <Col>
//           <div className="d-flex gap-5">
//             <Button variant="success" onClick={handleLogin}>
//               Login
//             </Button>
//             <Button variant="danger" onClick={handleLogout}>
//               Logout
//             </Button>
//           </div>
//         </Col>
//       </Row>
//       <Row className="mt-3">
//         <Col>
//           <Table striped bordered hover>
//             <thead>
//               <tr>
//                 <th>Year</th>
//                 <th>Month</th>
//                 <th>Date</th>
//                 <th>Login Times</th>
//                 <th>Logout Times</th>
//                 <th>Break Times</th>
//                 <th>Total Break Time</th>
//               </tr>
//             </thead>
//             <tbody>
//               {empAttendance.map((entry) => (
//                 <tr key={`${entry.year}-${entry.month}-${entry.date}`}>
//                   <td>{entry.year}</td>
//                   <td>{entry.month}</td>
//                   <td>{entry.date}</td>
//                   <td>{formatLoginTimes(entry.loginTime).join(', ')}</td>
//                   <td>{entry.logoutTime.map((time) => new Date(time).toLocaleTimeString()).join(', ')}</td>
//                   <td>{entry.breakTime.join(', ')}</td>
//                   <td>{entry.totalBreakTime.toFixed(2)} minutes</td>
//                 </tr>
//               ))}
//             </tbody>
//           </Table>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default Attendance;



// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Button, Container, Form } from "react-bootstrap";

// const AttendanceApp = () => {
//   const [empAttendance, setEmpAttendance] = useState([]);
//   const [isLogged, setIsLogged] = useState(false);

//   useEffect(() => {
//     // Fetch attendance data from the backend
//     const fetchData = async () => {
//       try {
//         const response = await axios.get("http://localhost:4000/api/attendance");
//         setEmpAttendance(response.data);
//       } catch (error) {
//         console.error("Error fetching data:", error.message);
//       }
//     };

//     fetchData();
//   }, []);

//   const handleLogin = async () => {
//     try {
//       // Send login data to the backend
//       const response = await axios.post("http://localhost:4000/api/attendance", {
//         // Your login data structure here
//       });

//       // Update state and refresh data after login
//       setIsLogged(true);
//       setEmpAttendance(response.data);
//     } catch (error) {
//       console.error("Error logging in:", error.message);
//     }
//   };

//   const handleLogout = async () => {
//     try {
//       // Send logout data to the backend
//       const response = await axios.post("http://localhost:4000/api/attendance", {
//         // Your logout data structure here
//       });

//       // Update state and refresh data after logout
//       setIsLogged(false);
//       setEmpAttendance(response.data);
//     } catch (error) {
//       console.error("Error logging out:", error.message);
//     }
//   };

//   return (
//     <Container>
//       <h4 className="mt-5 mb-4">Attendance App</h4>

//       {/* Login/Logout Form */}
//       <Form>
//         <Form.Group className="mb-3">
//           <Button variant="success" onClick={handleLogin} disabled={isLogged}>
//             Login
//           </Button>{" "}
//           <Button variant="danger" onClick={handleLogout} disabled={!isLogged}>
//             Logout
//           </Button>
//         </Form.Group>
//       </Form>

//       {/* Display Attendance Data */}
//       <div>
//         <h4>Attendance Data:</h4>
//         {empAttendance.map((year) => (
//           <div key={year.year}>
//             <h5>Year: {year.year}</h5>
//             {year.months.map((month) => (
//               <div key={month.month}>
//                 <h6>Month: {month.month}</h6>
//                 {month.dates.map((date) => (
//                   <div key={date.date}>
//                     <p>Date: {date.date}</p>
//                     <p>Login Times: {date.loginTime.join(", ")}</p>
//                     <p>Logout Times: {date.logoutTime.join(", ")}</p>
//                     <p>Break Times: {date.breakTime.join(", ")}</p>
//                     <p>Total Break Time: {date.TotalBreakTime.toFixed(2)} minutes</p>
//                   </div>
//                 ))}
//               </div>
//             ))}
//           </div>
//         ))}
//       </div>
//     </Container>
//   );
// };

// export default AttendanceApp;



// // src/components/AttendanceApp.js
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const AttendanceApp = () => {
//   const [empAttendance, setEmpAttendance] = useState([]);
//   const [isLogged, setIsLogged] = useState(false);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('http://localhost:4000/api/attendance');
//         if (response.data.length === 0) {
//           // If no data exists, initialize the database with default data
//           await axios.post('http://localhost:4000/api/attendance', {
//             year: new Date().getFullYear(),
//             months: [
//               {
//                 month: new Date().getMonth() + 1,
//                 dates: [
//                   {
//                     date: new Date().getDate(),
//                     day: new Date().getDay(),
//                     loginTime: [],
//                     logoutTime: [],
//                     breakTime: [],
//                     TotalBreakTime: 0,
//                   },
//                 ],
//               },
//             ],
//           });
//         }
//         setEmpAttendance(response.data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   const handleLogin = async () => {
//     const now = new Date();
//     const loginTime = now;

//     const lastLogoutTime =
//       (empAttendance[0]?.months[0]?.dates[0]?.logoutTime || []).slice(-1)[0] || null;
//     const lastLogoutDateTime = lastLogoutTime ? new Date(lastLogoutTime) : null;

//     const breakTimeMs = lastLogoutDateTime ? now - lastLogoutDateTime : 0;
//     const breakTimeMinutes = (breakTimeMs / (1000 * 60)).toFixed(2);

//     empAttendance[0]?.months[0]?.dates[0]?.loginTime.push(loginTime);
//     empAttendance[0]?.months[0]?.dates[0]?.breakTime.push(Number(breakTimeMinutes));
//     setIsLogged(true);

//     await axios.post('http://localhost:4000/api/attendance', empAttendance[1]);
//   };

//   const handleLogout = async () => {
//     const now = new Date();
//     empAttendance[0]?.months[0]?.dates[0]?.logoutTime.push(now);
//     setIsLogged(false);

//     await axios.post('http://localhost:4000/api/attendance', empAttendance[0]);
//   };

//   useEffect(() => {
//     const totalBreakTime = (empAttendance[0]?.months[0]?.dates[0]?.breakTime || []).reduce(
//       (acc, breakTime) => acc + breakTime,
//       0
//     );

//      empAttendance[0]?.months[0]?.dates[0]?.TotalBreakTime = totalBreakTime;
//     setEmpAttendance([...empAttendance]);
//   }, []);

//   const calculateAttendanceStatus = () => {
//     const loginTime = empAttendance[0]?.months[0]?.dates[0]?.loginTime[0];

//     if (loginTime && loginTime !== "") {
//       const loginHour = new Date(loginTime).getHours();
//       const loginMinute = new Date(loginTime).getMinutes();

//       if (loginHour < 9 || (loginHour === 9 && loginMinute <= 45)) {
//         return "Present";
//       } else {
//         return "Half Day";
//       }
//     } else {
//       return "Absent";
//     }
//   };

//   return (
//     <div className="container">
//       <h4 className="mb-5">CODETEST COPY</h4>
//       <div className="d-flex gap-5">
//         <button
//           className="btn btn-success"
//           onClick={handleLogin}
//           disabled={isLogged}
//         >
//           Login
//         </button>
//         <button
//           className="btn btn-danger"
//           onClick={handleLogout}
//           disabled={!isLogged}
//         >
//           Logout
//         </button>
//       </div>
//       {empAttendance.map((year) => (
//         <div key={year.year}>
//           <h2>Year: {year.year}</h2>
//           {year.months.map((month) => (
//             <div key={month.month}>
//               <h3>Month: {month.month}</h3>
//               {month.dates.map((date) => (
//                 <div key={date.date}>
//                   <h4>Date: {date.date}</h4>
//                   <p>
//                     Login Times:{' '}
//                     {date.loginTime.map((time) =>
//                       time.toLocaleTimeString([], {
//                         hour: '2-digit',
//                         minute: '2-digit',
//                         hour12: false,
//                       })
//                     ).join(', ')}
//                   </p>
//                   <p>
//                     Logout Times:{' '}
//                     {date.logoutTime.map((time) =>
//                       time.toLocaleTimeString([], {
//                         hour: '2-digit',
//                         minute: '2-digit',
//                         hour12: false,
//                       })
//                     ).join(', ')}
//                   </p>
//                   <p>Break Times: {date.breakTime.join(', ')}</p>
//                   <p>Total Break Time: {date.TotalBreakTime.toFixed(2)} minutes</p>
//                 </div>
//               ))}
//             </div>
//           ))}
//         </div>
//       ))}
//       <div>
//         <h4>Attendance Status:</h4>
//         <p>{calculateAttendanceStatus()}</p>
//       </div>
//     </div>
//   );
// };

// export default AttendanceApp;


// src/components/AttendanceApp.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AttendanceApp = () => {
  const [empAttendance, setEmpAttendance] = useState([]);
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/attendance');
        if (response.data.length === 0) {
          // If no data exists, initialize the database with default data
          await axios.post('http://localhost:4000/api/attendance', {
            year: new Date().getFullYear(),
            months: [
              {
                month: new Date().getMonth() + 1,
                dates: [
                  {
                    date: new Date().getDate(),
                    day: new Date().getDay(),
                    loginTime: [],
                    logoutTime: [],
                    breakTime: [],
                    TotalBreakTime: 0,
                  },
                ],
              },
            ],
          });
        }
        setEmpAttendance(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleLogin = async () => {
    const now = new Date();
    const loginTime = now;

    const lastLogoutTime =
      (empAttendance[0]?.months[0]?.dates[0]?.logoutTime || []).slice(-1)[0] || null;
    const lastLogoutDateTime = lastLogoutTime ? new Date(lastLogoutTime) : null;

    const breakTimeMs = lastLogoutDateTime ? now - lastLogoutDateTime : 0;
    const breakTimeMinutes = (breakTimeMs / (1000 * 60)).toFixed(2);

    setEmpAttendance((prevEmpAttendance) => [
      {
        ...prevEmpAttendance[0],
        months: [
          {
            ...prevEmpAttendance[0]?.months[0],
            dates: [
              {
                ...prevEmpAttendance[0]?.months[0]?.dates[0],
                loginTime: [...prevEmpAttendance[0]?.months[0]?.dates[0]?.loginTime, loginTime],
                breakTime: [...prevEmpAttendance[0]?.months[0]?.dates[0]?.breakTime, Number(breakTimeMinutes)],
              },
            ],
          },
        ],
      },
      ...prevEmpAttendance.slice(1),
    ]);

    setIsLogged(true);

    await axios.post('http://localhost:4000/api/attendance', empAttendance[1]);
  };

  const handleLogout = async () => {
    const now = new Date();
    setEmpAttendance((prevEmpAttendance) => [
      {
        ...prevEmpAttendance[0],
        months: [
          {
            ...prevEmpAttendance[0]?.months[0],
            dates: [
              {
                ...prevEmpAttendance[0]?.months[0]?.dates[0],
                logoutTime: [...prevEmpAttendance[0]?.months[0]?.dates[0]?.logoutTime, now],
              },
            ],
          },
        ],
      },
      ...prevEmpAttendance.slice(1),
    ]);

    setIsLogged(false);

    await axios.post('http://localhost:4000/api/attendance', empAttendance[0]);
  };

  useEffect(() => {
    const totalBreakTime = (empAttendance[0]?.months[0]?.dates[0]?.breakTime || []).reduce(
      (acc, breakTime) => acc + breakTime,
      0
    );

    setEmpAttendance((prevEmpAttendance) => [
      {
        ...prevEmpAttendance[0],
        months: [
          {
            ...prevEmpAttendance[0]?.months[0],
            dates: [
              {
                ...prevEmpAttendance[0]?.months[0]?.dates[0],
                TotalBreakTime: totalBreakTime,
              },
            ],
          },
        ],
      },
      ...prevEmpAttendance.slice(1),
    ]);
  }, []);

  const calculateAttendanceStatus = () => {
    const loginTime = empAttendance[0]?.months[0]?.dates[0]?.loginTime[0];

    if (loginTime && loginTime !== "") {
      const loginHour = new Date(loginTime).getHours();
      const loginMinute = new Date(loginTime).getMinutes();

      if (loginHour < 9 || (loginHour === 9 && loginMinute <= 45)) {
        return "Present";
      } else {
        return "Half Day";
      }
    } else {
      return "Absent";
    }
  };

  return (
    <div className="container">
      <h4 className="mb-5">CODETEST COPY</h4>
      <div className="d-flex gap-5">
        <button
          className="btn btn-success"
          onClick={handleLogin}
          disabled={isLogged}
        >
          Login
        </button>
        <button
          className="btn btn-danger"
          onClick={handleLogout}
          disabled={!isLogged}
        >
          Logout
        </button>
      </div>
      {empAttendance.map((year) => (
        <div key={year.year}>
          <h2>Year: {year.year}</h2>
          {year.months.map((month) => (
            <div key={month.month}>
              <h3>Month: {month.month}</h3>
              {month.dates.map((date) => (
                <div key={date.date}>
                  <h4>Date: {date.date}</h4>
                  <p>
                    Login Times:{' '}
                    {date.loginTime.map((time) =>
                      time.toLocaleTimeString([], {
                        hour: '2-digit',
                        minute: '2-digit',
                        hour12: false,
                      })
                    ).join(', ')}
                  </p>
                  <p>
                    Logout Times:{' '}
                    {date.logoutTime.map((time) =>
                      time.toLocaleTimeString([], {
                        hour: '2-digit',
                        minute: '2-digit',
                        hour12: false,
                      })
                    ).join(', ')}
                  </p>
                  <p>Break Times: {date.breakTime.join(', ')}</p>
                  <p>Total Break Time: {date.TotalBreakTime.toFixed(2)} minutes</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      ))}
      <div>
        <h4>Attendance Status:</h4>
        <p>{calculateAttendanceStatus()}</p>
      </div>
    </div>
  );
};

export default AttendanceApp;
