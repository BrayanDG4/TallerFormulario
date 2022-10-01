import React from 'react'
import NavBar from '../NavBar';
import SideNavBar from '../SideNavBar';
const Layout = ({children}) => {
  return (
    <div className='main'>
      <NavBar/>
      <SideNavBar/>
      {children}
    </div>
  )
}

export default Layout