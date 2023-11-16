import React, { useEffect, useState } from "react";
import { Routes, Link, Route, Navigate, useLocation, Outlet } from "react-router-dom";
import Navbar from "components/navbar";
import Sidebar from "components/sidebar";
import Footer from "components/footer/Footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// import { Button, Container, Row, Col } from 'react-bootstrap';



import { dashboardRoutes } from "routes"

export default function Dashboard(props) {
  const { ...rest } = props;
  const [open, setOpen] = React.useState(true);
  const [currentRoute, setCurrentRoute] = React.useState("Main Dashboard");
  const [auth,SetAuth] = useState(false)
  const [message,Setmessage] = useState('')
  const navigate = useNavigate();

  axios.defaults.withCredentials=true


  React.useEffect(() => {
    window.addEventListener("resize", () =>
      window.innerWidth < 1200 ? setOpen(false) : setOpen(true)
    );
  }, []);

  useEffect(()=>{
    axios.get('http://localhost:8081/dashboard' , 'http://localhost:8081/account/basic-info')
    .then(res=>{
      if(res.data.status==="success"
      ){
        SetAuth(true)
      }
      else{SetAuth(false)
        Setmessage(res.data.error)
      }
    })
    .catch(err=> console.log(err,"hiiih"))
  },[])




  document.documentElement.dir = "ltr";
  return (
    <>
    <div>{auth ? ( <div className="flex h-full w-full">
      
      <Sidebar routes={dashboardRoutes} open={open} onClose={() => setOpen(false)} />
      {/* Navbar & Main Content */}
      <div className="h-full w-full bg-lightPrimary dark:!bg-navy-900">
        {/* Main Content */}
        <main
          className={`mx-[12px] h-full flex-none transition-all md:pr-2 xl:ml-[313px]`}
        >
          {/* Routes */}
          <div className="h-full">
            <Navbar
              onOpenSidenav={() => setOpen(true)}
              logoText={""}
              // brandText={currentRoute}
              // secondary={getActiveNavbar(routes)}
              {...rest}
            />
            <div className="pt-5s mx-auto mb-auto h-full min-h-[84vh] p-2 md:pr-2">
              {/* <Routes>

                <Route
                  path="/"
                  element={<Navigate to="/dashboard/default" replace />}
                />
              </Routes> */}
              <Outlet />
            </div>
            <div className="p-3">
              {/* <Footer /> */}
            </div>
          </div>
        </main>
      </div>
    </div>)
    
    : (
      <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
       <div>
         <div className="text-center">
        <h1>You are not authorize to this page , Kindly Login</h1>
          <Link to='/auth/login' variant="primary" ><h1>Login</h1></Link>
      </div>
    </div>
 </div>
    // navigate('/logout')
    )
    
  }</div>
    </>
  );
}
