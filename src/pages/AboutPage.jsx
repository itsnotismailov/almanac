import React from 'react'
import { Link } from 'react-router-dom'

const AboutPage = () => {
  return (
    <div style={{position:"absolute",left: '300px',fontWeight: "900",fontSize:"30px"}}>
      <Link to='/'>
        come back
      </Link>
    </div>
  )
}

export default AboutPage