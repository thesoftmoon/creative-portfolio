import React from 'react';
import Navbar from '../components/Navbar.jsx'
function Layout({children}) {
  return (
    <>
    <Navbar/>
    {children}
    </>
  )
}

export default Layout