import React from 'react'
import { Link, Outlet } from 'react-router-dom';
const Layout = () => {
  return (
    <>
    <div style={{textAlign: 'center', display: 'flex', gap: '10px', justifyContent: 'center'}}>
        <Link to="/">home</Link>
        <Link to="/counter">counter</Link>
        <Link to="/users">users</Link>
        <Link to="/card">card</Link>
    </div>
    <Outlet/>
    </>
  )
}

export default Layout