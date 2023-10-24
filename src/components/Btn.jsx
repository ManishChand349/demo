import React from 'react'
import { Link } from "react-router-dom"


function Btn() {
  return (
    <div style={{textAlign: "center", margin: "20px", display: "flex", justifyContent: "space-evenly"}}  >
    <Link style={{textAlign: "center"}} to="/trust" >
    Trust Page
    </Link>
    <Link to="/Checklist">
    Checklist Page
    </Link>
    </div>
  )
}

export default Btn