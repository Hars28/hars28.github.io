import React from 'react'
import Styles from "./contacts.module.css"

const Contacts = () => {
  return (
    <div>
      <h1>Contact Me</h1>
      <div className={Styles.contacts}>
        <div className={Styles.contact}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt75aZzf58_Ni304EB_UDtyoXzqz0Z34FFPw&usqp=CAU" alt="mobile" className={Styles.mobile}/>
          <h2 className={Styles.text1}>phone</h2>
          <a className={Styles.a}>
          <h2 className={Styles.text}>+91-8085509055</h2>
          </a>
        </div>
        <div className={Styles.contact}>
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIMAAACDCAMAAACZQ1hUAAAAYFBMVEX///8AAADBwcHExMTx8fE8PDz19fVMTEycnJxRUVGCgoL8/Pz4+PjHx8cFBQUUFBTh4eFnZ2fq6uqQkJBdXV3T09NFRUUODg6rq6sZGRlwcHCzs7M2NjYtLS0nJyd6enqj0Vw9AAAErUlEQVR4nO2bC3OrLBCGxWvUpInNtU3a8///5RcWTQQWXBAbZr68M2fOTKv2kd13uQhJ8tZbb70VVvnumK6ariq4qq5Zpcdd/od/v9zsu9MHU/Vx6vab8i8AjvtK++tjVfvjwgDN2QogdG4Ww8gvNQFAqL4skRz56otMwPW1Ck2RN04AQk1Iiny19UBgbBuuLdLCi4CrSIMQ5N/eBFzfAZriSnGjTefrTILSJxdVNbOK5ye9IthUf/ojbIIQcG18Ea7BEBjzTIpVQATGVj4I+6AIjO1fj+ABETYQQo7hCJmOTzklZjhTynKw6OdCCIyRi1UZpjpiqqllO0QfYVJDQ1gmHweR8jKf21nbdaaMJ+YNWab1PY2QLozA2OTwLvcfO1JVTEVjiRqtaqJm536DeDdt7Q2xZGl4ylok8j9BYMzWEEg26OsMrkKeYMmIHJnWbq9ZOkfZFUmxL3NDXLDXqOYtrZToksnFeL3eX/7e/xXrGQjron+KrNp0/VHnTQ8covVGaDnCAam9ppUaxJgbaJubbzjKG7wzMiwz2RPpMLOk7e7/nfwmz/npfm/XJpn+4DN+BxKKO0Oy5uG4+SC0vBUO92xCGAzBwGYUGf8FD4dHYkI6QvJhDPhsAzMRMCSQmK7hgB74kJgYKuyeErmwZ1h37i0BrdCtjQwMy3N0TiEYkhbC4WJRMGXd34EyYHMNdIKZDb91tGguTJlYGLCE6KwMbhYdTGlj6Ay3mRl6i9LC8TCljQF5oR3aSWejK8gWfZrSxvCx027EKpTMQLXoyJQ2BqRK4WN6iQEseppKzBJyQWovnEEf4+MDaomBZFHJlFYGfTCFj2Yz5SqAsLVEKZnSyqB3nag1NYYpiyqmtDLo5sS/UqkMwqLGcIghi+YdnEHvMfA5nsZgtahmSitD4c9gtqhuysUYSn4pYlEw5a9eeZZg+CeeoOZEK55QIWEKzjCskSgWLQv85y4MRF9AK/x8ahYVpoRcqbQFQKovaPUBStltp1l0MGXLf16rCUutD7Q6yQMBaSeX7VGBxuoHtU5S+gtA+OnfcmRRyZQHNUz0/oLQb4pADNFuH71oKRdoCIeUE9R+kzB+gHR8+r/tm13kQiv/XJqtU8cP0+MoCIT0fjwnTjveCnKBBrgRBHUcNTWehFb4leMMb3yWW+EBMQoHdTw5Ma4GhJuKvhY3dWptVCxKHVdPzC8eplRUa4F4QjwKIXl+YZtnSaaUdUB7Stmi5HmWZb4pm1LWem8Y7o9ygjzftMy7FVPSNLIoed5tXn/QTUnTw6L09QfDOgxmSgcI3ovS12Hw9aihp/TRYFH6ehTWdWZGU9IhCpd1OSQYG0jHGVtaIBzIVzrjTjJ9nZZ3RwZTOkDoy+DGdVp8vbqYhWDoA8zr1di6Pbts5q3bpz/6My3r9jF8v4jiO04M37Oi+K4Xw/fNKL7zxvC9O4rv/lHsf4hhH0gU+2Gi2BcUw/6oKPaJRbFfLop9g1Hsn4xiH2kU+2mj2Fccxf7qKPaZR7HfPonh3EESxfmLJIZzKEkU53GSGM4lAcXLz2cBxcvPqYFefl6vx3j1uUWhl5/f7PXqc6xvvfXW/0P/Ae9xRRVOD+GpAAAAAElFTkSuQmCC" alt="email" className={Styles.mobile}/>
          <h2 className={Styles.text1}>email</h2>
          <a className={Styles.a} href = "mailto: harsh.singh9055@gmail.com">
          <h2 className={Styles.text}>harsh.singh9055@gmail.com</h2>
          </a>
          </div>
        <div className={Styles.contact}>
          <img src="data:image/png;base64,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" alt="github" className={Styles.mobile}/>
          <h2 className={Styles.text1}>github</h2>
          <a className={Styles.a} href="https://github.com/Hars28">
          <h2 className={Styles.text}>Hars28</h2>
          </a>
          </div>
        <div className={Styles.contact}>
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHwAAAB8CAMAAACcwCSMAAAAZlBMVEX///8AAADc3NxnZ2c0NDRgYGBOTk5DQ0NLS0vDw8Ps7Oz7+/ulpaWfn5/h4eHQ0NDW1ta5ubnJyckoKCiDg4M7OztsbGwODg57e3t0dHSVlZWvr6+NjY0uLi7z8/MYGBgeHh5XV1e3p+yCAAAD2UlEQVRoge2b3YKiMAyFqbKoRRBRRGfU0fd/yRUdZvqTtNCGzV54LrXyqW3TkxCS5K233vpvlcuyqrfr4qH1tq5Kmf8rbl0csrQVito0OxT11N8gr8+ZQJWd6+n4myMO7nXcTEGWxc6P7rQrJDG6OrZ+bK/2WBGiZ6fh5JdOMyK03I9Fd9qT/PlFCLpTEY0u01C2EGkZx16HozutI9DyEMcW4hA887Mmli1EE7js63h0pzqE/UnDFuJzPPuDii3EByN7NJ2UPZJONt+9Rsw70TpXNXjNz+jZQgzc75IgtthqhsW66JgK6zCEHXmW4BpwypTgB3cDDZxT/hMWOL/nT0e6mcfCUx8b8C3b/r3o3e/xNtLBJqC7V7ztFbVFGrsR9i42EF40C15Fwp2hBvDn2vvXRST8hLOBH9boI+6RcIHnMkAiuCCGHzG2BPKxVhuRL2PhLbbgwdxEC0sE5x2218EQqu2OAQm6TzuYvYFHKzZgFc8WAq4eYD9rRcqGl1yODt+X+ePtMihTBgTVbVzGLZvPHYWgkYLs3Jns6h6dgX+d7qd5lNn/O3CYTiU7zsR79bZZLBfNl3+gPelY6eW2UHT7frH5fWn5ismX/aq8dpKbIvOUzewgh/kEzUz8+X5RPZafp+z6qg7zlM4sE42ut7kP/kgx7tYsOifRWnESqzoNgEPmSF5weGp+1xKbJy/8AruTCp/41jTwqDvzwu/XBJQj8zHtDDpJXjiWh+R4vmnutW0wHBX+07dDR4bDryjcTBnR8m44/Ge0JTPKxMJlWZbm9kWvSQtf3dNW3DJjLtFFTAnPf6KpflTDqT4Aj1lwivnTSl6oMTMXXMRWU+NTqs07dk1zq4UHGT2t1ozxDbheJzPIhIdXvZCi/aPY4WKG1/CDRWreRVtySIC1DpbwI7XChyNppXWkhpsJfbVk6nDkmrZ9xWyUF64nUcsBcLsWiUWZCeC2gcT22gRw2zpjScMEcDtpwFYcPRxIl7BEkR4OJIrYpNPDoRQZOYPo4WBTB1wWIYfDlTi4IEQOR9pJwFIYNRwphcFBjhqOFQGh8ic1HC1/gkuOGI4WfkE7Qwx3tO8AFQVauKPYD1WVaeHOPMsucZLCnTd4gIOVFO65mWvtdUq4t2HJdLGa4ervaKre12Eg7/qlvLczrezuK1XUW/SL8poelFtoOPCVEXHewua9ec/btsDasMHbqsLbpMPbnsTbmMXbksbbjMfbhsjbgMnbepqwNt0mvO3GCWujdcLbYp6wNtd3YnysoBPjAxVP8T1K8hTjQzQvPtvjQ7/fgOfBqbfeeitEfwFQPz+bHnSsZAAAAABJRU5ErkJggg==" className={Styles.mobile}/>
          <h2 className={Styles.text1}>linkedin</h2>
          <a className={Styles.a} href="www.linkedin.com/in/harsh-singh-1a9b9322b">
          <h2 className={Styles.text}>Harsh Singh</h2>
          </a>
          </div>
      </div>
    </div>
  )
}

export default Contacts