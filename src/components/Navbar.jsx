import "./Navbar.css"
import { useState } from "react"

function Navbar(props) {
    return <div className="navbar">{props.title}</div>
}

export default Navbar
