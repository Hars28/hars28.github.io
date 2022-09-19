import React from 'react'
import Styles from "./skills.module.css"
const Skills = () => {
  return (
    <div>
      <h2 className={Styles.sft}>SOFT SKILLS</h2>
      <div className={Styles.skills}>
        <div className={Styles.skill}>
          <img src="data:image/png;base64,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" alt="teamwork"/>
          <h3>TEAMWORK</h3>
        </div>
        <div className={Styles.skill}>
          <img src="data:image/jpeg;base64,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" alt="Hard work"/>
          <h3>HARD-WORKING</h3>
        </div>
        <div className={Styles.skill}>
          <img src="data:image/png;base64,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" alt="punctual"/>
          <h3>PUNCTUAL</h3>
        </div>
        <div className={Styles.skill}>
          <img src="data:image/png;base64,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" alt="Problem Solving"/>
          <h3>PROBLEM-SOLVING</h3>
        </div>
      </div>
    </div>
  )
}

export default Skills

