import React from 'react'
import {Link} from "react-router-dom"

function Navigationbar() {
  return (
    <ul class="nav bg-warning mt-2 text-success fs-0 sticky-top">
      <li class="nav-item">
        <Link class="nav-link text-dark " to="/">Home</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link text-dark" to="/login">Login</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link text-dark" to="/register">Register</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link text-dark" to="/tutorials">Tutorials</Link>
      </li>
      
    </ul>
  )
}

export default Navigationbar;
