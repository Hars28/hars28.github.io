import { Flex, Image } from "@chakra-ui/react";
import React from "react";
import GitHubCalendar from 'react-github-calendar';
import Styles from "../Pages/projects.module.css"
function Calendar() {
    return (
      <>
        <Flex color="black" direction="column" m="auto" mt="20px" w="90%" padding="10px" justify="center" alignItems="center">
        <p className={Styles.sft}>Github Calender</p>
        <GitHubCalendar
          
          username="hars28"
          blockSize={15}
          blockMargin={5}
          color="green"
          // fontSize={15}
          
        />
</Flex>      <div style={{  padding:"10px",display:"flex",justifyContent:"center", alignItems:"center"}}>
                <Image objectFit="cover"  src="https://github-readme-streak-stats.herokuapp.com/?user=Hars28" alt="git-stats"/>

      </div>
      </>
    );
  }
  export default Calendar;