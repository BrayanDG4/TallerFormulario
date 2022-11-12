import React from 'react'
import NavBar from '../NavBar';
import SideNavBar from '../SideNavBar';
import Footer from '../Footer';
const Layout = ({children}) => {
  return (
    <div className='main'>
      <NavBar/>
      <SideNavBar/>
      {children}
      <Footer/>
      
    </div>
  )
}

export default Layout