import React from "react";
// import './Calender.css'
import GitHubCalendar from 'react-github-calendar';

function Calendar() {
    return (
      <div style={{ margin:"auto",width:"80%",  padding:"10px",display:"flex",justifyContent:"center", alignItems:"center"}}>
        
        <GitHubCalendar
          border="5px solid"
          username="hars28"
          blockSize={25}
          blockMargin={5}
          color="rgb(10,120,219)"
          fontSize={25}
        />
      </div>
    );
  }
  export default Calendar;