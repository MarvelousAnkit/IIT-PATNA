import { Link, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";

import Footer from "components/footer/FooterAuthDefault";
import FixedPlugin from "components/fixedPlugin/FixedPlugin";

import authImg from "assets/img/auth/iitp_logo.png";
import authImgBg from "assets/img/auth/iitp_bg.jpg";

export default function Auth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [code , setCode] = useState('');
  const [data, setData] = useState(''); // Initialize data state variable

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const response = await fetch('http://localhost:8081/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password , code }),
      credentials: 'include',
    });
  
    const responseData = await response.json();
    console.log(responseData); // Log the response for debugging
    setData(responseData); // Update the data state with the response
  
    if (response.ok) {
      // Redirect to the dashboard or perform any other necessary action
      window.location.href = '/dashboard';
    } else {
      // Handle invalid credentials or other error conditions
      console.log('Login failed');
    }
  };

  document.documentElement.dir = "ltr";
  return (
    <div style={{ backgroundImage: `url(${authImgBg})`, backgroundSize: 'cover', backdropFilter: 'blur(10px)' }} className="">
      <div className="min-h-screen bg-gradient-to-br flex justify-center items-center w-full backdrop-blur-sm">
        <div className="flex flex-col sm:flex-row sm:flex-end gap-4  justify-around items-center w-full px-8">
          <div className="xs:hidden lg:flex lg:flex-col lg:justify-between md:hidden items-center sm:items-center gap-4">
            <img src={authImg} alt="IIP Logo" className="lg:w-60 lg:h-60 w-24 h-24" />
            <div className="flex flex-col justify-between items-center sm:items-center gap-2">
              <h1 className="text-3xl font-medium text-navy-700">Academic Information System</h1>
              <p className="text-navy-700 font-semibold">Indian Institute of Technology Patna</p>
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="bg-white px-10 py-8 rounded-xl w-screen shadow-md max-w-sm">
              <div className="space-y-4 pt-16 lg:pt-0">
                <div className="lg:hidden flex items-center justify-center flex-col absolute">
                  <div className="relative -top-40 -right-4">
                    <img src={authImg} alt="IIP Logo" className="w-24 h-24 m-auto relative" />
                    <div className="flex flex-col justify-between items-center sm:items-center gap-2">
                      <h1 className="text-xl font-medium text-navy-700">Academic Information System</h1>
                      <p className="text-sm text-navy-700 font-semibold">Indian Institute of Technology Patna</p>
                    </div>
                  </div>
                </div>
                <h1 className="text-center text-2xl font-semibold text-gray-700">User Login</h1>
                <div>
                  <label htmlFor="regNo" className="block mb-1 text-gray-600 font-semibold">Reg No.</label>
                  <input type="text" id="regNo" value={code}
          onChange={(e) => setCode(e.target.value)}
          required className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full" />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-1 text-gray-600 font-semibold">Email</label>
                  <input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)}
          required className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full" />
                </div>
                <div>
                  <label htmlFor="password" className="block mb-1 text-gray-600 font-semibold">Password</label>
                  <input type="password" id="password" value={password}
          onChange={(e) => setPassword(e.target.value)}
          required className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full" />
                </div>
              </div>
             <div className="redness" style={{color:'red'}}>{data.success === false && <div>{data.message}</div>}</div>

              <button className="mt-4 w-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-indigo-100 py-2 rounded-md text-lg tracking-wide">Login</button>
              <a
                type="button"
                class="mt-4 w-full bg-gradient-to-tr text-gray-700 text-center bg-indigo-100 py-3 rounded-md  tracking-wide inline-block px-6 text-xs font-medium ">
                Forget Password?
              </a>
            </div>
          </form>
        </div>

      </div>

    </div>
  );
}
