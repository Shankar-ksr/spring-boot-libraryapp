import React from 'react'
import { Outlet } from 'react-router-dom';
import Navigationbar from "./Navigationbar/Navigationbar"
import Footer from "./Footer/Footer"
function Layout() {
  return (
    <div  className='d-flex flex-column min-vh-100'>
       {/*Providong Layout strocture*/}
       
      <Navigationbar />
      <div className='flex-grow-1'>
      <Outlet ></Outlet>
      </div>
      <Footer />
    </div>
  )
}

export default Layout;
