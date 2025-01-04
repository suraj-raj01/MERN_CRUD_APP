import React from 'react'
import TopNavbar from './TopNavbar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
const Layout = () => {
  return (
    <div>
      <TopNavbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Layout
