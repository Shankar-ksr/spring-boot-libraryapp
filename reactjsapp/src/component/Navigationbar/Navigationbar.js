import React from 'react'
import {Link} from "react-router-dom"

function Navigationbar() {
  return (
    <ul class="nav justify-content-center bg-dark mt-1 text-success fs-0 sticky-top">
      <li class="nav-item">
        <Link class="nav-link " to="/">Home</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link " to="/login">Login</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link " to="/register">Register</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link " to="/tutorials">Tutorials</Link>
      </li>
      
    </ul>
  )
}

export default Navigationbar;
