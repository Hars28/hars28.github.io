import { Box, Button, Text } from '@chakra-ui/react'
import React from 'react'
import Styles from "./Project.module.css"
import {AiFillGithub} from "react-icons/ai"
import {CgWebsite} from "react-icons/cg"
const Project = ({item}) => {
  return (
         <div key={item.src} className={Styles.project} >
        <Text fontFamily="sans-serif" fontSize={["20px","22px","24px","24px"]} as="b">{item.name}</Text>
        <div ><img className={Styles.Pimg} src={item.src} alt={item.name} />
        </div>
        <br/>
        <Box w="70%" m="auto">
          <Text textAlign="justify" fontSize={["18px","20px","22px","22px"]} as="i">{item.desc}</Text>
        </Box>
        <Box mt={["10px","10px","15px","15px"]}>
        <Text fontFamily="sans-serif" fontSize={["20px","22px","24px","24px"]} as="b">Tech-Stack used</Text>
        <div className={Styles.techDiv}>
        {item.tech.map((item)=><img key={item} className={Styles.techImg} src={item} alt="project"/>)}
        </div>
        </Box>
        
        <div className={Styles.link}>
            
          <a href={item.git} style={{textDecoration:"none"}}>
          <Button leftIcon={<AiFillGithub />} textAlign="center" background='black' color="white" variant='solid'>
            
           Github
          </Button>
          </a>
          <a href={item.netlify}>
          <Button  bg="black" color="white" leftIcon={<CgWebsite/>} variant='solid'>
           Live
          </Button>
          
          </a>
        </div>
      </div>
  )
}

export default Project