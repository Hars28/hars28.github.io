import React from "react";
// import './Calender.css'
import GitHubCalendar from 'react-github-calendar';
import { Row } from "react-bootstrap";

function Calendar() {
    return (
      <div style={{ margin:"20px auto 20px auto",width:"90%", padding:"10px"}}>
        <h1>Days I code</h1>
        <GitHubCalendar
          username="hars28"
          blockSize={20}
          blockMargin={5}
          color="rgb(10,120,219)"
          fontSize={25}
        />
      </div>
    );
  }
  export default Calendar;