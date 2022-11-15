import { Image } from "@chakra-ui/react";
import React from "react";
import GitHubCalendar from 'react-github-calendar';

function Calendar() {
    return (
      <>
      <div style={{color:"red", backgroundImage:"linear-gradient(to top, #30cfd0 0%, #330867 100%)", margin:"auto",width:"90%",  padding:"10px",display:"flex",justifyContent:"center", alignItems:"center"}}>
        
        <GitHubCalendar
          
          username="hars28"
          blockSize={15}
          blockMargin={5}
          color="green"
          // fontSize={15}
          
        />
      </div>
      <div style={{  padding:"10px",display:"flex",justifyContent:"center", alignItems:"center"}}>
                <Image objectFit="cover"  src="https://github-readme-streak-stats.herokuapp.com/?user=Hars28" alt="git-stats"/>

      </div>
      </>
    );
  }
  export default Calendar;