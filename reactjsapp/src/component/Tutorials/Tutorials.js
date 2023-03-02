import React from 'react'
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
function Tutorials() {
  return (
    <div>

      <ul className='nav'>
        <li class="nav-item">
          <Link class="nav-link" to="reactjs">Reactjs</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link  " to="angular">Angular</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link " to="vue">Vue</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  )
}

export default Tutorials;
