import React from 'react'
import { Outlet } from 'react-router-dom';
import Navigationbar from "./Navigationbar/Navigationbar"
import Footer from "./Footer/Footer"
function Layout() {
  return (
    <div>
       {/*Providong Layout strocture*/}
      <Navigationbar />
      <Outlet ></Outlet>
      <Footer />
    </div>
  )
}

export default Layout;
