import { Button } from '@chakra-ui/react'
import React from 'react'
import Styles from "./Project.module.css"
import {AiFillGithub} from "react-icons/ai"
import {CgWebsite} from "react-icons/cg"
const Project = ({item}) => {
  return (
         <div key={item.src} className={Styles.project} >
        <p className={Styles.pname}>{item.name}</p>
        <div ><img className={Styles.Pimg} src={item.src} alt={item.name} />
        </div>
        <br/>
        <div className={Styles.aboutT}>{item.desc}</div>
        <h2 className={Styles.tU}>TECHNOLOGIES USED</h2>
        <div className={Styles.techDiv}>
        {item.tech.map((item)=><img key={item} className={Styles.techImg} src={item} alt="project"/>)}
        </div>
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