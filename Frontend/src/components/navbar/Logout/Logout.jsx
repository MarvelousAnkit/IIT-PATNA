import React from 'react'
import "./styles.css"
import { Routes, Link, Route, Navigate, useLocation, Outlet } from "react-router-dom";


function Logout() {
  return (
    // <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
    //   <div>
    //     <div className="text-center">
    //        <h1>You have been logged out successfully!</h1>
    //     <p>Thank you for using our application. Please come back soon! </p>
    //     </div>
    //   </div>
    // </div>


<div className='container'>
  <div className="popup">
    <img src="https://cdn.pixabay.com/photo/2016/03/31/14/37/check-mark-1292787_1280.png " className='img  ' alt="" />
    <h2>Thank You !</h2>
    <p>You   have been successfully Log out</p>
    <Link to='/auth/login' className='abc'> <button>Login</button></Link>
  </div>
</div>
  )
}

export default Logout