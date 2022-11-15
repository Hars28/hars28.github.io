import { Image } from "@chakra-ui/react";
import React from "react";
import GitHubCalendar from 'react-github-calendar';

function Calendar() {
    return (
      <>
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
      <div style={{ margin:"auto",width:"80%",  padding:"10px",display:"flex",justifyContent:"center", alignItems:"center"}}>
                <Image src="https://github-readme-streak-stats.herokuapp.com/?user=Hars28" alt="git-stats"/>

      </div>
      </>
    );
  }
  export default Calendar;