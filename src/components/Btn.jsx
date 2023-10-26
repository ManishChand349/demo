import React from 'react'
import { Link } from "react-router-dom"


function Btn() {
  return (
    <div style={{textAlign: "center", margin: "20px", display: "flex", justifyContent: "space-evenly"}}  >
    <Link  to="/trust" >
    Trust Page
    </Link>
    <Link to="/Checklist">
    Checklist Page
    </Link>
    <Link to="/referEarn">
    Refer&Earn
    </Link>
    </div>
  )
}

export default Btn