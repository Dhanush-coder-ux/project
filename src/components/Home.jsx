import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4  mt-50">
    <div className="w-full max-w-sm space-y-6">
  
      <div className="space-y-2 text-center">
        <b className="text-2xl sm:text-3xl mb-3 text-black">Welcome to Popx</b>
        <p className="text-gray-500 ">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
        </p>
      </div>

      <div className="space-y-3">
      <Link to={'/signup'}>
  <button className="bg-violet-700 rounded-md py-2 w-full font-medium text-white">
    Create Account
  </button>
</Link>
<Link to={'/signin'}>
  <button className="bg-purple-300 rounded-md mt-2 py-2 w-full font-medium text-black">
    Already Registered? Login
  </button>
</Link>

      </div>
    </div>
  </div>
  )
}

export default Home
