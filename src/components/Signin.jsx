import React from 'react';
import { Link } from 'react-router-dom';

function Signin() {
  return (
        <>
           <div className="min-h-screen flex  justify-center bg-white px-4 py-8">
    <div className="w-full max-w-sm space-y-6">
      <h1 className="text-3xl w-[200px] font-medium  text-black">
        Signin to your Popx account
      </h1>

    <p  className='text-gray-500 w-[230px]'>Lorem ipsum dolor sit amet consectetur, adipis bhbf hjvhjvd</p>
      <div className="relative border border-gray-300 rounded-md px-3 pt-2 pb-2 ">
        <label
          htmlFor="email address"
          className="absolute -top-2 left-2 bg-white px-1 text-sm text-purple-600"
        >
         Email Address
        </label>
        <input
          type="text"
          id="fullName"
          className="w-full border-none outline-none bg-transparent text-black placeholder-gray-500"
          placeholder="Email Address"
        />
      </div>

      <div className="relative border border-gray-300 rounded-md px-3 pt-2 pb-2">
        <label
          htmlFor="Password"
          className="absolute -top-2 left-2 bg-white px-1 text-sm text-purple-600"
        >
          Password
        </label>
        <input
          type="text"
          id="phone"
          className="w-full border-none outline-none bg-transparent text-black placeholder-gray-400 "
          placeholder="Password"
        />
      </div>

    <div>
      <Link to={'/profile'} ><button className='text-white font-medium px-2 py-3 bg-purple-500 rounded-md w-full'>Login</button></Link>
    </div>
    </div>
  </div>
        </>
  );
}

export default Signin;
