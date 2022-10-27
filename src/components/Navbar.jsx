import React from 'react'
import Styles from "./Navbar.module.css"
import Resume from "../resume/Harsh_Singh_Resume.pdf"
const Navbar = () => {
  return (
    <div className={Styles.nav}>
      <div><span className={Styles.H}>H</span>arsh <span className={Styles.H}>S</span>ingh
</div>
      
      <a href={Resume} download="Harsh_Singh_Resume.pdf"><button className={Styles.resume}><img  style={{height:"20px",width:"20px"}} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHsAAAB7CAMAAABjGQ9NAAAAXVBMVEX///8AAADt7e0wMDDIyMjn5+fc3Ny3t7cGBgbW1tbw8PAbGxvLy8vz8/Ovr69iYmKXl5dra2srKyt5eXlRUVF/f386OjogICAXFxfBwcGfn5+Hh4dxcXESEhJGRkbKk99EAAAB40lEQVRoge3a2ZLCIBAFULK7kLhG4xL//zNHq9xAMA00maqZex+niOdhvGDSEcI95SrRsyo9Pscj0w/5luko9sJoL8ag08xoZyls2LBhw4YNGzZs2LBhw4YNGzZs2LBhw4YN+1fsmcWeRbDqUo1cG+211NbV4fSym2gx0kmiL+uWwbRFoiQQT+cB9jzs62eehVETNjMrbf9dSiaBw0LzII6W0HGdZSehJHy3KXtPumcYz0pPW4bTQlRedMVB++0vwZvaIxtnesNFuzeNcxheb53oLcMZ9kphPjjNWRec9LXmDjb7exf0UyXCWxfUmjMVWw2t5mzFVtMS6DYOTal5vLdc6t0AvWMttoZ///k2j0hf95ivNvOeoif/QudxaSEaK93Epu01j1RsNeaaRyu2GlPNR3l97ZbPmu98P6puqvc0gy2d7TV6P3jzbTP00g7XtOyUC7rhE9tmpM62OCgXHIYv0O3HPYuHrdScUmxOWxyfy4+U5ay2ON1Xn0iree17zYnFZrbFuU/6M3Etty0KSV/KbTsENmzYsGH/LzvGtMlm6H+vZM4dqT+tsdljBDZs2H/fDhr++eV1J2V/bhUrb7fNQ89JufP+eKYIGfd6RDmli8uI8kX/gZC3/hNfl2Tt87HrDwxPIduVMiV2AAAAAElFTkSuQmCC" alt="resume"/>Resume</button></a>

           </div>
  )
}

export default Navbar